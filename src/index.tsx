import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/index';
import './index.css';
import Routes from './Routes';

import Header from './components/Header/Header';
import { Footer } from 'hilfling-gui/lib';
import guistyles from 'hilfling-gui/lib/styles/utilities.module.css';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <div>
      <div className={guistyles.container}>
        <div className={'container'}>
          <Header />
          <Routes />
        </div>
      </div>
      <Footer />
    </div>
  </Provider>
);

render(<Root />, document.getElementById('root'));
