import Header from './Header/Header';
import MainPage from 'pages/MainPage/MainPage';
export const App = () => {
    return (
        <div
        // style={{
        //     height: '100vh',
        //     display: 'flex',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     fontSize: 40,
        //     color: '#010101',
        // }}
        >
            <Header />
            <MainPage />
        </div>
    );
};
