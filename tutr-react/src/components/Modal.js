import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';


let w = "300px";
let h = "300px";
let color = "blue";
let header = "test header"
let content = "Woohoo, you're reading this text in a modal!";
let buttonType = "default";

function ModalComp(props) {

    const [show, setShow] = useState(false);
    const [inputRef, setInputRef] = useState(React.createRef());
    header = props.header || header;
    content = props.content || content;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [closeType, setCloseType] = useState("default");

    const closeFcn = () => {
        console.log(closeType)
        if (closeType == "makeMatch") {
            handleMakeMatch();

        }
        handleClose();
    }
    const handleMakeMatch = () => {
        console.log("here")
        console.log(inputRef);

        let radioVals = document.getElementsByName("match");
        for (let i = 0; i < radioVals.length; i++) {
            if (radioVals[i].checked) {
                const modal = document.getElementById("modal");
                const table = Array.from(modal.querySelectorAll("td"));
                const textVals = table.map(x => x.textContent);
                const numCols = textVals.length / radioVals.length;

                const rowSlice = textVals.slice(i * (numCols), (i+1) * numCols - 1);
                const colHeaders = Array.from(modal.querySelectorAll("th")).map(x => x.textContent);
                let rowObj = {};
                for (let j = 0; j < colHeaders.length - 1; j++) {
                    rowObj[colHeaders[j]] = rowSlice[j];
                }
                console.log(rowObj)
            }
        }

    };
    const onInputValueChange =  (e) => {
        console.log(e)
    }
    let openButton = <Button variant="primary" onClick={handleShow}>
        Launch demo modal
</Button>;
    if (props.buttonType === "viewPotentialMatches") {
        openButton = <Button variant="primary" onClick={handleShow}>
            View Potential Matches
    </Button>
    } else if (props.buttonType == "makeMatch") {

        openButton =  <input type="radio" value="someIdTODO" name="match" onChange={onInputValueChange}/>;
    } else if (props.buttonType == "viewRequests") {
        openButton = <Button variant="primary" onClick={handleShow}>
            View All Requests
    </Button>
    } else if (props.buttonType == "viewModSheets") {
        openButton = <Button variant="primary" onClick={handleShow}>
            View Mod Sheets
    </Button>
    } else if (props.buttonType == "viewAllMatches") {
        openButton = <Button variant="primary" onClick={handleShow}>
            View All Matches
    </Button>;

    } else if (props.buttonType == "sendEmail") {
        openButton = <Button variant="primary" onClick={console.log("testing")}>
            Email
    </Button>
    } else if (props.buttonType == "editInfo") {
        openButton = <Button variant="primary" onClick={() => console.log(props.rowIndex)}>
            Edit Info
    </Button>
    }
    useEffect(() => {
        if (props.buttonType === "viewPotentialMatches") {
            setCloseType("makeMatch");
        }
    })


    return (
        <>
            {openButton}

            <Modal ref={inputRef} id="modal" size='xl' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{header}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{content}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={closeFcn}>
                        Save Changes
          </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalComp;
