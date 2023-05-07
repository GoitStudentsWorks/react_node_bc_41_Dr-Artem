import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion } from '@mui/material';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import s from '../AnalysisBlock/AnalysisBlock.module.css';
import { selectAllVisits } from '../../redux/visits/selectors';
import { useSelector } from 'react-redux';

import Card from 'components/Card/Card';
import { useState } from 'react';

const AnalysisBlock = () => {
    const [expanded, setExpanded] = useState(false);

    const visits = useSelector(selectAllVisits);
    const allVisits = [...visits].reverse();
    console.log(allVisits);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

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
        <>
            <Card>
                <Accordion
                    expanded={expanded === 'panel1'}
                    onChange={handleChange('panel1')}
                    sx={{ boxShadow: 'none', background: 'transparent' }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="subtitle" color="text.black" component="p">
                            Surgery
                        </Typography>
                        <div className={s.header_item}>
                            <div className={s.analysis_item}>
                                <p className={s.doctor_name}>Shumeiko Timur Bohdanovich</p>
                                <p className={s.doctor_type_small}>Surgeon</p>
                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul className={s.inside_list}>
                            {medcart.map(({ title, textList }) => {
                                return (
                                    <li className={s.inside_item}>
                                        <Typography
                                            component="p"
                                            variant="subtitle"
                                            color="text.black"
                                            sx={{
                                                fontSize: { md: '20px' },
                                                lineHeight: { md: 1.5 },
                                                marginBottom: '16px',
                                            }}
                                        >
                                            {title}
                                        </Typography>
                                        <ul className={s.inside_itemNested}>
                                            {textList.map(text => {
                                                return (
                                                    <li>
                                                        <Typography
                                                            component="p"
                                                            variant="text"
                                                            color="text.gray"
                                                            sx={{
                                                                fontSize: { md: '16px' },
                                                                lineHeight: { md: 1.5 },
                                                            }}
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
                    </AccordionDetails>
                </Accordion>
            </Card>
            <Card>
                <Accordion
                    expanded={expanded === 'panel2'}
                    onChange={handleChange('panel2')}
                    sx={{ boxShadow: 'none', background: 'transparent' }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="subtitle" color="text.black" component="p">
                            Surgery
                        </Typography>
                        <div className={s.header_item}>
                            <div className={s.analysis_item}>
                                <p className={s.doctor_name}>Shumeiko Timur Bohdanovich</p>
                                <p className={s.doctor_type_small}>Surgeon</p>
                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul className={s.inside_list}>
                            {medcart.map(({ title, textList }) => {
                                return (
                                    <li className={s.inside_item}>
                                        <Typography
                                            component="p"
                                            variant="subtitle"
                                            color="text.black"
                                            sx={{
                                                fontSize: { md: '20px' },
                                                lineHeight: { md: 1.5 },
                                                marginBottom: '16px',
                                            }}
                                        >
                                            {title}
                                        </Typography>
                                        <ul className={s.inside_itemNested}>
                                            {textList.map(text => {
                                                return (
                                                    <li>
                                                        <Typography
                                                            component="p"
                                                            variant="text"
                                                            color="text.gray"
                                                            sx={{
                                                                fontSize: { md: '16px' },
                                                                lineHeight: { md: 1.5 },
                                                            }}
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
                    </AccordionDetails>
                </Accordion>
            </Card>
        </>
    );
};

export default AnalysisBlock;
