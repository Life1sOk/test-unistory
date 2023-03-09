import { lazy, Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../utils/protectedRoute';

import Header from '../sections/header/header.section';
import LoadingSpinner from '../components/loading-spinner/loading-spinner.component';

import { SpinnerWrapper } from './index.style';

const HomePage = lazy(() => import('./home/home.page'));
const ProfilePage = lazy(() => import('./profile/profile.page'));


const Routing = () => {
    return (
        <Suspense
            fallback={<SpinnerWrapper>
                <LoadingSpinner />
            </SpinnerWrapper>
            }>
            <Routes>
                <Route path='/' element={<Header />}>
                    <Route index element={<HomePage />} />
                    <Route path='/profile'
                        element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
                </Route>
            </Routes>
        </Suspense>
    );
}

export default Routing;