import React, { Component }from "react";
import {
  Button,
  Section, Box,
  H1, H2, H3,
  Icon,
} from '../../ui/naUI';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './Course.css';
import { Link } from 'react-router-dom';
import { request, ContentTypes } from '../../libs/request';
import countries from '../../store/statics/Countries';
import PaypalCheckoutButton from '../../components/paypalCheckoutButton/PaypalCheckoutButton.js';

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
      course_type: 1,
      validated: false,
      subscriptionSent: false,
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
  }

  getFacebookURL = () => {
    const message = 'Te invito a conocer el curso de Neoasimilación para adquirir habilidades laborales rápidamente y reducir estres. Visitalo https://neoasimilacion.com';
    const text = encodeURIComponent(message);
    return `https://www.facebook.com/sharer.php?u=https%3A%2F%2Fneoassimilation.com&t=${text}`;
  }

  getWhatsappURL = (data) => {
    const message = (data) ? data : 'Te invito a conocer el curso de Neoasimilación para adquirir habilidades laborales rápidamente y reducir estres. Visitalo https://neoasimilacion.com';
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
			this.sendSubscribe();
		}
  }

	async sendSubscribe() {
		const { 
      email,
      firstname,
      lastname,
      city,
      zip_code,
      state,
      country,
      course_type
    } = this.state;

		const data = {
      "email": email,
      "firtname": firstname,
      "lastname": lastname,
      "city": city,
      "zip_code": zip_code,
      "state": state,
      "country": country,
      "course_type": course_type,
    };
    const endpoint = '/subscriptor';
    //const endpoint = '/user';
		try {
			await request('POST', endpoint, data, { 'content-type': ContentTypes.json });
      this.setState({ subscriptionSent: true });
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
    const {
      firstname,
      lastname,
      city,
      zip_code,
      state,
      country,
      email,
      repeat_email,
      validated,
      subscriptionSent,
    } = this.state;
    console.log('Course: subscriptionSent:', subscriptionSent);
    return (
      <Container fluid className='course'>
        <Section className='hero-wrapper'>
          <Row>
            <Col xs={12} lg={6} className='d-flex flex-column align-items-center justify-content-center'>
              <div className='content'>
                <H1>
                  ADQUIERE HABILIDADES PARA TRABAJAR EN EL MUNDO LABORAL TECNOLOGICO
                </H1>
                <H2>
                  CURSO BASADO EN NEOASIMILACION
                </H2>
                <div className='hero-course-bottom'> 
                  <div>CHARLAS EN VIVO VIA STREAMING</div>
                  <div>Todos los viernes de 19hs a 20hs (España) a partir del 10 de noviembre</div> 
                  <div>Duracion: 10 meses</div>
                  <div>Valor: $30/mes ó $19/mes si te subscribes antes de noviembre</div>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6} className='d-flex flex-column align-items-center justify-content-center'>
              <i className='image-brain-check'/>
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
                Aprende habilidades laborales rapidamente con neoasimilación.
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
                  ¿Que es?, como adquirimos habilidades rapidamente, vida antes y despues de neoasimilacion, ejemplos reales de aprendizaje inmediato, ejemplo practico, más.
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
                  interés, estructura tu día, ejemplos prácticos, más.
                </div>
              </Box>
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <H2>OBJETIVO 1</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>
                Aprende a crear landing pages, campañas de marketing y 
                digitalización de comercio, queremos que logres una salida 
                laboral al segundo mes de este curso.
              </H3>
            </Col>
          </Row>
          <Row>
            <Col>
              Aprenderemos que son y para que se utilizan las landing pages, brainstorming, UX, Visual 
              Design, Desarrollo en React, y puesta en marcha en servidores de Amazon Web Services. 
              Una vez que tienes tu landing page funcional, podras crear campanas de marketing 
              en Google Adwords, Facebook Ads, entre otros. Con ello ya dispondras de la habilidad 
              para hacer publicidad online. Te ensenamos como aprender a mejorar este servicio 
              de manera autodidacta.
            </Col>
          </Row>
          <Row>
            <Col>
              El curso esta creado para que puedas lograr tu salida laboral a partir del segundo mes. 
              A su vez, te forma con conocimientos basicos profesionales para que puedas adquirir 
              los conocimientos laborales del objetivo 2.
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <H2>OBJETIVO 2</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>
                Desarrollo de websites y apps a nivel profesional. Aprenderás 
                los conocimientos basicos para que puedas lograr una salida 
                laboral para desarrollar websites para comercios o trabajar 
                en empresas de desarrollo.
              </H3>
            </Col>
          </Row>
          <Row>
            <Col>
              Aprenderas a desarrollar websites profesionales conociendo como se 
              trabaja en startups y companias, cuales son herramientas de trabajo, estructura y 
              equipos de desarrollo, lenguajes de programacion, y desarrollo de apps.
            </Col>
          </Row>
          <Row>
            <Col>
              El curso esta creado para que puedas lograr tu salida laboral a partir del 
              noveno mes. Brindandote las herramientas para emprender o trabajar en una 
              empresa.
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <H2>OBJETIVO 3</H2>
            </Col>
          </Row>
          <Row>
            <Col>
              <H3>
                Desarrollarás tu propio emprendimiento con dos objetivos, 
                este servirá como referencia laboral para trabajar en una 
                empresa y generar ingresos con proyecto propio.
              </H3>
            </Col>
          </Row>
          <Row>
            <Col>
              Aprenderas a realizar tus emprendimientos con mayores probabilidades
               de exito Lean startup, plan de negocio, financiación, formar equipos, 
               conseguir clientes, vender con neoasimilación y lo que necesites 
               saber para lanzar tu propio proyecto.
            </Col>
          </Row>
          <Row>
            <Col>
              El curso esta creado para que puedas lograr tus propios ingresos 
              al decimo mes. Este proyecto cumple con dos objetivos, el contar 
              con una referencia laboral para conseguir empleo como desarrollador, 
              e intentar monetizar tu propio emprendimiento.
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col>
              <H2>SUBSCRIBETE AL CURSO</H2>
              <H3>
                Brindamos charlas en vivo vía streaming
              </H3>
            </Col>
          </Row>
          <Row>
            <Col>
              <p> 
                Todos los viernes 
                de 19hs a 20hs (España) a partir del 10 de noviembre 
                2020, la duración es de 6 meses a un valor $30/Mes /
                Si te subscribes antes de noviembre $19/Mes
                Te enviaremos el link de pago a tu cuenta de correo.
              </p>
            </Col>
          </Row>
          {(subscriptionSent===false) ? (
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
                    <fieldset>
                      <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>
                          Cursos:
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Check
                            type="radio"
                            label="Charla masiva vía streaming €19/mes"
                            value="1"
                            name="course_type"
                            id="formHorizontalRadios1"
                            onChange={(event) => this.handleInputChange(event)}
                          />
                          <Form.Check
                            type="radio"
                            label="Grupos reducidos €160/mes."
                            value="2"
                            name="course_type"
                            id="formHorizontalRadios2"
                            onChange={(event) => this.handleInputChange(event)}
                          />
                        </Col>
                      </Form.Group>
                    </fieldset>
                    <Button className='primary large' type='submit'>Subscribirme</Button>
                  </Form>
                </div>
              </Col>
            </Row>
          ) : (
            <div>
              <Row>
                <Col>
                  <h2>Realiza el pago</h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <PaypalCheckoutButton />
                </Col>
              </Row>
            </div>)
          }

        </Section>
        <Section className='dark'>
          <Row>
            <Col className='d-flex justify-content-center'>
              ¿Tienes dudas, consultanos por Whatsapp?
            </Col>
          </Row>
          <Row>
            <Col className='d-flex justify-content-center'>
              <a href={this.getWhatsappURL('Hola, quiero consultar por el curso de neoasimilación.')} data-action="share/whatsapp/share">
                <Button className='whatsapp'><Icon className='whatsapp small space'/>Consultanos por Whatsapp</Button>
              </a>
            </Col>
          </Row>
        </Section>
      </Container>
    );
  }
};

export default Home;