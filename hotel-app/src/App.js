import './App.css';
import CustomerBookings from './Pages/customerBookings';
import SignIn from './Pages/SignIn'
import { Routes, Route } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Poppins',
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<CustomerBookings />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
