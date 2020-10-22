import React, { useState } from 'react';
import './App.css';
import { Container, Row, Col, Form, FormGroup, Input, Label } from 'reactstrap';

function App() {
  let { Checkout } = window;
  let { fectchSessionInfo, configureCheckout } = window;
  let [session, setSession] = useState('');
  const gotoLightBox = () => {

    configureCheckout(session.session.id, {
      name: 'Some merchant name',
      address: {
        line1: '200 Sample St',
        line2: '1234 Example Town'
      }
    }, "lightBox")

  }
  const showPaymentPage = () => {
    configureCheckout(session.session.id, {
      name: 'Some merchant name',
      address: {
        line1: '200 Sample St',
        line2: '1234 Example Town'
      }
    }, "")
  }
  const byNow = async (e) => {
    e.preventDefault();

    session = await fectchSessionInfo();
    setSession(session.data);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row><Col><p className="checkout" >Store</p></Col></Row>
          {session.result === "SUCCESS" ?

            <Row>
              <Col xs="6" sm="6" md="6" className="billingForm">
                <Form><h2>Proivde Billing Information</h2>
                  <FormGroup row>
                    <Label for="exampleEmail" sm={4}>Amount</Label>
                    <Col sm={8}>
                      <b >120 $</b>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="exampleEmail" sm={4}>Description</Label>
                    <Col sm={8}>
                      <b >Ordered goods</b>
                    </Col>
                  </FormGroup>


                  <FormGroup row>
                    <Label for="exampleEmail" sm={4}>Name</Label>
                    <Col sm={8}>
                      <Input type="text" name="name" id="name" placeholder="Enter Name" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="exampleAddress" sm={4}>Address</Label>
                    <Col sm={8}>
                      <Input type="textarea" name="address" id="exampleAddress" placeholder="Address placeholder" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col sm={6}>
                      <Input type="button" value="Pay with Lightbox" onClick={gotoLightBox} />
                    </Col>
                    <Col sm={6}>
                      <Input type="button" value="Pay with Payment Page" onClick={showPaymentPage} />
                    </Col>
                  </FormGroup>
                </Form>

              </Col></Row> :

            <Row>
              <Col xs="6" sm="3" md="3"><img className={"shirtImg"} src="https://react-shooping-cart.netlify.app/img/1.jpg?v=1" />
                <div className={"buy"}>
                  <p>120 $</p>
                  <Input type="button" className={"btn"} value="Buy Now" onClick={byNow} /></div>
              </Col>
              <Col xs="6" sm="3" md="3"><img className={"shirtImg"} src="https://react-shooping-cart.netlify.app/img/2.jpg?v=2" />
                <div className={"buy"}>
                  <p>120 $</p>
                  <Input type="button" className={"btn"} value="Buy Now" onClick={byNow} /></div></Col>
              <Col xs="6" sm="3" md="3"><img className={"shirtImg"} src="https://react-shooping-cart.netlify.app/img/3.jpg?v=3" />
                <div className={"buy"}>
                  <p>120 $</p>
                  <Input type="button" className={"btn"} value="Buy Now" onClick={byNow} />
                </div>
              </Col>
            </Row>
          }

          {/* <div className="" style={{ textAlign: "center" }}>
          <div className="row">
          <div className={"col-md-6"}></div>
          </div>
          <input type="button" className={"btn"} value="Pay with Lightbox" onClick={gotoLightBox} />
          <input type="button" className={"btn"} value="Pay with Payment Page" onClick={showPaymentPage} />
        </div> */}
        </Container>
      </header>
    </div>
  );
}

export default App;
