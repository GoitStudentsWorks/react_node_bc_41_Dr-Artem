import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tabs, Tab, Box } from '@mui/material';

const patientRoutes = [
    { path: '/history', label: 'Medical history' },
    { path: '/doctors', label: 'Doctors' },
    { path: '/visits-history', label: 'Visits to the doctor' },
];

const doctorRoutes = [
    { path: '/personal', label: 'Personal page' },
    { path: '/visits-history', label: 'Visit history' },
    { path: '/patients-list', label: 'List of patients' },
    { path: '/colleuges', label: 'Сolleagues' },
];

export const Navigation = () => {
    // const { pathname } = useLocation;

    const [value, setValue] = useState('Medical history');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            {/* <Box sx={{ flexGrow: 1 }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="navigation tabs"
                    variant="scrollable"
                    scrollButtons="auto"
                >
                    {pathname === '/patient'
                        ? patientRoutes.map((route, index) => (
                              <Tab key={index} component={Link} to={route.path} label={route.label} />
                          ))
                        : doctorRoutes.map((route, index) => (
                              <Tab key={index} component={Link} to={route.path} label={route.label} />
                          ))}
                </Tabs>
            </Box> */}

            <Box sx={{ width: '100%' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="nav tabs"
                    variant="scrollable"
                    scrollButtons="auto"
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
                    <Tab
                        value="Medical history"
                        label="Medical history"
                        sx={{
                            fontWeight: '700',
                            fontSize: {xs:'16', md: '18'},
                            lineHeight: {xs:'1.24', md: '1.22'},
                            color: ' #111111',
                            textTransform: 'capitalize',
                            borderRadius: '32px',
                            padding: '8px 16px',
                            marginBottom: {xs:'20px', md: '24px', lg: '32px'},
                            marginRight: {xs:'20px', md: '40px'},

                            '&.Mui-selected': {
                                backgroundColor: '#477577',
                                color: '#FFFFFF',
                            },
                        }}
                    />
                    <Tab value="Doctors" label="Doctors" />
                    <Tab value="Visits to the doctor" label="Visits to the doctor" />
                </Tabs>
            </Box>
            {/* <Box sx={{ width: '100%' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab value="Personal page" label="Personal page" />
                    <Tab value="Visit history" label="Visit history" />
                    <Tab value="List of patients" label="List of patients" />
                    <Tab value="Сolleagues" label="Сolleagues" />
                </Tabs>
            </Box> */}
        </>
    );
};

//   "Потрібно реалізувати компонент навігації з наступними маршрутами:
// Це повинні бути таби, тому рекомендую використати MaterialUI:
// https://mui.com/material-ui/react-tabs/

// Головний роут /patient

//   - /history  - приватний роут. Переадресовує на сторінку MedicalHistoryPage.
//   - /doctors - приватний роут. Переадресовує на сторінку DoctorsPage.
//   - /visits-history - приватний роут. Переадресовує на сторінку VisitsHistoryPage.

// *На планшетній і мобільній версіях компонент повинен бути scrollable."

// "Потрібно реалізувати компонент навігації з наступними маршрутами:
// Це повинні бути таби, тому рекомендую використати MaterialUI:

// https://mui.com/material-ui/react-tabs/

// Головний роут /doctor

//   - /personal  - приватний роут. Переадресовує на сторінку PersonalPage.
//   - /visits-history - приватний роут. Переадресовує на сторінку VisitsHistoryDoctorPage.
//   - /patients-list - приватний роут. Переадресовує на сторінку PatientsListPage.
//   - /colleuges - приватний роут. Переадресовує на сторінку ColleugesPage.

// *На планшетній і мобільній версіях компонент повинен бути scrollable."



// import { Navigation } from '../components/Navigation/Navigation';
// export const App = () => {
//     return (
//         <>          
//             <Navigation />
//         </>
//     );
// };