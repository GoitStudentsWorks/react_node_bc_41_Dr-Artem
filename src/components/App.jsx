import AuthPage from 'pages/Auth/AuthPage';
import { ErrorPage } from 'pages/ErrorPage/ErrorPage';
import { Layout } from 'pages/Layout/Layout';
import MainPage from 'pages/MainPage/MainPage';
import { TestPage } from 'pages/TestPage/TestPage';
import { Route, Routes } from 'react-router';

export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="patient" element={<TestPage />}>
                        <Route path="history" element={<TestPage />} />
                        <Route path="doctors" element={<TestPage />} />
                        <Route path="visits-history" element={<TestPage />} />
                    </Route>
                    <Route path="doctor" element={<TestPage />}>
                        <Route path="pesronal/:id" element={<TestPage />} />
                        <Route path="visits-history" element={<TestPage />} />
                        <Route path="patients-list" element={<TestPage />} />
                        <Route path="colleuges" element={<TestPage />} />
                    </Route>
                </Route>
                <Route path="auth/:typeAuth" element={<AuthPage />} />
                <Route path="*" element={<ErrorPage />}></Route>
            </Routes>
        </>
    );
};
