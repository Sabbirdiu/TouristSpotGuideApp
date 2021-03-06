import React, { useState } from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from 'reactstrap';
import About from './About';
import Map from './Map';
import More from './More';
import Reviews from './Reviews';

import classnames from 'classnames';

import { InfoConsumer } from '../../../Context';
const Details = ({ about }) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div>
      {' '}
      <div className='container' >
        <Nav tabs className='mt-2 '>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => {
                toggle('1');
              }}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => {
                toggle('2');
              }}
            >
              More
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '3' })}
              onClick={() => {
                toggle('3');
              }}
            >
              Reviews
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '4' })}
              onClick={() => {
                toggle('4');
              }}
            >
              Map
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId='1'>
            <Row>
              <Col sm='12'>
                <About />
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId='2'>
            <Row>
              <Col sm='6'>
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>
                    <More />
                  </CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm='6'>
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>
                    <More />
                  </CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId='3'>
            <Row>
              <Col sm='12'>
                <Reviews />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId='4'>
            <Row>
              <Col sm='12'>
                <Map />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
};

export default Details;
