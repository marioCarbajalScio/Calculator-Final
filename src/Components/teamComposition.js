import React, { useState } from 'react';
import { Button, Table, Container, Row, Col } from 'react-bootstrap';
import CostOfEngagementComparisonComponent from '../APICalls/projectTeamCostCall';
import FormEmail from './form-email'

export default function TeamCompositionFun() {

    function limitCountRest(val) {

        if (jr > 0 && val === "jr") {
            jrCount(jr - 1)
        }
        if (mid > 0 && val === "mid") {
            midCount(mid - 1)
        }
        if (sr > 0 && val === "sr") {
            srCount(sr - 1)
        }
        if (techLead > 0 && val === "techLead") {
            techLeadCount(techLead - 1)
        }
        if (qa > 0 && val === "qa") {
            qaCount(qa - 1)
        }
        if (month > 1 && val === "month") {
            monthCount(month - 1)
        }
    }

    function limitCountSum(val) {
        if (jr < 5 && val === "jr") {
            jrCount(jr + 1)
        }
        if (mid < 5 && val === "mid") {
            midCount(mid + 1)
        }
        if (sr < 3 && val === "sr") {
            srCount(sr + 1)
        }
        if (techLead < 1 && val === "techLead") {
            techLeadCount(techLead + 1)
        }
        if (qa < 3 && val === "qa") {
            qaCount(qa + 1)
        }
        if (month < 12 && val === "month") {
            monthCount(month + 1)
        }
    }

    const [jr, jrCount] = useState(0);
    const [mid, midCount] = useState(0);
    const [sr, srCount] = useState(0);
    const [techLead, techLeadCount] = useState(0);
    const [engMan, engManCount] = useState(1);
    const [qa, qaCount] = useState(0);
    const [month, monthCount] = useState(1);

    return (
        <div>
        <Container className="mt-4">
            <h1 className="center text-blue">Total Cost of Engagement Calculator</h1>
            <Row className="mt-4">
                <Col>
                <Table className="resp-table center" responsive="md" bordered size="sm">
                    <thead className="tex-white">
                        <tr className="color">
                            <th scope="col">Team Composition</th>
                            <th scope="col" >In-House US</th>
                            <th colSpan="2">Nearshore</th>
                            <th colSpan="2">Offshore</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="table-active"></th>
                            <td className="table-active">Quantity</td>
                            <td className="table-active">Off-site</td>
                            <td className="table-active">On-site</td>
                            <td className="table-active">Off-site</td>
                            <td className="table-active">On-site</td>
                        </tr>
                        <tr>
                            <td scope="row" className="table-active text-blue">Junior Developer</td>
                            <td> <Button className="btn-responsive" variant="outline-primary" size="sm" onClick={() => limitCountRest("jr")}>-</Button> <label className="card-text text-center ml-1 mr-2">{jr} </label><Button className="btn-responsive" className="btn-responsive" variant="outline-primary" size="sm" onClick={() => limitCountSum("jr")}>+</Button></td>
                            <td><label className="card-text">{jr} </label></td>
                            <td><label className="card-text">0 </label></td>
                            <td><label className="card-text">{jr} </label></td>
                            <td><label className="card-text">0 </label></td>
                        </tr>
                        <tr>
                            <td scope="row" className="table-active text-blue">Middle Developer</td>
                            <td> <Button className="btn-responsive" variant="outline-primary" size="sm" onClick={() => limitCountRest("mid")}>-</Button> <label className="card-text text-center ml-1 mr-2">{mid} </label><Button className="btn-responsive" variant="outline-primary" size="sm" onClick={() => limitCountSum("mid")}>+</Button></td>
                            <td><label className="card-text">{mid} </label></td>
                            <td><label className="card-text">0 </label></td>
                            <td><label className="card-text">{mid} </label></td>
                            <td><label className="card-text">0 </label></td>
                        </tr>
                        <tr>
                            <td scope="row" className="table-active text-blue">Senior Developer</td>
                            <td> <Button className="btn-responsive" variant="outline-primary" size="sm" onClick={() => limitCountRest("sr")}>-</Button> <label className="card-text text-center ml-1 mr-2">{sr} </label><Button className="btn-responsive" variant="outline-primary" size="sm" onClick={() => limitCountSum("sr")}>+</Button></td>
                            <td><label className="card-text">{sr} </label></td>
                            <td><label className="card-text">0 </label></td>
                            <td><label className="card-text">{sr} </label></td>
                            <td><label className="card-text">0 </label></td>
                        </tr>
                        <tr>
                            <td scope="row" className="table-active text-blue">Technical Lead</td>
                            <td> <Button className="btn-responsive" variant="outline-primary" size="sm" onClick={() => limitCountRest("techLead")}>-</Button> <label className="card-text text-center ml-1 mr-2">{techLead} </label><Button className="btn-responsive" variant="outline-primary" size="sm" onClick={() => limitCountSum("techLead")}>+</Button></td>
                            <td><label className="card-text">{techLead} </label></td>
                            <td><label className="card-text">0 </label></td>
                            <td><label className="card-text">{techLead} </label></td>
                            <td><label className="card-text">0 </label></td>
                        </tr>
                        <tr>
                            <td scope="row" className="table-active text-blue">QA Engineer</td>
                            <td> <Button className="btn-responsive" variant="outline-primary" size="sm" onClick={() => limitCountRest("qa")}>-</Button> <label className="card-text text-center ml-1 mr-2">{qa} </label><Button className="btn-responsive" variant="outline-primary" size="sm" onClick={() => limitCountSum("qa")}>+</Button></td>
                            <td><label className="card-text">{qa} </label></td>
                            <td><label className="card-text">0 </label></td>
                            <td><label className="card-text">{qa} </label></td>
                            <td><label className="card-text">0 </label></td>
                        </tr>
                        <tr>
                            <td scope="row" className="table-active text-blue">Engagement Manager</td>
                            <td> <label className="card-text text-center ml-1 mr-2">{engMan}</label></td>
                            <td><label className="card-text">{engMan} </label></td>
                            <td><label className="card-text">0 </label></td>
                            <td><label className="card-text">{engMan} </label></td>
                            <td><label className="card-text">1 </label></td>
                        </tr>
                        <tr>
                            <td scope="row" className="table-active text-blue">Project Duration (months)</td>
                            <td> <Button className="btn-responsive" variant="outline-primary" size="sm" onClick={() => limitCountRest("month")}>-</Button> <label className="card-text text-center ml-1 mr-2">{month} </label><Button className="btn-responsive" variant="outline-primary" size="sm" onClick={() => limitCountSum("month")}>+</Button></td>
                        </tr>
                    </tbody>
                </Table>
                </Col>
            </Row>
            </Container>
                <CostOfEngagementComparisonComponent
                    jr={jr}
                    mid={mid}
                    sr={sr}
                    tech={techLead}
                    qa={qa}
                    engMan={engMan}
                    month={month}
                />
                <hr></hr>
            <Row>
                <Col>
                    <FormEmail></FormEmail>
                </Col>
            </Row>
        </div>
    );
}