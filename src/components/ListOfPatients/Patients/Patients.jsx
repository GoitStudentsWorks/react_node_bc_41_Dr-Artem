import UserCard from '../../Card/UserCard';
import css from './Patients.module.css';
import { useEffect, useRef } from 'react';

const Patients = () => {
    const filterRef = useRef(null);
    const filterFilterRef = useRef(null);
    const filterArrowRef = useRef(null);

    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    useEffect(() => {
        const handleClick = event => {
            // const filter = document.querySelector('#filterFilter');
            // const filterArrow = document.querySelector('#filterArrow');

            if (!filterRef.current.contains(event.target)) {
                filterFilterRef.current.style.opacity = 0;
                filterArrowRef.current.style.transform = 'rotate(180deg)';
            }
        };

        window.addEventListener('click', handleClick);

        return () => {
            console.log(4);
            window.removeEventListener('click', handleClick);
            console.log(5);
        };
    }, []);

    const filter = el => {
        if (filterFilterRef.current.style.opacity === '0') {
            console.log(11111111);
            filterFilterRef.current.style.opacity = 1;
            filterArrowRef.current.style.transform = 'rotate(0deg)';
        } else {
            console.log(22222222);
            filterFilterRef.current.style.opacity = 0;
            filterArrowRef.current.style.transform = 'rotate(180deg)';
        }
    };

    return (
        <>
            <div ref={filterRef} className={css.filter} onClick={filter}>
                All
                <div className={css.filterArrowBox}>
                    <svg
                        ref={filterArrowRef}
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
                </div>
                <div ref={filterFilterRef} className={css.filterFilter}>
                    <p>All</p>
                    <p>New</p>
                    <p>Permanent</p>
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

export default Patients;
