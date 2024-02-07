import Home from '../pages/Home';
import Cotizaciones from '../json/Cotizaciones.json';
import Calculadora from '../pages/Calculadora';

const PesoUruguayo = () => {    
    const variacion = Cotizaciones.PesoUruguayo.venta - Cotizaciones.PesoUruguayo.compra;
    const spread = (Cotizaciones.PesoUruguayo.venta - Cotizaciones.PesoUruguayo.compra);
    const variacionTarjeta = Cotizaciones.PesoUruguayo.venta - Cotizaciones.PesoUruguayoTarjeta.compra;
    const spreadTarjeta = (Cotizaciones.PesoUruguayo.venta - Cotizaciones.PesoUruguayoTarjeta.compra);
    return (
        <div>
            <Home
                compra={Cotizaciones.PesoUruguayo.compra}
                venta={Cotizaciones.PesoUruguayo.venta}
                variacion={variacion}
                spread={spread}
                date={new Date().toISOString()}
                title="Peso Uruguayo"
            />
            <Home
                compra={Cotizaciones.PesoUruguayoTarjeta}
                venta={Cotizaciones.PesoUruguayoTarjeta}
                variacion={variacionTarjeta}
                spread={spreadTarjeta}
                date={new Date().toISOString()}
                title="Peso Uruguayo tarjeta"
            />
            <Calculadora/>
        </div>
    );
};

export default PesoUruguayo;
