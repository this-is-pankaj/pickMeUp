import './App.css';
import Layout from './components/Layout/Layout';
import Login from './pages/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import Dashboard from './pages/Dashboard/Dashboard';
import Schedule from './pages/Schedule/Schedule';
import Pickups from './pages/Pickups/Pickups';
import RequireAuth from './components/shared/RequireAuth';
import { ProvideAuth } from './contexts/use-auth';

function App() {
  return (
    <ProvideAuth>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Login/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="dashboard" element={<RequireAuth><Dashboard/></RequireAuth>}/>
            <Route path="schedule" element={<RequireAuth><Schedule/></RequireAuth>}/>
            <Route path="pickups" element={<RequireAuth><Pickups/></RequireAuth>}/>
            <Route path="*" element={<NotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ProvideAuth>
  );
}

export default App;
