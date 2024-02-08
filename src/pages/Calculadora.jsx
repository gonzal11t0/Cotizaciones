import React, { useState } from 'react'
import '../styles/calculadora.css'
import '../styles/responsive.css'
import { TextField } from '@mui/material';
import Cotizaciones from '../json/Cotizaciones.json';


const Calculadora = () => {

    const [cantidad, setCantidad] = useState(0);
    const [isValidCantidad, setIsValidCantidad] = useState(true);
    const [selectedOption, setSelectedOption] = useState('');

    const validarCampo = (valor, setIsValidCantidad, setValid) => {
        setValid(valor.length >= 1 && valor.trim() !== '');
    };

    const validarCantidad = (e) => {
        const valor = e.target.value;
        setCantidad(valor);
        validarCampo(valor, setIsValidCantidad, setIsValidCantidad);
    };

    const obtenerTipoDivisa = () => {
        const select = document.querySelector('select[name="selectedDolar"]');
        return select ? select.value : '';
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    function Operaciones(cantidad,Dolar){
        if (Dolar === "DolarTarjeta"){
            return cantidad * Cotizaciones.DolarTarjeta;
        }else  if (Dolar === "DolarMayorista"){
            return cantidad * Cotizaciones.DolarMayorista;
        }else  if (Dolar === "DolarBlue"){
            return cantidad * Cotizaciones.dolarBlue.venta;
        }else  if (Dolar === "Euro"){
            return cantidad * Cotizaciones.EuroTarjeta;
        }else  if (Dolar === "Libra"){
            return cantidad * Cotizaciones.LibraTarjeta;
        }else  if (Dolar === "Real"){
            return cantidad *Cotizaciones.RealTarjeta;
        }else  if (Dolar === "PesoUruguayo"){
            return cantidad * Cotizaciones.PesoUruguayoTarjeta;
        }else  if (Dolar === "DolarContadoLiqui"){
            return cantidad *Cotizaciones.ContadoConLiqui;
        }
    };

    const tipoDivisa = obtenerTipoDivisa();
    const manejarEnvio = (e) => {
        e.preventDefault();
    };
    return (
        <div className='container-calculadora'>
            <div className='container-titulo-calculadora'>
                <h1 className='icon'>Calculadora de divisas</h1>
            </div>
            <div className='container-operacion'>
                <form onChange={manejarEnvio}>
                    <div className='container-select-options'>
                        <select name="selectedDolar" onChange={handleOptionChange}>
                            <option id='DolarBlue' value="DolarBlue">Dolar Blue</option>
                            <option id='Euro' value="Euro">Euro</option>
                            <option id='Libra' value="Libra">Libra</option>
                            <option id='Real' value="Real">Real</option>
                            <option id='PesoUruguayo' value="PesoUruguayo">Peso Uruguayo</option>
                            <option id='DolarMayorista' value="DolarMayorista">Dolar Mayorista</option>
                            <option id='DolarContadoLiqui' value="DolarContadoLiqui">CCL</option>
                            <option id='DolarTarjeta' value="DolarTarjeta">Dolar tarjeta</option>
                        </select>
                    </div>
                    <div className='form'>
                        <TextField
                            label={
                                selectedOption ? `Ingrese la cantidad en ${selectedOption}` : 'Ingrese la cantidad'
                            }
                            variant="filled"
                            margin="normal"
                            type="number"
                            placeholder="Ingrese la cantidad"
                            error={!isValidCantidad}
                            required
                            size="small"
                            color="success"
                            focused
                            value={cantidad}
                            onChange={validarCantidad}
                        />
                    </div>
                    <div className='container-resultado'>
                        <h2>$ {Operaciones(cantidad, tipoDivisa)}</h2>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Calculadora;
