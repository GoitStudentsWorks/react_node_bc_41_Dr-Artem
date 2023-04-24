import { TextField } from '@mui/material';
import style from './PatientMedcartEdit.module.css';

export const PatientMedcartEdit = ({ setEditMedcart }) => {
    const handleSubmit = event => {
        event.preventDefault();
        setEditMedcart(true);
    };
    return (
        <div className={style.PatientMedcart_Edit}>
            <form onSubmit={handleSubmit}>
                <ul className={style.PatientMedcart_EditList}>
                    <li className={style.PatientMedcart_EditItem}>
                        <div className={style.PatientMedcart_EditHeaderWrapper}>
                            <p className={style.PatientMedcart_EditHeader}>Complaints at the time of inspection:</p>
                            <button type="button" className={style.PatientMedcart_EditHeaderAdd}>
                                <svg
                                    className={style.PatientMedcart_EditHeaderAddIcon}
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 5V19"
                                        stroke="#477577"
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M5 12H19"
                                        stroke="#477577"
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                        <ul className={style.PatientMedcart_EditInputList}>
                            <li className={style.PatientMedcart_EditInputItem}>
                                <TextField
                                    className={style.PatientMedcart_EditInput}
                                    placeholder="Enter text"
                                    type="text"
                                />
                                <button type="button" className={style.PatientMedcart_EditInputDelete}>
                                    <svg
                                        className={style.PatientMedcart_EditInputDeleteIcon}
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.75 5.5H4.58333H19.25"
                                            stroke="#477577"
                                            stroke-width="1.8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M17.4168 5.49967V18.333C17.4168 18.8192 17.2237 19.2856 16.8799 19.6294C16.536 19.9732 16.0697 20.1663 15.5835 20.1663H6.41683C5.9306 20.1663 5.46428 19.9732 5.12047 19.6294C4.77665 19.2856 4.5835 18.8192 4.5835 18.333V5.49967M7.3335 5.49967V3.66634C7.3335 3.18011 7.52665 2.7138 7.87047 2.36998C8.21428 2.02616 8.6806 1.83301 9.16683 1.83301H12.8335C13.3197 1.83301 13.786 2.02616 14.1299 2.36998C14.4737 2.7138 14.6668 3.18011 14.6668 3.66634V5.49967"
                                            stroke="#477577"
                                            stroke-width="1.8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M9.1665 10.083V15.583"
                                            stroke="#477577"
                                            stroke-width="1.8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M12.8335 10.083V15.583"
                                            stroke="#477577"
                                            stroke-width="1.8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </li>
                    <li className={style.PatientMedcart_EditItem}>
                        <div className={style.PatientMedcart_EditHeaderWrapper}>
                            <p className={style.PatientMedcart_EditHeader}>Medical history:</p>
                            <button type="button" className={style.PatientMedcart_EditHeaderAdd}>
                                <svg
                                    className={style.PatientMedcart_EditHeaderAddIcon}
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 5V19"
                                        stroke="#477577"
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M5 12H19"
                                        stroke="#477577"
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                        <ul className={style.PatientMedcart_EditInputList}>
                            <li className={style.PatientMedcart_EditInputItem}>
                                <input
                                    className={style.PatientMedcart_EditInput}
                                    placeholder="Enter text"
                                    type="text"
                                />
                                <button type="button" className={style.PatientMedcart_EditInputDelete}>
                                    <svg
                                        className={style.PatientMedcart_EditInputDeleteIcon}
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.75 5.5H4.58333H19.25"
                                            stroke="#477577"
                                            stroke-width="1.8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M17.4168 5.49967V18.333C17.4168 18.8192 17.2237 19.2856 16.8799 19.6294C16.536 19.9732 16.0697 20.1663 15.5835 20.1663H6.41683C5.9306 20.1663 5.46428 19.9732 5.12047 19.6294C4.77665 19.2856 4.5835 18.8192 4.5835 18.333V5.49967M7.3335 5.49967V3.66634C7.3335 3.18011 7.52665 2.7138 7.87047 2.36998C8.21428 2.02616 8.6806 1.83301 9.16683 1.83301H12.8335C13.3197 1.83301 13.786 2.02616 14.1299 2.36998C14.4737 2.7138 14.6668 3.18011 14.6668 3.66634V5.49967"
                                            stroke="#477577"
                                            stroke-width="1.8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M9.1665 10.083V15.583"
                                            stroke="#477577"
                                            stroke-width="1.8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M12.8335 10.083V15.583"
                                            stroke="#477577"
                                            stroke-width="1.8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </li>
                    <li className={style.PatientMedcart_EditItem}>
                        <div className={style.PatientMedcart_EditHeaderWrapper}>
                            <p className={style.PatientMedcart_EditHeader}>
                                Objective condition at the time of inspection:
                            </p>
                            <button type="button" className={style.PatientMedcart_EditHeaderAdd}>
                                <svg
                                    className={style.PatientMedcart_EditHeaderAddIcon}
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 5V19"
                                        stroke="#477577"
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M5 12H19"
                                        stroke="#477577"
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                        <ul className={style.PatientMedcart_EditInputList}>
                            <li className={style.PatientMedcart_EditInputItem}>
                                <input
                                    className={style.PatientMedcart_EditInput}
                                    placeholder="Enter text"
                                    type="text"
                                />
                                <button type="button" className={style.PatientMedcart_EditInputDelete}>
                                    <svg
                                        className={style.PatientMedcart_EditInputDeleteIcon}
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.75 5.5H4.58333H19.25"
                                            stroke="#477577"
                                            stroke-width="1.8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M17.4168 5.49967V18.333C17.4168 18.8192 17.2237 19.2856 16.8799 19.6294C16.536 19.9732 16.0697 20.1663 15.5835 20.1663H6.41683C5.9306 20.1663 5.46428 19.9732 5.12047 19.6294C4.77665 19.2856 4.5835 18.8192 4.5835 18.333V5.49967M7.3335 5.49967V3.66634C7.3335 3.18011 7.52665 2.7138 7.87047 2.36998C8.21428 2.02616 8.6806 1.83301 9.16683 1.83301H12.8335C13.3197 1.83301 13.786 2.02616 14.1299 2.36998C14.4737 2.7138 14.6668 3.18011 14.6668 3.66634V5.49967"
                                            stroke="#477577"
                                            stroke-width="1.8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M9.1665 10.083V15.583"
                                            stroke="#477577"
                                            stroke-width="1.8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M12.8335 10.083V15.583"
                                            stroke="#477577"
                                            stroke-width="1.8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </li>
                    <li className={style.PatientMedcart_EditItem}>
                        <div className={style.PatientMedcart_EditHeaderWrapper}>
                            <p className={style.PatientMedcart_EditHeader}>Associated diseases:</p>
                            <button type="button" className={style.PatientMedcart_EditHeaderAdd}>
                                <svg
                                    className={style.PatientMedcart_EditHeaderAddIcon}
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 5V19"
                                        stroke="#477577"
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M5 12H19"
                                        stroke="#477577"
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                        <ul className={style.PatientMedcart_EditInputList}>
                            <li className={style.PatientMedcart_EditInputItem}>
                                <input
                                    className={style.PatientMedcart_EditInput}
                                    placeholder="Enter text"
                                    type="text"
                                />
                                <button type="button" className={style.PatientMedcart_EditInputDelete}>
                                    <svg
                                        className={style.PatientMedcart_EditInputDeleteIcon}
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.75 5.5H4.58333H19.25"
                                            stroke="#477577"
                                            stroke-width="1.8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M17.4168 5.49967V18.333C17.4168 18.8192 17.2237 19.2856 16.8799 19.6294C16.536 19.9732 16.0697 20.1663 15.5835 20.1663H6.41683C5.9306 20.1663 5.46428 19.9732 5.12047 19.6294C4.77665 19.2856 4.5835 18.8192 4.5835 18.333V5.49967M7.3335 5.49967V3.66634C7.3335 3.18011 7.52665 2.7138 7.87047 2.36998C8.21428 2.02616 8.6806 1.83301 9.16683 1.83301H12.8335C13.3197 1.83301 13.786 2.02616 14.1299 2.36998C14.4737 2.7138 14.6668 3.18011 14.6668 3.66634V5.49967"
                                            stroke="#477577"
                                            stroke-width="1.8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M9.1665 10.083V15.583"
                                            stroke="#477577"
                                            stroke-width="1.8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M12.8335 10.083V15.583"
                                            stroke="#477577"
                                            stroke-width="1.8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </li>
                    <li className={style.PatientMedcart_EditItem}>
                        <div className={style.PatientMedcart_EditHeaderWrapper}>
                            <p className={style.PatientMedcart_EditHeader}>Assessment of body condition:</p>
                            <button type="button" className={style.PatientMedcart_EditHeaderAdd}>
                                <svg
                                    className={style.PatientMedcart_EditHeaderAddIcon}
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 5V19"
                                        stroke="#477577"
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M5 12H19"
                                        stroke="#477577"
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                        <ul className={style.PatientMedcart_EditInputList}>
                            <li className={style.PatientMedcart_EditInputItem}>
                                <input
                                    className={style.PatientMedcart_EditInput}
                                    placeholder="Enter text"
                                    type="text"
                                />
                                <button type="button" className={style.PatientMedcart_EditInputDelete}>
                                    <svg
                                        className={style.PatientMedcart_EditInputDeleteIcon}
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.75 5.5H4.58333H19.25"
                                            stroke="#477577"
                                            stroke-width="1.8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M17.4168 5.49967V18.333C17.4168 18.8192 17.2237 19.2856 16.8799 19.6294C16.536 19.9732 16.0697 20.1663 15.5835 20.1663H6.41683C5.9306 20.1663 5.46428 19.9732 5.12047 19.6294C4.77665 19.2856 4.5835 18.8192 4.5835 18.333V5.49967M7.3335 5.49967V3.66634C7.3335 3.18011 7.52665 2.7138 7.87047 2.36998C8.21428 2.02616 8.6806 1.83301 9.16683 1.83301H12.8335C13.3197 1.83301 13.786 2.02616 14.1299 2.36998C14.4737 2.7138 14.6668 3.18011 14.6668 3.66634V5.49967"
                                            stroke="#477577"
                                            stroke-width="1.8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M9.1665 10.083V15.583"
                                            stroke="#477577"
                                            stroke-width="1.8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M12.8335 10.083V15.583"
                                            stroke="#477577"
                                            stroke-width="1.8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </li>
                    <li className={style.PatientMedcart_EditItem}>
                        <div className={style.PatientMedcart_EditHeaderWrapper}>
                            <p className={style.PatientMedcart_EditHeader}>Clinical diagnosis:</p>
                            <button type="button" className={style.PatientMedcart_EditHeaderAdd}>
                                <svg
                                    className={style.PatientMedcart_EditHeaderAddIcon}
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 5V19"
                                        stroke="#477577"
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M5 12H19"
                                        stroke="#477577"
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                        <ul className={style.PatientMedcart_EditInputList}>
                            <li className={style.PatientMedcart_EditInputItem}>
                                <input
                                    className={style.PatientMedcart_EditInput}
                                    placeholder="Enter text"
                                    type="text"
                                />
                                <button type="button" className={style.PatientMedcart_EditInputDelete}>
                                    <svg
                                        className={style.PatientMedcart_EditInputDeleteIcon}
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.75 5.5H4.58333H19.25"
                                            stroke="#477577"
                                            stroke-width="1.8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M17.4168 5.49967V18.333C17.4168 18.8192 17.2237 19.2856 16.8799 19.6294C16.536 19.9732 16.0697 20.1663 15.5835 20.1663H6.41683C5.9306 20.1663 5.46428 19.9732 5.12047 19.6294C4.77665 19.2856 4.5835 18.8192 4.5835 18.333V5.49967M7.3335 5.49967V3.66634C7.3335 3.18011 7.52665 2.7138 7.87047 2.36998C8.21428 2.02616 8.6806 1.83301 9.16683 1.83301H12.8335C13.3197 1.83301 13.786 2.02616 14.1299 2.36998C14.4737 2.7138 14.6668 3.18011 14.6668 3.66634V5.49967"
                                            stroke="#477577"
                                            stroke-width="1.8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M9.1665 10.083V15.583"
                                            stroke="#477577"
                                            stroke-width="1.8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M12.8335 10.083V15.583"
                                            stroke="#477577"
                                            stroke-width="1.8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </li>
                    <li className={style.PatientMedcart_EditItem}>
                        <div className={style.PatientMedcart_EditHeaderWrapper}>
                            <p className={style.PatientMedcart_EditHeader}>Treatment recommendations:</p>
                            <button type="button" className={style.PatientMedcart_EditHeaderAdd}>
                                <svg
                                    className={style.PatientMedcart_EditHeaderAddIcon}
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 5V19"
                                        stroke="#477577"
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M5 12H19"
                                        stroke="#477577"
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                        <ul className={style.PatientMedcart_EditInputList}>
                            <li className={style.PatientMedcart_EditInputItem}>
                                <input
                                    className={style.PatientMedcart_EditInput}
                                    placeholder="Enter text"
                                    type="text"
                                />
                                <button type="button" className={style.PatientMedcart_EditInputDelete}>
                                    <svg
                                        className={style.PatientMedcart_EditInputDeleteIcon}
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.75 5.5H4.58333H19.25"
                                            stroke="#477577"
                                            stroke-width="1.8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M17.4168 5.49967V18.333C17.4168 18.8192 17.2237 19.2856 16.8799 19.6294C16.536 19.9732 16.0697 20.1663 15.5835 20.1663H6.41683C5.9306 20.1663 5.46428 19.9732 5.12047 19.6294C4.77665 19.2856 4.5835 18.8192 4.5835 18.333V5.49967M7.3335 5.49967V3.66634C7.3335 3.18011 7.52665 2.7138 7.87047 2.36998C8.21428 2.02616 8.6806 1.83301 9.16683 1.83301H12.8335C13.3197 1.83301 13.786 2.02616 14.1299 2.36998C14.4737 2.7138 14.6668 3.18011 14.6668 3.66634V5.49967"
                                            stroke="#477577"
                                            stroke-width="1.8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M9.1665 10.083V15.583"
                                            stroke="#477577"
                                            stroke-width="1.8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M12.8335 10.083V15.583"
                                            stroke="#477577"
                                            stroke-width="1.8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </li>
                </ul>
                <button type="submit" className={style.PatientMedcart_EditFormBtn}>
                    Save
                </button>
            </form>
        </div>
    );
};
