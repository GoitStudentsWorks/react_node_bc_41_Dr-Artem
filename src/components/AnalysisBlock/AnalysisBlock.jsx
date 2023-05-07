import { useState } from 'react';
import { useSelector } from 'react-redux';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { Accordion } from '@mui/material';
import { Icon } from '@mui/material';
import { UilFileAlt } from '@iconscout/react-unicons';
import s from '../AnalysisBlock/AnalysisBlock.module.css';
import { selectAllVisits } from '../../redux/visits/selectors';

const wrapp = {
    marginBottom: '16px',
    boxShadow: 'none',
    borderRadius: '16px',
    padding: { xs: '16px', md: '32px' },
    background: '#FAFAFA',
    '&:first-of-type': {
        borderRadius: '16px',
    },
    '&:last-of-type': {
        borderRadius: '16px',
    },
    '&:before ': {
        content: 'none',
    },
};

const summaryStyles = {
    padding: '0px',
    minHeight: '0px',
    '& .MuiAccordionSummary-content': {
        margin: '0px',
    },
    '& .MuiAccordionSummary-content.Mui-expanded': { margin: '0px' },
};

const AnalysisBlock = () => {
    const [expandedPanel, setExpandedPanel] = useState(null);
    const visits = useSelector(selectAllVisits);
    const allVisits = [...visits].reverse();

    const handleChange = panel => (event, isExpanded) => {
        setExpandedPanel(isExpanded ? panel : null);
    };
    return (
        <>
            <div>
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
                            _id,
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
                            ];

                            return (
                                <Accordion
                                    expanded={expandedPanel === createdAt}
                                    onChange={handleChange(createdAt)}
                                    key={createdAt}
                                    sx={wrapp}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls={createdAt}
                                        id={createdAt}
                                        sx={summaryStyles}
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
                                            {medcart.map(({ title, textList, _id }) => {
                                                return (
                                                    <li className={s.inside_item} key={Math.random()}>
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
                                                                    <li key={Math.random()}>
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
                                                    Documents:
                                                </Typography>
                                                <ul>
                                                    {files.map(file => {
                                                        return (
                                                            <li key={Math.random()}>
                                                                <Icon color="primary">
                                                                    <UilFileAlt
                                                                        style={{
                                                                            width: '20px',
                                                                            height: '20px',
                                                                        }}
                                                                    />
                                                                </Icon>
                                                                <a href={file.fileURL} download>
                                                                    {file.fileName}
                                                                </a>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </li>
                                        </ul>
                                    </AccordionDetails>
                                </Accordion>
                            );
                        }
                    )}
            </div>
        </>
    );
};

export default AnalysisBlock;
