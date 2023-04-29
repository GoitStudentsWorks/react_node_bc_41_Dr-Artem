import css from './VisitHistory.module.css';
import { PagePagination } from '../PagePagination/PagePagination';
import { Button, Divider, List, ListItem, Box, Grid } from '@mui/material';
import plug from '../../images/ProfileBlock/plug.png';

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
    alignItems: { md: 'center' },
    '& .MuiGrid-item': {
        paddingLeft: '0',
        paddingTop: '0',
        marginLeft: '0',
        marginTop: '0',
    },
    '& > .MuiGrid-item': {
        paddingLeft: '0',
        paddingTop: '0',
        marginLeft: '0',
        marginTop: '0',
    },
    '& .visitInfo': {
        flex: '1',
    },
    '& .btnWrapp': {
        textAlign: { md: 'right' },
        marginRight: { md: '16px', lg: '8px' },
    },
};

const buttonStyle = {
    padding: { xs: '14px 28px', md: '16px 40px' },
    fontSize: { md: '14px' },
    lineHeight: { xs: '1.17', md: '1.4' },
};

export const VisitHistory = () => {
    return (
        <section className={css.section}>
            <List
                sx={{
                    width: '100%',
                    bgcolor: '#FAFAFA',
                    padding: { xs: '32px 16px', lg: '32px' },
                    marginBottom: { xs: '20px', md: '32px' },
                }}
            >
                {patients.map(({ name, date, id }, index) => {
                    return (
                        <div key={id}>
                            <ListItem sx={{ marginBottom: { xs: '20px', md: '16px' }, padding: '0px' }}>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid
                                        container
                                        spacing={2}
                                        sx={{ ...gridStyles, flexWrap: { xs: 'nowrap' }, alignItems: { md: 'center' } }}
                                    >
                                        <Grid item sx={{ ...gridStyles }}>
                                            <div className={css.imgWrapper}>
                                                <img src={plug} alt="plug" className={css.photo} />
                                            </div>
                                        </Grid>
                                        <Grid item xs={11} sx={gridStyles}>
                                            <Grid container spacing={3} sx={{ ...gridStyles, width: { md: '100%' } }}>
                                                <Grid item xs={12} md={3} lg={6} sx={gridStyles}>
                                                    <div>
                                                        <span className={css.lable}>Name</span>
                                                        <p className={css.patientName}>{name}</p>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12} md={5} lg={3} sx={{ ...gridStyles }}>
                                                    <div className={`${css.visitInfo} visitInfo`}>
                                                        <div className={css.infoWrapp}>
                                                            <span className={css.lable}>Last visit</span>
                                                            <p className={css.visitDate}>{date}</p>
                                                        </div>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12} md={4} lg={3} sx={gridStyles}>
                                                    <div className={`${css.btnWrapp} btnWrapp`}>
                                                        <Button variant="outlined" sx={buttonStyle}>
                                                            view profile
                                                        </Button>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </ListItem>
                            <Divider
                                sx={{
                                    width: '100%',
                                    marginBottom: index !== patients.length - 1 ? '32px' : '0px',
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
