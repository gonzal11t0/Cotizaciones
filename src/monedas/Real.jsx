import Home from '../pages/Home';
import Cotizaciones from '../json/Cotizaciones.json';
import Calculadora from '../pages/Calculadora';

const Real=()=>{
    const variacion = Cotizaciones.Real.venta - Cotizaciones.Real.compra;
    const spread = (Cotizaciones.Real.venta - Cotizaciones.Real.compra);
    const variacionTarjeta = Cotizaciones.RealTarjeta - Cotizaciones.RealTarjeta ;
    const spreadTarjeta = (Cotizaciones.RealTarjeta  - Cotizaciones.RealTarjeta );
    return(
        <div>
            <Home compra={Cotizaciones.Real.compra} venta={Cotizaciones.Real.venta} variacion={variacion}   spread={spread} date={new Date().toISOString()} title="Real"/>
            <Home compra={Cotizaciones.RealTarjeta} venta={Cotizaciones.RealTarjeta} variacion={variacionTarjeta}   spread={spreadTarjeta} date={new Date().toISOString()} title="Real tarjeta"/>
            <Calculadora/>
        </div>
    );
};

export default Real;