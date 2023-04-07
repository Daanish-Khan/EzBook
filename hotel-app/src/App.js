import './App.css';
import CustomerBookings from './Pages/customerBookings';
import SignIn from './Pages/SignIn'
import { Routes, Route } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Poppins',
    }
  }
});

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<CustomerBookings isAdmin={true}/>} />
          </Routes>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
