import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import css from './VisitHistory.module.css';
import plug from '../../images/ProfileBlock/plug.png';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { PagePagination } from '../PagePagination/PagePagination';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';

const patients = [
    { id: 1, name: 'Melnyk Victoria Petrivna', date: 'November 23/11/2023' },
    { id: 2, name: 'Kichaty Serhiy Viktorovych', date: 'November 23/11/2023' },
    { id: 3, name: 'Obozna Yuliya Anatolyivna', date: 'November 23/11/2023' },
    { id: 4, name: 'Solomchuk Viktor Ivanovych', date: 'November 23/11/2023' },
    { id: 5, name: 'Storozhuk Viktor Serhiyovych', date: 'November 23/11/2023' },
    { id: 6, name: 'Kuznets Dmytro Vasyliovych', date: 'November 23/11/2023' },
    { id: 7, name: 'Radko Vitaly Yuriyovych', date: 'November 23/11/2023' },
];

const gridStyles = {
    marginLeft: '0',
    marginTop: '0',
    ' &.MuiGrid-item': {
        paddingLeft: '0',
        paddingTop: '0',
        marginLeft: '0',
        marginTop: '0',
    },
    '&>.MuiGrid-item': {
        paddingLeft: '0',
        paddingTop: '0',
        marginLeft: '0',
        marginTop: '0',
    },
};

export const VisitHistory = () => {
    // const theme = useTheme();
    // const tablet = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <section className={css.section}>
            <List sx={{ width: '100%', bgcolor: '#FAFAFA', padding: '32px 16px', marginBottom: '32px' }}>
                {patients.map(({ name, date, id }) => {
                    return (
                        <div key={id}>
                            <ListItem alignItems="flex-start" sx={{ marginBottom: '20px', padding: '0px' }}>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid
                                        xs
                                        zeroMinWidth
                                        container
                                        spacing={2}
                                        sx={{ ...gridStyles, flexWrap: { xs: 'nowrap'} }}
                                    >
                                        <Grid item sx={{...gridStyles}}>
                                            <div className={css.imgWrapper}>
                                                <img src={plug} alt="plug" className={css.photo} />
                                            </div>
                                        </Grid>
                                        <Grid item xs={11} sx={gridStyles}>
                                            <Grid
                                                md
                                                container
                                                spacing={3}
                                                sx={{
                                                    ...gridStyles,
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    marginLeft: '0',
                                                }}
                                            >
                                                <Grid item xs={12} md={4} sx={gridStyles}>
                                                    <div>
                                                        <span className={css.lable}>Name</span>
                                                        <p className={css.patientName}>{name}</p>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12} md={4} sx={gridStyles}>
                                                    <div>
                                                        <span className={css.lable}>Last visit</span>
                                                        <p className={css.visitDate}>{date}</p>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12} md={4} sx={gridStyles}>
                                                    <Button variant="outlined">view profile</Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </ListItem>
                            <Divider
                                sx={{
                                    width: '100%',
                                    marginBottom: '20px',
                                    borderBottom: '1px solid rgba(17, 17, 17, 0.1)',
                                }}
                            />
                        </div>
                    );
                })}
            </List>
            <PagePagination />
        </section>
    );
};
