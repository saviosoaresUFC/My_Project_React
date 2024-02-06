import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModalTermodeAdesao(props) {
    return (
        <Modal {...props}>
            <Modal.Header closeButton>
                <Modal.Title>Termo de Adesao</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='body-termo-adesao'>
                    <p>As informações fornecidas à Plataforma OPP-UTFPR são de minha inteira responsabilidade,
                        o que isenta terceiros de quaisquer garantias sobre a confiabilidade das informações registradas.
                        Desde já autorizo a Plataforma OPP-UTFPR a realizar todas as providências que julgue necessárias para
                        verificar a exatidão e a veracidade do que foi informado. Declaro, também, ter ciência do seguinte:</p>
                    <ul>
                        <li>Receberei, via e-mail, avisos encaminhados pela Plataforma que sejam de meu interesse; e</li>
                        <li>Poderei receber convites para realizar avaliações como consultor da plataforma.</li>
                    </ul>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-primary" onClick={props.onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
