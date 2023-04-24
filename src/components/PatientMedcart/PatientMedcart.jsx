import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Button, IconButton, List, ListItem, Typography } from '@mui/material';
import style from './PatientMedcart.module.css';

export const PatientMedcart = ({ setEditMedcart }) => {
    return (
        <div className={style.PatientMedcart}>
            <Button
                sx={{ position: 'absolute', top: '16px', right: '16px', zIndex: 1 }}
                onClick={() => setEditMedcart(false)}
            >
                <EditOutlinedIcon color="primary" />
                <Typography color="text.primary" sx={{ lineHeight: 1.285, textTransform: 'none' }}>
                    Edit data
                </Typography>
            </Button>
            {/* <div className={style.PatientMedcart_EditButton} onClick={() => setEditMedcart(false)}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_219_8442)">
                        <path
                            d="M11.332 1.99955C11.5071 1.82445 11.715 1.68556 11.9438 1.5908C12.1725 1.49604 12.4177 1.44727 12.6654 1.44727C12.913 1.44727 13.1582 1.49604 13.387 1.5908C13.6157 1.68556 13.8236 1.82445 13.9987 1.99955C14.1738 2.17465 14.3127 2.38252 14.4074 2.61129C14.5022 2.84006 14.551 3.08526 14.551 3.33288C14.551 3.58051 14.5022 3.8257 14.4074 4.05448C14.3127 4.28325 14.1738 4.49112 13.9987 4.66622L4.9987 13.6662L1.33203 14.6662L2.33203 10.9995L11.332 1.99955Z"
                            stroke="#477577"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_219_8442">
                            <rect width="16" height="16" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <span>Edit data</span>
            </div> */}
            <List>
                <li className={style.PatientMedcart_Item}>
                    <Typography
                        variant="subtitle1"
                        color="text.black"
                        sx={{ fontSize: { md: '20px' }, lineHeight: { md: 1.5 } }}
                    >
                        Complaints at the time of inspection:
                    </Typography>
                    <ul className={style.PatientMedcart_ItemConclusion}>
                        <li>
                            <Typography
                                variant="body1"
                                color="text.gray"
                                sx={{ fontSize: { md: '16px' }, lineHeight: { md: 1.5 } }}
                            >
                                On a tickling in the throat, an increase in body temperature up to 37.2 degrees.
                            </Typography>
                        </li>
                    </ul>
                </li>
                <li className={style.PatientMedcart_Item}>
                    <Typography
                        variant="subtitle1"
                        color="text.black"
                        sx={{ fontSize: { md: '20px' }, lineHeight: { md: 1.5 } }}
                    >
                        Medical history:
                    </Typography>
                    <ul className={style.PatientMedcart_ItemConclusion}>
                        <li>
                            <Typography
                                variant="body1"
                                color="text.gray"
                                sx={{ fontSize: { md: '16px' }, lineHeight: { md: 1.5 } }}
                            >
                                She fell ill 2 days ago, when a sore throat appeared, and the temperature rose to 37.0
                                degrees. He attributes his condition to hypothermia. She was treated independently:
                                "Dekvadol", heavy drinking.
                            </Typography>
                        </li>
                    </ul>
                </li>
                <li className={style.PatientMedcart_Item}>
                    <Typography
                        variant="subtitle1"
                        color="text.black"
                        sx={{ fontSize: { md: '20px' }, lineHeight: { md: 1.5 } }}
                    >
                        <span>Objective condition at the time of inspection:</span>
                    </Typography>
                    <ul className={style.PatientMedcart_ItemConclusion}>
                        <li>
                            <Typography
                                variant="body1"
                                color="text.gray"
                                sx={{ fontSize: { md: '16px' }, lineHeight: { md: 1.5 } }}
                            >
                                Skin covers are normal. The mucous membrane of the oropharynx is hyperemic, the back
                                wall is granular. Cor-activity is rhythmic, the tones are sonorous. Pulmo - breathing is
                                vesicular, there are no wheezes. Stomach - b/o. Stool, diuresis - normal.
                            </Typography>
                        </li>
                    </ul>
                </li>
                <li className={style.PatientMedcart_Item}>
                    <Typography
                        variant="subtitle1"
                        color="text.black"
                        sx={{ fontSize: { md: '20px' }, lineHeight: { md: 1.5 } }}
                    >
                        Associated diseases:
                    </Typography>
                    <ul className={style.PatientMedcart_ItemConclusion}>
                        <li>
                            <Typography
                                variant="body1"
                                color="text.gray"
                                sx={{ fontSize: { md: '16px' }, lineHeight: { md: 1.5 } }}
                            >
                                Acute allergic urticaria, vitamin D deficiency.
                            </Typography>
                        </li>
                    </ul>
                </li>
                <li className={style.PatientMedcart_Item}>
                    <Typography
                        variant="subtitle1"
                        color="text.black"
                        sx={{ fontSize: { md: '20px' }, lineHeight: { md: 1.5 } }}
                    >
                        Assessment of body condition:
                    </Typography>
                    <ul className={style.PatientMedcart_ItemConclusion}>
                        <li>
                            <Typography
                                variant="body1"
                                color="text.gray"
                                sx={{ fontSize: { md: '16px' }, lineHeight: { md: 1.5 } }}
                            >
                                An acute disease with systemic, local and minimal laboratory signs of the inflammatory
                                process.
                            </Typography>
                        </li>
                    </ul>
                </li>
                <li className={style.PatientMedcart_Item}>
                    <Typography
                        variant="subtitle1"
                        color="text.black"
                        sx={{ fontSize: { md: '20px' }, lineHeight: { md: 1.5 } }}
                    >
                        Clinical diagnosis:
                    </Typography>
                    <ul className={style.PatientMedcart_ItemConclusion}>
                        <li>
                            <Typography
                                variant="body1"
                                color="text.gray"
                                sx={{ fontSize: { md: '16px' }, lineHeight: { md: 1.5 } }}
                            >
                                Acute pharyngitis of unspecified origin.
                            </Typography>
                        </li>
                    </ul>
                </li>
                <li className={style.PatientMedcart_Item}>
                    <Typography
                        variant="subtitle1"
                        color="text.black"
                        sx={{ fontSize: { md: '20px' }, lineHeight: { md: 1.5 } }}
                    >
                        Treatment recommendations:
                    </Typography>
                    <ul className={style.PatientMedcart_ItemConclusion}>
                        <li>
                            <Typography
                                variant="body1"
                                color="text.gray"
                                sx={{ fontSize: { md: '16px' }, lineHeight: { md: 1.5 } }}
                            >
                                JSC, SKB in dynamics
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                variant="body1"
                                color="text.gray"
                                sx={{ fontSize: { md: '16px' }, lineHeight: { md: 1.5 } }}
                            >
                                Diet enriched with vitamins (vegetables, fruits)
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                variant="body1"
                                color="text.gray"
                                sx={{ fontSize: { md: '16px' }, lineHeight: { md: 1.5 } }}
                            >
                                Drink a lot of warm liquid
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                variant="body1"
                                color="text.gray"
                                sx={{ fontSize: { md: '16px' }, lineHeight: { md: 1.5 } }}
                            >
                                Avoid large crowds
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                variant="body1"
                                color="text.gray"
                                sx={{ fontSize: { md: '16px' }, lineHeight: { md: 1.5 } }}
                            >
                                Frequent hand washing with soap and/or hand treatment with alcohol-containing
                                (antiseptic) agents
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                variant="body1"
                                color="text.gray"
                                sx={{ fontSize: { md: '16px' }, lineHeight: { md: 1.5 } }}
                            >
                                Maintaining a microclimate in the room (air temperature during the day up to 21 degrees,
                                at night 18 degrees, humidity at least 60%, frequent ventilation)
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                variant="body1"
                                color="text.gray"
                                sx={{ fontSize: { md: '16px' }, lineHeight: { md: 1.5 } }}
                            >
                                Body temperature control, when it rises above 38.0 degrees - paracetamol ("Panadol") 500
                                mg or ibuprofen 400 mg ("Nurofen", "Ibuprom", "Imet")
                            </Typography>
                        </li>
                    </ul>
                </li>
            </List>
        </div>
    );
};
