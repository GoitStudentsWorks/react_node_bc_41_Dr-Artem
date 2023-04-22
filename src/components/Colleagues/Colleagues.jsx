import UserCard from '../Card/UserCard';
import css from './Colleagues.module.css';
import { useEffect, useRef } from 'react';

const Colleagues = () => {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const specializationList = ['Ophthalmologist', 'Surgeon', 'Therapist', 'Neurologist'];
    const categoryList = ['The first', 'The second', 'Higher'];

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

    const specializationClick = () => {
        const specialization = document.querySelector('#filterSpecialization');
        const specializationArrow = document.querySelector('#specializationArrow');
        if (specialization.style.opacity === '0') {
            specialization.style.opacity = 1;
            specialization.style.paddingBottom = 0;
            specialization.style.overflowY = 'auto';
            specialization.style.overflowX = 'clip';

            specializationArrow.style.transform = 'rotate(0deg)';
        } else {
            // specialization.style.opacity = 0;
            // specializationArrow.style.transform = 'rotate(180deg)';
        }
    };

    const categoryClick = () => {
        const category = document.querySelector('#filterCategory');
        const categoryArrow = document.querySelector('#categoryArrow');
        if (category.style.opacity === '0') {
            category.style.opacity = 1;
            categoryArrow.style.transform = 'rotate(0deg)';
        } else {
            // category.style.opacity = 0;
            // categoryArrow.style.transform = 'rotate(180deg)';
        }
    };

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
                <div
                    ref={specializationRef}
                    className={css.filter}
                    style={{ width: '230px', marginRight: '16px' }}
                    onClick={specializationClick}
                >
                    Specialization
                    <svg
                        id="specializationArrow"
                        className={css.filterArrow}
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.5 6.25L6 1.75L10.5 6.25"
                            stroke="#111111"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <div
                        id="filterSpecialization"
                        className={css.filterFilter}
                        style={{ width: '230px', height: '136px' }}
                    >
                        <ul className={css.list}>
                            <li className={css.item}>Show All</li>
                            {specializationList.map(el => (
                                <li className={css.item}>{el}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div ref={categoryRef} className={css.filter} style={{ width: '194px' }} onClick={categoryClick}>
                    Category
                    <svg
                        id="categoryArrow"
                        className={css.filterArrow}
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.5 6.25L6 1.75L10.5 6.25"
                            stroke="#111111"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <div id="filterCategory" className={css.filterFilter} style={{ width: '194px', height: '124px' }}>
                        <ul className={css.list}>
                            <li className={css.item}>Show All</li>
                            {categoryList.map(el => (
                                <li className={css.item}>{el}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <ul className={css.patientList}>
                {cards.map(card => (
                    <li>
                        <UserCard />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Colleagues;
