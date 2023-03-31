import './App.css';
// import SignIn from './Pages/SignIn';
import CustomerBookings from './Pages/customerBookings';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/" element={<CustomerBookings />} />
    </Routes>
  
  );
}

export default App;
