import {
  HomeOutlined,
  ReadOutlined,
  ShopOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';
import PrivateLayout from '../components/Layout/PrivateLayout';
import ExternalLayout from '../components/Layout/ExternalLayout';
import AboutPage from '../views/AboutPage';
import Contact from '../views/Contact';
import HomePage from '../views/HomePage';
import Login from '../views/Login';
import Restaurants from '../views/Restaurants';
import Sign from '../views/Sign';
import { ProtectLayout } from '../components/Layout/ProtectLayout';

const routesConfig = [
  {
    element: <ExternalLayout />,
    children: [
      {
        path: '/fomeList//login',
        name: 'Login',
        icon: '',
        element: <Login />,
      },
      {
        path: '/fomeList//cadastre-se',
        name: 'Cadastro',
        icon: '',
        element: <Sign />,
      },
    ],
  },
  {
    element: <PrivateLayout />,
    children: [
      {
        path: '/',
        name: 'Inicio',
        icon: <HomeOutlined />,
        element: <HomePage />,
      },
      {
        path: '/fomeList/restaurantes',
        name: 'Restaurantes',
        icon: <ShopOutlined />,
        element: (
          <ProtectLayout>
            <Restaurants />
          </ProtectLayout>
        ),
      },
      {
        path: '/fomeList/fale-conosco',
        name: 'Fale conosco',
        icon: <WhatsAppOutlined />,
        element: <Contact />,
      },
      {
        path: '/fomeList//sobre',
        name: 'Sobre',
        icon: <ReadOutlined />,
        element: <AboutPage />,
      },
    ],
  },
];

export default routesConfig;
