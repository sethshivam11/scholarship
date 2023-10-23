import './App.css';
import { Routes, Route } from "react-router-dom";
import FormPage from './components/FormPage';
import LandingPage from './components/LandingPage';
import Success from './components/Success';

function App() {
  return (
    <Routes>
      <Route element={<LandingPage/> } exact path="/" />
      <Route element={<FormPage/> } exact path="/form" />
      <Route element={<Success/> } exact path="/success" />
    </Routes>
  );
}

export default App;
