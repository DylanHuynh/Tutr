
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react';
import "./TableComp.css";
import Modal from "../components/Modal.js";
import axios from "axios";
//Takes table from request in dictionary form along with a className (why?) and converts it to gtml
const dictToContent = (request, classNameStr) => {
    let rowTemp = [];
    let row = request.content;
    for (const header of request.columnHeaders) {
            let word = "";
            if (header.type === "array") {
                for (const elem of row[header.id]) {
                    word += ", " + elem;
                }
                word = word.substring(2)
            } else {
                word = row[header.id];
            }
            rowTemp.push(<div className={classNameStr}>
                <div>{header.label}: </div> <div style={{fontWeight: "normal", marginLeft: "10px"}}> {word}</div>
            </div>);


    }
    return rowTemp;
}

let exampleData = {
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
        id: "email",
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
let selectedRequest = {
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
    }],
    content: {
        tuteeName: "Bob Smith",
        availability: ["1", "3", "AS"],
        class: "AP Bio",
        teacher: "Killpack"
    }

}

let tuteeInfoContent = dictToContent(selectedRequest,"tutee-info-list");


let exampleModalContent =
    <div className="modal-container">
        <div className="tutee-info-container">
            {tuteeInfoContent}

        </div>

        <div>
            <TableComp modalButtonType={"makeMatch"} button={true} />
        </div>
    </div>;
let exampleModalHeader = "Match Maker"

function TableComp(props) {
    let modalContent = (props.modalData && props.modalData.modalContent) || exampleModalContent;
    let modalHeader = (props.modalData && props.modalData.modalHeader) || exampleModalHeader;
    const [tblRendered, setTblRendered] = useState({
        colHeaders: [],
        rowData: []
    });
    let rowData = [];
    let rowTemp = [];
    let colHeaders = [];
    // Update the document title using the browser API
    let tblData = props.tblData || exampleData;


    useEffect(() => {
        async function getPotentialMatchData(id) {
            let resp;
            const body = {
                id: id
            }
            await axios.post('/viable_tutors',body)
                .then(response => resp = response);
            resp = await resp.data.potential_tutors;

            debugger;

            return resp;

            //TODO: format resp into right tbl format

        }
        //if match maker, pulling potential matches
        if (props.modalButtonType === "makeMatch") {
            const id = props.selectedRequestID;
            let rawTblData = getPotentialMatchData(id).then(() => {

            });
            let formatted = {
                colHeaders: [],
                rowData:[]
            }
            debugger;
            for (const row of rawTblData) {
                const tutor = row.tutor;
                tutor["free_blocks"] = row["potential_blocks"];
                tutor["availability"] = row["potential_as"];
                formatted.rowData.push(tutor);
                for (const key in Object.keys(tutor)) {
                    formatted.columnHeaders.push({
                        label: key,
                        id: key,
                        type: "string"

                    })
                }

            }
            tblData = formatted;
        }
        //CONVERTING tblData to HTML
        console.log(tblData);

        if (!tblData.columnHeaders) {
            return;
        }

        for (const header of tblData.columnHeaders) {
            colHeaders.push(<th className="no-right-left-border no-top-border">{header.label}</th>);
        }
        if (props.modalButtonType) {
            colHeaders.push(<th className="no-border no-top-border"></th>);
        }
        let rowIndex = 0;
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
                //TODO: make modalContent variable based on modalButtonType (which is the type of modal at the edge of a table, currently it's only match maker)
                rowData.push(<tr >{rowTemp}<td className="no-border no-border-bottom"><Modal tableData={tblData} rowIndex={rowIndex} buttonType={props.modalButtonType} content={modalContent} header={modalHeader} /></td></tr>);

            } else {
                rowData.push(<tr >{rowTemp}</tr>);

            }
            rowTemp = [];
            rowIndex += 1;
        }

        //SETTING tblRendered to the values of colHeaders and rowData
        const timer = setTimeout(() => {
            if (tblRendered.rowData.length == 0) {

                setTblRendered({
                    colHeaders: colHeaders,
                    rowData: rowData
                })
            }
          }, 1000);
          return () => clearTimeout(timer);


    },[tblRendered,tblData])





    return (

        <div>
            <Table style={{borderTop:"none"}}bordered hover>
                <thead>
                    <tr>
                        {tblRendered.colHeaders}
                    </tr>
                </thead>
                <tbody>
                    {tblRendered.rowData}
                </tbody>
            </Table>

        </div>

    );
}

export default TableComp;
