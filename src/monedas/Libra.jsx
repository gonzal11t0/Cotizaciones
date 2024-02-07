import Home from '../pages/Home';
import Cotizaciones from '../json/Cotizaciones.json';
import Calculadora from '../pages/Calculadora';


const Libra=()=>{

    const variacion         = Cotizaciones.Libra.venta - Cotizaciones.Libra.Compra;
    const spread            = (Cotizaciones.Libra.Venta - Cotizaciones.Libra.Compra);
    const variacionTarjeta  = Cotizaciones.LibraTarjeta - Cotizaciones.LibraTarjeta;
    const spreadTarjeta     = (Cotizaciones.LibraTarjeta - Cotizaciones.LibraTarjeta);
    return(
        <div>
            <Home compra={Cotizaciones.Libra.Compra} venta={Cotizaciones.Libra.Venta} variacion={variacion}             spread={spread}         date={new Date().toISOString()} title="Libra Esterlina"/>
            <Home compra={Cotizaciones.LibraTarjeta} venta={Cotizaciones.LibraTarjeta} variacion={variacionTarjeta}     spread={spreadTarjeta}  date={new Date().toISOString()} title="Libra Esterlina Tarjeta"/>
            <Calculadora/>
        </div>
    );
};

export default Libra;