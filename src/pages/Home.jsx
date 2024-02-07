import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import ModalCadastro from '../components/ModalCadastro';
import ToastExample from '../components/ToastExample';

export default function Home() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className='page-home'>
      <div class="progress" style={{ height: 20, borderRadius: 20 }}>
        <div class="bg-success progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '75%' }}></div>
      </div>
      <div className='mt-4'>
        <Button variant="secondary" onClick={() => setModalShow(true)}>
          Cadastre-se
        </Button>

        <ModalCadastro
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </div>
  )
}
