import { AppProvider } from './context/AppContext';
import { Navigate, Route, Routes } from 'react-router-dom';
import { BackOfficeLayout } from './pages/backoffice/BackOfficeLayout';
import { DashboardPage } from './pages/backoffice/DashboardPage';
import { HRMDashboard } from './pages/backoffice/HRM';
import { InventoryPage } from './pages/backoffice/InventoryPage';
import { PatrolAreasPage } from './pages/backoffice/PatrolAreasPage';
import { ReportsPage } from './pages/backoffice/ReportsPage';
import { SignInPage } from './pages/SignInPage';
import { TaskAssignPage } from './pages/backoffice/TaskAssignPage';


function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route element={<BackOfficeLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/hrm" element={<HRMDashboard />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/areas" element={<PatrolAreasPage />} />
          <Route path="/taskassignment" element={<TaskAssignPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </AppProvider>
  );
}

export default App;