import style from './PlugPage.module.css';

export const PlugPage = ({ children }) => {
    return <section className={style.gridTemplate}>{children}</section>;
};
