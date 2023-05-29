// eslint-disable-next-line import/no-unresolved
import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import WebSocketInitiator from './utils/websocket-initiator';
import FooterToolsInitiator from './utils/footer-tools-initiator';
import CONFIG from './globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
// eslint-disable-next-line no-unused-vars
const START = 10;
// eslint-disable-next-line no-unused-vars
const NUMBER_OF_IMAGES = 100;

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);

  // Initialize footer tools
  FooterToolsInitiator.init({
    subscribeButton: document.querySelector('#subscribePushNotification'),
    unsubscribeButton: document.querySelector('#unsubscribePushNotification'),
  });
});
