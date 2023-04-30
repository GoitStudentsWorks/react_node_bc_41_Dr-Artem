import { UilPlus, UilTrashAlt } from '@iconscout/react-unicons';
import { Button, IconButton, Input, Typography } from '@mui/material';
import style from './PatientMedcartEdit.module.css';

export const PatientMedcartEdit = ({ setEditMedcart }) => {
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

    const handleSubmit = event => {
        event.preventDefault();
        setEditMedcart(true);
    };
    return (
        <div className={style.PatientMedcart_Edit}>
            <form onSubmit={handleSubmit}>
                <ul className={style.PatientMedcart_EditList}>
                    {medcart.map(({ title }) => {
                        return (
                            <li className={style.PatientMedcart_EditItem}>
                                <div className={style.PatientMedcart_EditHeaderWrapper}>
                                    <Typography
                                        variant="subtitle"
                                        color="text.black"
                                        className={style.PatientMedcart_EditHeader}
                                    >
                                        {title}
                                    </Typography>
                                    <IconButton color="primary" type="button">
                                        <UilPlus style={{ width: '24px', height: '24px' }} />
                                    </IconButton>
                                </div>
                                <ul className={style.PatientMedcart_EditInputList}>
                                    <li className={style.PatientMedcart_EditInputItem}>
                                        <Input
                                            variant="primary"
                                            multiline
                                            placeholder="Enter text"
                                            type="text"
                                            disableUnderline
                                        />
                                        <IconButton color="primary" type="button">
                                            <UilTrashAlt style={{ width: '24px', height: '24px' }} />
                                        </IconButton>
                                    </li>
                                </ul>
                            </li>
                        );
                    })}
                </ul>
                <Button
                    disableElevation
                    variant="contained"
                    color="secondary"
                    type="submit"
                    // className={style.PatientMedcart_EditFormBtn}
                >
                    Save
                </Button>
            </form>
        </div>
    );
};
