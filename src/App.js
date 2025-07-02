import EmployeeFeedbackForm from "./components/EmployeeRegistrationForm";
import StudentRegistrationForm from "./components/StudentRegistrationForm";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Form Management</h1>

        {/* Tab navigation */}
        <div className="tabs">
          <Link to="/student" className="tab-link">Student Registration</Link>
          <Link to="/employee" className="tab-link">Employee Feedback</Link>
        </div>
        {/* {Routes}*/}
        <Routes>
        <Route path="/" element={<Navigate to="/student" />} />
        <Route path="/student" element={<StudentRegistrationForm />}/>
        <Route path="/employee" element={<EmployeeFeedbackForm />}/>
         </Routes>
        
      </div>
    </Router>
  );
}

export default App;