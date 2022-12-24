import React from 'react';
import './App.css';
import Dashboard from './screens/coach/Dashboard';
import Login from './screens/coach/Login';
import ForgotPassword from './screens/coach/ForgotPassword';
import Register from './screens/coach/Register';
import Profile from './screens/coach/Profile';
import { Route, Routes } from 'react-router-dom';
import Package from './screens/coach/Package';
import Settings from './screens/coach/Settings';
import InvoiceBilling from './screens/coach/InvoiceBilling';
import AddPackage from './screens/coach/AddPackage';
import Schedule from './screens/coach/Schedule';
import BillingSettings from './screens/coach/BillingSettings';
import CardSettings from './screens/coach/CardSettings';
import Chat from './screens/coach/Chat';
import Clients from './screens/coach/Clients';
import ManageUser from './screens/coach/ManageUser';
import EditProgram from './screens/coach/EditProgram';
import EditProgram1 from './screens/coach/EditProgram1';
import OnboardingAnswer from './screens/coach/OnboardingAnswer';
import Onboarding from './screens/client/Onboarding';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/coach/login' element={<Login/>}/>
        <Route path='/coach/dashboard' element={<Dashboard/>}/>
        <Route path='/coach/package' element={<Package/>}/>
        <Route path='/coach/login' element={<Login/>}/>
        <Route path='/coach/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/coach/register' element={<Register/>}/>
        <Route path='/coach/settings' element={<Settings/>}/>
        <Route path='/coach/profile' element={<Profile/>}/>
        <Route path='/coach/invoice-billing' element={<InvoiceBilling />} />
        <Route path='/coach/add-package' element={<AddPackage />} />
        <Route path='/coach/schedule' element={<Schedule />} />
        <Route path='/coach/billing-settings' element={<BillingSettings />} />
        <Route path='/coach/card-settings' element={<CardSettings />} />
        <Route path='/coach/chat' element={<Chat />} />
        <Route path='/coach/clients' element={<Clients />} />
        <Route path='/coach/manage-user' element={<ManageUser />} />
        <Route path='/coach/edit-program' element={<EditProgram />} />
        <Route path='/coach/edit-program1' element={<EditProgram1 />} />
        <Route path='/coach/onboarding-answer' element={<OnboardingAnswer />} />
        <Route path='/client/onboarding' element={<Onboarding />} />
      </Routes>
    </div>
  );
}

export default App;
