import { useState } from 'react';
import css from './ExperienceBlock.module.css';
import experienceImg from '../../Image/Experience1.png';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import { RxPencil1 } from 'react-icons/rx';
import Divider from '@mui/material/Divider';
import { ExperienceModal } from 'components/ExperienceModal/ExperienceModal';

export const ExperienceBlock = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [title, setTitle] =useState('');

    const handleModalChange = (currentTitle) => {
        setModalOpen(!modalOpen);
        setTitle(currentTitle)
    };

    return (
        <div className={css.experienceBlock}>
            <div className={css.experienceTitleWrapper}>
                <h2 className={css.experienceTitle}>Experience </h2>
                <IconButton sx={{ padding: '0' }} onClick={()=>handleModalChange('Add experience')}>
                    <AddIcon sx={{ color: '#477577' }} />
                </IconButton>
            </div>
            <ul className={css.experienceList}>
                <li className={css.experienceListItem}>
                    <div className={css.experienceItemWrapper}>
                        <div className={css.experienceImage}>
                            <img src={experienceImg} alt="Logo" />
                        </div>
                        <div className={css.experienceInfoItem}>
                            <p className={css.experienceInfoTitle}>Basic medical sciences</p>
                            <p className={css.experienceInfoDate}>September 2010 - May 2010 </p>

                            <p className={css.experienceInfoAbout}>The basic medical sciences look at the...</p>
                        </div>
                    </div>
                    <div>
                        <div className={css.buttonEditWrapper}>
                            <p className={css.experienceInfoDateFlex}>September 2010 - May 2010 </p>
                            <IconButton sx={{ padding: '0' }} onClick={()=>handleModalChange('Edit experience')}>
                                <RxPencil1 style={{ color: '#477577' }} />
                            </IconButton>
                        </div>
                    </div>
                </li>
                <Divider sx={{ border: '1.5px solid rgba(209, 213, 219, 0.2)', marginBottom: '16px' }} />
                <li className={css.experienceListItem}>
                    <div className={css.experienceItemWrapper}>
                        <div className={css.experienceImage}>
                            <img src={experienceImg} alt="Logo" />
                        </div>
                        <div className={css.experienceInfoItem}>
                            <p className={css.experienceInfoTitle}>Basic medical sciences</p>
                            <p className={css.experienceInfoDate}>September 2010 - May 2010 </p>

                            <p className={css.experienceInfoAbout}>The basic medical sciences look at the...</p>
                        </div>
                    </div>
                    <div>
                        <div className={css.buttonEditWrapper}>
                            <p className={css.experienceInfoDateFlex}>September 2010 - May 2010 </p>
                            <IconButton sx={{ padding: '0' }}>
                                <RxPencil1 style={{ color: '#477577' }} />
                            </IconButton>
                        </div>
                    </div>
                </li>
                <Divider sx={{ border: '1.5px solid rgba(209, 213, 219, 0.2)', marginBottom: '16px' }} />
                <li className={css.experienceListItem}>
                    <div className={css.experienceItemWrapper}>
                        <div className={css.experienceImage}>
                            <img src={experienceImg} alt="Logo" />
                        </div>
                        <div className={css.experienceInfoItem}>
                            <p className={css.experienceInfoTitle}>Basic medical sciences</p>
                            <p className={css.experienceInfoDate}>September 2010 - May 2010 </p>

                            <p className={css.experienceInfoAbout}>The basic medical sciences look at the...</p>
                        </div>
                    </div>
                    <div>
                        <div className={css.buttonEditWrapper}>
                            <p className={css.experienceInfoDateFlex}>September 2010 - May 2010 </p>
                            <IconButton sx={{ padding: '0' }}>
                                <RxPencil1 style={{ color: '#477577' }} />
                            </IconButton>
                        </div>
                    </div>
                </li>
                <Divider sx={{ border: '1.5px solid rgba(209, 213, 219, 0.2)', marginBottom: '16px' }} />
                <li className={css.experienceListItem}>
                    <div className={css.experienceItemWrapper}>
                        <div className={css.experienceImage}>
                            <img src={experienceImg} alt="Logo" />
                        </div>
                        <div className={css.experienceInfoItem}>
                            <p className={css.experienceInfoTitle}>Basic medical sciences</p>
                            <p className={css.experienceInfoDate}>September 2010 - May 2010 </p>

                            <p className={css.experienceInfoAbout}>The basic medical sciences look at the...</p>
                        </div>
                    </div>
                    <div>
                        <div className={css.buttonEditWrapper}>
                            <p className={css.experienceInfoDateFlex}>September 2010 - May 2010 </p>
                            <IconButton sx={{ padding: '0' }}>
                                <RxPencil1 style={{ color: '#477577' }} />
                            </IconButton>
                        </div>
                    </div>
                </li>
            </ul>
            <ExperienceModal open={modalOpen} setModalOpen={handleModalChange} title={title}/>
        </div>
    );
};
