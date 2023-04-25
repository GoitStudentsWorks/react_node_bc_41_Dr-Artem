import React from 'react';
import LogoFooter from './LogoFooter';
import YoutubeIcon from '../../images/FooterIcons/YoutubeIcon';
import InstagramIcon from '../../images/FooterIcons/InstagramIcon';
import FacebookIcon from '../../images/FooterIcons/FacebookIcon';
import s from './Footer.module.css';

function Footer() {
  
    return (
       <div className={s.section}>
         <div className={s.box}>
           <div className={s.container}>
                <div className={s.firstpart}>
                  <LogoFooter className={s.logoFooter}/>
                    <p className={s.title}>Choose a doctor and make an 
                     appointment at a convenient time
                    </p>
                 <button type="submit" className={s.btn}>make an appointment</button>
                </div>
       
               <div className={s.secondpart}>
                  <ul className={s.iconlist}>
                    <li className={s.listitem}>
                       <a className={s.item} href="#" aria-label="instagram"> 
                         <FacebookIcon className={s.footericon} />
                       </a>
                    </li>

                    <li className={s.listitem}>
                       <a className={s.item} href="#"aria-label="instagram"> 
                        <YoutubeIcon className={s.footericon} />
                       </a>
                   </li>
            
                    <li className={s.listitem}>
                       <a className={s.item} href="#" aria-label="instagram"> 
                          <InstagramIcon className={s.footericon} />
                       </a>
                    </li>
              </ul>
             </div>
           </div>

         <div className={s.copyright}>
             <p className={s.text}>© Meddoc, 2022  The use of materials is allowed only if there is an active link to the source</p>
         </div>
         </div>
        </div>
    );
};

export default Footer;
  