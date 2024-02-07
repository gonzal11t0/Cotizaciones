import React from 'react';
import '../styles/style.css'
import '../styles/footer.css';
import '../styles/responsive.css';
const Footer=()=>{
    return(
            <footer  className='py-3 my-4'>
                <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
                    <li className='nav-item'>
                        <a className='nav-link px-2 text-muted' href='https://www.linkedin.com/in/gonzalo-lazarte-desarrollador-web/' target='_blank' rel='noreferrer'>Linkedin:</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link px-2 text-muted' href='mailto:Gonzalo-Lazarte-Programador@outlook.com' target='_blank' rel='noreferrer'>Email:</a>
                    </li>
                </ul>
                <p className='text-center text-muted'>© 2024 Company, Inc</p>
            </footer>
    );
};

export default Footer;