import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./UnapprovedMatches.css"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import TableComp from "../components/TableComp.js";
import Modal from "../components/Modal.js";
import axios from "axios"
import { useEffect, useState } from 'react';


const modalContent =
    <div className="modal-container">
        <div className="tutee-info-container">
        </div>
        <div>
            <TableComp modalButtonType={"makeMatch"} />
        </div>
    </div>;
const modalHeader = "Match Maker"
const modalData = {
    modalContent: modalContent,
    modalHeader: modalHeader
}

function UnapprovedMatches() {
    const [tblData, setTblData] = useState({

        columnHeaders: [],
        rowData: []
    });
    const processRequest = (headers, requests) => {
        console.log(headers);
        console.log(requests)
        let data = {
            columnHeaders: [],
            rowData: []
        }
        for (const request of requests) {
            let tempReq = request.req;
            tempReq["id"] = request.id;
            data.rowData.push(tempReq);

        }
        for (const header of headers) {
            if (Object.keys(data.rowData[0]).includes(header.header.id)) {
                data.columnHeaders.push(header.header);
            }

        }
        console.log(data);
        return data;
    }
    useEffect(function effectFunction() {
        async function fetchTuteeData() {
            let headers;
            let requests;
            const resp = await axios.get('/col_header')
            headers = resp.data;
            const resp2 = await axios.get('/inactive_requests')
            requests = resp2.data;
            console.log(requests);
            setTblData(processRequest(headers, requests))

        }
        fetchTuteeData();
    }, [])
    return (
        <div className="App">
            <div>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="/">Lowell CSF</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="officerDash">About</Nav.Link>
                        <Nav.Link href="resources">Resources</Nav.Link>
                        <Nav.Link href="contact">Contact</Nav.Link>
                        <Nav.Link href="faq">FAQ</Nav.Link>

                    </Nav>
                </Navbar>
            </div>
            <div className="header">
                Unapproved Matches
            </div>
            <div className="table-container">

                <TableComp tblData={tblData} modalData={modalData} modalButtonType={"viewPotentialMatches"} />
            </div>
        </div>

    );
}

export default UnapprovedMatches;
