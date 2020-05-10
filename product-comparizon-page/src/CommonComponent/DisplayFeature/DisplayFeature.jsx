import React from "react"
import {Container,Row,Col} from 'react-bootstrap'
import "./CompareSummary.css"


export default function DisplayFeature (props){

    return(
        <Container>
            <Row className="compare-summary-grey-row">
                <Col className="compare-summary-catagory" sm={4} md={4} lg={4}>{props.displayLabel || "Default"}</Col>
                <Col className="compare-summary-seperator" sm={4} md={4} lg={4}></Col>
                <Col sm={4} md={4} lg={4}></Col>
            </Row>
            {props.diffArray.map((item,index)=>{
               return(  
               <Row key={index}>
                <Col className="compare-summary-seperator" sm={4} md={4} lg={4}>{item.catagoryName}</Col>
               <Col className="compare-summary-seperator" sm={4} md={4} lg={4}>{item.productOne}</Col>
               <Col sm={4} md={4} lg={4}>{item.productTwo}</Col>
            </Row>) 
            })}
        </Container>
    )
}