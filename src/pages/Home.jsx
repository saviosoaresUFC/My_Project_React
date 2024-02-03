import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function Home() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h1 className="text-center mb-5">Plataforma Montenegro</h1>
          <p className="text-center mb-5">Casimiro Montenegro Filho - Criador do ITA e CTA, Pioneiro do Correio Aéreo Militar (CAM), Patrono de Engenharia da FAB e ANE.</p>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <Card className="mb-5">
            <Card.Header className="bg-light text-center">Resultado - Chamada Pública N° 05/2023 - Programa TECNOVA III</Card.Header>
            <Card.Body>
              <Card.Text>Faça o download do resultado: <a href="link_para_o_download" className="btn btn-primary btn-lg w-50 mx-auto d-block">Download</a></Card.Text>
              <Card.Text>Data limite: 22/12/2024</Card.Text>
              <Card.Text>Adendo N° 01/2023</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <Card className="mb-5">
            <Card.Header className="bg-light text-center">Contato</Card.Header>
            <Card.Body>
              <Card.Text>Funcap - Avenida Oliveira Paiva, 941 - Cidade dos Funcionários, Fortaleza/CE</Card.Text>
              <Card.Text>CEP: 60822-130 - Fone: (85) 3101.2170 | (85) 3275.9124 | Fax: (85) 3275.7862</Card.Text>
              <Card.Text>©2024 Fundação Cearense de Apoio ao Desenvolvimento Científico e Tecnológico</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
