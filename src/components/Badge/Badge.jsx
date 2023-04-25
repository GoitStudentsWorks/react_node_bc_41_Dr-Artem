import style from './Badge.module.css';

export const Badge = () => {
    return (
        <div className={style.Badge}>
            <p className={style.BadgeText}>Patient</p>
        </div>
    );
};
