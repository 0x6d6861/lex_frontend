import {Routes, Route} from "react-router-dom";
import './App.css';
import AuthLayout from "./page/Auth/AuthLayout";
import Login from "./page/Auth/Login";
import Register from "./page/Auth/Register";
import MainLayout from "./page/Main/MainLayout";
import Dashboard from "./page/Main/Dashboard";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/auth" element={<AuthLayout />} >
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          <Route path="/" element={<MainLayout />} >
            <Route path="dashboard" element={<Dashboard />} />
          </Route>

        </Routes>
      </div>
  );
}

export default App;
