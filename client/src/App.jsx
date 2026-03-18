import { AppProvider } from './context/AppContext';
import { HRMDashboard } from './pages/backoffice/HRM';
import { SignInPage } from './pages/SignInPage';
import { UsersPage } from './pages/UsersPage';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/hrm" element={<HRMDashboard />} />
      </Routes>
    </AppProvider>
 
  );
}

export default App;