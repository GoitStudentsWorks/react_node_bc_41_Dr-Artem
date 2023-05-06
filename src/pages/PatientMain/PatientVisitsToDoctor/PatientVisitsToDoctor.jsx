import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';
import { DatePickerMonth } from 'components/DatePickers/DatePickerMonth';
import { ModalEditRating } from 'components/ModalEditRating/ModalEditRating';
import { DoctorInfoCard } from '../../../components/DoctorInfoCard/DoctorInfoCard';
import { selectCurrentUserAppointments } from '../../../redux/appointment/selectors';
import { updateUserRating } from '../../../redux/info/operation';
import plug from '../../../images/ProfileBlock/plug.png';
import css from './PatientVisitsToDoctor.module.css';
// import { getCurrentUserAppointments } from '../../../redux/appointment/operation';

export const PatientVisitsToDoctor = () => {
    const [selectedDoctorData, setSelectedDoctorData] = useState(null);
    const [selectedDate, setSelectedDate] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const allVisits = useSelector(selectCurrentUserAppointments);
    const dispatch = useDispatch();

    const openModal = doctorData => {
        setSelectedDoctorData(doctorData);
        setIsOpen(true);
    };

    const closeModal = (value, doctor) => {
        console.log(value)
        const newRating = {
            id: doctor,
            rating: value,
        };
        dispatch(updateUserRating(newRating));
        setSelectedDoctorData(null);
        setIsOpen(false);
    };

    return (
        <section className="section">
            <Typography
                variant="subtitle"
                color="text.black"
                sx={{ fontSize: { md: '20px' }, lineHeight: { md: 1.5 }, marginBottom: '16px', display: 'block' }}
            >
                Visits
            </Typography>
            <DatePickerMonth />
            <ul className={css.visitsList}>
                {allVisits &&
                    allVisits.map(({ doctor, date, _id, time }) => {
                        const newDate = new Date(date);

                        const optionsMonth = {
                            month: 'long',
                            timeZone: 'UTC',
                        };
                        const monthFormatted = newDate.toLocaleDateString('en-US', optionsMonth);

                        const doctorData = {
                            id: doctor._id,
                            name: doctor.name,
                            line: doctor.specialization,
                            avatar: doctor.avatarURL,
                            rating: doctor.rating,
                        };

                        return (
                            <li className={css.visitsItem} key={_id}>
                                <div className={css.doctorDetails}>
                                    <DoctorInfoCard doctorData={doctorData} />
                                    <div className={css.rating} onClick={() => openModal(doctorData)}>
                                        <Rating
                                            name="read-only"
                                            value={doctorData.rating}
                                            precision={0.5}
                                            readOnly
                                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                    </div>
                                </div>
                                <div className={css.visitInfo}>
                                    <p className={css.visitTitle}>Date of admission</p>
                                    <span className={css.visitDate}>{`${monthFormatted} ${date}`}</span>
                                    <span className={css.visitDate}>{time}</span>
                                </div>
                            </li>
                        );
                    })}
            </ul>
            {selectedDoctorData && (
                <ModalEditRating isOpen={isOpen} doctorData={selectedDoctorData} onClose={closeModal} plug={plug} />
            )}
        </section>
    );
};
