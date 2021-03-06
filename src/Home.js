import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    let { Checkout } = window;
    let { fectchSessionInfo, configureCheckout } = window;
    let [session, setSession] = useState('');
    let [itemIndex, setitemIndex] = useState('');

    const gotoLightBox = () => { configureCheckout(session.session.id, "lightBox") }
    const showPaymentPage = () => { configureCheckout(session.session.id, "") }
    const byNow = async (e, index) => {
        e.preventDefault();

        session = await fectchSessionInfo();
        setSession(session.data);
        setitemIndex(index);
        window.session = session;
    }

    return <div className="App">

        <header className="App-header">
            <Container>
                <Row><Col><p className="checkout" >Store</p></Col></Row>
                {session.result === "SUCCESS" ?

                    <Row>
                        <Col xs="3" sm="3" md="3">
                            {itemIndex ? <img className={"shirtImg"} src={`https://react-shooping-cart.netlify.app/img/${itemIndex}.jpg?v=1`} /> : ""}
                        </Col>
                        <Col xs="6" sm="6" md="6" className="billingForm">
                            <Form><h2>Billing Information</h2>
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
                            </Form>

                        </Col>
                        <Row>
                            <Form style={{ margin: "50px 30px" }}>
                                <FormGroup row>
                                    <Col sm={6}>
                                        <Input type="button" value="Pay with Lightbox" onClick={gotoLightBox} />
                                    </Col>
                                    <Col sm={6}>
                                        <Input type="button" value="Pay with Payment Page" onClick={showPaymentPage} />
                                    </Col>
                                </FormGroup>
                            </Form>
                        </Row>

                    </Row> :

                    <Row>
                        <Col xs="6" sm="3" md="3"><img className={"shirtImg"} src="https://react-shooping-cart.netlify.app/img/1.jpg?v=1" />
                            <div className={"buy"}>
                                <p>120 $</p>
                                <Input type="button" className={"btn"} value="Buy Now" onClick={(e) => { byNow(e, 1) }} /></div>
                        </Col>
                        <Col xs="6" sm="3" md="3"><img className={"shirtImg"} src="https://react-shooping-cart.netlify.app/img/2.jpg?v=2" />
                            <div className={"buy"}>
                                <p>120 $</p>
                                <Input type="button" className={"btn"} value="Buy Now" onClick={(e) => { byNow(e, 2) }} /></div></Col>
                        <Col xs="6" sm="3" md="3"><img className={"shirtImg"} src="https://react-shooping-cart.netlify.app/img/3.jpg?v=3" />
                            <div className={"buy"}>
                                <p>120 $</p>
                                <Input type="button" className={"btn"} value="Buy Now" onClick={(e) => { byNow(e, 3) }} />
                            </div>
                        </Col>
                    </Row>
                }
            </Container>
        </header>
    </div>
}
export default Home;
