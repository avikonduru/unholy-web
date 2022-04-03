import React, {Fragment} from 'react'

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

// react icons
import { FaDiscord, FaTwitter } from "react-icons/fa";

// framer motion
import { motion } from "framer-motion";

const iconPath = process.env.PUBLIC_URL + '/assets/';

const HeroSection = () => {
  return (
    <Fragment>
        <Row style={{marginTop: 60, marginBottom: 20}}>
          <Col xs={5}>
            <motion.div
              animate={{
                x: 0,
                y: [10,-10],
                scale: 1,
                rotate: 0,
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2
              }}
            >
              <Image src={`${iconPath}unholy-logo-white-1080x1080.png`} width={500} />
            </motion.div>
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
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
              }}
            >
              <Image
                src={`${iconPath}4_5929061502970497698.jpg`}
                width={400}
                style={{borderRadius: '20px'}}
              />
            </motion.div>
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
    </Fragment>
  )
}

export default HeroSection