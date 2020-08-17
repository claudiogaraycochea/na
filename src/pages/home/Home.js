import React, { Component }from "react";
import {
  Section, Box,
  H1, H2, H3,
  Icon,
} from '../../ui/naUI';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Home.css';
import imageClaudio from '../../assets/images/image-claudio-g.png';

class Home extends Component {
  render() {
    // const { fullData } = this.props;
    return (
      <Container fluid>
        <Section className='hero-wrapper'>
          <Row>
            <Col xs={12} lg={6} className='d-flex flex-column align-items-center justify-content-center'>
              <div className='content'>
                <H1>Curso de Neoasimilacion</H1>
                <H2>Aplicado al Mundo Digital</H2>
                <H3>
                  Un metodo con el cual obtendras una serie 
                  de habilidades cognitivas necesarias para soportar las presiones del 
                  mundo de hoy, que van desde mejorar tu relacion con terceros, 
                  adquirir habilidades laborales rapidamente, reducir tu estres y mas...
                </H3>
                <H3>
                  Aprende a utilizar la neoasimilacion con un curso enfocado 
                  a brindarte una salida laboral en el mundo digital.
                </H3>
              </div>
            </Col>
            <Col xs={12} lg={6} className='d-flex flex-column align-items-center justify-content-center'>
              <i className='image-brain-check'/>
            </Col>
          </Row>
        </Section>
        <Section className='highlight'>
          <Row>
            <Col>
              "Regala un pescado a un hombre y le darás alimento para un día, 
              enseñale a pescar y lo alimentarás para el resto de su vida"
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <i className='image-how-born'/>
            </Col>
            <Col className='text-left'>
              <H2>¿Como nace la Neoasimlacion?</H2>
              <p>
                Soy Claudio Garaycochea, durante casi dos decadas me dedique al 
                desarrollo de proyectos freelance, startups y companias, 
                colaborando en todo tipo de tareas relacionadas a innovacion, 
                experiencia de usuario, desarrollo de apps y websites, hasta 
                marketing corporativo y nuevas tecnologias. El cubrir todo tipo 
                de necesidades demandaba muchas horas de trabajo, momentos de 
                estres y presion. Siempre requeria de aprender algo nuevo, pero 
                no podia pagar un curso por cada necesidad, y la falta de 
                tiempo, entraba en un pozo dificil de salir.
              </p>
              <p>
                Esto me llevo a estudiar neurociencia para encontrar una solucion 
                frente a tanta exigencia mental. El conocer como funciona nuestro 
                cerebro me permitio crear mi propio metodo para obtener habilidades 
                cognitivas, lo llamé Neoasimilacion, logre aprender a hablar ingles 
                en una semana con un equipo de desarrollo web, y lenguajes de 
                programacion en el mismo lapso para trabajar en startups y companias. 
                Tal fue el cambio en mi vida que me animo a compartir este 
                conocimiento para ayudar a los demas.                
              </p>
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <H2>Aprender neoasimilacion es gratis</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                En este momento de crisis es muy importante ayudarnos entre todos, 
                adquirir habilidades laborales rapidamente, nos permite mayores 
                oportunidades de empleo o realizar nuestro propio emprendimiento.                 
              </p>
              <p>
                <span className='text-highlight'>Queremos que aprendas a utilizar neoasimilacion sin coste alguno, 
                por ello hemos publicado en este documento la informacion necesaria para 
                que aprendas a implementarlo gratis</span>.
              </p>
              <p>
                Tambien puede utilizarse como metodo de estudio en instituciones educativas, 
                colegios, universidad, cursos, etc.
                Para sustentar la ayuda gratuita de neoasimilacion, ofrecemos cursos 
                por un valor asequible para que apliques neoasimilacion aprendiendo 
                habilidades laborales en el sector digital. Podras aprender a crear 
                campanas de marketing y digitalizacion de comercios, hasta programacion 
                de websites para trabajar en una startups o companias. Generamos en ti 
                una habilidad de autoaprendizaje solido para que siempre puedas cubrir 
                cualquier necesidad en el sector tecnologico. No te ensenamos una 
                tecnologia, te ensenamos a que aprendas facilmente todas las que 
                necesites el resto de tu vida laboral.
              </p>
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <H2>¿Como pensamos/actuamos?</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              El como "pensamos/actuamos", es relacionado a reducir carga en nuestro cerebro. 
              Según entiendo, la asimilación es la columna vertebral de la neurociencia. 
              Donde una vez que asimilas algo es muy difícil cambiarlo porque requiere carga cerebral.
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <Box>
                <H3>EJEMPLO 1</H3>
                <p>
                  Cuando vemos un Rottwailer, la mayoría de nosotros 
                  "cruzamos a la vereda del frente".
                </p>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <H3>EJEMPLO 2</H3>
                <p>
                  Cuando vamos por una salsa de tomate en un supermercado, buscamos una lata de color rojo.
                </p>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <H3>EJEMPLO 3</H3>
                <p>
                  Cuando conducimos nuestro automovil y hablamos o leemos.
                </p>
              </Box>
            </Col>
          </Row>
          <Row>
            <Col>
              Otro ejemplo de asimilación es "La rzaón por la que tu cberreo pudee leer etse txeto".
              <span className='text-highlight'>Casi todo el tiempo nuestro cerebro actua de manera automatica con lo que haz asimilado previamente.</span>
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
              Hay muchas teorias que si bien no aseguramos que son ciertas, nos ayudan a medir como 
              actuamos en el dia a dia, se indexa en tres funciones basicas que nos ayudan a 
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
                <H3>NEOCORTEX</H3>
                <p>
                  El cerebro que piensa, lo utilzamos aproximadamente un 10%.
                </p>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <H3>LIMBICO</H3>
                <p>
                  El cerebro que siente, lo utilizamos aproximadamente un 10%
                </p>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <H3>REPTILIANO</H3>
                <p>
                  El cerebro que actua automaticamente, lo usamos aproximadamente un 80%
                </p>
              </Box>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Para entender como tu vives, citamos el siguiente ejemplo. Años atras se 
                realizo una campaña de McDonald's, hicieron una encuesta a sus clientes 
                y todos estaban de acuerdo que seria bueno ofrecer comida saludable.
              </p>
              <p>
                Meses mas tarde y millones de dolares gastados en publicidad, fue un total 
                fracaso, la gente preferia seguir comiendo hamburguesas. Esto se debe a 
                que en el momento de la encuesta, la gente respondia con el cerebro 
                Neocórtex (o cerebro racional), pero a la hora de elegir utiliza el 
                cerebro Reptiliano (o cerebro automatico).
              </p>
              <p>
                Segun los libros de psicologia, dejamos nuestra vida en manos del cerebro 
                reptiliano. Es el mismo que domina el 80% de las desiciones de tu vida. 
                A su vez, tu cerebro Reptiliano se divide aprox. 10% genetico y 90% por 
                asimilación.
              </p>
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <H2>Asimilacion define tu vida</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              El funcionamiento de tu cerebro a lo largo de tu vida actúa por "asimilación", 
              es decir, aprende algo, asimila y aplica automáticamente para reaccionar de 
              manera inmediata.
              Esta claro que no podemos razonar todo por cuestiones obvias. Estos 3 pasos en 
              que nuestro cerebro actua, es positivo para resolver en lo inmediato, pero 
              generan un gran problema porque define el camino de nuestras vidas, ya que 
              cada accion depende de cosas que asimilamos previamente, gran parte de ellas 
              de manera inconsciente. Con Neoasimilacion aprenderas a usar mejor tu cerebro 
              de manera mas racional y consciente.
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <Box>
                <div className='box-image'>
                  <i className='image-assimilation-step-1'/>
                </div>
                <H3>APRENDE</H3>
                <p>
                  Tu cerebro se encuentra en constante aprendizaje de manera consciente o inconsciente
                </p>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='box-image'>
                  <i className='image-assimilation-step-1'/>
                </div>
                <H3>ASIMILA</H3>
                <p>
                  Una vez que aprende, la informacion se guarda en tu cabeza de manera consciente e inconsciente
                </p>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='box-image'>
                  <i className='image-assimilation-step-1'/>
                </div>
                <H3>APLICA AUTOMATICAMENTE</H3>
                <p>
                  Una vez que asimilas lo aplicas automaticamente
                </p>
              </Box>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Por ejemplo, cuando hablas de política, nuestro cerebro asimilo algo que creía que esta 
                bien, y <span className='text-highlight'>la respuesta es automática, es por eso que 
                discutimos por cualquier cosa y si mostramos evidencias la otra persona o nosotros no entenderemos algo, nuestra comprension 
                depende exclusivamente de nuestra asimilacion</span>, esta sencilla explicacion es 
                la base de porque peleamos, nos enojamos, o deriva en cosas peores. 
              </p>
              <p>
                Ahora bien, si seriamos 
                seres realmente racionales 
                analizaríamos lo que estamos hablando, lo cual llevaría tiempo en hacerlo y sacar 
                conclusiones correctas que demoran varios minutos u horas de análisis por algo que 
                no vale la pena.
              </p>
              <p>
                ¿Se imaginan cuanto tardaríamos hablando si fuésemos seres plenamente racionales? bueno 
                sería imposible, por eso casi siempre actuamos de manera automática gracias a la asimilación.
                La neoasimilacion es una forma que nos ayuda a ser mas racional.
              </p>
            </Col>
          </Row>
        </Section>
        <Section className='dark'>
          <Row>
            <Col>
              Genial, ya sabemos que nuestro cerebro aprende de manera consciente e inconsciente, 
              esta la asimila y la aplica automaticamente. La asimilacion es la informacion que 
              vas a repetir automaticamente, define el 80% de nuestras decisiones, como pensamos 
              y que haremos. Por este motivo, tomamos la asimilacion como el punto mas importante 
              en nuestras capacidades, este proceso automatico reducira tu carga cerebral de 
              cualquier tarea independientemente de su complejidad, hablar, conducir, prevenir, 
              aprender, empleo, etc.
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <H2>Neoasimilacion</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              Muy bien, ya sabes cuales son los tres pasos que tu cerebro repite consciente e 
              inconscientemente para actuar rapidamente. Ahora bien, que pasa si a tu cerebro 
              repites el mismo proceso pero de manera consciente. Los resultados son 
              interesantes, adquirimos habilidades laborales rapidamente y reducimos el estres. 
              Independientemente de la complejidad de la tarea, puedes guardar en tu cerebro 
              solo la informacion necesaria para actuar rapido, reducira considerablemente 
              tu carga cerebral.
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>LA NEOASIMILACION, ES LA ASIMILACION PERO REPITE LOS TRES PASOS DE MANERA CONSCIENTE</H3>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <Box>
                <div className='box-image'>
                  <i className='image-assimilation-step-1'/>
                </div>
                <H3>APRENDE DE MANERA CONSCIENTE Y AGRADABLE</H3>
                <p>
                  Resume lo que tienes que hacer en lo estrictamente relevante, reduce tu carga cerebral.
                </p>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='box-image'>
                  <i className='image-assimilation-step-1'/>
                </div>
                <H3>ASIMILA DE MANERA CONSCIENTE</H3>
                <p>
                  Una vez que aprendes guarda esa informacion en tu cabeza con tecnicas de asimilacion apropiada.
                </p>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='box-image'>
                  <i className='image-assimilation-step-1'/>
                </div>
                <H3>APLICA AUTOMATICAMENTE</H3>
                <p>
                  Una vez que asimilas lo aplicas automaticamente. Es el proceso nautral para responder 
                  rapidamente. Pero con informacion relevante y consciente. 
                </p>
              </Box>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                En este curso te ensenaremos a guardar informacion relevante de manera 
                consciente, para cubrir tareas laborales de manera inmediata. Es muy 
                importante que es solo para tareas especificas, es un complemento 
                que puede ser utilizado para reforzar aprendizaje en universidades, 
                cursos o con fines laborales. 
              </p>
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <H2>Neoasimilacion</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              Muy bien, ya sabes cuales son los tres pasos que tu cerebro repite consciente e 
              inconscientemente para actuar rapidamente. Ahora bien, que pasa si a tu cerebro 
              repites el mismo proceso pero de manera consciente. Los resultados son 
              interesantes, adquirimos habilidades laborales rapidamente y reducimos el estres. 
              Independientemente de la complejidad de la tarea, puedes guardar en tu cerebro 
              solo la informacion necesaria para actuar rapido, reducira considerablemente 
              tu carga cerebral.
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Col lg={4}>
                  <Box>
                    <div className='circle-wrapper'>1</div>
                    <H3>Aprender de Manera Consciente y Agradable:</H3>
                    Apunte las 3 maneras de saludar del team, y busque las 20 palabras más 
                    utilizadas por el team, como se escribe y su pronunciación. Finalmente 
                    “Face” era “Phase”.                    
                  </Box>
                </Col>
                <Col lg={4}>
                  <Box>
                    <div className='circle-wrapper'>2</div>
                    <H3>Asimila de Manera Consciente:</H3>
                    Asimile las 23 palabras, por ejemplo budget, miraba una imagen de un presupuesto y escuchaba como sonaba. Aproximadamente unas 10 veces por cada palabra hasta que lo asimilaba como una palabra nativa.
                  </Box>
                </Col>
                <Col lg={4}>
                  <Box>
                    <div className='circle-wrapper'>3</div>
                    <H3>Aplica automaticamente:</H3>
                    Listo, una vez que lo asimilas, tu cerebro reconoce esa palabra automáticamente. Una semana más tarde de la primer meeting, estaba hablando con ellos de manera relajada, utilizando mis recursos cognitivos para resolver las tareas.
                  </Box>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Col lg={4}>
                  <Box>
                    <div className='circle-wrapper'>1</div>
                    <H3>Aprende de Manera Agradable:</H3>
                    <div>1 - Define tiempo de aprendizaje, no debe superar una semana.</div>
                    <div>2 - Estructurate el dia</div>
                    <div>3 - Haz una vision general de contenido para ver lo que aprenderas y reducir tu ansiedad</div>
                    <div>4 - Busca al menos 10 fuentes de aprendizaje, encuentra la que tarda menos, y te ensene los puntos claves</div>
                  </Box>
                </Col>
                <Col lg={4}>
                  <Box>
                    <div className='circle-wrapper'>2</div>
                    <H3>Asimila de Manera Consciente:</H3>
                      Ya tienes un resume sobre como aprender de manera confortable, la asimilacion es 
                      la manera en que se guarda lo que aprendes en tu cerebro.
                      Hay varias tecnicas de asimilacion consciente, la mas comun es la de repetir 
                      varias veces de manera practica. Por ejemplo cuando aprendemos a dividir en la 
                      escuela, nos dan tareas para repetir, eso es una tecnica de asimilacion. Lee el 
                      punto 2 del ejemplo real.
                  </Box>
                </Col>
                <Col lg={4}>
                  <Box>
                    <div className='circle-wrapper'>3</div>
                    <H3>Aplica automaticamente:</H3>
                    Una vez que asimilas, tu cerebro reduce su carga cerebral porque toma la asimilacion como algo que repite automaticamente. 
                    Inicialmente costara un poco, a medida que lo utlizas los resultados te soprenderan, hablar ingles en una semana, aprender lenguaje de programacion en una semana es posible, todo dependera si aplicas correctamente la neoasimilacion. 
                  </Box>
                </Col>
              </Row>
              <Row>
                <Col>
                  Para hablar ingles en mi trabajo, al asimilar el 50% de palabras a las que habla el team de desarrollo se obtiene el contexto y comprende el dialogo. 
                  Es muy importante aclara que no reemplaza cursos o clases de ingles, es un complemento.
                </Col>
              </Row>
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <H2>Reducir estres</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              Creamos la neoasimilacion para adquirir conocimientos rapidamente y reducir 
              nuestra carga cerebral, esto se traduce en un cerebro mas confortable 
              frente a todo tipo de tareas, menos estres y mas capacidad para cubrir 
              multiples tareas.
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
              Para que asimiles correctamente la neoasimilacion, te sugerimos leer 
              al menos una vez mas este documento, ya que si lo sabes aplicar 
              reducira considerablemente tu carga cerebral y por tanto tu estres.
              A medida que lo aplicas, te generara una sensacion de bienestar 
              que mejorara considerablemente tu calidad de vida.
            </Col>
          </Row>
          <Row>
            <Col>
              Compartir Whatsapp, Facebook, Instagram, Twitter
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <H2>Comenzar curso de neoasimilacion basado en el mundo digital</H2>
              <H3>Curso virtual via streaming en vivo</H3>
            </Col>
          </Row>
          <Row>
            <Col>
              Este curso cumple con dos funciones, la principal, es que aprendas a 
              utilizar neoasimilacion para adquirir habilidades laborales rapidamente 
              y reducir el estres. Lo segundo es que puedas convertir este aprendizaje 
              en una salida laboral, tanto para hacer un emprendimiento o conseguir 
              empleo. Si tienes la capacidad de adquirir habilidades laborales 
              rapidamente, muchas empresas se interesaran por ti.
              Te ensenaremos a que aprendas de manera agradable nociones basicas 
              marketing online, digitalizacion de comercios, desarrollo de apps y websites.
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Adquiere tu ticket mensual</h3>
              Todos los viernes 18hs Espana 10 de octubre 2020 22hs Espana
              Precio Normal $30
              <Button>Get Ticket $19/Mes Antes de Octubre</Button>
            </Col>
          </Row>
        </Section>
      </Container>
    );
  }
};

export default Home;