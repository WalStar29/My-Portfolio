import './App.css'
import Nav from './components/Nav'
import BarraLateral from './components/BarraLateral'
import Informacion from './components/Informacion'
import DescripcionExperiencias from './components/DescripcionExperiencias'
import Experiencias from './components/Experiencias'
import Proyectos from './components/Proyectos'
import Formulario from './components/Formulario'
import Footer from './components/Footer'
import logos from './data/logos'
import proyectos from './data/proyectos'
function App() {
  const logosList = logos.map(l => {
    return <Experiencias name={l.name} icon={l.imagen}/>
  })

  const proyectosList = proyectos.map(p => {
    return <Proyectos name={p.name} imagen={p.imagen} ulr={p.ulr} ulr2={p.ulr2} descripcion={p.descripcion}/>
  })


  return <div className="App">
    <Nav AcercaDeMi="Acerca de mi" Pilas="Pilas Tecnologicas" Proyectos="Mis Proyectos" Contacto="Contacto" id='#me' id2='#pilas' id3='#proyecto' id4='#contacto'/>
    <BarraLateral AcercaDeMi="Acerca de mi" Pilas="Pilas Tecnologicas" Proyectos="Mis Proyectos" Contacto="Contacto" id='#me' id2='#pilas' id3='#proyecto' id4='#contacto'/>

    <div className="me" id='me'>
      <Informacion tilte="Bienvenido a mi portafolio" informacion="Hola mi nombre es Walter Castro, Soy una persona 
        alternamente responsable y comprometidad, con un enfoque riguroso hacia el trabajo 
        y la puntualidad. Poseo una solida capacidad de asumir responsabilidades y cumplir con los plazos establecidos. 
        Busco seguir creciendo tanto personal como profesionalmente en el area de Ingenieria en Sistemas. 
        Tengo capacidad de logica buscando solucion a problemas, tengo experiencia en el Área del Desarrollo de paginas web 
        y con entusiasmo para aprender nuevas areas. Poseo conocimiento básicos de administración y 
        uso de software de oficina. " image="/public/perfil.jpg"/>
    </div>

    <div className="ContenedorPadre" id='pilas'>
      <div className="ContainerHijo">
        <DescripcionExperiencias descripcionExperien="Las siguientes experiencias que he tenido se han 
        basado en los aprendizajes de distintas tecnologías y lenguajes de programación, 
        demostrando un gran empeño en el área. Mi pasión por las nuevas tecnologías y lenguajes 
        de programación me ha llevado a explorar y dominar diversas herramientas y metodologías 
        que me permiten estar a la vanguardia en el desarrollo de soluciones innovadoras."/>
      </div>

      <div className="ContainerHijo2">
          <h1>Pila tecnológica</h1>
        <div className="lenguajes">
          {logosList}
        </div>
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
}

export default App
