import './App.css';

// Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

// react icons
import { FaDiscord, FaTwitter } from "react-icons/fa";

const iconPath = process.env.PUBLIC_URL + '/assets/';

function App() {
  return (
    <div className="App">
      <Navbar sticky="top" style={{backgroundColor: '#1d1f21'}}>
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
        <Row style={{marginTop: 60, marginBottom: 20}}>
          <Col xs={5}>
            <Image src={`${iconPath}unholy-logo-white-1080x1080.png`} width={500} />
          </Col>
          <Col style={{display: 'flex', alignItems: 'center'}}>
            <Row>
              <Col>
                <FaDiscord style={{fontSize: 40}} />
              </Col>
              <Col>
                <FaTwitter style={{fontSize: 40}} />
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{marginBottom: 20, marginLeft: 50}}>
          <Col xs={5}>
            <Image
              src={`${iconPath}4_5929061502970497698.jpg`}
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
                <Col xs={4}>
                  <div className="d-grid gap-2">
                    <Button variant="primary" style={{fontWeight: 'bold'}}>MINT LEGENDARY</Button>
                  </div>
                </Col>
                <Col xs={4}>
                  <div className="d-grid gap-2">
                    <Button variant="danger" style={{fontWeight: 'bold'}}>MINT ACOLYTE</Button>
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
              <Card style={{ width: '26rem', backgroundColor: '#dd02dd' }}>
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
              <Card style={{ width: '26rem', backgroundColor: '#dd02dd' }}>
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

      <Navbar position="bottom" style={{backgroundColor: '#1d1f21'}}>
        <Container style={{display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', padding: 20}}>
          <span>Come and see</span>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
