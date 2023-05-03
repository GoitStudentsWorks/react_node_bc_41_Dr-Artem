import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import { getUserInfoById } from 'redux/info/operation';
import { selectUserInfoById } from 'redux/info/selectors';

import { AuthPage, ErrorPage, GridLayout, Layout, MainPage } from 'pages';
import {
    Colleagues,
    DoctorMain,
    ListOfPatients,
    ListOfPatientsProfile,
    Personal,
    VisitHistory,
} from 'pages/DoctorMain';
import { PatientDoctors, PatientMain, PatientMedicalHistory, PatientVisitsToDoctor } from 'pages/PatientMain';

export const App = () => {
    const dispatch = useDispatch();
    const data = useSelector(selectUserInfoById);

    const onClick = () => {
        dispatch(getUserInfoById('64417972d4e00b5a6bb8389a'));
        console.log(data);
    };

    return (
        <>
            {/* <button onClick={onClick}>GO</button> */}
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="patient" element={<PatientMain />}>
                        <Route
                            path="history"
                            element={
                                <GridLayout>
                                    <PatientMedicalHistory />
                                </GridLayout>
                            }
                        />
                        <Route path="doctors" element={<PatientDoctors />} />
                        <Route path="visits-history" element={<PatientVisitsToDoctor />} />
                    </Route>
                    <Route path="doctor" element={<DoctorMain />}>
                        <Route
                            path="personal/:id"
                            element={
                                <GridLayout>
                                    <Personal />
                                </GridLayout>
                            }
                        />
                        <Route path="visits-history" element={<VisitHistory />} />
                        <Route path="patients-list" element={<ListOfPatients />} />
                        <Route
                            path="patients-list/:id"
                            element={
                                <GridLayout>
                                    <ListOfPatientsProfile />
                                </GridLayout>
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
