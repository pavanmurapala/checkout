
import React from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios'
const queryString = require('query-string');
class Receipt extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: ""
        }
    }
    componentDidMount() {

        const { session } = window;
        const params = queryString.parse(window.location.search);
        if (session) {
            if (params.resultIndicator === session.successIndicator) this.setState({ status: "success" });


            /* axios.post('https://ap-gateway.mastercard.com/api/rest/version/57/merchant/TESTMETLIFENI01/order/232E32393dd2', {
            },
                {
                    headers: {
                        "Authorization": "Basic bWVyY2hhbnQuVEVTVE1FVExJRkVOSTAxOjRiM2Q5MjE1NDVlM2EyZThjOTMwYWI5MzczNDhhY2Yw",
                        "Content-Type": "application/json",
                    }
                })
                .then((response) => {
                    this.setState({ "response": response.data });
                })
                .catch(function (error) {
                    this.setState({ "response": "" });
                }); */
        }

    }
    showReciept = (res) => {
        /*  let transaction = res.transaction[0];
         return <>
             <h2>Order NO : {res.id}</h2>
 
             <div>amount : {res.amount}</div>
             <div>creationTime : {res.creationTime}</div>
             <div>currency : {res.currency}</div>
             <div>amount : {res.amount}</div>
             <div>device : {res.device.ipAddress}</div>
             <div>transaction status : {transaction.order.status}</div>
             <div>sourceOfFunds : {transaction.sourceOfFunds.provided.card.fundingMethod}</div>
             <div>gatewayCode : {transaction.response.gatewayCode}</div>
         </> */
    }
    render() {
        return <header className="App-header">
            <Container> {/* {
                this.state.status === "success" ? <h1 className={"centerAlign"}>Sample Success Receipt Page</h1> : <h1 className={"centerAlign"}>Sample Receipt Page</h1>
            } */}
                {this.state.response ? this.showReciept(this.state.response) : ""}
            </Container></header>
    }

}
export default Receipt;
