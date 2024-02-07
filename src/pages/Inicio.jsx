import Arriba from "./Arriba";
import Home from "./Home";
import Preguntas from "./Preguntas";
import Cotizaciones from '../json/Cotizaciones.json';

const Inicio =()=>{

    const variacionBSAS = Cotizaciones.DolarBlueBSAS.venta - Cotizaciones.DolarBlueBSAS.compra ;
    const spreadBSAS = (Cotizaciones.DolarBlueBSAS.venta - Cotizaciones.DolarBlueBSAS.compra);

    const variacionCapitalFederal = Cotizaciones.DolarBlueCapitalFederal.venta - Cotizaciones.DolarBlueCapitalFederal.compra ;
    const spreadCapitalFederal = (Cotizaciones.DolarBlueCapitalFederal.venta - Cotizaciones.DolarBlueCapitalFederal.compra);

    const variacionCatamarca = Cotizaciones.DolarBlueCatamarca.venta - Cotizaciones.DolarBlueCatamarca.compra ;
    const spreadCatamarca = (Cotizaciones.DolarBlueCatamarca.venta - Cotizaciones.DolarBlueCatamarca.compra);

    const variacionChaco = Cotizaciones.DolarBlueChaco.venta - Cotizaciones.DolarBlueChaco.compra ;
    const spreadChaco = (Cotizaciones.DolarBlueChaco.venta - Cotizaciones.DolarBlueChaco.compra);

    const variacionChubut = Cotizaciones.DolarBlueChubut.venta - Cotizaciones.DolarBlueChubut.compra ;
    const spreadChubut = (Cotizaciones.DolarBlueChubut.venta - Cotizaciones.DolarBlueChubut.compra);

    const variacionCordoba = Cotizaciones.DolarBlueCordoba.venta - Cotizaciones.DolarBlueCordoba.compra ;
    const spreadCordoba = (Cotizaciones.DolarBlueCordoba.venta - Cotizaciones.DolarBlueCordoba.compra);

    const variacionCorrientes = Cotizaciones.DolarBlueCorrientes.venta - Cotizaciones.DolarBlueCorrientes.compra ;
    const spreadCorrientes = (Cotizaciones.DolarBlueCorrientes.venta - Cotizaciones.DolarBlueCorrientes.compra);

    const variacionEntreRios = Cotizaciones.DolarBlueEntreRios.venta - Cotizaciones.DolarBlueEntreRios.compra ;
    const spreadEntreRios = (Cotizaciones.DolarBlueEntreRios.venta - Cotizaciones.DolarBlueEntreRios.compra);

    const variacionFormosa = Cotizaciones.DolarBlueFormosa.venta - Cotizaciones.DolarBlueFormosa.compra ;
    const spreadFormosa = (Cotizaciones.DolarBlueFormosa.venta - Cotizaciones.DolarBlueFormosa.compra);

    const variacionJujuy = Cotizaciones.DolarBlueJujuy.venta - Cotizaciones.DolarBlueJujuy.compra ;
    const spreadJujuy = (Cotizaciones.DolarBlueJujuy.venta - Cotizaciones.DolarBlueJujuy.compra);

    const variacionLaPampa = Cotizaciones.DolarBlueLaPampa.venta - Cotizaciones.DolarBlueLaPampa.compra ;
    const spreadLaPampa = (Cotizaciones.DolarBlueLaPampa.venta - Cotizaciones.DolarBlueLaPampa.compra);

    
    const variacionLaRioja = Cotizaciones.DolarBlueLaRioja.venta - Cotizaciones.DolarBlueLaRioja.compra ;
    const spreadLaRioja = (Cotizaciones.DolarBlueLaRioja.venta - Cotizaciones.DolarBlueLaRioja.compra);

    const variacionMendoza = Cotizaciones.DolarBlueMendoza.venta - Cotizaciones.DolarBlueMendoza.compra ;
    const spreadMendoza = (Cotizaciones.DolarBlueMendoza.venta - Cotizaciones.DolarBlueMendoza.compra);

    
    const variacionMisiones = Cotizaciones.DolarBlueMisiones.venta - Cotizaciones.DolarBlueMisiones.compra ;
    const spreadMisiones = (Cotizaciones.DolarBlueMisiones.venta - Cotizaciones.DolarBlueMisiones.compra);

    const variacionNeuquen = Cotizaciones.DolarBlueNeuquen.venta - Cotizaciones.DolarBlueNeuquen.compra ;
    const spreadNeuquen = (Cotizaciones.DolarBlueNeuquen.venta - Cotizaciones.DolarBlueNeuquen.compra);


    const variacionRioNegro = Cotizaciones.DolarBlueRioNegro.venta - Cotizaciones.DolarBlueRioNegro.compra ;
    const spreadRioNegro = (Cotizaciones.DolarBlueRioNegro.venta - Cotizaciones.DolarBlueRioNegro.compra);

    const variacionSalta = Cotizaciones.DolarBlueSalta.venta - Cotizaciones.DolarBlueSalta.compra ;
    const spreadSalta = (Cotizaciones.DolarBlueSalta.venta - Cotizaciones.DolarBlueSalta.compra);

    const variacionSanJuan = Cotizaciones.DolarBlueSanJuan.venta - Cotizaciones.DolarBlueSanJuan.compra ;
    const spreadSanJuan = (Cotizaciones.DolarBlueSanJuan.venta - Cotizaciones.DolarBlueSanJuan.compra);

    const variacionSanLuis = Cotizaciones.DolarBlueSanLuis.venta - Cotizaciones.DolarBlueSanLuis.compra ;
    const spreadSanLuis = (Cotizaciones.DolarBlueSanLuis.venta - Cotizaciones.DolarBlueSanLuis.compra);

    const variacionSantaCruz = Cotizaciones.DolarBlueSantaCruz.venta - Cotizaciones.DolarBlueSantaCruz.compra ;
    const spreadSantaCruz = (Cotizaciones.DolarBlueSantaCruz.venta - Cotizaciones.DolarBlueSantaCruz.compra);

    const variacionSantaFe = Cotizaciones.DolarBlueSantaFe.venta - Cotizaciones.DolarBlueSantaFe.compra ;
    const spreadSantaFe = (Cotizaciones.DolarBlueSantaFe.venta - Cotizaciones.DolarBlueSantaFe.compra);

    const variacionSantiagoEstero = Cotizaciones.DolarBlueSantiagoEstero.venta - Cotizaciones.DolarBlueSantiagoEstero.compr;
    const spreadSantiagoEstero = (Cotizaciones.DolarBlueSantiagoEstero.venta - Cotizaciones.DolarBlueSantiagoEstero.compra)

    const variacionTierraFuego = Cotizaciones.DolarBlueTierraFuego.venta - Cotizaciones.DolarBlueTierraFuego.compr;
    const spreadTierraFuego = (Cotizaciones.DolarBlueTierraFuego.venta - Cotizaciones.DolarBlueTierraFuego.compra)

    const variacionTucuman = Cotizaciones.DolarBlueTucuman.venta - Cotizaciones.DolarBlueTucuman.compr;
    const spreadTucuman = (Cotizaciones.DolarBlueTucuman.venta - Cotizaciones.DolarBlueTucuman.compra)
    return (
        <div>
            <Home compra={Cotizaciones.DolarBlueBSAS.compra}            venta={Cotizaciones.DolarBlueBSAS.venta}            variacion={variacionBSAS}            spread={spreadBSAS} date={new Date().toISOString()} title="Dolar Blue en Buenos Aires"/>
            <Home compra={Cotizaciones.DolarBlueCapitalFederal.compra}  venta={Cotizaciones.DolarBlueCapitalFederal.venta}  variacion={variacionCapitalFederal}  spread={spreadCapitalFederal} date={new Date().toISOString()} title="Dolar Blue en Capital Federal"/>
            <Home compra={Cotizaciones.DolarBlueCatamarca.compra}       venta={Cotizaciones.DolarBlueCatamarca.venta}       variacion={variacionCatamarca}       spread={spreadCatamarca} date={new Date().toISOString()} title="Dolar Blue en Catamarca"/>
            <Home compra={Cotizaciones.DolarBlueChaco.compra}           venta={Cotizaciones.DolarBlueChaco.venta}           variacion={variacionChaco}           spread={spreadChaco} date={new Date().toISOString()} title="Dolar Blue en Chaco"/>
            <Home compra={Cotizaciones.DolarBlueChubut.compra}          venta={Cotizaciones.DolarBlueChubut.venta}          variacion={variacionChubut}          spread={spreadChubut} date={new Date().toISOString()} title="Dolar Blue en Chubut"/>
            <Home compra={Cotizaciones.DolarBlueCordoba.compra}         Venta={Cotizaciones.DolarBlueCordoba.venta}         variacion={variacionCordoba}         spread={spreadCordoba} date={new Date().toISOString()} title="Dolar Blue en Córdoba"/>
            <Home compra={Cotizaciones.DolarBlueCorrientes.compra}      venta={Cotizaciones.DolarBlueCorrientes.venta}      variacion={variacionCorrientes}      spread={spreadCorrientes} date={new Date().toISOString()} title="Dolar Blue en Corrientes"/>
            <Home compra={Cotizaciones.DolarBlueEntreRios.compra}       venta={Cotizaciones.DolarBlueEntreRios.venta}       variacion={variacionEntreRios}       spread={spreadEntreRios} date={new Date().toISOString()} title="Dolar Blue en Entre Ríos"/>
            <Home compra={Cotizaciones.DolarBlueFormosa.compra}         venta={Cotizaciones.DolarBlueFormosa.venta}         variacion={variacionFormosa}         spread={spreadFormosa} date={new Date().toISOString()} title="Dolar Blue en Formosa"/>
            <Home compra={Cotizaciones.DolarBlueJujuy.compra}           venta={Cotizaciones.DolarBlueJujuy.venta}           variacion={variacionJujuy}           spread={spreadJujuy} date={new Date().toISOString()} title="Dolar Blue en Jujuy"/>
            <Home compra={Cotizaciones.DolarBlueLaPampa.compra}         venta={Cotizaciones.DolarBlueLaPampa.venta}         variacion={variacionLaPampa}         spread={spreadLaPampa} date={new Date().toISOString()} title="Dolar Blue en La Pampa"/>
            <Home compra={Cotizaciones.DolarBlueLaRioja.compra}         venta={Cotizaciones.DolarBlueLaRioja.venta}         variacion={variacionLaRioja}         spread={spreadLaRioja} date={new Date().toISOString()} title="Dolar Blue en La Rioja"/>
            <Home compra={Cotizaciones.DolarBlueMendoza.compra}         venta={Cotizaciones.DolarBlueMendoza.venta}         variacion={variacionMendoza}         spread={spreadMendoza} date={new Date().toISOString()} title="Dolar Blue en Mendoza"/>
            <Home compra={Cotizaciones.DolarBlueMisiones.compra}        venta={Cotizaciones.DolarBlueMisiones.venta}        variacion={variacionMisiones}        spread={spreadMisiones} date={new Date().toISOString()} title="Dolar Blue en Misiones"/>
            <Home compra={Cotizaciones.DolarBlueNeuquen.compra}         venta={Cotizaciones.DolarBlueNeuquen.venta}         variacion={variacionNeuquen}         spread={spreadNeuquen} date={new Date().toISOString()} title="Dolar Blue en Neuquén"/>
            <Home compra={Cotizaciones.DolarBlueRioNegro.compra}        venta={Cotizaciones.DolarBlueRioNegro.venta}        variacion={variacionRioNegro}        spread={spreadRioNegro} date={new Date().toISOString()} title="Dolar Blue en Río Negro"/>
            <Home compra={Cotizaciones.DolarBlueSalta.compra}           venta={Cotizaciones.DolarBlueSalta.venta}           variacion={variacionSalta}           spread={spreadSalta} date={new Date().toISOString()} title="Dolar Blue en Salta"/>
            <Home compra={Cotizaciones.DolarBlueSanJuan.compra}         venta={Cotizaciones.DolarBlueSanJuan.venta}         variacion={variacionSanJuan}         spread={spreadSanJuan} date={new Date().toISOString()} title="Dolar Blue en San Juan"/>
            <Home compra={Cotizaciones.DolarBlueSanLuis.compra}         venta={Cotizaciones.DolarBlueSanLuis.venta}         variacion={variacionSanLuis}         spread={spreadSanLuis} date={new Date().toISOString()} title="Dolar Blue en San Luis"/>
            <Home compra={Cotizaciones.DolarBlueSantaCruz.compra}       venta={Cotizaciones.DolarBlueSantaCruz.venta}       variacion={variacionSantaCruz}       spread={spreadSantaCruz} date={new Date().toISOString()} title="Dolar Blue en Santa Cruz"/>
            <Home compra={Cotizaciones.DolarBlueSantaFe.compra}         venta={Cotizaciones.DolarBlueSantaFe.venta}         variacion={variacionSantaFe}         spread={spreadSantaFe} date={new Date().toISOString()} title="Dolar Blue en Santa Fe"/>
            <Home compra={Cotizaciones.DolarBlueSantiagoEstero.compra}  venta={Cotizaciones.DolarBlueSantiagoEstero.venta}  variacion={variacionSantiagoEstero}  spread={spreadSantiagoEstero} date={new Date().toISOString()} title="Dolar Blue en Santiago del Estero"/>
            <Home compra={Cotizaciones.DolarBlueTierraFuego.compra}     venta={Cotizaciones.DolarBlueTierraFuego.venta}     variacion={variacionTierraFuego}     spread={spreadTierraFuego} date={new Date().toISOString()} title="Dolar Blue en Tierra del Fuego"/>
            <Home compra={Cotizaciones.DolarBlueTucuman.compra}         venta={Cotizaciones.DolarBlueTucuman.venta}         variacion={variacionTucuman}         spread={spreadTucuman} date={new Date().toISOString()} title="Dolar Blue en Tucumán"/>
            <Preguntas/>
            <Arriba />
        </div>
    );
};
export default Inicio;