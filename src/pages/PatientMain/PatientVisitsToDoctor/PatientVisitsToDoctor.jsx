import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';
import { DatePickerMonth } from 'components/DatePickers/DatePickerMonth';
import { ModalEditRating } from 'components/ModalEditRating/ModalEditRating';
import { DoctorInfoCard } from '../../../components/DoctorInfoCard/DoctorInfoCard';
import { selectAllVisits } from '../../../redux/visits/selectors';
import {updateUserRating} from '../../../redux/info/operation'
import plug from '../../../images/ProfileBlock/plug.png';
import css from './PatientVisitsToDoctor.module.css';

export const PatientVisitsToDoctor = () => {
    const [selectedDoctorData, setSelectedDoctorData] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const allVisits = useSelector(selectAllVisits);
    const dispatch = useDispatch();

    console.log(allVisits)

    const openModal = doctorData => {
        setSelectedDoctorData(doctorData);
        setIsOpen(true);
    };

    const closeModal = (value, doctor) => {
        const newRating = {
            id: doctor,
            rating: value,
        }
        dispatch(updateUserRating(newRating))
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
                    allVisits.map(({ doctor, date, _id }) => {
                        console.log(doctor)
                    
                        const newDate = new Date(date);

                        const optionsMonth = {
                            month: 'long',
                            timeZone: 'UTC',
                        };
                        const monthFormatted = newDate.toLocaleDateString('en-US', optionsMonth);

                        const optionsDate = {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            timeZone: 'UTC',
                        };
                        const dateFormatted = newDate.toLocaleDateString('en-US', optionsDate);

                        const optionsTime = {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: false,
                            timeZone: 'UTC',
                        };
                        const timeFormatted = newDate.toLocaleTimeString('en-US', optionsTime); 

                        const endTime = new Date(newDate.getTime() + 30 * 60000).toLocaleTimeString('en-US', {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: false,
                            timeZone: 'UTC',
                        });

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
                                            readOnly
                                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                    </div>
                                </div>
                                <div className={css.visitInfo}>
                                    <p className={css.visitTitle}>Date of admission</p>
                                    <span className={css.visitDate}>{`${monthFormatted} ${dateFormatted}`}</span>
                                    <span className={css.visitDate}>{`${timeFormatted} - ${endTime}`}</span>
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
