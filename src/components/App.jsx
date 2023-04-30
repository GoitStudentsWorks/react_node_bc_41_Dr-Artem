import AuthPage from 'pages/Auth/AuthPage';
import { ErrorPage } from 'pages/ErrorPage/ErrorPage';
import { Layout } from 'pages/Layout/Layout';
import MainPage from 'pages/MainPage/MainPage';
import { Route, Routes } from 'react-router';
import { PlugPage } from 'pages/PlugPage/PlugPage';
import { PersonalPage } from 'pages/PersonalPage/PersonalPage';

export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="patient" element={<PlugPage />}>
                        <Route path="history" element={<PlugPage />} />
                        <Route path="doctors" element={<PlugPage />} />
                        <Route path="visits-history" element={<PlugPage />} />
                    </Route>
                    <Route path="doctor" element={<PlugPage />}>
                        <Route path="personal/:id" element={<PersonalPage />} />
                        <Route path="visits-history" element={<PlugPage />} />
                        <Route path="patients-list" element={<PlugPage />} />
                        <Route path="colleuges" element={<PlugPage />} />
                    </Route>
                </Route>
                <Route path="auth/:typeAuth" element={<AuthPage />} />
                <Route path="*" element={<ErrorPage />}></Route>
            </Routes>
        </>
    );
};
