import { Routes, Route } from 'react-router-dom';

import Header from './sections/header/header.section';
import HomePage from './pages/home/home.page';
import ProfilePage from './pages/profile/profile.page';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
