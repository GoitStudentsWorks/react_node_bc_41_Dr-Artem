import css from './MedicalHistoryPage.module.css'
import { ProfileBlockPatient } from 'components/ProfileBlockPatient/ProfileBlockPatient'
// import { ProfileBlockDoctore } from 'components/ProfileBlockDoctore/ProfileBlockDoctore'

export const MedicalHistoryPage = () => {
   return (
    <section className={css.section}>
        <ProfileBlockPatient/>
    </section>
   ) 
}