import { Accordion } from '@mui/material';
import s from '../AnalysisBlock/AnalysisBlock.module.css';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
function AnalysisBlock() {
    return (
        <div className={s.container}>
            <Accordion style={{ boxShadow: 'none', background: '#fafafa', border: '16px' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography className={s.header_item}>
                        <div>
                            <p className={s.doctor_type}>Surgery</p>
                        </div>
                    </Typography>
                    <Typography className={s.header_item}>
                        <div className={s.analysis_item}>
                            <p className={s.doctor_name}>Shumeiko Timur Bohdanovich</p>
                            <p className={s.doctor_type_small}>Surgeon</p>
                        </div>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ul className={s.inside_list}>
                            <li className={s.inside_item}>
                                <h3 className={s.item_header}>Complaints at the time of inspection:</h3>
                                <div className={s.icon_wrapper}>
                                    <FiberManualRecordIcon style={{ width: '8px', height: '8px', color: '#477577' }} />
                                    <p className={s.item_text}>
                                        On a tickling in the throat, an increase in body temperature up to 37.2 degrees.
                                    </p>
                                </div>
                            </li>
                            <li className={s.inside_item}>
                                <h3 className={s.item_header}>Medical history:</h3>
                                <div className={s.icon_wrapper}>
                                    <FiberManualRecordIcon style={{ width: '8px', height: '8px', color: '#477577' }} />
                                    <p className={s.item_text}>
                                        She fell ill 2 days ago, when a sore throat appeared, and the temperature rose
                                        to 37.0 degrees. He attributes his condition to hypothermia. She was treated
                                        independently: "Dekvadol", heavy drinking.
                                    </p>
                                </div>
                            </li>
                            <li className={s.inside_item}>
                                <h3 className={s.item_header}>Objective condition at the time of inspection:</h3>
                                <div className={s.icon_wrapper}>
                                    <FiberManualRecordIcon style={{ width: '8px', height: '8px', color: '#477577' }} />
                                    <p className={s.item_text}>
                                        Skin covers are normal. The mucous membrane of the oropharynx is hyperemic, the
                                        back wall is granular. Cor-activity is rhythmic, the tones are sonorous. Pulmo -
                                        breathing is vesicular, there are no wheezes. Stomach - b/o. Stool, diuresis -
                                        normal.
                                    </p>
                                </div>
                            </li>
                            <li className={s.inside_item}>
                                <h3 className={s.item_header}>Associated diseases:</h3>
                                <div className={s.icon_wrapper}>
                                    <FiberManualRecordIcon style={{ width: '8px', height: '8px', color: '#477577' }} />
                                    <p className={s.item_text}>Acute allergic urticaria, vitamin D deficiency.</p>
                                </div>
                            </li>
                            <li className={s.inside_item}>
                                <h3 className={s.item_header}>Assessment of body condition:</h3>
                                <div className={s.icon_wrapper}>
                                    <FiberManualRecordIcon style={{ width: '8px', height: '8px', color: '#477577' }} />
                                    <p className={s.item_text}>
                                        An acute disease with systemic, local and minimal laboratory signs of the
                                        inflammatory process.
                                    </p>
                                </div>
                            </li>
                            <li className={s.inside_item}>
                                <h3 className={s.item_header}>Clinical diagnosis:</h3>
                                <div className={s.icon_wrapper}>
                                    <FiberManualRecordIcon style={{ width: '8px', height: '8px', color: '#477577' }} />
                                    <p className={s.item_text}>Acute pharyngitis of unspecified origin.</p>
                                </div>
                            </li>
                            <li className={s.inside_item}>
                                <h3 className={s.item_header}>Treatment recommendations:</h3>
                                <ul>
                                    <li className={s.item_text}>
                                        <div className={s.icon_wrapper}>
                                            <FiberManualRecordIcon
                                                style={{ width: '8px', height: '8px', color: '#477577' }}
                                            />
                                            <p className={s.item_text}>JSC, SKB in dynamics</p>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className={s.inside_item}>
                                <h3 className={s.item_header}>Documents:</h3>
                                <ul>
                                    <li className={s.item_text}>
                                        <div className={s.icon_wrapper}>
                                            <TextSnippetIcon
                                                style={{ width: '16px', height: '16px', color: '#477577' }}
                                            />
                                            <p className={s.item_text_doc}>Urine analysis is general</p>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default AnalysisBlock;
