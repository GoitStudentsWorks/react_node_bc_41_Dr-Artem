import { Navigation } from 'components/Navigation/Navigation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { getUserInfo } from 'redux/info/operation';

export const PatientMain = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserInfo());
    }, [dispatch]);

    return (
        <>
            <Navigation />
            <Outlet />
        </>
    );
};
