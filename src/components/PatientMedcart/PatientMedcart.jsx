import style from './PatientMedcart.module.css';

export const PatientMedcart = ({ setEditBool }) => {
    return (
        <div className={style.PatientMedcart}>
            <div className={style.PatientMedcart_EditButton} onClick={() => setEditBool(false)}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_219_8442)">
                        <path
                            d="M11.332 1.99955C11.5071 1.82445 11.715 1.68556 11.9438 1.5908C12.1725 1.49604 12.4177 1.44727 12.6654 1.44727C12.913 1.44727 13.1582 1.49604 13.387 1.5908C13.6157 1.68556 13.8236 1.82445 13.9987 1.99955C14.1738 2.17465 14.3127 2.38252 14.4074 2.61129C14.5022 2.84006 14.551 3.08526 14.551 3.33288C14.551 3.58051 14.5022 3.8257 14.4074 4.05448C14.3127 4.28325 14.1738 4.49112 13.9987 4.66622L4.9987 13.6662L1.33203 14.6662L2.33203 10.9995L11.332 1.99955Z"
                            stroke="#477577"
                            stroke-width="1.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_219_8442">
                            <rect width="16" height="16" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <span>Edit data</span>
            </div>
            <ul>
                <li className={style.PatientMedcart_Item}>
                    <p className={style.PatientMedcart_ItemHeader}>Complaints at the time of inspection:</p>
                    <ul className={style.PatientMedcart_ItemConclusion}>
                        <li>
                            <p>On a tickling in the throat, an increase in body temperature up to 37.2 degrees.</p>
                        </li>
                    </ul>
                </li>
                <li className={style.PatientMedcart_Item}>
                    <p className={style.PatientMedcart_ItemHeader}>Medical history:</p>
                    <ul className={style.PatientMedcart_ItemConclusion}>
                        <li>
                            <p>
                                She fell ill 2 days ago, when a sore throat appeared, and the temperature rose to 37.0
                                degrees. He attributes his condition to hypothermia. She was treated independently:
                                "Dekvadol", heavy drinking.
                            </p>
                        </li>
                    </ul>
                </li>
                <li className={style.PatientMedcart_Item}>
                    <p className={style.PatientMedcart_ItemHeader}>
                        <p>Objective condition at the time of inspection:</p>
                    </p>
                    <ul className={style.PatientMedcart_ItemConclusion}>
                        <li>
                            <p>
                                Skin covers are normal. The mucous membrane of the oropharynx is hyperemic, the back
                                wall is granular. Cor-activity is rhythmic, the tones are sonorous. Pulmo - breathing is
                                vesicular, there are no wheezes. Stomach - b/o. Stool, diuresis - normal.
                            </p>
                        </li>
                    </ul>
                </li>
                <li className={style.PatientMedcart_Item}>
                    <p className={style.PatientMedcart_ItemHeader}>Associated diseases:</p>
                    <ul className={style.PatientMedcart_ItemConclusion}>
                        <li>
                            {' '}
                            <p>Acute allergic urticaria, vitamin D deficiency.</p>
                        </li>
                    </ul>
                </li>
                <li className={style.PatientMedcart_Item}>
                    <p className={style.PatientMedcart_ItemHeader}>Assessment of body condition:</p>
                    <ul className={style.PatientMedcart_ItemConclusion}>
                        <li>
                            <p>
                                An acute disease with systemic, local and minimal laboratory signs of the inflammatory
                                process.
                            </p>
                        </li>
                    </ul>
                </li>
                <li className={style.PatientMedcart_Item}>
                    <p className={style.PatientMedcart_ItemHeader}>Clinical diagnosis:</p>
                    <ul className={style.PatientMedcart_ItemConclusion}>
                        <li>
                            <p>Acute pharyngitis of unspecified origin.</p>
                        </li>
                    </ul>
                </li>
                <li className={style.PatientMedcart_Item}>
                    <p className={style.PatientMedcart_ItemHeader}>Treatment recommendations:</p>
                    <ul className={style.PatientMedcart_ItemConclusion}>
                        <li>
                            {' '}
                            <p>JSC, SKB in dynamics</p>
                        </li>
                        <li>
                            {' '}
                            <p>Diet enriched with vitamins (vegetables, fruits)</p>
                        </li>
                        <li>
                            {' '}
                            <p>Drink a lot of warm liquid</p>
                        </li>
                        <li>
                            {' '}
                            <p>Avoid large crowds</p>
                        </li>
                        <li>
                            <p>
                                Frequent hand washing with soap and/or hand treatment with alcohol-containing
                                (antiseptic) agents
                            </p>
                        </li>
                        <li>
                            <p>
                                Maintaining a microclimate in the room (air temperature during the day up to 21 degrees,
                                at night 18 degrees, humidity at least 60%, frequent ventilation
                            </p>
                        </li>
                        <li>
                            <p>
                                Body temperature control, when it rises above 38.0 degrees - paracetamol ("Panadol") 500
                                mg or ibuprofen 400 mg ("Nurofen", "Ibuprom", "Imet")
                            </p>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};
