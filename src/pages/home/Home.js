import React, { Component }from "react";
import {
  Container, Section, Row, Col,
  Box, BoxCircle,
  H1, H2, H3, Button,
  Icon,
} from '../../ui/naUI';
import './Home.css';
import imageClaudio from '../../assets/images/image-claudio-g.png';

class Home extends Component {
  render() {
    // const { fullData } = this.props;
    return (
      <Container>
        <Section className='hero-wrapper'>
          <Row>
            <Col>
              <div>
                <H1>ALFABETISMO COGNITIVO</H1>
                <H2>APRENDE EL METODO DE NEO ASIMILACION PARA OBTENER HABILIDADES EN 3 SIMPLES PASOS</H2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <i className='image-brain-check'/>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>
                Este metodo trata de ensenarte a utilizar tu cerebro de manera mas racional, 
                con la intencion de mejorar tu calidad de vida.
                Obtendras una serie de beneficios, que van desde adquirir habilidades laborales rapidamente, 
                reducir tu estres, hasta mejorar tu relacion con terceros.
              </h3>
              {/*
              <h3>
                Con este metodo aprenderás a utilizar tu cerebro de 
                manera más racional, comprender mejor a terceros, 
                adquirir nuevas habilidades para conseguir empleo, 
                emprender, mejorar la venta de un producto o servicio,
                 o reducir el estres en tu actual trabajo.
              </h3>*/}
            </Col>
          </Row>
        </Section>
        <div className='section-divisor'/>
        <Section>
          <Row>
            <Col>
              <H2>Intro</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              Soy Claudio Garaycochea, durante casi dos decadas, me dedique al 
              desarrollo de proyectos para startups y companias, cubriendo todo 
              tipo de necesidades, que iban desde innovacion, ux, desarrollo, hasta 
              marketing corporativo. 
              El cubrir todo tipo de necesidades tecnologicas me exigia muchas horas de 
              trabajo, momentos de estres y presion. Lo cual me llevo a estudiar 
              neurociencia para encontrar una solucion a tanta exigencia mental.
            </Col>
          </Row>
          <Row>
            <Col>
              Despues de un proceso de varios meses, instruyendome con fuentes varias 
              de gurus de neurociencia, sus materiales en videos, libros, etc, me 
              llevaron a comprender el funcionamiento de nuestro cerebro, pero no 
              encontraba nada que me pudiera ayudar.
              Meses mas tarde, ensenando a leer a mi hijo se unieron en mi cabeza, 
              toda la informacion que adquiri sobre neurociencia.
              Pudiendo resumir el funcionamiento de nuestro cerebro en 3 simples pasos, 
              a partir de alli, cree mi propio metodo para obtener habilidades mentales, 
              lo llamo Metodo de Neo Asimilacion, algo tan simple, cambio mi vida y 
              por ello quiero compartirlo contigo en este documento. Con el simple 
              hecho de ayudarte.
            </Col>
          </Row>
        </Section>
        <Section className='dark'>
          <Row>
            <Col>
              <H2>¿Qué aprenderás?</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              Este documento se divide en secciones que te ayudara a comprender 
              mejor que es lo que hacemos con nuestro cerebro, saber como funciona,
               entenderlo con ejemplos y como ponerlo en marcha el Metodo de Neo
               Asimilacion desde ahora.
            </Col>
          </Row>
          <Row>
            <Col>
              Sin más, comencemos...
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
              El como "pensamos/actuamos", es relacionado a reducir carga 
              en nuestro cerebro. Según entiendo, la "asimilación" es la 
              columna vertebral de la neurociencia. Donde una vez que asimilas 
              algo es muy difícil cambiarlo porque requiere carga cerebral.
            </Col>
          </Row>
          <Row>
            <Col>
              <Row className='margin-top'>
                <Col>
                  <Box>
                    <div className='title'>Ejemplo 1</div>
                    <div className='content'>
                      Cuando vemos un Rottwailer, la mayoría de nosotros "cruzamos a la vereda del frente".
                    </div>
                  </Box>
                </Col>
                <Col>
                  <Box>
                    <div className='title'>Ejemplo 2</div>
                    <div className='content'>
                      Cuando vamos por una salsa de tomate en un supermercado, buscamos una lata de color rojo.
                    </div>
                  </Box>
                </Col>
                <Col>
                  <Box>
                    <div className='title'>Ejemplo 3</div>
                    <div className='content'>
                      Cuando conducimos, hablamos y leemos carteles en la ruta.
                    </div>
                  </Box>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              Otro ejemplo de asimilación es "La rzaón por la que tu 
              cberreo pudee leer etse txeto"
            </Col>
          </Row>
        </Section>
        <Section className='highlight'>
          <Row>
            <Col>
              <H2>La teoría de los 3 cerebros</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              Hay muchas teorias que si bien no aseguramos que son 
              ciertas, nos ayudan a medir como actuamos en el dia a 
              dia, se indexa en tres funciones basicas que nos ayudan 
              a comprender nuestro comportamiento.
            </Col>
          </Row>
          <Row>
            <Col>
              <Row className='margin-top'>
                <Col>
                  <Box>
                    <div className='title'>Neocórtex</div>
                    <div className='content'>
                      <div>El cerebro que piensa</div>
                      <div>APROX 10% DE USO</div>
                    </div>
                  </Box>
                </Col>
                <Col>
                  <Box>
                    <div className='title'>Limbico</div>
                    <div className='content'>
                      <div>El cerebro que siente</div>
                      <div>APROX 10% DE USO</div>
                    </div>
                  </Box>
                </Col>
                <Col>
                  <Box>
                    <div className='title'>Reptiliano</div>
                    <div className='content'>
                      <div>El cerebro que actua</div>
                      <div>APROX 80% DE USO</div>
                    </div>
                  </Box>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              Para entender como tu vives, sitamos el siguiente ejemplo. 
              Años atras se realizo una campaña de McDonald's, hicieron 
              una encuesta a sus clientes y todos estaban de acuerdo que 
              seria bueno ofrecer comida saludable.
            </Col>
          </Row>
          <Row>
            <Col>
              Meses mas tarde y millones de dolares gastados en publicidad, 
              fue un total fracaso, la gente preferia seguir comiendo 
              hamburguesas. Esto se debe a que en el momento de la encuesta, 
              la gente respondia con el cerebro Neocórtex (racional), pero a la hora de 
              elegir utiliza el cerebro Reptiliano.
            </Col>
          </Row>
          <Row>
            <Col>
              Segun los libros de psicologia, dejamos nuestra vida en manos 
              del cerebro reptiliano. Es el mismo que domina el 80% de las 
              desiciones de tu vida. A su vez, tu cerebro Reptiliano se 
              divide aprox. 10% genetico y 90% por asimilación. 
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <H2>Tu asimilacion define tu vida</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>
                El funcionamiento de tu cerebro a lo largo de tu vida actúa 
                por "asimilación", es decir, aprende algo, asimila y aplica 
                 automáticamente para reaccionar de manera inmediata.
              </H3>
            </Col>
          </Row>
          <Row>
            <Col>
              No podemos razonar todo por cuestiones obvias. Estos 3 pasos 
              en que nuestro cerebro actua es positivo para resolver en lo 
              inmediato, pero generan un gran problema porque define el 
              camino de nuestras vidas, ya que cada accion depende de cosas 
              que asimilamos previamente, gran parte de ellas de manera 
              inconsciente. No te asustes, aprenderas a usar mejor tu cerebro.
            </Col>
          </Row>
          <Row>
            <Col>
              <Row className='margin-top'>
                <Col>
                  <BoxCircle 
                    topChildren={
                      <div className='top-circle-wrapper'>
                        <Icon className='learn large'/>
                        <div className='title'>PASO 1</div>
                      </div>
                    }
                  >
                    <div className='subtitle'>APRENDES</div>
                    <div className='content'>Aprendes algo de manera consciente e inconsciente</div>
                  </BoxCircle>
                </Col>
                <Col>
                  <BoxCircle 
                    topChildren={
                      <div className='top-circle-wrapper'>
                        <Icon className='assimilate large'/>
                        <div className='title'>PASO 2</div>
                      </div>
                    }
                  >
                    <div className='subtitle'>ASIMILAS</div>
                    <div className='content'>Lo que aprendes, lo asimilas de manera consciente e inconsciente</div>
                  </BoxCircle>
                </Col>
                <Col>
                  <BoxCircle 
                    topChildren={
                      <div className='top-circle-wrapper'>
                        <Icon className='apply-automatically large'/>
                        <div className='title'>PASO 3</div>
                      </div>
                    }
                  >
                    <div className='subtitle'>APLICA AUTOMATICAMENTE</div>
                    <div className='content'>El cerebro que actua</div>
                  </BoxCircle>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              Por ejemplo, cuando hablas de política, nuestro cerebro 
              asimilo algo que creía que esta bien, y la respuesta es 
              automática. Ahora bien, si seriamos seres realmente 
              racionales analizaríamos lo que estamos hablando, lo cual 
              llevaría tiempo en hacerlo y sacar conclusiones correctas 
              que demoran varios minutos u horas de análisis por algo 
              que no vale la pena. 
            </Col>
          </Row>
          <Row>
            <Col>
              ¿Se imaginan cuanto tardaríamos hablando si fuésemos seres 
              plenamente racionales? bueno sería imposible, por eso casi 
              siempre actuamos de manera automática gracias a la asimilación.
            </Col>
          </Row>
        </Section>
        <div className='section-divisor'/>
        <Section>
          <Row>
            <Col>
              <H2>El Metodo de Neo Asimiliación</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>
                Genial, ya sabes como funciona tu cerebro, ahora vamos a utilizarlo 
                correctamente. Se trata de un metodo en el que tu cerebro adquiere 
                habilidades mentales rapidamente, es el mismo proceso de los 3 pasos 
                en que aprende y asimila nuestro cerebro pero de manera consciente. 
                Este simple detalle marcara un cambio enorme en tu vida si lo sabes aplicaro.
              </H3>
            </Col>
          </Row>
          <Row>
            <Col>
              El Metodo de Neo Asimilacion ayuda a te permite aprender habilidades de 
              manera inmediata, podras entender mejor a un tercero, reducir el estres 
              frente a exigencias laborales, en general el metodo reducira tu carga 
              cerebral, haciendo que tu cerebro se sienta confortable mejorando tu 
              calidad de vida.
            </Col>
          </Row>
          <Row>
            <Col>
              <Row className='margin-top'>
                <Col>
                  <BoxCircle 
                    topChildren={
                      <div className='top-circle-wrapper'>
                        <Icon className='learn large'/>
                        <div className='title'>PASO 1</div>
                      </div>
                    }
                  >
                    <div className='subtitle'>APRENDES</div>
                    <div className='content'>Aprendes algo de manera consciente y agradable</div>
                  </BoxCircle>
                </Col>
                <Col>
                  <BoxCircle 
                    topChildren={
                      <div className='top-circle-wrapper'>
                        <Icon className='assimilate large'/>
                        <div className='title'>PASO 2</div>
                      </div>
                    }
                  >
                    <div className='subtitle'>ASIMILAS</div>
                    <div className='content'>Lo que aprendes, lo asimilas de manera consciente</div>
                  </BoxCircle>
                </Col>
                <Col>
                  <BoxCircle 
                    topChildren={
                      <div className='top-circle-wrapper'>
                        <Icon className='apply-automatically large'/>
                        <div className='title'>PASO 3</div>
                      </div>
                    }
                  >
                    <div className='subtitle'>APLICAS AUTOMATICAMENTE</div>
                    <div className='content'>Lo que asimilas</div>
                  </BoxCircle>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              Un ejemplo real, para comunicarme con un equipo de trabajo 100% 
              anglo, en la primer charla no les entendía nada, aprendí las 3 
              maneras de saludar del equipo, y 20 palabras mas usadas en este 
              trabajo. Asimile las 3 maneras de saludar y 20 palabras, a la 
              semana siguiente ya estaba hablando con ellos. Mi cerebro 
              relajado y operativo para trabajar con ellos. Logicamente tenia 
              el conocimiento de varias palabras en ingles desde el colegio primario.
            </Col>
          </Row>
        </Section>
        <div className='section-divisor'/>
        <Section>
          <Row>
            <Col>
              <H2>Ejemplo Real de Neo Asimilacion</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              Durante la primer meeting no entendía absolutamente nada, escuchaba 
              palabras como “Face”, entre otras que perdía el contexto por completo. 
              Imagine que hablaban de caras en proyectos, aprender 5000 palabras 
              en inglés de una semana a otra es imposible. Entonces ¿Cómo logré de 
              una semana a otra hablar en inglés? aplicando los 3 pasos del método 
              de asimilación.
            </Col>
          </Row>
          <Row className='margin-top'>
            <Col>
              <BoxCircle
                topChildren={
                  <div className='top-circle-wrapper'>
                    <Icon className='learn large'/>
                    <div className='title'>PASO 1</div>
                  </div>
                }
              >
                <div className='title'>APRENDE DE MANERA CONFORTABLE</div>
                <div className='content'>
                  Apunte las 3 maneras de saludar del team, y busque las 20 palabras más 
                  utilizadas por el team, como se escribe y su pronunciación. Finalmente 
                  “Face” era “Phase”.
                </div>                
              </BoxCircle>
            </Col>
            <Col>
              <BoxCircle
                topChildren={
                  <div className='top-circle-wrapper'>
                    <Icon className='assimilate large'/>
                    <div className='title'>PASO 2</div>
                  </div>
                }
              >
                <div className='title'>ASIMILA DE MANERA CONSCIENTE</div>
                <div className='content'>
                  Asimile las 23 palabras, por ejemplo budget, miraba una imagen de un 
                  presupuesto y escuchaba como sonaba. Aproximadamente unas 10 veces por 
                  cada palabra hasta que lo asimilaba como una palabra nativa.
                </div>
              </BoxCircle>
            </Col>
            <Col>
              <BoxCircle
                topChildren={
                  <div className='top-circle-wrapper'>
                    <Icon className='apply-automatically large'/>
                    <div className='title'>PASO 3</div>
                  </div>
                }
              >
                <div className='title'>APLICA AUTOMATICAMENTE</div>
                <div className='content'>
                  Listo, una vez que lo asimilas, tu cerebro reconoce esa palabra automáticamente. 
                  Una semana más tarde de la primer meeting, estaba hablando con ellos de manera 
                  relajada, utilizando mis recursos cognitivos para resolver las tareas.
                </div>                
              </BoxCircle>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='experiences'>
                Con el Metodo de Neo Asimilacion aprendi ingles en una semana para trabajar en 
                una startup de USA. El mismo tiempo aprendi lenguajes de programacion para 
                desarrollar apps y websites en grandes companias, estas me contrataban 
                conscientes que no cumplia con los requerimientos previamente, solo les 
                pedia una semana y estaba 100% operativo. 
              </div>
            </Col>
          </Row>
        </Section>
        <div className='section-divisor'/>
        <Section>
          <Row>
            <Col>
              <BoxCircle backgroundImage={imageClaudio}>
                <h3>Mis habilidades laborales</h3>
                Soy Claudio Garaycochea, con mas de 17 años de experiencia, desarrolle 
                apps para Facebook y el sitio de GlobalLogic (compnaia IT con clientes 
                como Samsung, HP, Fox, entre otros), tambien trabaje en startups varias 
                de California, Washington DC y Suiza.
                Segun los requerimientos de cada proyecto me involucro desde idea, 
                brainstorming, user experience, visual design, desarrollo, hasta 
                tareas de marketing y venta corporativa. 
              </BoxCircle>
            </Col>
          </Row>
        </Section>
        <div className='section-divisor'/>
        <Section>
          <Row>
            <Col>
              <H2>Neo Asimilacion en educacion</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              Este metodo nos ensena a utilizar nuestro cerebro de manera efectiva, 
              el objetivo es buscar la manera mas agradable para el cerebro de nuestros 
              hijos, asimile facilmente nuevos conocimientos y los ponga en practica. 
            </Col>
          </Row>
          <Row>
            <Col>
              Si se respeta los tres pasos que forman el metodo de neo asimilacion, estamos 
              dando a nuestros hijos las herramientas que ayudaran a tener una mejor 
              calidad de vida, menos estres frente a exigencias y facilidad para 
              adquirir nuevos conocimientos para su futuro laboral.
            </Col>
          </Row>
          <Row>
            <Col>
              Si formas parte de una institucion, como colegio, universidad, o cualquier 
              institucion que desee mejorar la forma de aprendizaje, puedes contactarnos. 
              Ofrecemos un servicio de asesorameitno totalmente gratis para instituciones 
              educativas. 
            </Col>
          </Row>
        </Section>
        <div className='section-divisor'/>
        <Section>
          <Row>
            <Col>
              <H2>Neo Asimilacion en consumo</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              Asi como lo vimos en el ejemplo de McDonald’s en la parte superior de este 
              documento, tambien podemos analizar la atraccion de un producto o servicio. 
              Conociendo la desicion automatica del 80% del cerebro de tu potencial cliente. 
              Brindamos servicios de consultoria para mejorar la atraccion de tus productos 
              o servicios, consultanos.
            </Col>
          </Row>
          <Row>
            <Col>
              <i className='image-assimilation-normal'/>
            </Col>
          </Row>
          <Row>
            <Col>
              <i className='image-neo-assimilation'/>
            </Col>
          </Row>
          <Row>
            <Col>
              El objetivo del metodo de Neo Asimilacion es lograr la baja carga cerebral (punto 3 imagen)
            </Col>
          </Row>
        </Section>
        <Section className='clear'>
          <Row className='margin-top'>
            <Col>
              <Box className='text-normal'>
                <div className='title'>NEO ASIMILACION EN PRODUCTOS Y SERVICIOS</div>
                <div className='content'>
                  Ofrecemos un servicio de consultoria basado en el 80% de las decisiones de tus potenciales clientes.
                </div>
                <Button
                  className='primary large'
                >
                  Consultanos
                </Button> 
              </Box>
            </Col>
            <Col>
              <Box className='text-normal'>
                <div className='title'>UX BASADO EN NEO ASIMILACION</div>
                <div className='content'>
                  Creamos la manera de reducir la carga cerebral de tus usuarios, nos enfocaremos 
                  a lograr una experiencia de usuario super intuitiva y confortable.
                </div>
                <Button
                  className='primary large'
                >
                  Consultanos
                </Button>
              </Box>
            </Col>
            <Col>
              <Box className='text-normal'>
                <div className='title'>NEO ASIMILACION EN TAREAS LABORALES</div>
                <div className='content'>
                  Quieres adquirir habilidades de manera inmediata, te asesoramos con nuestra tecnica que podra mejorar tu desempeno.
                </div>
                <Button
                  className='primary large'
                >
                  Consultanos
                </Button>                
              </Box>
            </Col>
          </Row>
        </Section>
      </Container>
    );
  }
};

export default Home;