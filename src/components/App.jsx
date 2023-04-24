import AuthPage from 'pages/Auth/AuthPage';
import { Error } from 'pages/Error/Error';
import { Layout } from 'pages/Layout/Layout';
import MainPage from 'pages/MainPage/MainPage';
// eslint-disable-next-line
import { testPage } from 'pages/testPage/testPage';
import { Route, Routes } from 'react-router';

export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="patient" element={<testPage />}>
                        <Route path="history" element={<testPage />} />
                        <Route path="doctors" element={<testPage />} />
                        <Route path="visits-history" element={<testPage />} />
                    </Route>
                    <Route path="doctor" element={<testPage />}>
                        <Route path="pesronal/:id" element={<testPage />} />
                        <Route path="visits-history" element={<testPage />} />
                        <Route path="patients-list" element={<testPage />} />
                        <Route path="colleuges" element={<testPage />} />
                    </Route>
                </Route>
                <Route path="auth/:typeAuth" element={<AuthPage />} />
                <Route path="*" element={<Error />}></Route>
            </Routes>
        </>
    );
};
