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
    const visits = useSelector(selectAllVisits);
    const allVisits = [...visits].reverse();
    console.log(allVisits);

    const [expandedPanel, setExpandedPanel] = useState(null);

    const handleChange = panel => (event, isExpanded) => {
        setExpandedPanel(isExpanded ? panel : null);
    };
    return (
        <>
            <Card>
                {allVisits &&
                    allVisits.map(
                        ({
                            doctor,
                            createdAt,
                            medicalHistory,
                            objectiveCondition,
                            recomendation,
                            clinicalDiagnosis,
                            bodyCondition,
                            complaints,
                            associatedDiseases,
                            files,
                        }) => {
                            const medcart = [
                                {
                                    title: 'Complaints at the time of inspection:',
                                    textList: [complaints],
                                },
                                {
                                    title: 'Medical history:',
                                    textList: [medicalHistory],
                                },
                                {
                                    title: 'Objective condition at the time of inspection:',
                                    textList: [objectiveCondition],
                                },
                                {
                                    title: 'Associated diseases:',
                                    textList: [associatedDiseases],
                                },
                                {
                                    title: 'Assessment of body condition:',
                                    textList: [bodyCondition],
                                },
                                {
                                    title: 'Clinical diagnosis:',
                                    textList: [clinicalDiagnosis],
                                },
                                {
                                    title: 'Treatment recommendations:',
                                    textList: [recomendation],
                                },
                                {
                                    title: 'Documents:',
                                    textList: [recomendation],
                                }
                            ];
                         
                            return (
                                <Accordion
                                    expanded={expandedPanel === createdAt}
                                    onChange={handleChange(createdAt)}
                                    key={createdAt}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls={createdAt}
                                        id={createdAt}
                                    >
                                        <Typography variant="subtitle" color="text.black" component="p">
                                            {doctor.specialization}
                                        </Typography>
                                        <div className={s.header_item}>
                                            <div className={s.analysis_item}>
                                                <p className={s.doctor_name}>{doctor.name}</p>
                                                <p className={s.doctor_type_small}>{doctor.specialization}</p>
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
                            );
                        }
                    )}
            </Card>
        </>
    );
};

export default AnalysisBlock;
