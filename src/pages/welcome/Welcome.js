import React, { Component }from "react";
import {
  Button,
  Section, Box,
  H1, H2, H3,
  Icon,
} from '../../ui/naUI';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Welcome.css';
import Header from '../../components/header/Header';
// import imageClaudio from '../../assets/images/image-claudio-g.png';

class Home extends Component {

  getFacebookURL = () => {
    const message = 'Te invito a conocer el curso de Neoasimilación para adquirir habilidades laborales rápidamente y reducir estrés. Visitalo https://neoasimilacion.com';
    const text = encodeURIComponent(message);
    return `https://www.facebook.com/sharer.php?u=https%3A%2F%2Fneoassimilation.com&t=${text}`;
  }

  getWhatsappURL = () => {
    const message = 'Te invito a conocer el curso de Neoasimilación para adquirir habilidades laborales rápidamente y reducir estrés. Visitalo https://neoasimilacion.com';
    const text = encodeURIComponent(message);
    return `whatsapp://send?text=${text}`;
  }

  getTwitterURL = () => {
    const message = 'Te invito a conocer el curso de Neoasimilación para adquirir habilidades laborales rápidamente y reducir estrés. Visitalo https://neoasimilacion.com';
    const text = encodeURIComponent(message);
    return `https://twitter.com/intent/tweet?text=${text}`;
  }

  getLinkedinURL = () => {
    const message = 'Te invito a conocer el curso de Neoasimilación para adquirir habilidades laborales rápidamente y reducir estrés. Visitalo https://neoasimilacion.com';
    const text = encodeURIComponent(message);
    return `https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fneoassimilation.com&title=${text}`;
  }

  render() {
    // const { fullData } = this.props;
    return (
      <Container fluid>
        <Header/>
        <Section className='hero-wrapper'>
          <Row>
            <Col xs={12} lg={6} className='d-flex flex-column align-items-center justify-content-center'>
              <div className='content'>
                <H1>NEOASIMILACION</H1>
                <H2>BASADO EN FORMACION LABORAL TECNOLOGICA</H2>
                <H3>
                  El mundo de hoy requiere que tu adquieras habilidades laborales de 
                  manera constante. La falta de tiempo para estudiar, dinero, estrés,  
                  son factores que se suman a la exigencia de tu día a día. 
                  Podemos ayudarte...
                </H3>
                <p>
                  La Neoasimilación es un método basado en neurociencia con el cual 
                  obtendrás rápidamente nuevas habilidades laborales y podrás reducir 
                  tu carga cerebral. Una herramienta cognitiva creada para mejorar tu 
                  calidad de vida, independientemente de las exigencias.
                </p>
                <p>
                  En este documento podrás aprender gratis que es la Neoasimilación.
                </p>
              </div>
            </Col>
            <Col xs={12} lg={6} className='d-flex flex-column align-items-center justify-content-center'>
              <i className='image-brain-check'/>
            </Col>
          </Row>
        </Section>
        <Section className='highlight'>
          <div className='bubble-wrapper'>
            <Row>
              <Col xs={12} lg={4}>
                <i className='image-fisher'/>
              </Col>
              <Col xs={12} lg={8} className='d-flex flex-column align-items-center justify-content-center text-left'>
                "Regala un pescado a un hombre y le darás alimento para un día, 
                enseñale a pescar y lo alimentarás para el resto de su vida"
              </Col>
            </Row>
          </div>
        </Section>
        <Section>
          <Row>
            <Col xs={12} lg={8} className='text-left'>
              <H2>¿Cómo nace la Neoasimlación?</H2>
              <p>
                Soy Claudio Garaycochea, durante casi dos decadas me dedique al 
                desarrollo de proyectos en startups y compañías, 
                colaborando en todo tipo de tareas relacionadas a innovación, 
                experiencia de usuario, desarrollo de apps y websites, hasta 
                marketing corporativo y nuevas tecnologías. El cubrir todo tipo 
                de necesidades demandaba muchas horas de trabajo, momentos de 
                estrés y presión. Siempre requería aprender algo nuevo, pero 
                no podía pagar cursos por cada necesidad, tampoco disponía de 
                tiempo para ello, entraba en un pozo difícil de salir.
              </p>
              <p>
                A medida que pasaban los años, la exigencia laboral era mayor y 
                la carga cerebral aumentaba generando una sensación de malestar. 
                Esto me impulso a estudiar neurociencia para encontrar una solución 
                frente a tanta exigencia mental. El conocer como funciona nuestro 
                cerebro me permitió crear mi propio método para obtener habilidades 
                cognitivas y reducir mi estrés, lo llamé Neoasimilación. Con él, logré 
                aprender a hablar en inglés en tan solo una semana, el mismo lapso 
                para aprender lenguajes de programación para trabajar en startups y 
                compañías de IT. Tal fue el cambio en mi vida que me animó a 
                compartir este conocimiento para ayudar a los demás.
              </p>
            </Col>
            <Col xs={12} lg={4}>
              <i className='image-how-born'/>
            </Col>
          </Row>
        </Section>
        <Section className='image-left'>
          <Row>
            <Col>
              <H2>Aprende Neoasimilación gratis</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>
                En este momento de crisis es muy importante ayudarnos entre todos, 
                poder adquirir habilidades laborales rápidamente te 
                permitirá mayores oportunidades de empleo o realizar tu propio 
                emprendimiento sin que la falta de recursos te detenga
              </H3>
              <p>
                Queremos que aprendas a utilizar Neoasimilación sin coste alguno, 
                por ello hemos publicado en este documento la información necesaria para 
                que puedas comenzar a implementarlo. También sugerimos utilizar 
                como método de estudio en instituciones educativas, colegios, 
                universidad, cursos, etc. Si tienes dudas, consultanos a 
                nuestro correo. 
              </p>
            </Col>
          </Row>
        </Section>
        <Section className='dark'>
          <Row>
            <Col>
              <H2>Comencemos...</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              A continuación aprenderás cómo funciona tu cerebro, como 
              actúa automáticamente, como acelerar el proceso de aprendizaje 
              y reducir la carga cerebral. Ten en cuenta que los cambios 
              quedan bajo absoluta responsabilidad, dependerá pura y 
              exclusivamente de tu correcta implementación.
            </Col>
          </Row>
        </Section>
        <Section className='image-right'>
          <Row>
            <Col>
              <H2>¿Cómo pensamos/actuamos?</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              El como "pensamos/actuamos", es relacionado a reducir carga en nuestro cerebro. 
              Según entenemos, la asimilación es la columna vertebral de la neurociencia. 
              Donde una vez que asimilas algo es muy difícil cambiarlo porque requiere carga cerebral.
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>EJEMPLO 1</div>
                <p>
                  Cuando vemos un Rottwailer, la mayoría de nosotros 
                  "cruzamos a la vereda del frente".
                </p>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>EJEMPLO 2</div>
                <p>
                  Cuando vamos por una salsa de tomate en un supermercado, 
                  buscamos una lata de color rojo.
                </p>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>EJEMPLO 3</div>
                <p>
                  Cuando conducimos nuestro automóvil y hablamos.
                </p>
              </Box>
            </Col>
          </Row>
          <Row>
            <Col>
              Otro ejemplo de asimilación es "La rzaón por la que tu cberreo pudee leer etse txeto".
              Casi todo el tiempo tu cerebro actúa de manera automática con lo que haz asimilado previamente.
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <H2>¿Qué tan automático somos?</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              Hay muchas teorías que si bien no aseguramos que son ciertas, nos ayudan a medir como 
              actuamos en el día a día, se indexa en tres funciones básicas que nos ayudan a 
              comprender nuestro comportamiento.
            </Col>
          </Row>
          <Row>
            <Col>
              <i className='image-3-brains'/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>NEOCORTEX</div>
                <p>
                  El cerebro que piensa, lo utilzamos apróximadamente un 10%.
                </p>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>LIMBICO</div>
                <p>
                  El cerebro que siente, lo utilizamos apróximadamente un 10%.
                </p>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>REPTILIANO</div>
                <p>
                  El cerebro que actúa automáticamente, lo utilizamos apróximadamente un 80%.
                </p>
              </Box>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Para entender cómo tu vives, citamos el siguiente ejemplo. Años atrás se 
                realizo una campaña de McDonald's, hicieron una encuesta a sus clientes 
                y todos estaban de acuerdo que sería bueno ofrecer comida saludable.
              </p>
              <p>
                Meses más tarde y millones de dolares invertidos en publicidad, fue un total 
                fracaso, la gente prefería seguir comiendo hamburguesas. Esto se debe a 
                que en el momento de la encuesta, la gente respondía con el cerebro 
                Neocórtex (o cerebro racional), pero a la hora de elegir utiliza el 
                cerebro Reptiliano (o cerebro automático).
              </p>
              <p>
                Es importante entender que dejamos nuestra vida en manos del cerebro 
                reptiliano. Es el mismo que domina el 80% de las desiciones de tu vida. 
                A su vez, tu cerebro Reptiliano se divide apróximadamente 10% genético 
                y 90% por asimilación.
              </p>
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <H2>Asimilación define tu vida</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>
                El funcionamiento de tu cerebro a lo largo de tu vida actúa por "asimilación", 
                es decir, aprende algo, asimila y aplica automáticamente para reaccionar de 
                manera inmediata.
              </H3>
              <p>
                Esta claro que no podemos razonar todo por cuestiones obvias. Estos 3 pasos en 
                que nuestro cerebro actúa, es positivo para resolver en lo inmediato, pero, 
                generan un gran problema porque define el camino de nuestras vidas, ya que 
                cada acción depende de cosas que asimilamos previamente, gran parte de ellas 
                de manera inconsciente. Con Neoasimilación aprenderás a usar tu cerebro 
                de manera más racional y consciente.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <Box>
                <div className='box-image'>
                  <i className='image-assimilation-step-1'/>
                </div>
                <div className='title'>APRENDE</div>
                <p>
                  Tu cerebro se encuentra en constante aprendizaje de manera consciente o inconsciente.
                </p>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='box-image'>
                  <i className='image-assimilation-step-2'/>
                </div>
                <div className='title'>ASIMILA</div>
                <p>
                  Una vez que aprende, esta información se graba en tu cabeza de manera consciente e inconsciente.
                </p>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='box-image'>
                  <i className='image-assimilation-step-3'/>
                </div>
                <div className='title'>APLICA AUTOMATICAMENTE</div>
                <p>
                  Al asimilar tu cerebro aplicará automáticamente esa información.
                </p>
              </Box>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Por ejemplo, cuando discutimos sobre política con otra persona, 
                si intentamos demostrarle con evidencias claras que esta equivocada, 
                esta persona no entenderá, o te dirá que si, pero luego seguirá 
                "pensando" lo mismo, aunque tenga un elefante frente a sus ojos, 
                no lo verá. Esta otra persona también somos nosotros, las cosas 
                se escapan de nuestra comprensión, ya que todo depende de nuestra 
                asimilación previa. 
              </p>
              <p>
                La falta de correcta asimilación es la base del por qué peleamos, 
                nos enojamos, en ocaciones deriva en cosas peores. A este proceso 
                lo llamé "brain blocker", es el proceso en que la asimilación 
                previa no deja lugar a la comprensión. Se puede cambiar la 
                asimilación pero consta de técnicas de repetición.
              </p>
              <p>
                Por otro lado, ¿imaginas cuanto tardaríamos hablando si fuésemos seres 
                plenamente racionales? sería imposible, por eso casi siempre 
                actuamos de manera automática gracias a la asimilación.
              </p>
            </Col>
          </Row>
        </Section>
        <Section className='dark'>
          <Row>
            <Col>
              Genial, ya sabemos que nuestro cerebro aprende de manera consciente e inconsciente, 
              asimila y la aplica automáticamente. La asimilación es la información que 
              vas a repetir automáticamente, define el 80% de nuestras decisiones, como pensamos 
              y que haremos. Por este motivo, tomamos la asimilación como el punto más importante 
              en nuestras capacidades, este proceso automático reducirá tu carga cerebral en 
              cualquier tarea independientemente de su complejidad, hablar, conducir, prevenir, 
              aprender, empleo, etc. Un proceso tan increible que incluso podemos hacer 
              multiples tareas a la vez.
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <H2>Neoasimilación</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>
                Ahora bien, que pasa si hacemos el mismo proceso de asimilación pero de manera 
                consciente. A este proceso lo hemos llamado Neoasimilación, los resultados son 
                muy interesantes, adquirimos habilidades laborales rápidamente, 
                reducimos el estrés, comprendemos mejor a terceros y más.
              </H3>
              <p>   
                Utilizando correctamente la neoasimilación, independientemente de la complejidad 
                de la tarea, podrás guardar en tu cerebro solo la información necesaria para 
                actuar rápido, además, lo asimilado reducirá considerablemente tu carga cerebral. 
                Generando un estado de conford y mejorando tu calidad de vida.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <Box>
                <div className='box-image'>
                  <i className='image-neoassimilation-step-1'/>
                </div>
                <div className='title'>APRENDE DE MANERA AGRADABLE</div>
                <p>
                  Haz un resumen de lo que tienes que aprender con información 
                  contextual y estrictamente relevante.
                </p>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='box-image'>
                  <i className='image-neoassimilation-step-2'/>
                </div>
                <div className='title'>ASIMILA DE MANERA CONSCIENTE</div>
                <p>
                  Una vez que creas tu material de aprendizaje, esa 
                  información en tu cabeza con una técnica de 
                  asimilación apropiada.
                </p>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='box-image'>
                  <i className='image-neoassimilation-step-3'/>
                </div>
                <div className='title'>APLICA AUTOMATICAMENTE</div>
                <p>
                  Una vez asimilado, lo aplicaras automáticamente. 
                  Una respuesta inmediata y con baja carga cerebral. 
                </p>
              </Box>
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <H2>Ejemplo Real de Neoasimilación</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              Años atrás fui contratado para trabajar en una startup 100% anglo sin 
              saber inglés. Durante la primer meeting no entendía absolutamente nada, 
              escuchaba palabras como “Face” y entre otras que me hacian perder el 
              contexto por completo. Imaginaba que hablaban de caras en proyectos, 
              nada tenía sentido, la opcion de aprender 5.000 palabras en inglés de 
              una semana a otra, era imposible. Entonces ¿Cómo logré de una semana 
              a otra hablar en inglés? aunque no lo parezca, fue simple aplicando 
              Neoasimilación. A continuación te muestro un ejemplo...
            </Col>
          </Row>
          <Row>
            <Col>
              Aprender a hablar en inglés con mis companierso de trabajo en una 
              semana... es muy importante respetar los 2 primeros pasos, 
              APRENDER DE MANERA AGRADABLE y ASIMILAR DE MANERA CONSCIENTE.
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Col lg={4}>
                  <Box>
                    <div className='circle-wrapper'>1</div>
                    <div className='title'>APRENDE DE MANERA AGRADABLE</div>
                    <p>
                      Apunté las 3 maneras de saludar del team y busqué las 20 palabras más 
                      utilizadas por el team, como se escribe y su pronunciación. Finalmente 
                      “Face” era “Phase”.
                    </p>                   
                  </Box>
                </Col>
                <Col lg={4}>
                  <Box>
                    <div className='circle-wrapper'>2</div>
                    <div className='title'>ASIMILA DE MANERA CONSCIENTE</div>
                    <p>
                      Asimile las 23 palabras, por ejemplo "budget", miraba una imagen de un 
                      presupuesto y escuchaba como sonaba. Apróximadamente unas 20 veces 
                      por cada palabra hasta que lo asimilaba como una palabra nativa.                      
                    </p>
                  </Box>
                </Col>
                <Col lg={4}>
                  <Box>
                    <div className='circle-wrapper'>3</div>
                    <div className='title'>APLICA AUTOMATICAMENTE</div>
                    <p>
                      Listo! una vez asimiladas las palabras contextuales, tu cerebro 
                      reconoce cada una de ellas automáticamente. Una semana más 
                      tarde de la primer meeting, estaba hablando con ellos de manera 
                      relajada, utilizando mis recursos cognitivos enfocados a 
                      resolver las tareas laborales.                      
                    </p>
                  </Box>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                La explicación es que varias palabras las tenía previamente 
                asimilada desde 
                el colegio, y otras asimile de manera contextual gracias a la 
                neoasimilación. Mi comprensión abarcaba más del 70% del contexto.
              </p> 
              <p>
                Otro ejemplo, la neoasimilación me dio la capacidad de aprender 
                rápido para desarrollar apps y websites, para startups y 
                grandes compañías. 
                Estás me contrataban conscientes que no sabía el 
                leguaje de programación para la cual era contratado, a la 
                semana siguiente estaba desarrollando a nivel profesional.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>
                En el momento que conviertes una tarea compleja en algo sencillo de aprender
                es el momento que sabes aplicar correctamente el paso 1 - Aprende de manera agradable.
                A partir de allí es el punto principal para que puedas asilmilar lo resumido en el paso uno.
                Sabes que lo tienes asimilado una vez que repites esa tarea sin necesidad de mirar lo aprendido. 
                En este paso tu cerebro esta en paso 3 donde aplica automáticamente lo asimilado.
              </H3>
              <Row>
                <Col lg={4}>
                  <Box>
                    <div className='circle-wrapper'>1</div>
                    <div className='title'>APRENDE DE MANERA AGRADABLE</div>

                    <div>1 - Define tiempo de aprendizaje, no debe superar una semana.</div>
                    <div>2 - Estructurate el día.</div>
                    <div>3 - Haz una visión general de contenido para ver 
                      lo que aprenderás y reducir tu ansiedad.
                    </div>
                    <div>4 - Busca al menos 10 fuentes de aprendizaje, encuentra la que 
                      tarda menos, y te enseñe los puntos claves.
                    </div>
                  </Box>
                </Col>
                <Col lg={4}>
                  <Box>
                    <div className='circle-wrapper'>2</div>
                    <div className='title'>ASIMILA DE MANERA CONSCIENTE</div>
                      Ya tienes un resume sobre como aprender de manera confortable, la asimilación es 
                      la manera en que se guarda lo que aprendes en tu cerebro.
                      Hay varias técnicas de asimilación consciente, la más común es la de repetir 
                      varias veces de manera práctica. Por ejemplo cuando aprendemos a dividir en la 
                      escuela, nos dan tareas para repetir, eso es una técnica de asimilación. Lee el 
                      punto 2 del ejemplo real.
                  </Box>
                </Col>
                <Col lg={4}>
                  <Box>
                    <div className='circle-wrapper'>3</div>
                    <div className='title'>APLICA AUTOMATICAMENTE</div>
                    Una vez que asimilas, tu cerebro reduce su carga cerebral porque toma la 
                    asimilación como algo que repite automáticamente. 
                    A medida que utilizas neoasimilación los resultados te 
                    soprenderán, hablar inglés en una semana, aprender lenguaje de programación 
                    en una semana es posible, todo dependerá si aplicas correctamente la Neoasimilación. 
                  </Box>
                </Col>
              </Row>
              <Row>
                <Col>
                  Es importante aclarar que debes resumir correctamente lo que 
                  guardaras en tu cerebro, por ello te sugerimos que comiences 
                  con tareas básicas que no compromentan tu futuro laboral o 
                  estudio. A medida que comienzas a utilizar la neoasimilación 
                  mejorará considerablemente tu calidad de vida. Tal y como 
                  lo hizo conmigo, y quiero que te ayude de la misma manera a ti.
                </Col>
              </Row>
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <H2>Reducir estrés</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              Además de aprender más y más rápido, otro de los objetivos
              de la neoasimilación, es reducir la carga cerebral. 
              A continuación graficamos según entendemos, como la correcta 
              información para realizar una tarea reduce la carga cerebral.
              La neoasimilación no reconoce una tarea como compleja, sino que 
              no es asimilado correctamente. 
            </Col>
          </Row>
          <Row>
            <Col>
              <i className='image-assimilation'/>
            </Col>
          </Row>
          <Row>
            <Col>
              <i className='image-neoassimilation'/>
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <H2>Comienza a aplicarlo</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              Puedes utilizar la Neoasimilación para todo. Por ejemplo, tu puedes 
              aprender inmediatamente algo para aumentar tus capacidades laborales e ingresos económicos, para ello reduce 
              tu carga cerebral encontrando la manera más sencilla y acotada de aprender lo que necesitas. Tu cerebro podrá 
              aprenderlo de manera agradable, asimilarlo de manera consciente y aplicarlo atomáticamente.
            </Col>
          </Row>
          <Row>
            <Col>
              A medida que utilizas el método podrás mejorar tu relación con terceros, ya que toda 
              persona "piensa" en base a lo asimilado y por tanto aplica atomáticamente, no podrás cambiar su religión, 
              ideas políticas, lo que hace y sus dediciones, pero si podrás entender porque esa persona hace o piensa algo, y por 
              tanto será muy previsible. También las tareas repetitivas hacen que la asimilación pueda variar.
            </Col>
          </Row>
          <Row>
            <Col>
              A medida que lo utilizas, lo aplicarás para más cosas, como mejorar la experiencia de usuario de un 
              producto o servicio, aumentar las ventas porque reduces la carga cerebral de tu cliente y se siente "feliz".
            </Col>
          </Row>
          <Row>
            <Col>
              Nuestras vidas dependen de que aprendemos, asimilamos y aplicamos automáticamente. 
              Una vez que asimilas el funcionamiento del cerebro, cambia tu vida.
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              Claudio J. Garaycochea / Email: cjgaraycochea@gmail.com
            </Col>
          </Row>
        </Section>
      </Container>
    );
  }
};

export default Home;