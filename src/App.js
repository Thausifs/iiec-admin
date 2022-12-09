import './App.css';
import Dashboard from './pages/dashboard';
import CounsellingSchedule from './pages/counselling_schedule';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Universities from './pages/universities';
import EmployeeManagement from "./pages/employee_management";
import StudentManagement from "./pages/student_management";
import Leads from "./pages/leads";
import Reports from './pages/reports';
import Login from './pages/login';




function App() {
  return (
    // <div className="App">
    //   <Dashboard />
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>{" "}
        <Route exact path="/dashboard" element={<Dashboard />}></Route>{" "}
        <Route
          exact
          path="/counselling-schedule"
          element={<CounsellingSchedule />}
        ></Route>
        <Route exact path="/universities" element={<Universities />}></Route>
        <Route
          exact
          path="/employeemanagement"
          element={<EmployeeManagement />}
        ></Route>
        <Route
          exact
          path="/studentmanagement"
          element={<StudentManagement />}
        ></Route>
        <Route exact path="/leads" element={<Leads />}></Route>
        <Route exact path="/reports" element={<Reports />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
