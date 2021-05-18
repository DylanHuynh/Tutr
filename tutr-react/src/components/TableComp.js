
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react';
import "./TableComp.css";
import Modal from "../components/Modal.js";
let data = {
    columnHeaders: [{
        label: "Tutee Name",
        id: "tuteeName",
        type: "string"
    }, {
        label: "Availability",
        id: "availability",
        type: "array"
    }, {
        label: "Class",
        id: "class",
        type: "string"
    }, {
        label: "Teacher",
        id: "teacher",
        type: "string"
    }, {
        label: "Email",
        id: "tuteeName",
        type: "string"
    }, {
        label: "Phone #",
        id: "phone",
        type: "string"
    }],
    rowData: [{
        tuteeName: "Bob Smith",
        availability: ["1", "3", "AS"],
        class: "AP Bio",
        teacher: "Killpack",
        email: "bosmith@s.sfusd.edu",
        phone: "415-123-4567"
    },
    {
        tuteeName: "Bob Smith",
        availability: ["1", "3", "AS"],
        class: "AP Bio",
        teacher: "Killpack",
        email: "bosmith@s.sfusd.edu",
        phone: "415-123-4567"


    }]

};
const modalContent =
    <div className="modal-container">
        <div className="tutee-info-container">
            <div className="tutee-info-list">
                Name:
            </div>
            <div className="tutee-info-list">
                Name:
            </div>
            <div className="tutee-info-list">
                Name:
            </div>
            <div className="tutee-info-list">
                Name:
            </div>

        </div>

        <div>
            <TableComp modalButtonType={"makeMatch"} button={true} />
        </div>
    </div>;

function TableComp(props) {

    let tblData = data;
    let items = [];
    let rowTemp = [];
    let colHeaders = [];
    // Update the document title using the browser API
    tblData = props.data || tblData;
    console.log(props.button);
    console.log(tblData);

    // for (const row of tblData.rowData) {

    //     for (const colName of Object.keys(row)) {

    //         rowTemp.push(<td className="no-right-left-border">
    //             {row[colName]}
    //         </td>);


    //     }
    //     if (props.button) {
    //         items.push(<tr >{rowTemp}<td className="no-border no-border-bottom"><Modal content={modalContent} header="Match Maker" /></td></tr>);

    //     } else {
    //         items.push(<tr >{rowTemp}</tr>);

    //     }
    //     rowTemp = [];

    // }
    for (const header of tblData.columnHeaders) {
        colHeaders.push(<th className="no-right-left-border no-top-border">{header.label}</th>);
    }
    if (props.modalButtonType) {
        colHeaders.push(<th className="no-border no-top-border">Make changes</th>);
    }
    for (const row of tblData.rowData) {
        for (const header of tblData.columnHeaders) {
            let word = "";
            if (header.type === "array") {
                for (const elem of row[header.id]) {
                    word += ", " + elem;
                }
                word = word.substring(2)
            } else {
                word = row[header.id];
            }
            rowTemp.push(<td className="no-right-left-border">
                {word}
            </td>);

        }


        if (props.modalButtonType) {
            items.push(<tr >{rowTemp}<td className="no-border no-border-bottom"><Modal buttonType={props.modalButtonType} content={modalContent} header="Match Maker" /></td></tr>);

        } else {
            items.push(<tr >{rowTemp}</tr>);

        }
        rowTemp = [];
    }

    const [tbl, setTbl] = useState({
        colHeaders: colHeaders,
        rowData: items
    });
    console.log(items);


    return (

        <div>
            <Table style={{borderTop:"none"}}bordered hover>
                <thead>
                    <tr>
                        {tbl.colHeaders}
                    </tr>
                </thead>
                <tbody>
                    {tbl.rowData}
                </tbody>
            </Table>

        </div>

    );
}

export default TableComp;
