import React, { Component }from "react";
import {
  Button,
  Section, Box,
  H1, H2,
} from '../../ui/naUI';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './Course.css';
import { Link } from 'react-router-dom';
import { request, ContentTypes } from '../../libs/request';
// import imageClaudio from '../../assets/images/image-claudio-g.png';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			forgotPasswordSent: false,
			email: '',
			validated: false,
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
  }

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

	handleSubmit = (event) => {
		event.preventDefault();
		event.stopPropagation();
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			this.setState({ validated: true });
		} else {
			this.sendSubscribe();
		}
  }

	async sendSubscribe() {
		const { email } = this.state;
		const data = {
			from: {
				email: 'no-reply@projectbloc.io',
			},
			to: {
				email,
			},
			type: 'reset',
		};

		const endpoint = '/mail/send';

		try {
			await request('POST', endpoint, data, { 'content-type': ContentTypes.json });
			this.setState({ forgotPasswordSent: true });
		} catch (err) {
			// console.error(err);
		}
  }

	handleInputChange(event) {
		const { target } = event;
		const { name } = target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		this.setState({ [name]: value });
	}

  render() {
    // const { fullData } = this.props;
    const { email, validated } = this.state;

    return (
      <Container fluid>
        <Section>
          <Row>
            <Col>
              <H1>Curso de Neoasimilación</H1>
              <H2>Aplicado al Mundo Digital</H2>
              <p>
                Si no sabes que es Neoasimilación, haz click en el siguiente enlace.         
              </p>
              <Link to='/'>
                ¿Qué es Neoasimilación?
              </Link>  
            </Col>
          </Row>
        </Section>
        <Section className='image-left'>
          <Row>
            <Col>
              <H2>Prologo</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>
                Soy Claudio Garaycochea, con casi dos decadas de experiencia, desarrolle 
                apps para Facebook y el sitio de GlobalLogic (compañía IT con clientes 
                como Samsung, HP, Fox, entre otros), también para startups varias 
                de California, Washington DC y Suiza.
                Según los requerimientos de cada proyecto me involucro desde idea, 
                brainstorming, user experience, visual design, desarrollo, hasta 
                tareas de marketing y venta corporativa.
              </h3>
              <p>
                En este curso comparto como creé y cómo funciona la neoasimilación 
                de manera práctica, este metodo me permitio aprender a hablar en 
                ingles en solo una semana con un equipo 100% anglo, tambien desarrolle 
                apps para Facebook sin saber el lenguaje de programacion, una vez que me 
                contrataron, en solo una semana aprendí el lenguaje de programacion.
                El mismo proceso para desarrollar el sitio web de GlobalLogic. 
              </p>
              <p>
                Cabe destacar que no aprendia todo, sino que habia 
                una base que agilizaba el proceso de aprendizaje, lo que hago con la 
                neoasimilacion es aprender el contexto basico y principal en lo que 
                necesito cubrir en el trabajo y lo pongo en practica. 
                Los resultados son increibles, siempre puedes cubrir con 
                cualquier necesidad ya sea en la empresa o emprendimiento.
              </p>
            </Col>
          </Row>
        </Section>
        <Section className='image-right'>
          <Row>
            <Col>
              <H2>Programa de estudio variable</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              El programa de estudio pretende formarte con la habilidad de 
              aprender lo que necesites al instante, reducir tu carga 
              cerebral y darte las herramientas para una salida laboral 
              desde el primer mes.
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>OBJETIVO 1:</h2>
              <p>
                APRENDER A CREAR LANDING PAGE A NIVEL PROFESIONAL, CAMPANAS 
                DE MARKETING DIGITAL Y DIGITALIZACION DE COMERCIO. PARA QUE 
                PUEDAS LOGRAR UNA SALIDA LABORAL AL SEGUNDO MES.
              </p>
              <ul>
                <li>DESARROLLO DE LANDING PAGE</li>
                <li>PUESTA EN MARCHA</li>
                <li>MARKETING ONLINE</li>
                <li>DIGITALIZACION DE COMERCIOS</li>
              </ul>
            </Col>
            <Col>
              <h2>OBJETIVO 2:</h2>
              <p>
                QUEREMOS ENSENARTE A DESARROLLAR WEBSITES Y APPS A NIVEL PROFESIONAL. PARA QUE 
                PUEDAS LOGRAR UNA SALIDA LABORAL PARA DESARROLLAR WEBSITES PARA COMERCIOS, 
                EMPRESAS, O TRABAJAR EN UNA EMPRESA DE DESARROLLO.                
              </p>
              <ul>
                <li>CREACION DE WEBSITES PROFESIONALES</li>
                <li>APRENDER HERRAMIENTAS DE TRABAJO</li>
                <li>ESTRUCTURA DE EQUIPOS DE DESARROLLO</li>
                <li>LENGUAJES DE PROGRAMACION</li>
                <li>CREACION DE APPS</li>
              </ul>
            </Col>
            <Col>
              <h2>OBJETIVO 3:</h2>
              <p>
                QUEREMOS QUE APRENDAS TECNICAS PARA CREAR TUS PROPIOS EMPRENDIMIENTOS.
              </p>
              <ul>
                <li>LEAN STARTUP</li>
                <li>CREAR PLAN DE NEGOCIO</li>
                <li>BUSCAR FINANCIACION</li>
                <li>FORMAR EQUIPO</li>
                <li>TIPS</li>
              </ul>
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <h2>Estructura organizativa</h2>
            </Col>            
          </Row>
          <Row>
            <Col>
              Emprendimiento, Startups, Compañías IT, otros. 
              Quienes la conforma, que hacen cada uno, promedios 
              salariales.
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <h2>TOOLS</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>JIRA</div>
                <div className='content'>
                  Planificación de sprint, Crear tareas, Seguimiento y estado de tareas, Ejemplo práctico, más.
                </div>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>SLACK</div>
                <div className='content'>
                  Crear grupos de chat, Agregar individuo, Funciones generales, Ejemplo práctico, más.
                </div>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>GOOGLE CALENDAR</div>
                <div className='content'>
                  Crear grupos de chat, Agregar individuo, Funciones generales, Ejemplo práctico, más.
                </div>
              </Box>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>GITHUB</div>
                <div className='content'>
                  ¿Qué es?, ¿Cómo funciona?, Crear repositorio, Comandos esenciales, Ejemplo práctico, más.
                </div>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>WEB SERVERS</div>
                <div className='content'>
                  ¿Qué son?, ¿Cómo funcionan?, Ejemplo práctico, más.
                </div>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>APPS STORE</div>
                <div className='content'>
                  Subir apps a Google Play, Subir apps a App Store, Ejemplo prácticos, más.
                </div>
              </Box>
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <h2>Crear projecto</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>BRAINSTORMING</div>
                <div className='content'>
                  ¿Qué es y cómo funciona?, Creación de Flow con Draw.io, Ejemplo práctico, más.
                </div>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>UX/UI DESIGN</div>
                <div className='content'>
                  ¿Qué es?, Buenas prácticas, Web Neuroscience, Herramientas (Sketch, 
                  Figma, Adobe DX, otros), Creación de Wireframe con Figma, Ejemplo práctico, más.
                </div>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>VISUAL DESIGN</div>
                <div className='content'>
                  ¿Qué es y cómo funciona?, Buenas prácticas (diseño, fuentes, 
                  paleta de colores, svg, etc), Diseño visual con Illustrator, 
                  Photoshop, Figma. Ejemplo práctico. Más.
                </div>
              </Box>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>DEVELOPMENT</div>
                <div className='content'>
                  ¿Qué es y cómo funciona?, ¿Que es Frontend?, ¿Que es Backend?, Ejemplo práctico, más.
                </div>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>DEPLOYMENT</div>
                <div className='content'>
                  ¿Qué es y cómo funciona?, Ejemplo práctico, más.
                </div>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>REAL LIFE</div>
                <div className='content'>
                  Experiencias reales en proyectos personales, 
                  startups, grandes compañías, más.
                </div>
              </Box>
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <h2>DEVELOPMENT</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>FRONTEND DEVELOPMENT</div>
                <div className='content'>
                  ¿Qué es?, ¿Cómo funciona Aplicación Web/Website?, 
                  ¿Qué es HTML, CSS y Javascript?, Herramientas comunes 
                  (React, Angular, Vue, Java, PHP, Magento, Wordpress, 
                  otros), Ejemplo práctico, más.
                </div>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>FRONTEND DEPLOYMENT</div>
                <div className='content'>
                  ¿Qué es y cómo funciona?, Servidor AWS (crear 
                  dominio, servidor escalable, email, otros), Ejemplo 
                  práctico, más.
                </div>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>BACKEND DEVELOPMENT</div>
                <div className='content'>
                  ¿Qué es y cómo funciona?, ¿Que es una API y JSON?, 
                  Herramientas comunes (MongoDB, MySQL, Swagger, 
                  Postman, otros), Ejemplo práctico, más.
                </div>
              </Box>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>MOBILE DEVELOPMENT</div>
                <div className='content'>
                  ¿Qué es y cómo funciona Android/IOS?, ¿Qué es APK 
                  y IPA?, Herramientas comunes (React Native, Ionic, 
                  Native, otros), Ejemplo práctico, más.
                </div>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>MOBILE DEPLOYMENT</div>
                <div className='content'>
                  ¿Qué es y cómo subir mi app en App Store/Google Play?, 
                  Herramientas comunes (Android Studio, Swift, Expo, otros), 
                  Ejemplo práctico, más.
                </div>
              </Box>
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <h2>TEMPLATE WEB APPLICATION</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>BASE WEB</div>
                <div className='content'>
                  ¿Qué es y cómo funciona?, Creación de HTML, CSS 
                  y Javascript, Ejemplo práctico, más.
                </div>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>LENGUAJES DE PROGRAMACION</div>
                <div className='content'>
                  ¿Qué es y cómo funciona?, Herramientas (React, 
                  Angular, Vue, PHP, Magento, Wordpress, otros), 
                  Ejemplo práctico, más.
                </div>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>INSTALL TEMPLATE REACT</div>
                <div className='content'>
                  ¿Qué es y cómo funciona?, Buenas practicas 
                  pre-instaladas (architecture scalable, translation, 
                  routes, Redux, otros), Descarga template, Ejemplo 
                  práctico, más.
                </div>
              </Box>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>COPY AND PASTE</div>
                <div className='content'>
                  ¿Qué es y cómo funciona?, Ejemplo práctico, más.
                </div>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>DEPLOYMENT</div>
                <div className='content'>
                  ¿Qué es y cómo funciona?, Test environment, 
                  Production environment, Ejemplo práctico, más.
                </div>
              </Box>
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <h2>TEMPLATE API</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>BASE DE DATOS</div>
                <div className='content'>
                  ¿Qué es y cómo funciona?, Bases de datos 
                  relacionales (MySQL), Bases de datos no 
                  relacionales (Mongodb), Ejemplo práctico, más.
                </div>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>API</div>
                <div className='content'>
                  ¿Qué es y cómo funciona?, Herramientas (NodeJs, MongoDB, 
                  Express, MySQL, Swagger, Postman, otros), Ejemplo 
                  práctico, más.
                </div>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>INSTALL TEMPLATE API</div>
                <div className='content'>
                  ¿Qué es y cómo funciona?, Buenas prácticas pre-instaladas 
                  (architecture scalable, MongoDB, otros), Descarga template, 
                  Ejemplo práctico, más.
                </div>
              </Box>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>COPY AND PASTE</div>
                <div className='content'>
                  ¿Qué es y cómo funciona?, Ejemplo práctico, más.
                </div>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>DEPLOYMENT</div>
                <div className='content'>
                  ¿Qué es y cómo funciona?, Test environment, 
                  Production environment, Ejemplo práctico, más.
                </div>
              </Box>
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <h2>TEMPLATE APP</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>LENGUAJES DE PROGRAMACION</div>
                <div className='content'>
                  ¿Qué es y cómo funciona?, Herramientas (React Native, 
                  Ionic, Android Studio, Swift, otros), Ejemplo práctico, más.
                </div>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>INSTALL TEMPLATE REACT NATIVE</div>
                <div className='content'>
                  ¿Qué es y cómo funciona?, Buenas practicas pre-instalada 
                  (webpack, architecture scalable, internationalization, 
                  routes, Redux, otros), Descarga template, Ejemplo práctico, más.
                </div>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>COPY AND PASTE</div>
                <div className='content'>
                  ¿Qué es y cómo funciona?, Ejemplo práctico, más.
                </div>
              </Box>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>COPY AND PASTE</div>
                <div className='content'>
                  ¿Qué es y cómo funciona?, Ejemplo práctico, más.
                </div>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>DEPLOYMENT GOOGLE PLAY</div>
                <div className='content'>
                  ¿Qué es y cómo funciona?, Test environment, 
                  Production environment, Ejemplo práctico, más.
                </div>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>DEPLOYMENT APP STORE</div>
                <div className='content'>
                  ¿Qué es y cómo funciona?, Test environment, Production 
                  environment, Ejemplo práctico, más.
                </div>
              </Box>
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <H2>SUBSCRIBETE AL CURSO</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form noValidate validated={validated} onSubmit={(event) => this.handleSubmit(event)}>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Units</Form.Label>
                    <Form.Control
                      type='number'
                      placeholder='Units'
                      name='email'
                      value={email}
                      onChange={this.handleInputChange}
                    />
                  </Form.Group>
                </Form.Row>
                <Button variant='secondary' type='submit'>Accept</Button>
              </Form>
            </Col>
          </Row>
        </Section>
      </Container>
    );
  }
};

export default Home;