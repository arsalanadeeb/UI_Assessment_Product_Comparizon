import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProductDetailRequest } from "./actions";
import "./ProductComparizon.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import DropDown from "../CommonComponent/DropDown/CommonDropDown";
import ProductDisplay from "../CommonComponent/ProductDisplay/ProductDisplay";
import DisplayFeature from "../CommonComponent/DisplayFeature/DisplayFeature";

class ProductComparizon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnlyDifferenceChecked: false,
      noOfSelectedProduct: 0,
      firstSelectedProduct: {},
      secondSelectedProduct: {},
      productListObject: {},
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchProductDetailRequest({}));
  }

  componentDidUpdate(prevProps,prevState) {
    if (prevProps.products !== this.props.products) {
      if (
        this.props.products &&
        this.props.products.product &&
        this.props.products.product.products
      ) {
        const { products } = this.props.products.product;
        let itemIdArray = [];
        let productListObject = {};
        for (let key in products.compareSummary.titles) {
          itemIdArray.push(key);
        }
        for (let i = 0; i < itemIdArray.length; i++) {
          let productItem = {};
          productItem.imageLink =
            products.compareSummary.images[itemIdArray[i]];
          productItem.titles = products.compareSummary.titles[itemIdArray[i]];
          productItem.productPricingSummary =
            products.compareSummary.productPricingSummary[itemIdArray[i]];
          productListObject[itemIdArray[i]] = productItem;
        }
        products.featuresList.map((featureListItem, index) => {
          itemIdArray.map((item) => {
            productListObject[item][featureListItem.title] = {};
          });
          featureListItem.features.map((feature) => {
            itemIdArray.map((item) => {
              productListObject[item][featureListItem.title][
                feature.featureName
              ] = {};
            });
            for (let key in feature.values) {
              productListObject[key][featureListItem.title][
                feature.featureName
              ] = feature.values[key];
            }
          });
        });
        this.setState({
          isOnlyDifferenceChecked: this.state.isOnlyDifferenceChecked,
          noOfSelectedProduct: this.state.noOfSelectedProduct,
          firstSelectedProduct: this.state.firstSelectedProduct,
          secondSelectedProduct: this.state.secondSelectedProduct,
          productListObject: productListObject,
        });
      }
    }
  }

  getProductList = () => {
    let productListArray = [];
    for (let key in this.state.productListObject) {
      let productTitle = this.state.productListObject[key].titles.title;
      productTitle =
        productTitle.length > 32 ? productTitle.substring(0, 32) : productTitle;

      productListArray.push({
        value: key,
        label: productTitle,
      });
    }
    return productListArray;
  };
  selectItem = (value, dropDownIndex) => {
    value = value.value;
    let firstSelectedProduct = this.state.firstSelectedProduct;
    let secondSelectedProduct = this.state.secondSelectedProduct;
    if (dropDownIndex === 1) {
      firstSelectedProduct = this.state.productListObject[value];
    }
    if (dropDownIndex === 2) {
      secondSelectedProduct = this.state.productListObject[value];
    }
    this.setState({
      isOnlyDifferenceChecked: this.state.isOnlyDifferenceChecked,
      noOfSelectedProduct: this.state.noOfSelectedProduct,
      firstSelectedProduct: firstSelectedProduct,
      secondSelectedProduct: secondSelectedProduct,
      productListObject: this.state.productListObject,
    });
  };
  isEmpty = (obj) => {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };
  getNoOfSelectedItems = () => {
    if (
      this.isEmpty(this.state.firstSelectedProduct) &&
      this.isEmpty(this.state.secondSelectedProduct)
    ) {
      return 0;
    }
    if (
      this.isEmpty(this.state.firstSelectedProduct) ||
      this.isEmpty(this.state.secondSelectedProduct)
    ) {
      return 1;
    }
    return 2;
  };

  getCompareSummary = () => {
    let noOfCoverageSelected = this.getNoOfSelectedItems();
    
        if(this.props.products && this.props.products.product && this.props.products.product.products && this.props.products.product.products.featuresList){
            return this.props.products.product.products.featuresList.map((feature,index)=>{
                let diffArray=[]
                feature.features.map((subFeature)=>{
                        if(this.isEmpty(this.state.firstSelectedProduct ) && !this.isEmpty(this.state.secondSelectedProduct)){
                            diffArray.push( 
                                {
                                catagoryName:subFeature.featureName,
                                productOne:"",
                                productTwo:this.state.secondSelectedProduct[feature.title][subFeature.featureName],
                               }
                            )
                        }
                        if(!this.isEmpty(this.state.firstSelectedProduct ) && this.isEmpty(this.state.secondSelectedProduct)){
                            diffArray.push( 
                                {
                                catagoryName:subFeature.featureName,
                                productOne:this.state.firstSelectedProduct[feature.title][subFeature.featureName],
                                productTwo:"",
                               }
                            )
                        }
                        if(!this.isEmpty(this.state.firstSelectedProduct ) && !this.isEmpty(this.state.secondSelectedProduct)){
                            if(this.state.isOnlyDifferenceChecked){
                                if(this.state.firstSelectedProduct[feature.title][subFeature.featureName]!==this.state.secondSelectedProduct[feature.title][subFeature.featureName]){
                                    diffArray.push( 
                                        {
                                        catagoryName:subFeature.featureName,
                                        productOne:this.state.firstSelectedProduct[feature.title][subFeature.featureName],
                                        productTwo:this.state.secondSelectedProduct[feature.title][subFeature.featureName],
                                       }
                                    )
                                }

                            }
                            else{
                                diffArray.push( 
                                    {
                                    catagoryName:subFeature.featureName,
                                    productOne:this.state.firstSelectedProduct[feature.title][subFeature.featureName],
                                    productTwo:this.state.secondSelectedProduct[feature.title][subFeature.featureName],
                                   }
                                )
                            }
                        }
                })
               return <DisplayFeature key={index} displayLabel={feature.title} diffArray={diffArray}/>
       
           })
         }
  };


  render() {
    return (
      <Container>
        <Row>
          <Col sm={4} md={4} lg={4}>
            <div className="product-comparizon-main-heading">Compare</div>
            <div className="product-comparizon-sub-heading">
              {this.getNoOfSelectedItems() + " item selected"}
            </div>
            <div className="product-comparizon-checkbox">
              <Form.Check
                type={"checkbox"}
                id={`showDiff`}
                label={`Show Only Differences`}
                onChange={() => {
                  this.setState({
                    isOnlyDifferenceChecked: !this.state
                      .isOnlyDifferenceChecked,
                    noOfSelectedProduct: this.state.noOfSelectedProduct,
                    firstSelectedProduct: this.state.firstSelectedProduct,
                    secondSelectedProduct: this.state.secondSelectedProduct,
                    productListObject: this.state.productListObject,
                  });
                }}
              />
            </div>
          </Col>
          <Col sm={4} md={4} lg={4}>
            {this.isEmpty(this.state.firstSelectedProduct) ? (
              <div className="product-comparizon-placehoder-image"></div>
            ) : (
              <ProductDisplay
                imageLink={this.state.firstSelectedProduct.imageLink || ""}
                title={this.state.firstSelectedProduct.titles.title || ""}
                finalPrice={
                  this.state.firstSelectedProduct.productPricingSummary
                    .finalPrice || ""
                }
                price={
                  this.state.firstSelectedProduct.productPricingSummary.price ||
                  ""
                }
                totalDiscount={
                  this.state.firstSelectedProduct.productPricingSummary
                    .totalDiscount || ""
                }
              />
            )}
            <DropDown
              index={1}
              productList={this.getProductList()}
              getSelectedItem={this.selectItem}
            />
          </Col>
          <Col sm={4} md={4} lg={4}>
            {this.isEmpty(this.state.secondSelectedProduct) ? (
              <div className="product-comparizon-placehoder-image"></div>
            ) : (
              <ProductDisplay
                imageLink={this.state.secondSelectedProduct.imageLink || ""}
                title={this.state.secondSelectedProduct.titles.title || ""}
                finalPrice={
                  this.state.secondSelectedProduct.productPricingSummary
                    .finalPrice || ""
                }
                price={
                  this.state.secondSelectedProduct.productPricingSummary
                    .price || ""
                }
                totalDiscount={
                  this.state.secondSelectedProduct.productPricingSummary
                    .totalDiscount || ""
                }
              />
            )}
            <DropDown
              index={2}
              productList={this.getProductList()}
              getSelectedItem={this.selectItem}
            />
          </Col>
        </Row>
        <Row className="product-comparizon-main-wrapper">
          <Col>{
          this.isEmpty(this.state.firstSelectedProduct ) && this.isEmpty(this.state.secondSelectedProduct)?<></>
          :
          this.getCompareSummary()}</Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const { products } = state;
  return products;
}

export default connect(mapStateToProps)(ProductComparizon);
