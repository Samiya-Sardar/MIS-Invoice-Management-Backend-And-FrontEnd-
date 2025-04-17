
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import AdminPage from './Components/AdminPage';
import SalesPersonPage from './Components/SalesPersonPage';
import ForgotPassword from './Components/ForgotPassword';
import ResetPassword from './Components/ResetPassword';
import ManageGroup from './Components/ManageGroup';
import ManageChains from './Components/ManageChains';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path='/Admin' element={<AdminPage />}/>
      <Route path='/SalesPerson' element={<SalesPersonPage />}/>
      <Route path='/FP' element={<ForgotPassword />}/>
      <Route path='/resetpassword' element={<ResetPassword />}/>
      <Route path='/ManageGroups' element={<ManageGroup />}/>
      <Route path='/ManageChains' element={<ManageChains />}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
