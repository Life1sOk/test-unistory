import { lazy, Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';

import Header from '../sections/header/header.section';
import LoadingSpinner from '../components/loading-spinner/loading-spinner.component';

import { AppWrapper, SpinnerWrapper } from './index.style';

const HomePage = lazy(() => import('./home/home.page'));
const ProfilePage = lazy(() => import('./profile/profile.page'));


const Routing = () => {
    return (
        <AppWrapper>
            <Suspense
                fallback={<SpinnerWrapper>
                    <LoadingSpinner />
                </SpinnerWrapper>
                }>
                <Routes>
                    <Route path='/' element={<Header />}>
                        <Route index element={<HomePage />} />
                        <Route path=':id' element={<ProfilePage />} />
                    </Route>
                </Routes>
            </Suspense>
        </AppWrapper>
    );
}

export default Routing;