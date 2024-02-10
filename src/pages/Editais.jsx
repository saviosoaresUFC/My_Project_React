import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/EditaisStyle.css'
import { Card, Col, Row, Button } from 'react-bootstrap';

export default function Editais() {
  const editais = [
    {
      id: 1,
      title: 'ADENDO N° 08/2023 - CHAMADA PÚBLICA N° 02/2024 - PROGRAMA TECNOVA III',
      deadline: '09/03/2024',
      status: 'RESULTADO',
      color: 'bg-success',
    },
    {
      id: 2,
      title: 'ADENDO N° 11/2023 - CHAMADA PÚBLICA N° 01/2024 - PROGRAMA TECNOVA III',
      deadline: '23/12/2024',
      status: 'EDITAL ABERTO',
      color: 'bg-info',
    },
    {
      id: 3,
      title: 'ADENDO N° 05/2023 - CHAMADA PÚBLICA N° 02/2024 - PROGRAMA TECNOVA III',
      deadline: '06/08/2024',
      status: 'EDITAL ENCERRADO',
      color: 'bg-danger',
    },
    {
      id: 4,
      title: 'ADENDO N° 01/2023 - CHAMADA PÚBLICA N° 07/2023 - PROGRAMA TECNOVA III',
      deadline: '04/05/2024',
      status: 'EDITAL ABERTO',
      color: 'bg-info',
    },
    {
      id: 5,
      title: 'ADENDO N° 09/2023 - CHAMADA PÚBLICA N° 02/2024 - PROGRAMA TECNOVA III',
      deadline: '09/07/2024',
      status: 'RESULTADO',
      color: 'bg-success',
    },
    {
      id: 6,
      title: 'ADENDO N° 05/2023 - CHAMADA PÚBLICA N° 07/2023 - PROGRAMA TECNOVA III',
      deadline: '30/11/2024',
      status: 'RESULTADO',
      color: 'bg-success',
    },
    {
      id: 7,
      title: 'ADENDO N° 01/2023 - CHAMADA PÚBLICA N° 09/2023 - PROGRAMA TECNOVA III',
      deadline: '19/12/2024',
      status: 'EDITAL ABERTO',
      color: 'bg-info',
    },
    {
      id: 8,
      title: 'ADENDO N° 03/2023 - CHAMADA PÚBLICA N° 05/2023  - PROGRAMA TECNOVA III',
      deadline: '20/10/2024',
      status: 'EDITAL ENCERRADO',
      color: 'bg-danger',
    },
    {
      id: 9,
      title: 'ADENDO N° 10/2023 - CHAMADA PÚBLICA N° 01/2024  - PROGRAMA TECNOVA III',
      deadline: '14/09/2024',
      status: 'RESULTADO',
      color: 'bg-success',
    },
    {
      id: 10,
      title: 'ADENDO N° 12/2023 - CHAMADA PÚBLICA N° 12/2024  - PROGRAMA TECNOVA III',
      deadline: '02/05/2024',
      status: 'EDITAL ABERTO',
      color: 'bg-info',
    },
    {
      id: 11,
      title: 'ADENDO N° 06/2023 - CHAMADA PÚBLICA N° 10/2023  - PROGRAMA TECNOVA III',
      deadline: '10/10/2024',
      status: 'EDITAL ENCERRADO',
      color: 'bg-danger',
    },
  ]
  return (
    <>
      <Row xs={1} md={6} className="g-6 p-4 mt-1">
        {editais.map((edital) => {
          return (
            <Col key={edital.id} className="col-xl-3 col-sm-6 col-12 mb-4">
              <Card>
                <Card.Header className='d-flex justify-content-center'>Data limite: {edital.deadline}</Card.Header>
                <Card.Body className='text-justify'>
                  <Card.Title>{edital.title}</Card.Title>
                  <Card.Text>
                    <div className='d-flex align-items-end justify-content-center'>
                      <h6 className={`rounded p-1 ${edital.color}`}>{edital.status}</h6>
                    </div>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-center'>
                  <Button variant="info">Fazer download</Button>
                </Card.Footer>
              </Card>
            </Col>
          )
        }
        )}
      </Row>
    </>
  )
}

{/* <main>
      <div className="container pt-4">
        <section>
          <div className="row">
            {editais.map((edital) => {
              return (
                <div key={edital.id} className="col-xl-3 col-sm-6 col-12 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between px-md-1">
                        <div>
                          <p className="mb-3 mt-2">Data limite: {edital.deadline}</p>
                          <h5 className='title'>{edital.title}</h5>
                          <div className='d-flex flex-column'>
                            <p className={`w-25% text-white ml-auto align-self-center rounded ${edital.color}`}>{edital.status}</p>
                          </div>
                          <button className='btn-download'>Fazer download</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
            )}
          </div>
        </section>
      </div>
    </main> */}
