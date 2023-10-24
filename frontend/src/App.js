import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import FormPage from './components/FormPage';
import Success from './components/Success';

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Navigate path="/" />} />
      <Route element={<FormPage />} exact path="/" />
      <Route element={<Success />} exact path="/success" />
    </Routes>
  );
}

export default App;
