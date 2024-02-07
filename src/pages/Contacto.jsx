import React from 'react';
import { Button, TextField } from '@mui/material';
import '../styles/form.css';
import '../styles/responsive.css';
import { useState } from 'react';

const Contacto = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [isValidNombre, setIsValidNombre] = useState(true);
    const [isValidApellido, setIsValidApellido] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(true);

    const validarCampo = (campo, valor, setValid) => {
        
        setValid(valor.length >= 3 && valor.trim() !== '');
    };

    const validarNombre = (e) => {
        const valor = e.target.value;
        setNombre(valor);
        validarCampo('nombre', valor, setIsValidNombre);
    };

    const validarApellido = (e) => {
        const valor = e.target.value;
        setApellido(valor);
        validarCampo('apellido', valor, setIsValidApellido);
    };

    const validarEmail = (e) => {
        const valor = e.target.value;
        setEmail(valor);
        validarCampo('email', valor, setIsValidEmail);
    };

    const manejarEnvio = (e) => {
        e.preventDefault();

    if (isValidNombre && isValidApellido && isValidEmail) {
        alert('Formulario enviado con éxito');
    } else {
        alert('Error al enviar el formulario');
    }
};

    return (
        <div className="container-form">
            <form onSubmit={manejarEnvio}>
                <div className='form'>
                    <TextField
                        label="Nombre"
                        variant="filled"
                        margin="normal"
                        type="text"
                        placeholder="Ingrese su nombre"
                        error={!isValidNombre}
                        required
                        size="small"
                        color="success"
                        focused
                        value={nombre}
                        onChange={validarNombre}
                    />
                </div>
                <div className='form'>
                    <TextField
                        label="Apellido"
                        variant="filled"
                        margin="normal"
                        type="text"
                        placeholder="Ingrese su apellido"
                        error={!isValidApellido}
                        required
                        size="small"
                        color="success"
                        focused
                        value={apellido}
                        onChange={validarApellido}
                    />
                </div>
                <div className='form'>
                    <TextField
                        label="Email"
                        variant="filled"
                        margin="normal"
                        type="text"
                        placeholder="Ingrese su email"
                        error={!isValidEmail}
                        required
                        size="small"
                        color="success"
                        focused
                        value={email}
                        onChange={validarEmail}
                    />
                </div>
                <div className="container-button-form">
                    <Button type="submit" variant="contained" color="success">Enviar</Button>
                </div>
            </form>
        </div>
    );
};

export default Contacto;
