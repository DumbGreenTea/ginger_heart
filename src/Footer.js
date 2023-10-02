import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: '#E8BABA' }}>
      <Container>
        <Row>
          <Col lg={4}>
            <h3>Redes Sociales</h3>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i> Facebook</a>
              <a href="#"><i className="fab fa-twitter"></i> Twitter</a>
              <a href="#"><i className="fab fa-instagram"></i> Instagram</a>
            </div>
          </Col>
          <Col lg={4} className="text-center">
            <h3>Contacto</h3>
            <p>Correo Electrónico: info@example.com</p>
            <p>Teléfono: +123 456 789</p>
            <p>Dirección: Calle Ejemplo, Ciudad</p>
          </Col>
          <Col lg={4} className="text-right">
            <h3>Horario de Atención</h3>
            <p>Lunes a Viernes: 9:00 AM - 5:00 PM</p>
            <p>Sábado: 10:00 AM - 2:00 PM</p>
            <p>Domingo: Cerrado</p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <p>&copy; {new Date().getFullYear()} Tu Empresa - Todos los derechos reservados.</p>
          </Col>
          <Col md={6}>
            <p className="text-md-right">Diseñado por: Tu Nombre</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
