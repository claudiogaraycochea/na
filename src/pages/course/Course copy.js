import React, { Component }from "react";
import {
  Button,
  Section, Box,
  H1, H2, H3,
} from '../../ui/naUI';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './Course.css';
import { Link } from 'react-router-dom';
import { request, ContentTypes } from '../../libs/request';
import countries from '../../store/statics/Countries';
// import imageClaudio from '../../assets/images/image-claudio-g.png';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			forgotPasswordSent: false,
      email: '',
      repeat_email: '',
      firstname: '',
      lastname: '',
      city: '',
      zip_code: '',
      state: '',
      country: '',
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
    console.log('event: ', event);
		if (form.checkValidity() === false) {
			this.setState({ validated: true });
		} else {
      console.log('handleSubmit send message')
			//this.sendSubscribe();
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
    const {
      firstname,
      lastname,
      city,
      zip_code,
      state,
      country,
      email,
      repeat_email,
      validated 
    } = this.state;

    console.log('countries: ', countries);
    return (
      <Container fluid>
        <Section className='h-100 d-flex justify-content-center align-items-center'>
          <Row>
            <Col>
              <H1>
                FORMATE PARA TRABAJAR EN EL MUNDO LABORAL TECNOLOGICO
              </H1>
              <H2>
                CURSO BASADO EN NEOASIMILACION
              </H2>
              <p>
                Brindamos charlas en vivo vía streaming. 
              </p>
              <p> 
                Todos los viernes 
                de 19hs a 20hs (España) a partir del 10 de noviembre 
                2020, la duración es de 6 meses a un valor $30/Mes /
                Si te subscribes antes de noviembre $19/Mes
              </p>
            </Col>
          </Row>
        </Section>
        <Section className='image-left'>
          <Row>
            <Col>
              <H2>NEOASIMILACION & DEVELOPMENT</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>
                Soy Claudio Garaycochea, con casi dos decadas de experiencia, desarrolle 
                apps para Facebook y el sitio de GlobalLogic (compañía IT con clientes 
                como Samsung, HP, Fox, entre otros), también para startups varias 
                de California, Washington DC y Suiza.
                Según los requerimientos de cada proyecto me involucro desde idea, 
                brainstorming, user experience, visual design, desarrollo, hasta 
                tareas de marketing y venta corporativa.
              </H3>
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
              <p>
                Si no sabes que es Neoasimilación, haz click en el siguiente enlace.         
              </p>
              <Link to='/'>
                ¿Qué es Neoasimilación?
              </Link>
            </Col>
          </Row>
        </Section>
        <Section className='image-right'>
          <Row>
            <Col>
              <H2>¿QUE APRENDERAS?</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>
                El curso esta dividido en 3 objetivos, cada uno de ellos son trimestriales y 
                te permiten su salida laboral, es de manera secuencial donde cada objetivo te 
                da las herramientas para el siguiente objetivo.
              </H3>
            </Col>
          </Row>
          <Row>
            <Col>
              <Box>
                <div className='title'>OBJETIVO 1</div>
                <div className='content'>
                  <p>
                    Aprende a crear landing pages, campañas de marketing y 
                    digitalización de comercio, <span className='text-highlight'>queremos que logres una salida 
                    laboral al segundo mes de este curso.</span>
                  </p>
                  <ul className='ul-wrapper'>
                    <li>Desarrollo de Landing page</li>
                    <li>Puesta en marcha</li>
                    <li>Marketing online</li>
                    <li>Digitalización de comercios</li>
                  </ul>
                </div>
              </Box>
            </Col>
            <Col>
              <Box>
                <div className='title'>OBJETIVO 2</div>
                <div className='content'>
                  <p>
                    Desarrollo de websites y apps a nivel profesional. Aprenderas 
                    los <span className='text-highlight'>conocimientos basicos para que puedas lograr una salida 
                    laboral para desarrollar websites para comercios o trabajar 
                    en empresas de desarrollo.</span>                
                  </p>
                  <ul className='ul-wrapper'>
                    <li>Desarrollo de websites profesionales</li>
                    <li>Aprende herramientas de trabajo</li>
                    <li>Estructura de equipos de desarrollo</li>
                    <li>Lenguajes de programación</li>
                    <li>Desarrollo de Apps</li>
                  </ul>
                </div>
              </Box>
            </Col>
            <Col>
              <Box>
                <div className='title'>OBJETIVO 3</div>
                <div className='content'>
                  <p>
                    Desarrollarás tu propio emprendimiento con dos objetivos, 
                    este servirá como <span className='text-highlight'>referencia 
                    laboral para trabajar en una empresa y generar ingresos 
                    con proyecto propio.</span>
                  </p>
                  <ul className='ul-wrapper'>
                    <li>Lean startup</li>
                    <li>Crear plan de negocio</li>
                    <li>Busqueda de financiación</li>
                    <li>Formar equipo correcto</li>
                    <li>Conseguir clientes</li>
                    <li>Vende con neoasimilación</li>
                    <li>Tips</li>
                  </ul>
                </div>
              </Box>
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <H2>NEOASIMILACION</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>
                Trabajaremos sobre buenas practicas laborales y como la neoasimilación cambiará tu calidad de vida.
              </H3>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>DESGLOSANDO TU CEREBRO</div>
                <div className='content'>
                  ¿Como funciona?, ¿como aprendes?, ¿como tomas tus desiciones?, ¿mejorar las desiciones que tomas?, como piensan los demas, más.
                </div>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>NEOASIMILACION</div>
                <div className='content'>
                  ¿Que es?, como aprendemos habilidades rapidamente, vida antes y despues de neoasimilacion, ejemplos practicos, más.
                </div>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>VENTAS</div>
                <div className='content'>
                  Incrementa las posivilidades de venta, previsualiza como lo veran tus clientes, ejemplos prácticos, más.
                </div>
              </Box>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>BRAIN BLOCKER</div>
                <div className='content'>
                  ¿Que es?, ¿Como funciona?, ¿Como evitarlo?, ejemplos practicos, más.
                </div>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>REDUCIR ESTRES</div>
                <div className='content'>
                  ¿Que es?, Reducción de carga cerebral, ejemplos practicos, más.
                </div>
              </Box>
            </Col>
            <Col xs={12} lg={4}>
              <Box>
                <div className='title'>HABILIDADES</div>
                <div className='content'>
                  Aprender a contextualizar, resumir, una tareas con doble 
                  interes, ejemplos practicos, más.
                </div>
              </Box>
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <H2>TOOLS</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>Aprenderás herramientas comunes utilizada en startups y compañías.</H3>
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
              <H2>CREATE PROJECT</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>
                Aprenderás conceptos basicos para cubrir cada una de las areas para crear proyectos.
              </H3>
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
              <H2>DEVELOPMENT</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>
                Aprende las herramientas fundamentales para desarrollar proyectos.
              </H3>
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
              <H2>TEMPLATE WEB APPLICATION</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>
                Trabajaremos con una pagina web estandar que incluye 
                buenas prácticas de desarrollo, sera la guia para 
                tus futuros proyectos.
              </H3>
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
              <H2>TEMPLATE API</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>
                Trabajaremos con base de datos que se conectan 
                a tu sitio web a traves de una api, sera tu guia 
                en futuros proyectos.
              </H3>
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
              <H2>TEMPLATE APP</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>
                Trabajaremos sobre una app funcional, con menus, 
                traducciones, y todo lo estandar en desarrollo.
              </H3>
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
              <p>
                Brindamos charlas en vivo vía streaming. 
              </p>
              <p> 
                Todos los viernes 
                de 19hs a 20hs (España) a partir del 10 de noviembre 
                2020, la duración es de 6 meses a un valor $30/Mes /
                Si te subscribes antes de noviembre $19/Mes
                Te enviaremos el link de pago a tu cuenta de correo.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className='d-flex justify-content-center'>
              <div className='form-wrapper'>
                <Form noValidate validated={validated} onSubmit={(event) => this.handleSubmit(event)}>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Nombre'
                        name='firstname'
                        value={firstname}
                        required
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Apellido</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Apellido'
                        name='lastname'
                        value={lastname}
                        required
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Ciudad</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Ciudad'
                        name='city'
                        value={city}
                        required
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Código Postal</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Código Postal'
                        name='zip_code'
                        value={zip_code}
                        required
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Estado/Provincia</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Estado/Provincia'
                        name='state'
                        value={state}
                        required
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group controlId='state' as={Col}>
											<Form.Label>País</Form.Label>
											<Form.Control
												as='select'
												name='country'
												value={country}
												onChange={this.handleInputChange}
											>
												<option>Choose a country</option>
												{countries.map((country) => {
													return (
														<option key={country.code} value={country.name}>
															{country.name}
														</option>
													);
												})}
											</Form.Control>
										</Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        required
                        onChange={this.handleInputChange}
                      />
                    </Form.Group> 
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Repite tu email</Form.Label>
                      <Form.Control
                        type='email'
                        placeholder='Email'
                        name='repeat_email'
                        value={repeat_email}
                        required
                        onChange={this.handleInputChange}
                      />
                    </Form.Group> 
                  </Form.Row>
                  <h3>Curso:</h3>
                  <Form.Row>
                    <Form.Group>
                      <Form.Check 
                        type='radio'
                        id='default-radio'
                        name='formHorizontalRadios'
                        required
                        label='Charla masiva vía streaming €19/mes.'
                      />
                      <Form.Check 
                        type='radio'
                        id='default-radio'
                        name='formHorizontalRadios'
                        required
                        label='Grupos reducidos €160/mes. Seguimiento personalizado con preguntas.'
                      />
                    </Form.Group> 
                  </Form.Row>
                  <Button className='primary large' type='submit'>Subscribirme</Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Section>
      </Container>
    );
  }
};

export default Home;