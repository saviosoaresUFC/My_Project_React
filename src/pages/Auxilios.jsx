import React from 'react'
import { Carousel, Image } from 'react-bootstrap'
import fut from '../img/fut.jpg'
import car from '../img/car.jpg'
import lobo from '../img/lobo.jpg'
import white from '../img/white.jpeg'
import gray from '../img/gray.png'
import { Card, Button } from 'react-bootstrap';


export default function Auxilios() {
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
    <div className='d-flex justify-content-center mt-4 p-2 h-100'>
      <Carousel className='carousel'>
        {editais.map((edital) => (
          <Carousel.Item key={edital.id} interval={3000}>
            <Image
              className='d-block image-carousel'
              src={gray}
              alt='First slide'
            />
            <Carousel.Caption>
              <Card>
                <Card.Header className='d-flex justify-content-center'>Data limite: {edital.deadline}</Card.Header>
                <Card.Body className='text-justify card-body'>
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
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}
