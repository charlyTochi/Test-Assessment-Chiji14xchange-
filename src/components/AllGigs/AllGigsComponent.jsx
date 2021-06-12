import React from 'react';
import { BiCheckbox } from 'react-icons/bi';
import { Button, Col } from "reactstrap";
import Row from "reactstrap/lib/Row";
export const AllGigsComponent = (props) => {

    return (
        <>
            <Row style={{ background: "#ffffff", justifyContent: "center", marginTop: 10, borderRadius: 10, height: 60 }}>
                <Col style={{ marginTop: 15, fontWeight: "bold", color: "#58586adb" }}><span><BiCheckbox style={{width: 90, height: 25, color: "#e1dcdc"}} />Designer</span></Col>
                <Col style={{ marginTop: 15, color: "#b6b6b8" }}>TM30</Col>
                <Col style={{ marginTop: 15, color: "#b6b6b8" }}>20th,June 2020</Col>
                <Col style={{ marginTop: 15, color: "#b6b6b8" }}>20,000-30,000</Col>
                <Col><Button style={{padding: 10, background: "#fbf3e6", width: 100, height: 35, borderRadius: 10, color: "#fbcd66", fontWeight: "bold" }}>Delete</Button></Col>
            </Row>
        </>
    );
};
