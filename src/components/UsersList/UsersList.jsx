import css from './UsersList.module.css';

import { ProfileBlockDoctore } from 'components/ProfileBlockDoctore/ProfileBlockDoctore';

const UsersList = ({ listOfUsers, children }) => {
    return (
        <ul className={css.cardsList}>
            {listOfUsers.map((doctorInfo, index) => (
                <li key={index}>
                    <ProfileBlockDoctore doctorInfo={doctorInfo}>{children}</ProfileBlockDoctore>
                </li>
            ))}
        </ul>
    );
};

export default UsersList;
