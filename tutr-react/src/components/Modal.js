import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import TableComp from "./TableComp.js"
import React, { useEffect, useState } from 'react';
import axios from "axios"


let header = "test header"

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
            <div>{header.label}: </div> <div style={{ fontWeight: "normal", marginLeft: "10px" }}> {word}</div>
        </div>);


    }
    return rowTemp
}
function ModalComp(props) {

    const [show, setShow] = useState(false);
    const [content, setContent] = useState(props.content || <TableComp />)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [openButton,setOpenButton] = useState(<Button variant="primary" onClick={handleShow}>
        Launch demo modal
</Button>);
    const [closeType, setCloseType] = useState(props.buttonType);
    const [openType, setOpenType] = useState(props.buttonType);
    header = props.header || header;

    const handleSubmit = (event) => {
        //TODO: format formInput to be the response from the actual colHeaders
        let formInput = {}
        let tempVal = "";

        for (let i = 0; i < event.target.length - 2; i++) {
            const cell = event.target[i];
            // use tempVal first
            tempVal = cell.value || cell.placeholder;
            formInput[props.tableData.columnHeaders[i].id] = tempVal
        }
        debugger;

        formInput["id"] = props.tableData.rowData[props.rowIndex].id;

        axios.post('/update_request', formInput)
            .then(response => console.log(response));
    }
    const closeFcn = (rowIndex, buttonType) => {
        if (buttonType === "makeMatch") {
            handleMakeMatch(rowIndex);
        } else if (buttonType === "editInfo") {

        }
        handleClose();
    }
    const openFcn = (rowIndex, buttonType) => {
        if (buttonType == "editInfo") {
            handleOpenEditModal(rowIndex);
        }
        handleShow();
    }

    const getRowData = (rowIndex) => {
        let rowObj = {};
        const colHeaders = props.tableData.columnHeaders;
        for (let j = 0; j < colHeaders.length; j++) {
            rowObj[colHeaders[j].id] = props.tableData.rowData[rowIndex][colHeaders[j].id];
        }
        return rowObj;
    }

    const handleMakeMatch = (rowIndex) => {
        const rowData = getRowData(rowIndex);




    };
    const handleOpenEditModal = (rowIndex) => {
        const tblData = getRowData(rowIndex);
        let colHeaders = [];
        let rowData = [];
        let rowTemp = [];
        for (const header of props.tableData.columnHeaders) {
            colHeaders.push(<th className="no-right-left-border no-top-border">{header.label}</th>);
        }
        colHeaders.push(<th className="no-border no-top-border"></th>);

        for (const header of props.tableData.columnHeaders) {
            let word = "";
            if (header.type === "array") {
                for (const elem of tblData[header.id]) {
                    word += ", " + elem;
                }
                word = word.substring(2)
            } else {
                word = tblData[header.id];
            }
            rowTemp.push(<td className="no-right-left-border">
                <FormControl
                    placeholder={word}
                    aria-label={word}
                />
            </td>);

        }

        //TODO: make modalContent variable based on modalButtonType (which is the type of modal at the edge of a table, currently it's only match maker)
        rowData = <tr >{rowTemp}<td className="no-border no-border-bottom"></td></tr>
        setContent(
            <Table style={{ borderTop: "none" }} bordered hover>
                <thead>
                    <tr>
                        {colHeaders}
                    </tr>
                </thead>
                <tbody>
                    {rowData}
                </tbody>
            </Table>

        );
    }



    useEffect(() => {
        //OPEN BUTTON SETUP
        if (props.buttonType === "viewPotentialMatches") {
            setOpenButton(<Button variant="primary" onClick={handleShow}>
                View Potential Matches
        </Button>)
            let selectedRequest = {
                columnHeaders: props.tableData.columnHeaders,
                content: getRowData(props.rowIndex)
            }
            setContent(
                <div className="modal-container">
                    <div className="tutee-info-container">
                        {dictToContent(selectedRequest, "tutee-info-list")}
                    </div>
                    <div>
                        <TableComp selectedRequestID={props.tableData.rowData[props.rowIndex].id} modalButtonType={"makeMatch"} button={true} />
                    </div>
                </div>);
        } else if (props.buttonType == "makeMatch") {

            setOpenButton(<input type="radio" value="someIdTODO" name="match" />);
        } else if (props.buttonType == "viewRequests") {
            setOpenButton(<Button variant="primary" onClick={handleShow}>
                View All Requests
        </Button>)
        } else if (props.buttonType == "viewModSheets") {
            setOpenButton(<Button variant="primary" onClick={handleShow}>
                View Mod Sheets
        </Button>)
        } else if (props.buttonType == "viewAllMatches") {
            setOpenButton(<Button variant="primary" onClick={handleShow}>
                View All Matches
        </Button>)

        } else if (props.buttonType == "sendEmail") {
            setOpenButton(<Button variant="primary" onClick={console.log("testing")}>
                Email
        </Button>)
        } else if (props.buttonType == "editInfo") {
            setOpenButton(<Button variant="primary" onClick={() => openFcn(props.rowIndex, props.buttonType)}>
                Edit Info
        </Button>)
        }

    }, [])


    return (
        <>
            {openButton}

            <Modal id="modal" size='xl' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{header}</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>{content}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type={props.buttonType === "editInfo" ? "submit" : null} onClick={() => closeFcn(props.rowIndex, closeType)}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Form>

            </Modal>
        </>
    );
}

export default ModalComp;
