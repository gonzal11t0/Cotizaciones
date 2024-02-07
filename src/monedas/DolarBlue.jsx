import Home from '../pages/Home';
import Cotizaciones from '../json/Cotizaciones.json';
import Calculadora from '../pages/Calculadora';

const DolarBlue=()=>{

    const variacion = Cotizaciones.dolarBlue.venta - Cotizaciones.dolarBlue.compra;
    const spread = (Cotizaciones.dolarBlue.venta - Cotizaciones.dolarBlue.compra);

    return(
        <div>
            <Home compra={Cotizaciones.dolarBlue.compra} venta={Cotizaciones.dolarBlue.venta} variacion={variacion}   spread={spread} date={new Date().toISOString()} title="Dolar Blue"/>
            <Calculadora/>
        </div>
    );
};
export default DolarBlue;