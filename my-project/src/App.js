import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./DataProvider";
import User from "./User";
import Mechanic from "./Mechanic"
import Home from "./Home";
import RegisterPage from "./Auth/RegisterPage";
import LoginPage from "./Auth/LoginPage";
import Dashboard from "./Dashboard";
import Sms from "./sms";

function App() {
  return (
    <>
    <DataProvider>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/mechanic" element={<Mechanic/>}/>
        <Route path="/sms" element={<Sms/>}/>
        {/* <Route path="/home" element={<Home/>}/> */}
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </DataProvider>
    </>
  );
}

export default App;
