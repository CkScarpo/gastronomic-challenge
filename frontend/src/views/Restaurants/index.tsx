/* eslint-disable no-console */
/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
/* eslint-disable react/function-component-definition */
import { ClockCircleOutlined, StarOutlined } from '@ant-design/icons';
import {
  Button,
  Card, Collapse, Input, List, Tabs,
} from 'antd';
import React, { useEffect, useState } from 'react';
import logo from '../../assets/img/logoSlide2.png';
import comendo from '../../assets/img/comendo.jpg';
import cocaCola from '../../assets/img/coca-cola.jpg';
import { getEvents } from '../../redux/slices/restaurants';
import { useDispatch, useSelector } from '../../redux/store';
import { Container, Favorites } from './styles';

const Restaurants: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [collapsed, setCollapsed] = useState<string | string[]>('');
  const event = useSelector((state) => state.restaurants.events);
  const [dataSource, setDataSource] = useState(event);
  const [currentPage, setCurrentPage] = useState(1);
  const { Panel } = Collapse;
  const { TabPane } = Tabs;
  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  const onChange = (keyColapsed: any | string | string[]) => {
    setCollapsed(keyColapsed);
  };

  const paginationProps = {
    onChange: (page: any) => {
      setCurrentPage(page);
    },
    current: currentPage,
    pageSize: 2,
    total: dataSource.length,
  };

  return (
    <Container>
      <Input.Search
        placeholder="Pesquise seu restaurante predileto"
        value={value}
        style={{ width: '40%', marginBottom: '10px' }}
        onChange={(e) => {
          const currValue = e.target.value;
          setValue(currValue);
          const filteredDataName = event.filter((entry) => ((entry.name + entry.plateTitle + entry.plateDesc).toString().toLowerCase().includes(currValue.toLowerCase())));
          setDataSource(filteredDataName);
        }}
      />
      <Favorites>
        <List
          grid={{ gutter: 24, column: 1 }}
          pagination={paginationProps}
          dataSource={dataSource}
          renderItem={(item, index) => (
            <List.Item>
              <Collapse accordion style={{ background: '#001529' }} activeKey={collapsed} onChange={onChange}>
                <Panel
                  header={(
                    <li>
                      <div className="cards">
                        <div className="logo">
                          <img src={logo} alt="Logo restaurantes" />
                        </div>
                        <div style={{ alignItems: 'center' }}>
                          {item.name}
                          <br />
                          {item.type}
                          <br />
                          <span className="star">
                            <StarOutlined size={3} />
                            {item.rate}
                          </span>
                          <span style={{ marginLeft: '10px' }}>
                            <ClockCircleOutlined size={3} />
                            {item.hr}
                          </span>
                        </div>
                        <div>
                          <Button type="primary" onClick={onChange}>
                            Cardápio
                          </Button>
                        </div>
                      </div>
                    </li>
                )}
                  key={index}
                >
                  <Tabs style={{ color: 'white' }} defaultActiveKey="1">
                    <TabPane tab="Pratos" key="1">
                      <Card style={{ width: '50%', background: '#001529', color: 'white' }}>
                        <li>
                          <div className="cards">
                            <div className="comendo">
                              <img src={comendo} alt="Logo restaurantes" />
                            </div>
                            <div style={{ alignItems: 'center' }}>
                              <div>
                                <span>
                                  {item.plateTitle}
                                </span>
                                <span>
                                  {item.plateValue}
                                </span>
                              </div>
                              {item.plateDesc}
                              <br />
                            </div>
                          </div>
                        </li>
                      </Card>
                    </TabPane>
                    <TabPane tab="Bebidas" key="2">
                      <Card style={{ width: '50%', background: '#001529', color: 'white' }}>
                        <li>
                          <div className="cards">
                            <div className="bebidas">
                              <img src={cocaCola} alt="Logo restaurantes" />
                            </div>
                            <div style={{ alignItems: 'center' }}>
                              <div>
                                <span>
                                  {item.plateDrink}
                                </span>
                                <span>
                                  {item.plateDrinkValue}
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </Card>
                    </TabPane>
                  </Tabs>
                </Panel>
              </Collapse>
            </List.Item>
          )}
        />
      </Favorites>
    </Container>
  );
};
export default Restaurants;
