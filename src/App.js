import './App.css';

// components
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

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

// framer motion
import { motion } from "framer-motion";

const iconPath = process.env.PUBLIC_URL + '/assets/';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Content />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
