import s from '../InformationBlock/InformationBlock.module.css';
import DNA from '../../images/InformationBlock/DNA.png';

function InformationBlock() {
    return (
        <div className={s.info_wrapper}>
            <div className={s.info_bgr}>
                <div className={s.text_wrapper}>
                    <h2 className={s.info_header}>MedDoc is a revolutionary web service </h2>
                    <p className={s.info_text}>
                        Designed to streamline the process of connecting doctors and patients. With MedDoc, finding a
                        doctor or medical professional is easier than ever before.
                    </p>
                </div>
                <img src={DNA} alt="dna" />
            </div>
        </div>
    );
}
export default InformationBlock;
