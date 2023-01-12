/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
/* eslint-disable prettier/prettier */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';

import { Link, Outlet } from 'react-router-dom';
import {
  Layout, Menu, Image, Button, Avatar, Tooltip,
} from 'antd';
import type { MenuProps } from 'antd';
import MenuItem from 'antd/es/menu/MenuItem';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Container, LogoContainer } from './styles';
import routesConfig from '../../../routes/routes';

import logo from '../../../assets/img/logo.png';
import { UseAuth } from '../../../context/AuthProvider/useAuth';

const { Header, Content } = Layout;
const LayoutPage: React.FC = () => {
  const [current, setCurrent] = useState('/');
  const auth = UseAuth();

  const routes = routesConfig[1].children;
  // const changeTheme = (value: boolean) => {
  //   setTheme(value ? 'dark' : 'light');
  // };

  const onClick: MenuProps['onClick'] = (e) => setCurrent(e.key);

  return (
    <Container>
      <Layout>
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            onClick={onClick}
            defaultSelectedKeys={[current]}
          >
            <LogoContainer>
              <Image preview={false} alt="Logo" src={logo} />
            </LogoContainer>
            {routes?.map((item) => (
              <MenuItem>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </MenuItem>
            ))}
            {!auth.email ? (
              <>
                <MenuItem style={{ marginLeft: 'auto' }}>
                  <Link to="/fomeList//login">
                    <Button type="dashed">Login</Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/fomeList//cadastre-se">
                    <Button type="primary">Cadastre-se</Button>
                  </Link>
                </MenuItem>
              </>
            )
              : (
                <>
                  <MenuItem style={{ marginLeft: 'auto' }}>
                    <Tooltip title={auth.email} placement="bottom">
                      <Avatar
                        style={{ backgroundColor: 'white', color: 'black' }}
                        icon={<UserOutlined />}
                        shape="circle"
                        size={35}
                      />
                    </Tooltip>
                  </MenuItem>
                  <MenuItem onClick={auth.logout}>
                    <Tooltip title="Sair" placement="bottom">
                      <LogoutOutlined />
                    </Tooltip>
                  </MenuItem>
                </>
              )}
          </Menu>

          {/* <SwitchTheme
              defaultChecked={theme === 'light'}
              onChange={themeToggler}
              checkedChildren="Claro"
              unCheckedChildren="Escuro"
            /> */}
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Container>
  );
};

export default LayoutPage;
