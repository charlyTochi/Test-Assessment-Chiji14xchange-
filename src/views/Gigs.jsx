// core components
import React from "react";
import { BiCheckCircle, BiLeftArrow } from "react-icons/bi";
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
                        <Row className="mt-4" style={{ justifyContent: "space-around", }}>
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

                                    <div className="flex" style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                                        <Button
                                            className="mx-1 btn-link shadow-none bg-transparent"
                                            type="button"
                                        >
                                            <BiLeftArrow className="mr-2" style={{ fontSize: 20 }} /> Back
                                        </Button>
                                        <Button className="mx-1" >
                                            Submit
                                            <BiCheckCircle className="ml-2" style={{ fontSize: 20 }} />
                                        </Button>
                                    </div>

                            </Col>


                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

export default Gigs;
