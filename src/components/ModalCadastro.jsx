import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './Styles/ModalCadastroStyle.css';
import "bootstrap/dist/css/bootstrap.min.css";
import InputMask from 'react-input-mask';
import InputGroup from 'react-bootstrap/InputGroup';
import ModalTermodeAdesao from './ModalTermodeAdesao';

export default function ModalCadastro(props) {
    const [validated, setValidated] = useState(false);
    const [showInputCpf, setShowInputCpf] = useState(true);
    const [showInputPassaport, setShowInputPassaport] = useState(false);
    const [showModalTermoAdesao, setShowModalTermoAdesao] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className='bg-info d-flex align-items-center text-center' closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <div className='title'>
                        <h3>Cadastro</h3>
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form
                    className='form'
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                >
                    <Form.Group
                        className='name-group mb-3'
                        controlId="nameGroup"
                    >
                        <Form.Label>Nome Completo</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                className='rounded'
                                required
                                type="text"
                                placeholder="Casimiro Montenegro Filho"
                                controlId="nameGroup"
                                autoFocus
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor, digite seu nome.
                            </Form.Control.Feedback>
                            <Form.Control.Feedback>Ótimo!</Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group
                        className='email-group mb-2'
                        controlId="GroupEmail"
                    >
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type='email'
                            placeholder="name@example.com"
                            controlId="GroupEmail"
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, escolha um email.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>Ótimo!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                        className='cpf-group'
                        controlId="GroupCPF"
                    >
                        <Form.Label>
                            <div className='buttonsChooseDoc'>
                                <div onClick={() => {
                                    setShowInputPassaport(false)
                                    setShowInputCpf(true)
                                }
                                } className={`buttonCpf ${showInputCpf && 'active'}`}>CPF</div>
                                ou
                                <div onClick={() => {
                                    setShowInputCpf(false)
                                    setShowInputPassaport(true)
                                }
                                } className={`buttonPassaporte ${showInputPassaport && 'active'}`}>Passaporte</div>
                            </div>
                        </Form.Label>
                        <Form.Control
                            required
                            as={InputMask}
                            mask={`${showInputCpf ? '999.999.999-99' : 'aa999999'}`}
                            maskChar={null}
                            type='text'
                            placeholder={`${showInputCpf ? '000.000.000-00' : 'AA000000'}`}
                            controlId="GroupCPF"
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, digite seu {showInputCpf ? 'CPF' : 'Passaporte'}.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>Ótimo!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                        className='password-group'
                        controlId="GroupPassword"
                    >
                        <Form.Label>Senha</Form.Label>
                        <Form.Control
                            required
                            type='password'
                            placeholder="*********"
                            controlId="GroupPassword"
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, escolha uma senha entre 5 e 15 digitos.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>Ótimo!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                        className='confirm-password-group'
                        controlId="GroupConfirmPassword"
                    >
                        <Form.Label>Repita sua senha</Form.Label>
                        <Form.Control
                            required
                            type='password'
                            placeholder="*********"
                            controlId="GroupConfirmPassword"
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, confirme sua senha.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>Ótimo!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='groupAdesao' controlId="formBasicCheckbox">
                        <Form.Check
                            required
                            label="Aceito o termo de adesão."
                            feedback="Obrigatório aceitar os termos de adesão."
                            feedbackType="invalid"
                        />
                        <div onClick={() => setShowModalTermoAdesao(true)} className='text-termo text-primary' >
                           Termo de adesao
                        </div>
                        <ModalTermodeAdesao
                            show={showModalTermoAdesao}
                            onHide={() => setShowModalTermoAdesao(false)}
                        />
                    </Form.Group>
                    <Form.Group className='w-100 d-flex justify-content-evenly' controlId="buttons">
                        <Button variant='secondary' onClick={props.onHide}>Cancelar</Button>
                        <Button variant="primary" type='submit'>Registrar-se</Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal >
    )
}
