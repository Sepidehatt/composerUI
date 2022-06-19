import {Box } from '@cmpsr/components';
import Banner from './components/Banner'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <Box backgroundColor='background-dark'>
    <Box m='0 5%'>
      <Banner />
      <Main />
      <Footer/>
    </Box>
    </Box>
  );
}

export default App;
