import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tabs, Tab, Box } from '@mui/material';

const patientRoutes = [
    { path: '/patient/history', label: 'Medical history' },
    { path: '/patient/doctors', label: 'Doctors' },
    { path: '/patient/visits-history', label: 'Visits to the doctor' },
];

const doctorRoutes = [
    { path: '/doctor/personal', label: 'Personal page' },
    { path: '/doctor/visits-history', label: 'Visit history' },
    { path: '/doctor/patients-list', label: 'List of patients' },
    { path: '/doctor/colleuges', label: 'Сolleagues' },
];

export const Navigation = () => {
    const { pathname } = useLocation();

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ fwidth: '100%' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="nav tabs"
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{ borderBottom: '1.5px solid rgba(209, 213, 219, 0.5)' }}
                    TabIndicatorProps={{
                        style: {
                            background:
                                'linear-gradient(237.38deg, #6ED599 -5.69%, rgba(63, 76, 153, 0) 121.24%), linear-gradient(161.43deg, rgba(35, 35, 35, 0.8) 12.58%, rgba(35, 35, 35, 0) 110.88%), linear-gradient(0deg, rgba(31, 42, 106, 0.2), rgba(31, 42, 106, 0.2)), linear-gradient(208.79deg, #6ED599 3.46%, #1F2A6A 51.48%), #D9D9D9',
                            backgroundBlendMode: 'normal, normal, multiply, normal, normal',
                            borderRadius: '7px',
                            height: '4px',
                        },
                    }}
                >
                    {pathname === '/patient' &&
                        patientRoutes.map((route, index) => (
                            <Tab
                                key={index}
                                component={Link}
                                to={route.path}
                                label={route.label}
                                sx={{
                                    fontWeight: '700',
                                    fontSize: { xs: '16', md: '18' },
                                    lineHeight: { xs: '1.24', md: '1.22' },
                                    color: ' #111111',
                                    textTransform: 'capitalize',
                                    borderRadius: '32px',
                                    padding: '8px 16px',
                                    marginBottom: { xs: '20px', md: '24px', lg: '32px' },
                                    marginRight: { xs: '20px', md: '40px' },

                                    '&.Mui-selected': {
                                        backgroundColor: '#477577',
                                        color: '#FFFFFF',
                                    },
                                }}
                            />
                        ))}
                    {pathname === '/doctor' &&
                        doctorRoutes.map((route, index) => (
                            <Tab
                                key={index}
                                component={Link}
                                to={route.path}
                                label={route.label}
                                sx={{
                                    fontWeight: '700',
                                    fontSize: { xs: '16', md: '18' },
                                    lineHeight: { xs: '1.24', md: '1.22' },
                                    color: ' #111111',
                                    textTransform: 'capitalize',
                                    borderRadius: '32px',
                                    padding: '8px 16px',
                                    marginBottom: { xs: '20px', md: '24px', lg: '32px' },
                                    marginRight: { xs: '20px', md: '40px' },

                                    '&.Mui-selected': {
                                        backgroundColor: '#477577',
                                        color: '#FFFFFF',
                                    },
                                }}
                            />
                        ))}
                </Tabs>
            </Box>
        </>
    );
};

// Головний роут /patient

//   - /history  - приватний роут. Переадресовує на сторінку MedicalHistoryPage.
//   - /doctors - приватний роут. Переадресовує на сторінку DoctorsPage.
//   - /visits-history - приватний роут. Переадресовує на сторінку VisitsHistoryPage.

// Головний роут /doctor

//   - /personal  - приватний роут. Переадресовує на сторінку PersonalPage.
//   - /visits-history - приватний роут. Переадресовує на сторінку VisitsHistoryDoctorPage.
//   - /patients-list - приватний роут. Переадресовує на сторінку PatientsListPage.
//   - /colleuges - приватний роут. Переадресовує на сторінку ColleugesPage.

// *На планшетній і мобільній версіях компонент повинен бути scrollable."
