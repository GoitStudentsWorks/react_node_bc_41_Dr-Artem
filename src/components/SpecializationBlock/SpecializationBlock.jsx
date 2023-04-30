import { IconButton } from '@mui/material';
import { RxPencil1 } from 'react-icons/rx';
import css from './SpecializationBlock.module.css';

export const SpecializationBlock = () => {
    return (
        <div className={css.specializationBlock}>
            <ul className={css.specializationList}>
                <li className={css.specializationItem}>
                    Specialization:<span className={css.specializationText}>Surgeon</span>
                </li>
                <li className={css.specializationItem}>
                    Category:
                    <span span className={css.specializationText}>
                        Higher
                    </span>
                </li>
            </ul>
            <IconButton sx={{ position: 'absolute', top: '16px', right: '16px' }}>
                <RxPencil1 style={{ color: '#477577' }} />
            </IconButton>
        </div>
    );
};
