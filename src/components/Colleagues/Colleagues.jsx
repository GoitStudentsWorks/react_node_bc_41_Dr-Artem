import UserCard from '../Card/UserCard';
import css from './Colleagues.module.css';
import { useEffect, useRef } from 'react';
import BasicSelect from 'components/element/Select';

const Colleagues = () => {
    const cards = [1.2, 1.9, 3, 4, 5, 6, 7, 8, 9];
    cards.sort((a, b) => b - a);
    // cards.sort((a, b) => b.rating - a.rating);

    const specializationRef = useRef(null);
    const categoryRef = useRef(null);

    useEffect(() => {
        const handleClick = event => {
            const specialization = document.querySelector('#filterSpecialization');
            const specializationArrow = document.querySelector('#specializationArrow');
            const category = document.querySelector('#filterCategory');
            const categoryArrow = document.querySelector('#categoryArrow');
            if (!specializationRef.current.contains(event.target)) {
                specialization.style.opacity = 0;
                specializationArrow.style.transform = 'rotate(180deg)';
            }
            if (!categoryRef.current.contains(event.target)) {
                category.style.opacity = 0;
                categoryArrow.style.transform = 'rotate(180deg)';
            }
        };

        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <>
            <div className={css.colleaguesMenu}>
                <label className={css.inputLabel} htmlFor="">
                    <input className={css.input} type="text" placeholder="Search" />
                    <svg
                        className={css.inputImg}
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z"
                            stroke="#111111"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M15.7498 15.7498L12.4873 12.4873"
                            stroke="#111111"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </label>
                <BasicSelect
                    styles={{ marginRight: '16px', width: '230px', height: '52px' }}
                    title={'Specialization'}
                    item1={'Ophthalmologist'}
                    item2={'Surgeon'}
                    item3={'Therapist'}
                    item4={'Neurologist'}
                    item5={'Gynecologist'}
                    item6={'Endocrinologist'}
                    item7={'Psychiatrist'}
                    item8={'Psychotherapist'}
                    item9={'Otolaryngologist'}
                />
                <BasicSelect
                    styles={{ width: '194px', height: '52px' }}
                    title={'category'}
                    item1={'The first'}
                    item2={'The second'}
                    item3={'Higher'}
                />
            </div>
            <ul className={css.patientList}>
                {cards.map(card => (
                    <li>
                        <p>{card}</p>
                        <UserCard />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Colleagues;
