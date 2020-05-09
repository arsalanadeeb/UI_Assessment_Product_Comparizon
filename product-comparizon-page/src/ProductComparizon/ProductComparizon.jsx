import React , {Component} from 'react'
import {connect} from 'react-redux'
import {fetchProductDetailRequest} from "./actions"
class ProductComparizon extends Component{

    componentDidMount(){
     console.log("Dispatching action",this.props.products)
      this.props.dispatch(fetchProductDetailRequest({"key":"test"}))
    }

    render(){
        console.log("Rendering Component",this.props.products)
        return(
            <div>
                <h1>hello</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state,"rishav")
    const {products}=state
    return products
  }
  
  export default connect(mapStateToProps)(ProductComparizon)