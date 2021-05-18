import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';


let w = "300px";
let h = "300px";
let color = "blue";
let header = "test header"
let content = "Woohoo, you're reading this text in a modal!";
let buttonType = "default";

function ModalComp(props) {
    console.log(props)

    const [show, setShow] = useState(false);
    header = props.header || header;
    content = props.content || content;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let openButton = <Button variant="primary" onClick={handleShow}>
        Launch demo modal
</Button>;
    if (props.buttonType === "viewMatches") {
        console.log("here")
        openButton = <Button variant="primary" onClick={handleShow}>
            View potential matches
    </Button>
    }

    return (
        <>
            {openButton}

            <Modal size='xl' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{header}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{content}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
          </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalComp;
