import { ConfigProvider } from 'antd';
import React from 'react';
import ptBR from 'antd/lib/locale/pt_BR';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './redux/store';
import routesConfig from './routes/routes';
import ThemeProvider from './context/theme';
import 'antd/dist/reset.css';
import { AuthProvider } from './context/AuthProvider';

const router = createBrowserRouter(routesConfig);

function App() {
  return (
    <ThemeProvider>
      <ConfigProvider locale={ptBR}>
        <ReduxProvider store={store}>
          <AuthProvider>
            <PersistGate loading={null} persistor={persistor}>
              <RouterProvider router={router} />
            </PersistGate>
          </AuthProvider>
        </ReduxProvider>
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default App;
