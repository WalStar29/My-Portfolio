import './App.css';
import Nav from './components/nav'
import BarraLateral from './components/barraLateral'
import Informacion from './components/informacion'
import DescripcionExperiencias from './components/descripcionExperiencia'
import ImageSlider from './components/imagenSlider';
import Tecnologia from './components/tecnologi';
import Proyectos from './components/proyectos';
import Formulario from './components/formulario';
import Footer from './components/footer'

import frame from './data/framework';
import lenguaje from './data/lenguajes';
import web from './data/frontEnd';
import datebase from './data/database';
import tools from './data/tools';
import proyectos from './data/proyectos'


function App() {
  const framework = frame.map(f => {
    return <Tecnologia name={f.name} img={f.imagen}/>
  })

  const lenguajes = lenguaje.map(l => {
    return <Tecnologia name={l.name} img={l.imagen}/>
  })

  const frontend = web.map(l => {
    return <Tecnologia name={l.name} img={l.imagen}/>
  })

  const backend = datebase.map(l => {
    return <Tecnologia name={l.name} img={l.imagen}/>
  })

  const tool = tools.map(l => {
    return <Tecnologia name={l.name} img={l.imagen}/>
  })

  const proyectosList = proyectos.map(p => {
    return <Proyectos name={p.name} imagen={p.imagen} ulr={p.ulr} ulr2={p.ulr2} descripcion={p.descripcion}/>
  })
  


  return (
    <div className="App">
      <Nav AcercaDeMi="Acerca de mi" Pilas="Pilas Tecnologicas" Proyectos="Mis Proyectos" Contacto="Contacto" id='#me' id2='#pilas' id3='#proyecto' id4='#contacto'/>
      <BarraLateral AcercaDeMi="Acerca de mi" Pilas="Pilas Tecnologicas" Proyectos="Mis Proyectos" Contacto="Contacto" id='#me' id2='#pilas' id3='#proyecto' id4='#contacto'/>

      <div className="me" id='me'>
        <Informacion tilte="Bienvenido a mi portafolio" informacion="Hola mi nombre es Walter Castro, Soy una persona 
          alternamente responsable y comprometidad, con un enfoque riguroso hacia el trabajo 
          y la puntualidad. Poseo una solida capacidad de asumir responsabilidades y cumplir con los plazos establecidos. 
          Busco seguir creciendo tanto personal como profesionalmente en el area de Ingenieria en Sistemas. 
          Tengo capacidad de logica buscando solucion a problemas, tengo experiencia en el Área del Desarrollo de paginas web 
          y con entusiasmo para aprender nuevas areas. Poseo conocimiento básicos de administración y 
          uso de software de oficina. " image="https://github.com/WalStar29/My-Portfolio/blob/main/public/me.jpg?raw=true"/>
      </div>

      <div className="ContenedorPadre" id='pilas'>
        <div className="ContainerHijo">
          <h2>
            Experiencias en el area del desarrollo
          </h2>
          <DescripcionExperiencias descripcionExperien="Las siguientes experiencias que he tenido se han 
          basado en los aprendizajes de distintas tecnologías y lenguajes de programación, 
          demostrando un gran empeño en el área. Mi pasión por las nuevas tecnologías y lenguajes 
          de programación me ha llevado a explorar y dominar diversas herramientas y metodologías 
          que me permiten estar a la vanguardia en el desarrollo de soluciones innovadoras."/>
        </div>

        <div className="slider">
          <ImageSlider imagen="https://github.com/WalStar29/My-Portfolio/blob/main/public/Logos/astro.png?raw=true" imagen2="https://github.com/WalStar29/My-Portfolio/blob/main/public/Logos/c++.png?raw=true" imagen3="https://github.com/WalStar29/My-Portfolio/blob/main/public/Logos/html.png?raw=true" imagen4="https://github.com/WalStar29/My-Portfolio/blob/main/public/Logos/mysql.png?raw=true" imagen5="https://github.com/WalStar29/My-Portfolio/blob/main/public/Logos/JavaScript.png?raw=true"/>
        </div>
      </div>

      <div className='tecnologias'>
        <h1>Pilas Tecnologicas</h1>
        <div className="content">
          <h2>Framework utilizadas</h2>
            {framework}
        </div>

        <div className="content">
          <h2>Lenguajes de programación</h2>
          {lenguajes}
        </div>

        <div className="content">
          <h2>Front-End</h2>
          {frontend}
        </div>

        <div className="content">
          <h2>Back-End</h2>
          {backend}
        </div>

        <div className="content">
          <h2>Otras herramientas</h2>
          {tool}
        </div>
      </div>

      <div id='proyecto' className='Proyecto'>
        <h1>Mis Proyectos</h1>
        <div className="MisProyectos">
          {proyectosList}
        </div>
      </div>

      <div id='contacto' className="formulario">
        <Formulario></Formulario>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
