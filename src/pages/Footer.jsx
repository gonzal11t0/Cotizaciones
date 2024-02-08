import React from 'react';
import '../styles/style.css'
import '../styles/footer.css';
import '../styles/responsive.css';
const Footer=()=>{
    return(
            <footer role='footer'  className='py-3 my-4'>
                <ul aria-label='Footer con enlace al Linkedin del desarrollador y al email del desarrollador' className='nav justify-content-center border-bottom pb-3 mb-3'>
                    <li className='nav-item'>
                        <a aria-controls='Link-a-Linkedin-content' aria-label='Link al Linkedin del desarrollador' className='nav-link px-2 text-muted' href='https://www.linkedin.com/in/gonzalo-lazarte-desarrollador-web/' target='_blank' rel='noreferrer'>ir Linkedin:</a>
                    </li><br/>
                    <li className='nav-item'>
                        <a aria-controls='Link-a-Email-content' aria-label='Link al email del desarrollador' className='nav-link px-2 text-muted' href='mailto:Gonzalo-Lazarte-Programador@outlook.com' target='_blank' rel='noreferrer'>ir Email:</a>
                    </li>
                </ul>
                <p className='text-center text-muted'>© 2024 Company, Inc</p>
            </footer>
    );
};

export default Footer;