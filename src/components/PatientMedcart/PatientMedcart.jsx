import { Button, Typography } from '@mui/material';
import { RxPencil1 } from 'react-icons/rx';
import style from './PatientMedcart.module.css';

export const PatientMedcart = ({ setEditMedcart }) => {
    const medcart = [
        {
            title: 'Complaints at the time of inspection:',
            textList: ['On a tickling in the throat, an increase in body temperature up to 37.2 degrees.'],
        },
        {
            title: 'Medical history:',
            textList: [
                'She fell ill 2 days ago, when a sore throat appeared, and the temperature rose to 37.0 degrees. He attributes his condition to hypothermia. She was treated independently: "Dekvadol", heavy drinking.',
            ],
        },
        {
            title: 'Objective condition at the time of inspection:',
            textList: [
                'Skin covers are normal. The mucous membrane of the oropharynx is hyperemic, the back wall is granular. Cor-activity is rhythmic, the tones are sonorous. Pulmo - breathing is vesicular, there are no wheezes. Stomach - b/o. Stool, diuresis - normal.',
            ],
        },
        {
            title: 'Associated diseases:',
            textList: ['Acute allergic urticaria, vitamin D deficiency.'],
        },
        {
            title: 'Assessment of body condition:',
            textList: [
                'An acute disease with systemic, local and minimal laboratory signs of the inflammatory process.',
            ],
        },
        {
            title: 'Clinical diagnosis:',
            textList: ['Acute pharyngitis of unspecified origin.'],
        },
        {
            title: 'Treatment recommendations:',
            textList: [
                'JSC, SKB in dynamics',
                'Diet enriched with vitamins (vegetables, fruits)',
                'Drink a lot of warm liquid',
                'Avoid large crowds',
                'Frequent hand washing with soap and/or hand treatment with alcohol-containing (antiseptic) agents',
                'Maintaining a microclimate in the room (air temperature during the day up to 21 degrees, at night 18 degrees, humidity at least 60%, frequent ventilation)',
                'Body temperature control, when it rises above 38.0 degrees - paracetamol ("Panadol") 500 mg or ibuprofen 400 mg ("Nurofen", "Ibuprom", "Imet")',
            ],
        },
    ];
    return (
        <div className={style.PatientMedcart}>
            <Button
                color="primary"
                sx={{ position: 'absolute', top: '16px', right: '16px', zIndex: 1 }}
                onClick={() => setEditMedcart(false)}
            >
                <RxPencil1 style={{ width: '20px', height: '20px' }} />
                <Typography color="text.primary" sx={{ lineHeight: 1.285, textTransform: 'none' }}>
                    Edit data
                </Typography>
            </Button>

            <ul>
                {medcart.map(({ title, textList }) => {
                    return (
                        <li className={style.PatientMedcart_Item}>
                            <Typography
                                component="p"
                                variant="subtitle"
                                color="text.black"
                                sx={{ fontSize: { md: '20px' }, lineHeight: { md: 1.5 }, marginBottom: '16px' }}
                            >
                                {title}
                            </Typography>
                            <ul className={style.PatientMedcart_ItemConclusion}>
                                {textList.map(text => {
                                    return (
                                        <li>
                                            <Typography
                                                component="p"
                                                variant="text"
                                                color="text.gray"
                                                sx={{ fontSize: { md: '16px' }, lineHeight: { md: 1.5 } }}
                                            >
                                                {text}
                                            </Typography>
                                        </li>
                                    );
                                })}
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
