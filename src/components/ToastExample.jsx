import React, { useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

export default function ToastExample(props) {

    return (
        <ToastContainer position="top-end" className="p-3 w-50" style={{ zIndex: 1 }}>
            <Toast {...props} autohide>
                <Toast.Header>
                    <strong className="me-auto">{props.title}</strong>
                </Toast.Header>
                <Toast.Body>{props.text}</Toast.Body>
            </Toast>
        </ToastContainer>
    )
}
