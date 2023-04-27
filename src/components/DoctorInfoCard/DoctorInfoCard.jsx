import css from './DoctorInfoCard.module.css';

export const DoctorInfoCard = ({ doctorData, plug }) => {
    return (
        <div className={css.doctorInfo}>
            <div className={css.imgWrapper}>
                <img src={plug} alt="plug" className={css.photo} />
            </div>
            <div>
                <h3 className={css.doctorName}>{doctorData.name}</h3>
                <p className={css.doctorSpecialization}>{doctorData.line}</p>
            </div>
        </div>
    );
};
