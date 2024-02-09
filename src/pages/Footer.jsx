import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import React from 'react';
import '../styles/style.css'
import '../styles/footer.css';
import '../styles/responsive.css';
const Footer=()=>{
    return(
        <footer style={{ backgroundColor: '#06521e' }}>
            <div className='container py-3'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <ul className='nav'>
                            <li className='nav-item'>
                                <a className='nav-link px-2 text-muted' href='https://www.linkedin.com/in/gonzalo-lazarte-desarrollador-web/' target='_blank' rel='noreferrer'>
                                    <FaLinkedin /> LinkedIn
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link px-2 text-muted' href='mailto:Gonzalo-Lazarte-Programador@outlook.com' target='_blank' rel='noreferrer'>
                                    <FaEnvelope /> Email
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;