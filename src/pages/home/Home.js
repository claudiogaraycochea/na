import React, { Component }from "react";
import {
  Button,
  Section, Box,
  H1, H2, H3,
  Icon,
} from '../../ui/naUI';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import Header from '../../components/header/Header';
// import imageClaudio from '../../assets/images/image-claudio-g.png';

class Home extends Component {

  getFacebookURL = () => {
    const message = 'Te invito a conocer el curso de Neoasimilación para adquirir habilidades laborales rápidamente y reducir estres. Visitalo https://neoasimilacion.com';
    const text = encodeURIComponent(message);
    return `https://www.facebook.com/sharer.php?u=https%3A%2F%2Fneoassimilation.com&t=${text}`;
  }

  getWhatsappURL = () => {
    const message = 'Te invito a conocer el curso de Neoasimilación para adquirir habilidades laborales rápidamente y reducir estres. Visitalo https://neoasimilacion.com';
    const text = encodeURIComponent(message);
    return `whatsapp://send?text=${text}`;
  }

  getTwitterURL = () => {
    const message = 'Te invito a conocer el curso de Neoasimilación para adquirir habilidades laborales rápidamente y reducir estres. Visitalo https://neoasimilacion.com';
    const text = encodeURIComponent(message);
    return `https://twitter.com/intent/tweet?text=${text}`;
  }

  getLinkedinURL = () => {
    const message = 'Te invito a conocer el curso de Neoasimilación para adquirir habilidades laborales rápidamente y reducir estres. Visitalo https://neoasimilacion.com';
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
                <H1>Curso de Neoasimilación</H1>
                <H2>Aplicado al Mundo Digital</H2>
                <H3>
                  El mundo de hoy requiere que tu adquieras habilidades laborales de 
                  manera constante. La falta de tiempo para estudiar, dinero, estres,  
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
                  En este documento podrás aprender gratis que es la Neoasimilación, 
                  además, te invitamos a participar de un curso vía streaming, enfocado 
                  a darte las herramientas laborales para que puedas emprender o trabajar 
                  en el mundo digital.
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
                cognitivas y reducir mi estrés, lo llamé Neoasimilacién. Con él, logré 
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
              <H2>Aprende Neoasimilacion gratis</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>
                En este momento de crisis es muy importante ayudarnos entre todos, 
                si aprendes como adquirir habilidades laborales rápidamente, te 
                permitirá mayores oportunidades de empleo o realizar tu propio 
                emprendimiento.                 
              </H3>
              <p>
                Queremos que aprendas a utilizar Neoasimilación sin coste alguno, 
                por ello hemos publicado en este documento la información necesaria para 
                que puedas comenzar a implementarlo, si tienes dudas, consultanos a 
                nuestro correo.
              </p>
              <p>
                Tambien puede utilizarse como metodo de estudio en instituciones educativas, 
                colegios, universidad, cursos, etc.
                Para sustentar la ayuda gratuita de Neoasimilacion, ofrecemos cursos 
                por un valor asequible para que apliques Neoasimilacion aprendiendo 
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
        <Section className='image-right'>
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
                  <i className='image-assimilation-step-2'/>
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
                  <i className='image-assimilation-step-3'/>
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
                La Neoasimilacion es una forma que nos ayuda a ser mas racional.
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
                  <i className='image-neoassimilation-step-1'/>
                </div>
                <H3>APRENDE DE MANERA AGRADABLE</H3>
                <p>
                  Resume lo que tienes que hacer en lo estrictamente relevante, reduce tu carga cerebral.
                </p>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='box-image'>
                  <i className='image-neoassimilation-step-2'/>
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
                  <i className='image-neoassimilation-step-3'/>
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
                    Inicialmente costara un poco, a medida que lo utlizas los resultados te soprenderan, hablar ingles en una semana, aprender lenguaje de programacion en una semana es posible, todo dependera si aplicas correctamente la Neoasimilacion. 
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
              Creamos la Neoasimilacion para adquirir conocimientos rapidamente y reducir 
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
              Para que asimiles correctamente la Neoasimilacion, te sugerimos leer 
              al menos una vez mas este documento, ya que si lo sabes aplicar 
              reducira considerablemente tu carga cerebral y por tanto tu estres.
              A medida que lo aplicas, te generara una sensacion de bienestar 
              que mejorara considerablemente tu calidad de vida. Aprender 
              rapidamente habilidades laborales para conseguir empleo, reducir 
              estres, mejor relacion con terceros y mas.
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Col>
                  
                  <a href={this.getWhatsappURL()} data-action="share/whatsapp/share">
                    <Button className='whatsapp'><Icon className='whatsapp small space'/> Compartir en Whatsapp</Button>
                  </a>
                </Col>
                <Col>
                  <a href={this.getFacebookURL()}>
                    <Button className='facebook'><Icon className='facebook small space'/> Compartir en Facebook</Button>
                  </a>
                </Col>
                <Col>
                  <a href={this.getTwitterURL()} data-size="large">
                    <Button className='twitter'><Icon className='twitter small space'/> Compartir en Twitter</Button>
                  </a>
                </Col>
                <Col>
                  <a href={this.getLinkedinURL()} data-size="large">
                    <Button className='linkedin'><Icon className='linkedin small space'/> Compartir en Linkedin</Button>
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <H2>Curso de Neoasimilacion</H2>
              <H3>Basado en Mundo Digital</H3>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='deal-wrapper'>
                <div className='title'>Obten tu ticket para acceder al curso streaming en vivo de Neoasimilacion</div>
                <div className='description'>
                  Te ensenaremos a que aprendas de manera agradable nociones basicas 
                  marketing online, digitalizacion de comercios, desarrollo de apps y websites.
                </div>
                <div><a href='/course'>Ver programa de estudios</a></div>
                <div className='deal-date'>
                  Todos los viernes 18hs Espana 10 de octubre 2020 22hs Espana
                </div>
                <div className='deal-price'>$30/Mes o subscribete ahora y recibe tu descuento</div>
                <Link to='/course'>
                  <Button className='primary large'>Get Ticket 19Month</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Section>
      </Container>
    );
  }
};

export default Home;