import React, {Fragment} from 'react'

// components
import HeroSection from './HeroSection';
import LegendaryMints from './LegendaryMints';
import AcolyteMints from './AcolyteMints';

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

const Content = () => {
  return (
    <Fragment>
        <HeroSection/>

        <Row style={{marginTop: 120, marginBottom: 20}}>
          <Row style={{textAlign: 'center', marginBottom: 50}}>
            <span style={{fontWeight: 'bold', fontSize: 40}}>View your Mints!</span>
          </Row>

          <LegendaryMints />

          <AcolyteMints />

        </Row>
    </Fragment>
  )
}

export default Content