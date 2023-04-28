import AuthPage from 'pages/Auth/AuthPage';
import { ErrorPage } from 'pages/ErrorPage/ErrorPage';
import { Layout } from 'pages/Layout/Layout';
import MainPage from 'pages/MainPage/MainPage';
import { PlugPage } from 'pages/PlugPage/PlugPage';
import { Route, Routes } from 'react-router';

import PatientMain from 'pages/PatientMain/PatientMain';
import PatientMedicalHistory from 'pages/PatientMain/PatientMedicalHistory/PatientMedicalHistory';
import PatientVisitsToDoctor from 'pages/PatientMain/PatientVisitsToDoctor/PatientVisitsToDoctor';

import Colleagues from 'pages/DoctorMain/Colleagues/Colleagues';
import DoctorMain from 'pages/DoctorMain/DoctorMain';
import ListOfPatients from 'pages/DoctorMain/ListOfPatients/ListOfPatients';
import ListOfPatientsProfile from 'pages/DoctorMain/ListOfPatientsProfile/ListOfPatientsProfile';
import Personal from 'pages/DoctorMain/Personal/Personal';

export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="patient" element={<PatientMain />}>
                        <Route path="history" element={<PatientMedicalHistory />} />
                        <Route path="doctors" element={<PlugPage />} />
                        <Route path="visits-history" element={<PatientVisitsToDoctor />} />
                    </Route>
                    <Route path="doctor" element={<DoctorMain />}>
                        <Route
                            path="personal/:id"
                            element={
                                <PlugPage>
                                    <Personal />
                                </PlugPage>
                            }
                        />
                        <Route path="visits-history" element={<PlugPage />} />
                        <Route path="patients-list" element={<ListOfPatients />} />
                        <Route
                            path="patients-list/:id"
                            element={
                                <PlugPage>
                                    <ListOfPatientsProfile />
                                </PlugPage>
                            }
                        />
                        <Route path="colleuges" element={<Colleagues />} />
                    </Route>
                </Route>
                <Route path="auth/:typeAuth" element={<AuthPage />} />
                <Route path="*" element={<ErrorPage />}></Route>
            </Routes>
        </>
    );
};
