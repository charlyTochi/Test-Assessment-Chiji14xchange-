// core components
import React from "react";
import { BsCircle } from "react-icons/bs";
// reactstrap components
import { Container, Input, InputGroup, Navbar, NavbarBrand } from "reactstrap";
import Button from "reactstrap/lib/Button";
import Col from "reactstrap/lib/Col";
import Row from "reactstrap/lib/Row";




class Gigs extends React.Component {
    render() {
        return (
            <>
                <div className="content">
                    <Container style={{ paddingTop: "120px" }}>
                        <h5 style={{ textAlign: "center", borderBottom: "1px solid #d1d1d2fa", }}></h5>

                        <Navbar
                            className="transparent nav-heading"
                            expand="lg"
                            style={{ zIndex: "200" }}
                            style={{ padding: 0, border: 0, elevation: 0, zIndex: "200" }}
                        >
                            <NavbarBrand className="white-text nav-heading">
                                <div style={{ display: "flex" }}>
                                    <h3 style={{ fontWeight: "bold", color: "#2c2c43cc" }}>Gigs</h3>
                                </div>
                            </NavbarBrand>

                        </Navbar>
                        <h5 style={{ marginTop: -20, textAlign: "center", borderBottom: "1px solid #d1d1d2fa", }}></h5>
                        <span style={{ color: "#b6b6b8", fontSize: 15, fontWeight: "bold", }}>New gig </span>
                        <Row className="mt-4" style={{ justifyContent: "initial",  }}>
                            <Col xs={8} md={2} className="small-card" style={{ borderRadius: 10 }}>
                                <p style={{ color: "#b6b6b8", marginLeft: 20 }}>Basic Data</p>
                                <span style={{ color: "#fbb30b" }}><BsCircle stule={{ color: "#fbb30b" }} /> Renumeration</span>
                            </Col>
                            <Col className="big-card" style={{ borderRadius: 10 }} xs={12} md={6}>
                                <span style={{ color: "#b6b6b8" }}>Salary</span>
                                <Row style={{ marginTop: 30 }}>
                                    <Col>
                                        <InputGroup>
                                            <Input placeholder="Minimum" style={{ borderColor: "#b6b6b8", borderRadius: 0 }} />
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <InputGroup>
                                            <Input placeholder="Maximum" style={{ borderColor: "#b6b6b8", borderRadius: 0 }} />
                                        </InputGroup>
                                    </Col>
                                </Row>

                                    <Row className="flex" style={{ marginTop: 40, flexDirection: "row", justifyContent: "flex-end" }}>
                                        <h5 style={{margin: 30, marginTop: -3, fontSize: 15 , fontWeight: "bold"}}> Back</h5>
                                        <Button style={{ padding: 10, background: "#2f417e", marginTop: -10, width: 100, height: 35, borderRadius: 10, color: "#fbfbff" }}> Add gig</Button>
                                    </Row>

                            </Col>


                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

export default Gigs;
