import React, { useEffect, useState }  from "react";
import '../styles/Home.css';
import '../styles/responsive.css';
import { BiChevronsDown } from "react-icons/bi";
import { BiDollar } from "react-icons/bi";
import { BiChevronsUp } from "react-icons/bi";
import { BiSolidTimeFive } from "react-icons/bi";
import { RiArrowUpDoubleFill } from "react-icons/ri";

const calcularVariacion = (props) => {
    const venta = parseFloat(props.venta?.replace("$ ", "").replace(",", ".")) || 0;
    const compra = parseFloat(props.compra?.replace("$ ", "").replace(",", ".")) || 0;
    const variacion =  parseFloat(((venta - compra) / compra * 100).toFixed(2));
    return variacion;
};

const CalcularSpread = (props) => {
    const venta = parseFloat(props.venta?.replace("$ ", "").replace(",", ".")) || 0;
    const compra = parseFloat(props.compra?.replace("$ ", "").replace(",", ".")) || 0;
    return venta - compra;
};

const Home = (props) => {


    const CalcularTiempoTrasnCurrido = (fecha) => {
        const fechaActual = new Date();
        const fechaUltimaActualizacion = new Date(fecha);
        const diferencia = fechaActual - fechaUltimaActualizacion;
    
        const minutos = Math.floor(diferencia / (1000 * 60));
        const horas = Math.floor(diferencia / (1000 * 60 * 60));
    
        if (minutos < 60) {
            return `Última actualización hace ${minutos} minutos`;
        } else {
            return `Última actualización hace ${horas} horas`;
        }
    };
    
    const [tiempoTranscurrido, setTiempoTranscurrido] = useState(
        CalcularTiempoTrasnCurrido(props.date)
    );
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTiempoTranscurrido(CalcularTiempoTrasnCurrido(props.date));
        }, 60000);
        return () => clearInterval(intervalId);
    }, [props.date]);


    return (
        <div className="container">
            <div className="container-titulo">
                <h1>{props.title}</h1>
            </div>
            <table className="cotizaciones" id="compra-venta">
                <thead>
                    <tr>
                    <th className="dolar-blue"><BiDollar color="green" /> Compra</th>
                    <th className="dolar-blue"><BiDollar color="green" /> Venta</th>
                    <th className="dolar-blue"><BiChevronsUp color="green" /><BiChevronsDown color="red" />Variacion</th>
                    <th className="dolar-blue"><BiDollar color="green" />Spread</th>
                    <th className="dolar-blue"><BiSolidTimeFive color="green" />Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="colCompraVenta"><BiDollar color="green" />{props.compra}</td>
                        <td className="colCompraVenta"><BiDollar color="green"/>{props.venta}</td>
                        <td className="colVariacion">
                            <span className="variacion">
                                {calcularVariacion(props)}% {calcularVariacion(props) < 0 ? <BiChevronsDown color="red" /> : <RiArrowUpDoubleFill color="green" />}
                            </span>
                        </td>
                        <td className="colSpread">
                            <BiDollar color="green"/>
                                {CalcularSpread(props) >= 0 ? `+${CalcularSpread(props)}` : CalcularSpread(props)}
                        </td>
                        <td className="colFecha">
                            <span itemProp="datePublished" title={tiempoTranscurrido}> {tiempoTranscurrido}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default Home;