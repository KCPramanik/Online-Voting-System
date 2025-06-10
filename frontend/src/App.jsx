import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CreateVote from './Pages/Create-Vote/create-vote';
import AdminLogin from './Pages/AdminLogin/admin-login';
import AdminRegister from './Pages/AdminRegister/admin-register';
import AdminPanel from './Pages/AdminPanel/admin-panel';
import RegisterCandidate from './Pages/Register-Candidate/register-candidate';
import FilterBallotBox from './Pages/FilterBallotBox/Filter-Ballot-Box';
import Home from './Pages/Home/home'
import AdminLogOut from './Component/AdminLogOut';

function App() {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <Routes>

        {/* ✅ Public Voting Panel */}
        <Route path="/voter-panel" element={<CreateVote />} />
        <Route path="/home" element={<Home />} />

        {/* ✅ Admin Auth */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-register" element={<AdminRegister />} />

        {/* ✅ Admin Panel and Routes (Protected by Token) */}
        <Route path="/admin-panel" element={token ? <AdminPanel /> : <Navigate to="/admin-login" />} />
        <Route path="/register-candidate" element={token ? <RegisterCandidate /> : <Navigate to="/admin-login" />} />
        <Route path="/filter-ballot-box" element={token ? <FilterBallotBox /> : <Navigate to="/admin-login" />} />

        {/* ✅ Logout Route */}
        <Route path="/admin-logout" element={<AdminLogOut />} />

        {/* ✅ Default Redirect */}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
}

export default App;
