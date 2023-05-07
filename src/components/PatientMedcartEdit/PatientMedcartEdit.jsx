import { UilPlus, UilTrashAlt } from '@iconscout/react-unicons';
import { Button, IconButton, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { updateVisit } from 'redux/visits/operation';
import * as yup from 'yup';
import style from './PatientMedcartEdit.module.css';

const schema = yup.object().shape({
    complaints: yup.string().required('Required field'),
    associatedDiseases: yup.string().required('Required field'),
    bodyCondition: yup.string().required('Required field'),
    clinicalDiagnosis: yup.string().required('Required field'),
    medicalHistory: yup.string().required('Required field'),
    objectiveCondition: yup.string().required('Required field'),
    recomendation: yup.string().required('Required field'),
});

export const PatientMedcartEdit = ({ setEditMedcart, medcart, id }) => {
    const dispatch = useDispatch();

    const handleSubmitForm = values => {
        const newData = {
            complaints: values.complaints,
            associatedDiseases: values.associatedDiseases,
            bodyCondition: values.bodyCondition,
            clinicalDiagnosis: values.clinicalDiagnosis,
            medicalHistory: values.medicalHistory,
            objectiveCondition: values.objectiveCondition,
            recomendation: values.recomendation,
        };
        dispatch(updateVisit({ id, ...newData }));
        setEditMedcart(true);
    };

    const formik = useFormik({
        initialValues: {
            complaints: medcart[0].textList[0],
            associatedDiseases: medcart[1].textList[0],
            bodyCondition: medcart[2].textList[0],
            clinicalDiagnosis: medcart[3].textList[0],
            medicalHistory: medcart[4].textList[0],
            objectiveCondition: medcart[5].textList[0],
            recomendation: medcart[6].textList[0],
        },
        validationSchema: schema,
        onSubmit: values => {
            handleSubmitForm(values);
        },
    });

    return (
        <div className={style.PatientMedcart_Edit}>
            <form onSubmit={formik.handleSubmit}>
                <ul className={style.PatientMedcart_EditList}>
                    <li className={style.PatientMedcart_EditItem}>
                        <div className={style.PatientMedcart_EditHeaderWrapper}>
                            <Typography
                                variant="subtitle"
                                color="text.black"
                                className={style.PatientMedcart_EditHeader}
                            >
                                {medcart[0].title}
                            </Typography>
                            <IconButton color="primary" type="button">
                                <UilPlus style={{ width: '24px', height: '24px' }} />
                            </IconButton>
                        </div>
                        <ul className={style.PatientMedcart_EditInputList}>
                            <li className={style.PatientMedcart_EditInputItem}>
                                <TextField
                                    fullWidth
                                    multiline
                                    placeholder="Enter text"
                                    type="text"
                                    name="complaints"
                                    value={formik.values.complaints}
                                    onChange={formik.handleChange}
                                    error={formik.touched.complaints && Boolean(formik.errors.complaints)}
                                    helperText={formik.touched.complaints && formik.errors.complaints}
                                />
                                <IconButton color="primary" type="button">
                                    <UilTrashAlt style={{ width: '24px', height: '24px' }} />
                                </IconButton>
                            </li>
                        </ul>
                    </li>
                    <li className={style.PatientMedcart_EditItem}>
                        <div className={style.PatientMedcart_EditHeaderWrapper}>
                            <Typography
                                variant="subtitle"
                                color="text.black"
                                className={style.PatientMedcart_EditHeader}
                            >
                                {medcart[1].title}
                            </Typography>
                            <IconButton color="primary" type="button">
                                <UilPlus style={{ width: '24px', height: '24px' }} />
                            </IconButton>
                        </div>
                        <ul className={style.PatientMedcart_EditInputList}>
                            <li className={style.PatientMedcart_EditInputItem}>
                                <TextField
                                    fullWidth
                                    multiline
                                    placeholder="Enter text"
                                    type="text"
                                    name="medicalHistory"
                                    value={formik.values.medicalHistory}
                                    onChange={formik.handleChange}
                                    error={formik.touched.medicalHistory && Boolean(formik.errors.medicalHistory)}
                                    helperText={formik.touched.medicalHistory && formik.errors.medicalHistory}
                                />
                                <IconButton color="primary" type="button">
                                    <UilTrashAlt style={{ width: '24px', height: '24px' }} />
                                </IconButton>
                            </li>
                        </ul>
                    </li>
                    <li className={style.PatientMedcart_EditItem}>
                        <div className={style.PatientMedcart_EditHeaderWrapper}>
                            <Typography
                                variant="subtitle"
                                color="text.black"
                                className={style.PatientMedcart_EditHeader}
                            >
                                {medcart[2].title}
                            </Typography>
                            <IconButton color="primary" type="button">
                                <UilPlus style={{ width: '24px', height: '24px' }} />
                            </IconButton>
                        </div>
                        <ul className={style.PatientMedcart_EditInputList}>
                            <li className={style.PatientMedcart_EditInputItem}>
                                <TextField
                                    fullWidth
                                    multiline
                                    placeholder="Enter text"
                                    type="text"
                                    name="objectiveCondition"
                                    value={formik.values.objectiveCondition}
                                    onChange={formik.objectiveCondition}
                                    error={
                                        formik.touched.objectiveCondition && Boolean(formik.errors.objectiveCondition)
                                    }
                                    helperText={formik.touched.objectiveCondition && formik.errors.objectiveCondition}
                                />
                                <IconButton color="primary" type="button">
                                    <UilTrashAlt style={{ width: '24px', height: '24px' }} />
                                </IconButton>
                            </li>
                        </ul>
                    </li>
                    <li className={style.PatientMedcart_EditItem}>
                        <div className={style.PatientMedcart_EditHeaderWrapper}>
                            <Typography
                                variant="subtitle"
                                color="text.black"
                                className={style.PatientMedcart_EditHeader}
                            >
                                {medcart[3].title}
                            </Typography>
                            <IconButton color="primary" type="button">
                                <UilPlus style={{ width: '24px', height: '24px' }} />
                            </IconButton>
                        </div>
                        <ul className={style.PatientMedcart_EditInputList}>
                            <li className={style.PatientMedcart_EditInputItem}>
                                <TextField
                                    fullWidth
                                    multiline
                                    placeholder="Enter text"
                                    type="text"
                                    name="associatedDiseases"
                                    value={formik.values.associatedDiseases}
                                    onChange={formik.associatedDiseases}
                                    error={
                                        formik.touched.associatedDiseases && Boolean(formik.errors.associatedDiseases)
                                    }
                                    helperText={formik.touched.associatedDiseases && formik.errors.associatedDiseases}
                                />
                                <IconButton color="primary" type="button">
                                    <UilTrashAlt style={{ width: '24px', height: '24px' }} />
                                </IconButton>
                            </li>
                        </ul>
                    </li>
                    <li className={style.PatientMedcart_EditItem}>
                        <div className={style.PatientMedcart_EditHeaderWrapper}>
                            <Typography
                                variant="subtitle"
                                color="text.black"
                                className={style.PatientMedcart_EditHeader}
                            >
                                {medcart[4].title}
                            </Typography>
                            <IconButton color="primary" type="button">
                                <UilPlus style={{ width: '24px', height: '24px' }} />
                            </IconButton>
                        </div>
                        <ul className={style.PatientMedcart_EditInputList}>
                            <li className={style.PatientMedcart_EditInputItem}>
                                <TextField
                                    fullWidth
                                    multiline
                                    placeholder="Enter text"
                                    type="text"
                                    name="bodyCondition"
                                    value={formik.values.bodyCondition}
                                    onChange={formik.bodyCondition}
                                    error={formik.touched.bodyCondition && Boolean(formik.errors.bodyCondition)}
                                    helperText={formik.touched.bodyCondition && formik.errors.bodyCondition}
                                />
                                <IconButton color="primary" type="button">
                                    <UilTrashAlt style={{ width: '24px', height: '24px' }} />
                                </IconButton>
                            </li>
                        </ul>
                    </li>
                    <li className={style.PatientMedcart_EditItem}>
                        <div className={style.PatientMedcart_EditHeaderWrapper}>
                            <Typography
                                variant="subtitle"
                                color="text.black"
                                className={style.PatientMedcart_EditHeader}
                            >
                                {medcart[5].title}
                            </Typography>
                            <IconButton color="primary" type="button">
                                <UilPlus style={{ width: '24px', height: '24px' }} />
                            </IconButton>
                        </div>
                        <ul className={style.PatientMedcart_EditInputList}>
                            <li className={style.PatientMedcart_EditInputItem}>
                                <TextField
                                    fullWidth
                                    multiline
                                    placeholder="Enter text"
                                    type="text"
                                    name="clinicalDiagnosis"
                                    value={formik.values.clinicalDiagnosis}
                                    onChange={formik.clinicalDiagnosis}
                                    error={formik.touched.clinicalDiagnosis && Boolean(formik.errors.clinicalDiagnosis)}
                                    helperText={formik.touched.clinicalDiagnosis && formik.errors.clinicalDiagnosis}
                                />
                                <IconButton color="primary" type="button">
                                    <UilTrashAlt style={{ width: '24px', height: '24px' }} />
                                </IconButton>
                            </li>
                        </ul>
                    </li>
                    <li className={style.PatientMedcart_EditItem}>
                        <div className={style.PatientMedcart_EditHeaderWrapper}>
                            <Typography
                                variant="subtitle"
                                color="text.black"
                                className={style.PatientMedcart_EditHeader}
                            >
                                {medcart[6].title}
                            </Typography>
                            <IconButton color="primary" type="button">
                                <UilPlus style={{ width: '24px', height: '24px' }} />
                            </IconButton>
                        </div>
                        <ul className={style.PatientMedcart_EditInputList}>
                            <li className={style.PatientMedcart_EditInputItem}>
                                <TextField
                                    fullWidth
                                    multiline
                                    placeholder="Enter text"
                                    type="text"
                                    name="recomendation"
                                    value={formik.values.recomendation}
                                    onChange={formik.recomendation}
                                    error={formik.touched.recomendation && Boolean(formik.errors.recomendation)}
                                    helperText={formik.touched.recomendation && formik.errors.recomendation}
                                />
                                <IconButton color="primary" type="button">
                                    <UilTrashAlt style={{ width: '24px', height: '24px' }} />
                                </IconButton>
                            </li>
                        </ul>
                    </li>
                </ul>
                <Button disableElevation variant="contained" color="secondary" type="submit">
                    Save
                </Button>
            </form>
        </div>
    );
};
