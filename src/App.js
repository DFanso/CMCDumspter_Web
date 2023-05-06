import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Report from './pages/Report';
import Map from './pages/Map';
import Article from './pages/Article';
import UserProfile from './pages/UserProfile';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import CreateUser from './pages/CreateUser';
import AddArticle from './pages/AddArticle';
import AddGarbageSpot from './pages/AddGarbageSpot';
import CaptainDashboard from './pages/CaptainDashboard';
import ViewIncidents from './pages/ViewIncidents';
import IncidentDetail from './pages/IncidentDetail';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/report" element={<Report/>} />
        <Route path="/map" element={<Map/>} />
        <Route path="/article" element={<Article/>} />
        <Route path="/user-profile" element={<UserProfile/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/admin-dashboard" element={<AdminDashboard/>} />
        <Route path="/create-user" element={<CreateUser/>} />
        <Route path="/add-article" element={<AddArticle/>} />
        <Route path="/add-garbage-spot" element={<AddGarbageSpot/>} />
        <Route path="/captain-dashboard" element={<CaptainDashboard/>} />
        <Route path="/view-incidents" element={<ViewIncidents/>} />
        <Route path="/incident-details" element={<IncidentDetail/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
