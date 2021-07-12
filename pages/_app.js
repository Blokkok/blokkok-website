import '../styles/globals.css';

import { ThemeProvider } from '@material-ui/core/styles';
import Theme from '../components/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
