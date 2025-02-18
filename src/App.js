import React from 'react';
import { BrowserRouter as Router, Route, Routes , Navigate} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';


function App() {
    return(
    <Router>
        <div className="flex justify-center items-center min-h-screen bg-gray-600">
                <Routes>
                    <Route path="/" element={<Navigate to="/register" />} /> {/* Redirect root to Register */}
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </div>
    </Router>
  );
}

export default App;
