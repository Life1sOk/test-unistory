import { lazy } from 'react';

import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../utils/protectedRoute';

import Header from '../sections/header/header.section';
const HomePage = lazy(() => import('./home/home.page'));
const ProfilePage = lazy(() => import('./profile/profile.page'));

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