import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./UnapprovedMatches.css"
import axios from "axios"
import TableComp from "../components/TableComp.js";
import { useEffect, useState } from 'react';


function TuteesData() {
    const [colHeaders, setColHeaders, getColHeaders] = useState([]);
    const [tuteeRequests, setTuteeRequests] = useState([]);
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
                // .then(
                //     axios.get('/inactive_requests')
                //         .then(res => res.data)
                //         .then(requests => {
                //             debugger;
                //             setTblData(processRequest(headers, requests));
                //             console.log(requests);
                //         })
                //         .catch(error => {
                //             console.log(error)
                //         })
                // )
                // .catch(error => {
                //     console.log(error)
                // })
        }
        fetchTuteeData();
    }, [])

    return (
        <div className="App">
            <div>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="/">Lowell CSF</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="officerDash">Dashboard</Nav.Link>
                        <Nav.Link href="tutorsData">Tutors</Nav.Link>
                        <Nav.Link href="tuteesData">Tutees</Nav.Link>
                        <Nav.Link href="faq">Applications</Nav.Link>
                    </Nav>
                </Navbar>
            </div>

            <TableComp tblData={tblData} modalButtonType={"editInfo"} />
        </div>

    );
}

export default TuteesData;
