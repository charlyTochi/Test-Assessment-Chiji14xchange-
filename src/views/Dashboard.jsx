// core components
import { AllGigsComponent } from "components/AllGigs/AllGigsComponent";
import React from "react";
import { BiCheckbox } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
// reactstrap components
import { Col, Container, Nav, Navbar, NavbarBrand, NavItem, Row } from "reactstrap";
import Button from "reactstrap/lib/Button";



class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Container style={{ paddingTop: "120px" }}>
            <Navbar
              className="transparent nav-heading"
              expand="lg"
              style={{zIndex: "200"}}
              style={{ padding: 0, border: 0, elevation: 0, zIndex: "200" }}
            >
              <NavbarBrand className="white-text nav-heading">
                <div style={{ display: "flex" }}>
                  <h3 style={{ fontWeight: "bold", color: "#2c2c43cc" }}>Gigs</h3>
                </div>
              </NavbarBrand>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button style={{ padding: 10, background: "#2f417e", marginTop: -10, width: 100, height: 40, borderRadius: 10, color: "#fbfbff" }}>   New gig    <BsPlus /></Button>
                </NavItem>
              </Nav>
            </Navbar>
            <Row style={{ alignItems: "center", margin: 20 }}>
              <Col xs={8} md={4}><span style={{ color: "#58586adb", fontSize: 15, fontWeight: "bold" }}>All gigs <Button style={{ padding: 10, background: "#fbb30b", width: 60, height: 30, borderRadius: 5, color: "#ffffff", fontWeight: "bold", fontSize: 10 }}>3404</Button></span></Col>
              <Col xs={8} md={4}><p style={{ color: "#58586adb", fontSize: 15, fontWeight: "bold" }}>My gigs</p></Col>
              <Col xs={8} md={4}><p style={{ color: "#58586adb", fontSize: 15, fontWeight: "bold" }}>Rejected gigs</p></Col>
            </Row>

            <Row style={{ justifyContent: "center", marginTop: 10, borderRadius: 10, height: 60 }}>
              <Col style={{ marginTop: 15, color: "#b6b6b8" }}><span><BiCheckbox style={{ width: 90, height: 25, color: "#fbfbff" }} />Role</span></Col>
              <Col style={{ marginTop: 15, color: "#b6b6b8" }}>Company</Col>
              <Col style={{ marginTop: 15, color: "#b6b6b8" }}>Date</Col>
              <Col style={{ marginTop: 15, color: "#b6b6b8" }}>Salary</Col>
              <Col></Col>
            </Row>
            <AllGigsComponent />
            <AllGigsComponent />
            <AllGigsComponent />
            <AllGigsComponent />
            <AllGigsComponent />
            <AllGigsComponent />
          </Container>
        </div>
      </>
    );
  }
}

export default Dashboard;
