import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from "redux-persist/integration/react";
import "slick-carousel/slick/slick.css";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import "./index.css";
import App from "./App";
import './i18next';
import { AuthProvider } from './auth/provider/AuthProvider';
import { CurrentUserProvider } from './auth/provider/CurrentUserProvider/CurrentUserProvider';
import { CartProvider } from 'react-use-cart'



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Suspense fallback={(<div>...Loading</div>)}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CurrentUserProvider>
          <AuthProvider>
            <CartProvider>
              <App />
            </CartProvider>


          </AuthProvider>
        </CurrentUserProvider>
      </PersistGate>
    </Provider>
  </Suspense>

);

