import AuthPage from 'pages/Auth/AuthPage';
import { ErrorPage } from 'pages/ErrorPage/ErrorPage';
import { Layout } from 'pages/Layout/Layout';
import MainPage from 'pages/MainPage/MainPage';
import { PersonalPage } from 'pages/PersonalPage/PersonalPage';
import { PlugPage } from 'pages/PlugPage/PlugPage';
import { Route, Routes } from 'react-router';
import { PatientsListItemPage } from './PatientsListItemPage/PatientsListItemPage';
import { DoctorVisits } from './DoctorVisits/DoctorVisits';
import { VisitHistory } from './VisitHistory/VisitHistory';
export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="patient" element={<PlugPage />}>
                        <Route path="history" element={<PlugPage />} />
                        <Route path="doctors" element={<PlugPage />} />
                        <Route path="visits-history" element={<DoctorVisits />} />
                    </Route>
                    <Route path="doctor" element={<PlugPage />}>
                        <Route path="personal/:id" element={<PersonalPage />} />
                        <Route path="visits-history" element={<VisitHistory />} />
                        <Route path="patients-list" element={<PlugPage />} />
                        <Route path="patients-list/:id" element={<PatientsListItemPage />} />
                        <Route path="colleuges" element={<PlugPage />} />
                    </Route>
                </Route>
                <Route path="auth/:typeAuth" element={<AuthPage />} />
                <Route path="*" element={<ErrorPage />}></Route>
            </Routes>
        </>
    );
};
