import css from './SpecializationBlock.module.css';
import { IconButton } from '@mui/material';
import { RxPencil1 } from 'react-icons/rx';

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
            <div>
                <IconButton sx={{ padding: '0' }}>
                    <RxPencil1 style={{ color: '#477577' }} />
                </IconButton>
            </div>
        </div>
    );
};
