import React from 'react'
import '../styles/style.css';
import '../styles/Home.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Pregunstas=()=>{
  return(
    <div className="container container-preguntas" >
      <Accordion role='button' aria-expanded aria-controls="panel1-content" aria-label="Preguntas y respuestas sobre el Dolar." sx="background:green; color:white;">
        <AccordionSummary expandIcon={<ArrowDownwardIcon />} aria-controls="panel1-content" id="panel1-header">
          <Typography>Dólar Blue: ¿cuál es la cotización del dólar Blue o el precio dólar blue hoy? A cuánto se vende el dólar blue hoy?</Typography>
        </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Estas son algunas preguntas que se hacen todos los días los argentinos cuando piensan en el dólar estadounidense sobretodo a partir de fines de 2019 
            cuando se implementó nuevamente el control de cambios en Argentina.
            Pero obviamente hay muchas más preguntas e inquietudes frecuentes sobre el dólar y especialmente sobre el dólar blue y de las cuáles un argentino no 
            podría dejar de conocer las respuestas a cada una de ellas.
            A continuación, presentamos una serie de preguntas frecuentes y respuestas sobre dólar blue que surgen de la interacción con nuestros usuarios a través 
            del blog de cotizaciones.com, redes sociales y emails.
            </Typography>
        </AccordionDetails>
        
      </Accordion>
      
      <Accordion role='button' aria-expanded aria-controls="panel2-content" aria-label="Preguntas y respuestas sobre el Dolar." sx="background:green; color:white;">
        <AccordionSummary expandIcon={<ArrowDownwardIcon />} aria-controls="panel1-content" id="panel1-header">
          <Typography>¿Qué es el Dólar Blue?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          El Dólar Blue es el dólar que se consigue en el mercado negro o mercado paralelo. La cotización o valor del Dólar 
          Blue hoy generalmente es superior a la cotización del dólar oficial y suele aumentar a medida que aumenta el control de 
          cambios o se incrementan las restricciones para la compra de dólares al precio oficial.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion role='button' aria-expanded aria-controls="panel3-content" aria-label="Preguntas y respuestas sobre el Dolar." sx="background:green; color:white;">
        <AccordionSummary expandIcon={<ArrowDownwardIcon />} aria-controls="panel1-content" id="panel1-header">
          <Typography>¿Existe una cotización o precio oficial del dólar blue?</Typography>
        </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Dado que el dólar blue se opera en el mercado negro, no existe una cotización oficial del gobierno del dólar blue.
            </Typography>
        </AccordionDetails>
      
      </Accordion>
      
      <Accordion role='button' aria-expanded aria-controls="panel4-content" aria-label="Preguntas y respuestas sobre el Dolar." sx="background:green; color:white;">
        <AccordionSummary expandIcon={<ArrowDownwardIcon />} aria-controls="panel1-content" id="panel1-header">
          <Typography>¿De dónde surge la cotización o precio del dólar blue diariamente y dónde puedo comprar dólar blue?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          La cotizacion del dólar blue para la compra y para la venta surge de los precios de oferta y demanda de compradores y vendedores 
          que operan en el mercado negro a traves de las casas de cambio no autorizadas por el Banco Central para operar en cambios denominadas
          “cuevas”. Por ejemplo cuando se desea realizar una compra de dólar blue se concurre o se contacta a una cueva y se pide el precio o 
          cotización del dólar blue. Actualmente algunas cuevas o arbolitos (como se conoce a las personas que venden dólar blue en la calle
          Florida de la Ciudad Autónoma de Buenos Aires) operan por celular y por WhatsApp
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion role='button' aria-expanded aria-controls="panel5-content" aria-label="Preguntas y respuestas sobre el Dolar." sx="background:green; color:white;">
        <AccordionSummary expandIcon={<ArrowDownwardIcon />} aria-controls="panel1-content" id="panel1-header">
          <Typography>¿Las compras y ventas de dólar blue se realizan por transferencia bancaria?</Typography>
        </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Las compras y ventas de dólar blue se realizan en efectivo ya que, como se llevan a cabo en el mercado negro, no pasan por transferencias bancarias.
            </Typography>
        </AccordionDetails>

      </Accordion>

      <Accordion role='button' aria-expanded aria-controls="panel6-content" aria-label="Preguntas y respuestas sobre el Dolar." sx="background:green; color:white;">
        <AccordionSummary expandIcon={<ArrowDownwardIcon/>} aria-controls="panel1-content" id="panel1-header">
          <Typography>Si compro dólar blue, ¿estoy pagando el impuesto PAIS del 30%?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Como el dólar blue se consigue en el mercado informal o negro, no se paga ningún tipo de impuesto. No obstante, hay que considerar que dado que la cotizacion del 
          dólar blue es mayor que la cotizacion del dólar oficial incluso si se le agrega el impuesto PAIS del 30%, de alguna manera se podria considerar que en el precio 
          del dólar blue hoy está incluido o implícito dicho impuesto.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion role='button' aria-expanded aria-controls="panel7-content" aria-label="Preguntas y respuestas sobre el Dolar." sx="background:green; color:white;">
        <AccordionSummary expandIcon={<ArrowDownwardIcon/>} aria-controls="panel1-content" id="panel1-header">
          <Typography>¿Cómo es también conocido o denominado el dólar blue?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Al dólar blue tambien se lo llama o denomina dólar informal, dado que se opera justamente en el mercado informal de cambios.
          </Typography>
        </AccordionDetails>
      </Accordion>
    
      <Accordion role='button' aria-expanded aria-controls="panel8-content" aria-label="Preguntas y respuestas sobre el Dolar." sx="background:green; color:white;">
        <AccordionSummary expandIcon={<ArrowDownwardIcon/>} aria-controls="panel1-content" id="panel1-header">
          <Typography>¿Quiénes compran dólar blue?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Generalmente las personas suelen comprar dólar blue para acceder a la moneda estadounidense a pesar de los límites 
            para la compra de dólares al precio oficial que establece el gobierno o porque no poseen capacidad contributiva o fiscal para 
            justificar ingresos o ganancias que le permitan adquirir los dólares.
          </Typography>
        </AccordionDetails>
      </Accordion>
    
      <Accordion role='button' aria-expanded aria-controls="panel9-content" aria-label="Preguntas y respuestas sobre el Dolar." sx="background:green; color:white;">
        <AccordionSummary expandIcon={<ArrowDownwardIcon/>} aria-controls="panel1-content" id="panel1-header">
          <Typography>¿Por qué la gente compra dólares blue?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Porque la gente que puede ahorrar quiere protegerse de la devaluación del peso argentino que se produce por la elevada inflación. 
          Además no existen alternativas en pesos que le aseguren al público en general una rentabilidad superior o al menos igual a la inflación 
          (por ejemplo los plazos fijos de los bancos pagan tasas menores que la mitad de la tasa de inflación proyectada).
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Pregunstas;