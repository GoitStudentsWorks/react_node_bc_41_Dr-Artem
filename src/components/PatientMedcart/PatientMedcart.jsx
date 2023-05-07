import { Button, Typography } from '@mui/material';
import { RxPencil1 } from 'react-icons/rx';
import style from './PatientMedcart.module.css';

export const PatientMedcart = ({ setEditMedcart, medcart }) => {
    return (
        <div className={style.PatientMedcart}>
            <Button
                color="primary"
                sx={{ position: 'absolute', top: '16px', right: '16px', zIndex: 1 }}
                onClick={() => setEditMedcart(false)}
            >
                <RxPencil1 style={{ width: '20px', height: '20px' }} />
                <Typography color="text.primary" sx={{ lineHeight: 1.285, textTransform: 'none' }}>
                    Edit data
                </Typography>
            </Button>

            <ul>
                {medcart?.map(({ title, textList }, index) => {
                    return (
                        textList[0] && (
                            <li key={index} className={style.PatientMedcart_Item}>
                                <Typography
                                    component="p"
                                    variant="subtitle"
                                    color="text.black"
                                    sx={{ fontSize: { md: '20px' }, lineHeight: { md: 1.5 }, marginBottom: '16px' }}
                                >
                                    {title}
                                </Typography>
                                <ul className={style.PatientMedcart_ItemConclusion}>
                                    {textList.map((text, index) => {
                                        return (
                                            <li key={index + '1'}>
                                                <Typography
                                                    component="p"
                                                    variant="text"
                                                    color="text.gray"
                                                    sx={{ fontSize: { md: '16px' }, lineHeight: { md: 1.5 } }}
                                                >
                                                    {text}
                                                </Typography>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>
                        )
                    );
                })}
            </ul>
        </div>
    );
};
