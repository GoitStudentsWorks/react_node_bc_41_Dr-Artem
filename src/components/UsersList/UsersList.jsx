import css from './UsersList.module.css';
const UsersList = ({ listOfUsers, children }) => {
    return (
        <ul className={css.cardsList}>
            {listOfUsers.map((card, index) => (
                <li key={index}>{children}</li>
            ))}
        </ul>
    );
};

export default UsersList;
