import Header from"./components/header/Header.jsx"
import Home  from './components/home/Home.jsx';
import{Box} from '@mui/material';

function App() {
  return (
    <div>
    <Header/>
    <Box style={{marginTop:54}}>
      <Home/>
    </Box>
    </div>
  );
}

export default App;
