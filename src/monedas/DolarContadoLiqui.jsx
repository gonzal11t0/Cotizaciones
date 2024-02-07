import Home from '../pages/Home';
import Cotizaciones from '../json/Cotizaciones.json';
import Calculadora from '../pages/Calculadora';

const DolarContadoLiqui=()=>{

    const variacion = Cotizaciones.ContadoConLiqui - Cotizaciones.ContadoConLiqui;
    const spread = (Cotizaciones.ContadoConLiqui - Cotizaciones.ContadoConLiqui);
    return(
        <div>
            <Home compra={Cotizaciones.ContadoConLiqui} venta={Cotizaciones.ContadoConLiqui} variacion={variacion}   spread={spread} date={new Date().toISOString()} title="CCL"/>
            <Calculadora/>
        </div>
    );
};

export default DolarContadoLiqui;