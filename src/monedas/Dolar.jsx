import Home from '../pages/Home';
import Calculadora from '../pages/Calculadora';
import Cotizaciones from '../json/Cotizaciones.json';
const Dolar=()=>{
    const variacionOficial = Cotizaciones.DolarOficial - Cotizaciones.DolarOficial ;
    const spreadOficial = (Cotizaciones.DolarOficial - Cotizaciones.DolarOficial);
    const variacionTarjeta = Cotizaciones.DolarTarjeta - Cotizaciones.DolarTarjeta;
    const spreadTarjeta = (Cotizaciones.DolarTarjeta - Cotizaciones.DolarTarjeta);
    const variacionMayorista = Cotizaciones.DolarMayorista - Cotizaciones.DolarMayorista;
    const spreadMayorista = (Cotizaciones.DolarMayorista - Cotizaciones.DolarMayorista);
    return(
        <div>
            <Home compra={Cotizaciones.DolarOficial}    venta={Cotizaciones.DolarOficial} variacion={variacionOficial}   spread={spreadOficial} date={new Date().toISOString()} title="Dolar oficial"/>
            <Home compra={Cotizaciones.DolarTarjeta}    venta={Cotizaciones.DolarTarjeta} variacion={variacionTarjeta}   spread={spreadTarjeta} date={new Date().toISOString()} title="Dolar Tarjeta"/>
            <Home compra={Cotizaciones.DolarMayorista}  venta={Cotizaciones.DolarMayorista} variacion={variacionMayorista}   spread={spreadMayorista} date={new Date().toISOString()} title="Dolar Mayorista"/>
            <Calculadora/>
        </div>
    );
};

export default Dolar;