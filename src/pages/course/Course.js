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

    return (
      <Container fluid>
        <Section>
          <Row>
            <Col>
              <H1>Curso de Neoasimilación</H1>
              <H2>Aplicado al Mundo Digital</H2>
              <H3>
                Los cursos son vía streaming en vivo. Todos los viernes 
                de 19hs a 20hs (España) a partir del 10 de noviembre 
                2020, la duración es de 6 meses a un valor $30/Mes /
                Si te subscribes antes de noviembre $19/Mes
              </H3>
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
              <H2>¿Qué aprenderás?</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>Aprende neoasimilación y crea tus propias oportunidades laborales</H3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>OBJETIVO 1:</h2>
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
            </Col>
            <Col>
              <h2>OBJETIVO 2:</h2>
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
            </Col>
            <Col>
              <h2>OBJETIVO 3:</h2>
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
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Estado/Provincia</Form.Label>
                      <Form.Control
                        type='number'
                        placeholder='Estado/Provincia'
                        name='state'
                        value={state}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>País</Form.Label>
                      <Form.Control
                        type='number'
                        placeholder='País'
                        name='country'
                        value={country}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type='number'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group> 
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>Repite tu email</Form.Label>
                      <Form.Control
                        type='number'
                        placeholder='Email'
                        name='repeat_email'
                        value={repeat_email}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group> 
                  </Form.Row>
                  <Button variant='secondary' type='submit'>Subscribirme</Button>
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