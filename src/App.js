
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import AdminPage from './Components/AdminPage';
import SalesPersonPage from './Components/SalesPersonPage';
import ForgotPassword from './Components/ForgotPassword';
import ResetPassword from './Components/ResetPassword';
import ManageGroup from './Components/ManageGroup';
import ManageChains from './Components/ManageChains';
import ManageBrands from './Components/ManageBrands';
import ManageZone from './Components/ManageZone';
import ManageEstimate from './Components/ManageEstimate';
import InvoiceGeneration from './Components/InvoiceGeneration';
import ManageInvoice from './Components/ManageInvoice';


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
      <Route path="/ManageBrands" element={<ManageBrands />}/>
      <Route path='/ManageZone' element={<ManageZone />}/>
      <Route path='/ManageEstimate' element={<ManageEstimate />}/>
      <Route path="/InvoiceGeneration/:estimateId" element={<InvoiceGeneration />}/>
      <Route path='/ManageInvoice' element={<ManageInvoice />}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
