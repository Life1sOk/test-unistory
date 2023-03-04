import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/home/home.page';
import ProfilePage from './pages/profile/profile.page';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
