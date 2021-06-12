// core components
import { Multiselect } from 'multiselect-react-dropdown';
import React from "react";
import { BsCircle } from "react-icons/bs";
import Select from "react-select";
// reactstrap components
import { Container, FormGroup, Input, InputGroup, Label, Navbar, NavbarBrand } from "reactstrap";
import Button from "reactstrap/lib/Button";
import Col from "reactstrap/lib/Col";
import Row from "reactstrap/lib/Row";




class Company extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [{ name: 'Srigar', id: 1 }, { name: 'Sam', id: 2 }]
        };
    }
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
                            <Col className="big-card2" style={{ borderRadius: 10 }} xs={12} md={6}>
                                <Row style={{ marginTop: 30, }}>
                                    <FormGroup>
                                        <Label className="mb-1 ml-3" style={{ color: "#b6b6b8" }}>Role</Label>
                                        <Col >
                                            <InputGroup>
                                                <Input placeholder="Product Designer"
                                                    style={{ fontWeight: "bold", borderColor: "#b6b6b8", borderRadius: 0, textTransform: "capitalize" }}
                                                />
                                            </InputGroup>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="mb-1 ml-3" style={{ color: "#b6b6b8" }}>Company</Label>
                                        <Col >
                                            <InputGroup>
                                                <Input placeholder="TM30"
                                                    style={{ fontWeight: "bold", borderColor: "#b6b6b8", borderRadius: 0, textTransform: "capitalize" }}
                                                    className="capitalize" />
                                            </InputGroup>
                                        </Col>
                                    </FormGroup>
                                </Row>
                                <Row style={{ marginTop: 20, }}>
                                    <Col>
                                        <Select
                                            style={{ borderRadius: 0, textTransform: "capitalize" }}
                                            className="capitalize"
                                            autoComplete={"on"}
                                            placeholder={'Country'}
                                        />
                                    </Col>
                                    <Col>
                                        <Select
                                            style={{ borderRadius: 0, textTransform: "capitalize" }}
                                            className="capitalize"
                                            autoComplete={"on"}
                                            placeholder={'State/Region'}
                                        />
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: 20, }}>
                                    <Col>
                                        <InputGroup>
                                            <Input placeholder="Address" style={{ borderColor: "#b6b6b8", borderRadius: 0 }} />
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Label className="mb-1 ml-3" style={{ marginTop: 30, color: "#b6b6b8" }}>Add Tags</Label>

                                <Multiselect
                                    options={this.state.options} // Options to display in the dropdown
                                    displayValue="name" // Property name to display in the dropdown options
                                />
                                <Row className="flex" style={{ marginTop: 10, flexDirection: "row", justifyContent: "flex-start" }}>
                                    <a className="p-1 text-black-50">Suggested tags:</a>
                                    <a href="#" className=" active p-1 text-black-50 text" >full time</a>
                                    <a href="#" className="p-1 text-black-50">contract</a>
                                    <a href="#" className="p-1 text-black-50">freelance</a>
                                </Row>
                                <Row className="flex" style={{ marginTop: 40, flexDirection: "row", justifyContent: "flex-end" }}>
                                    <h5 style={{ margin: 30, marginTop: -3, fontSize: 15, fontWeight: "bold" }}> Cancel</h5>
                                    <Button style={{ padding: 10, background: "#2f417e", marginTop: -10, width: 100, height: 35, borderRadius: 10, color: "#fbfbff" }}>Continue</Button>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

export default Company;
