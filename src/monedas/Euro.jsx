import Home from '../pages/Home';
import Cotizaciones from '../json/Cotizaciones.json';
import Calculadora from '../pages/Calculadora';
const Euro=()=>{
    const variacion = Cotizaciones.Euro.venta - Cotizaciones.Euro.compra;
    const spread = (Cotizaciones.Euro.venta - Cotizaciones.Euro.compra);
    const variacionTarjeta = Cotizaciones.EuroTarjeta - Cotizaciones.EuroTarjeta;
    const spreadTarjeta = (Cotizaciones.EuroTarjeta - Cotizaciones.EuroTarjeta);



    return(
        <div>
            <Home compra={Cotizaciones.Euro.compra} venta={Cotizaciones.Euro.venta} variacion={variacion}   spread={spread} date={new Date().toISOString()} title="Euro"/>
            <Home compra={Cotizaciones.EuroTarjeta} venta={Cotizaciones.EuroTarjeta} variacion={variacionTarjeta}   spread={spreadTarjeta} date={new Date().toISOString()} title="Euro Tarjeta"/>
            <Calculadora/>
        </div>
    );
};

export default Euro;