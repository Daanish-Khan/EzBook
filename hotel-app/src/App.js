import './App.css';
import SignIn from './Pages/SignIn';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
    </Routes>
  
  );
}

export default App;
