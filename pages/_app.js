import '../styles/globals.css';
import { GeistProvider, CssBaseline } from '@geist-ui/react';
import { Provider } from 'react-redux';
import store from '../redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <GeistProvider>
      <Provider store={store}>
      <CssBaseline />
        <Component {...pageProps} />
      </Provider>
    </GeistProvider>
  )
}

export default MyApp
