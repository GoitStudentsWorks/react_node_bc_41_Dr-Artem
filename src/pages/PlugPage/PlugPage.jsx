import style from './PlugPage.module.css';

export const PlugPage = ({ children }) => {
    return (
        <section className="section">
            <div className={style.gridTemplate}>{children}</div>
        </section>
    );
};
