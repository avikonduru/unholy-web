import './App.css';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button variant="outline-secondary">Connect Wallet</Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row style={{marginTop: 100, marginBottom: 20}}>
          <Col xs={3}>
            <span style={{fontWeight: 'bold', fontSize: 70}}>UnHoly</span>
          </Col>
          <Col style={{display: 'flex', alignItems: 'center'}}>
            <span>Discord Twitter</span>
          </Col>
        </Row>

        <Row style={{marginBottom: 20}}>
          <Col xs={4}>
            <Image
              src="https://gateway.pinata.cloud/ipfs/QmdNF1aZ27XhE5SrFhCP4GtASLxbJfM6TNyhad4jKTpjxv/0.jpg"
              width={400}
              style={{borderRadius: '20px'}}
            />
          </Col>
          <Col style={{display: 'flex', alignItems: 'center', fontSize: 20, fontWeight: 'bold'}}>
            <Row>
              <span style={{fontSize: 30, marginBottom: 10}}>Welcome to the UnHoly DAO</span>
              <span style={{marginBottom: 10}}>We’re going to create a website to raise money for our project, and to raise money to purchase the Warlock.</span>
              <span>We currently have:</span>
              <ul style={{marginLeft: 20}}>
                <li>2 Legendary NFT's left (Out of 4 in total)</li>
                <li>20 Acolyte NFT's left (Out of 400 in total)</li>
              </ul>
              <Row>
                <Col xs={3}>
                  <div className="d-grid gap-2">
                    <Button variant="primary">Mint Legendary</Button>
                  </div>
                </Col>
                <Col xs={3}>
                  <div className="d-grid gap-2">
                    <Button variant="danger">Mint Acolyte</Button>
                  </div>
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>

        <Row style={{marginTop: 150, marginBottom: 20}}>
          <Row style={{textAlign: 'center', marginBottom: 50}}>
            <span style={{fontWeight: 'bold', fontSize: 40}}>View your Mints!</span>
          </Row>
          <Row style={{marginBottom: 40}}>
            <span style={{fontWeight: 'bold', fontSize: 25, marginBottom: 20}}>Current Legendary Mints:</span>
            <Col xs={6}>
              <Card style={{ width: '26rem', backgroundColor: 'purple' }}>
                <Card.Img variant="top" src="https://gateway.pinata.cloud/ipfs/QmdNF1aZ27XhE5SrFhCP4GtASLxbJfM6TNyhad4jKTpjxv/0.jpg" />
                <Card.Body>
                  <Card.Title>Legendary #1</Card.Title>
                  <Card.Text>
                    Owned By: 0x0000...0000
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6}>
              <Card style={{ width: '26rem', backgroundColor: 'purple' }}>
                <Card.Img variant="top" src="https://gateway.pinata.cloud/ipfs/QmdNF1aZ27XhE5SrFhCP4GtASLxbJfM6TNyhad4jKTpjxv/0.jpg" />
                <Card.Body>
                  <Card.Title>Legendary #1</Card.Title>
                  <Card.Text>
                    Owned By: 0x0000...0000
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row style={{marginBottom: 40}}>
            <span style={{fontWeight: 'bold', fontSize: 25, marginBottom: 20}}>Current Acolyte Mints:</span>
            <Col xs={3}>
              <Card style={{ width: '14rem', color: 'black', backgroundColor: '#d3d3d3' }}>
                <Card.Img variant="top" src="https://gateway.pinata.cloud/ipfs/QmdNF1aZ27XhE5SrFhCP4GtASLxbJfM6TNyhad4jKTpjxv/0.jpg" />
                <Card.Body>
                  <Card.Title>Acolyte #1</Card.Title>
                  <Card.Text>
                    Owned By: 0x0000...0000
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={3}>
              <Card style={{ width: '14rem', color: 'black', backgroundColor: '#d3d3d3' }}>
                <Card.Img variant="top" src="https://gateway.pinata.cloud/ipfs/QmdNF1aZ27XhE5SrFhCP4GtASLxbJfM6TNyhad4jKTpjxv/0.jpg" />
                <Card.Body>
                  <Card.Title>Acolyte #1</Card.Title>
                  <Card.Text>
                    Owned By: 0x0000...0000
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={3}>
              <Card style={{ width: '14rem', color: 'black', backgroundColor: '#d3d3d3' }}>
                <Card.Img variant="top" src="https://gateway.pinata.cloud/ipfs/QmdNF1aZ27XhE5SrFhCP4GtASLxbJfM6TNyhad4jKTpjxv/0.jpg" />
                <Card.Body>
                  <Card.Title>Acolyte #1</Card.Title>
                  <Card.Text>
                    Owned By: 0x0000...0000
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Row>
      </Container>

      <Navbar bg="dark" variant="dark" position="bottom">
        <Container style={{display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', padding: 20}}>
          <span>Come and see</span>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
