import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../utils/protectedRoute';

import Header from '../sections/header/header.section';
import HomePage from '../pages/home/home.page';
import ProfilePage from '../pages/profile/profile.page';

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Header />}>
                <Route index element={<HomePage />} />
                <Route path='/profile'
                    element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
            </Route>
        </Routes>
    );
}

export default Routing;