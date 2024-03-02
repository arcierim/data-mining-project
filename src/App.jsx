// App.jsx

import "./App.css";
import Mateo from "./assets/Mateo.jpg";
import Daniel from "./assets/Daniel.png";
import Celien from "./assets/Celien.png";
import Yassary from "./assets/yassary.jpg";
import Camilo from "./assets/Camilo.jpg";
import Grafico from "./assets/Grafica3.jpeg";
import Grafico2 from "./assets/Grafica2.jpeg";

function App() {
  return (
    <div>
      <section className="intro-section" id="start">
        <nav className="navbar">
          <div className="logo">
            <a href="#">Logo</a>
          </div>
          <ul className="nav-list">
            <li>
              <a href="#start">Inicio</a>
            </li>
            <li>
              <a href="#members">Miembros</a>
            </li>
            <li>
              <a href="#dataset-choice">Dataset</a>
            </li>
            <li>
              <a href="#charts">Graficas</a>
            </li>
          </ul>
        </nav>
        <div className="overlay"></div>
        <h1 className="main-title">Estrategias Basadas en Datos</h1>
        <p className="program-description">
          Descubre cosas fascinantes y aspectos importantes de nuestro programa.
          Explora nuestras diferentes secciones.
        </p>
      </section>
      {/* Section 1: Group Members */}
      <section className="white-section" id="members">
        <h2 className="white-section-title">
          <span className="word1">Sobre</span>{" "}
          <span className="word2">Nosotros</span>
        </h2>

        <div className="member-card">
          <img className="member-img" src={Celien} alt="Member 1" />
          <div className="member-info">
            <h3>Celien Bonhomme</h3>
            <p></p>
            <p>
              Soy Célien Bonhomme, estudiante internacional de Francia. Tras dos
              años de preparatoria intensiva, ingresé a Ensimag, una institución
              destacada en informática, donde me especialicé en inteligencia
              artificial. Durante mi formación, completé una práctica de seis
              meses en procesamiento del lenguaje natural, enfocándome en
              proyectos RAG. Mi meta es aportar en ciencia de datos,
              especialmente en aplicaciones que beneficien al medio ambiente.
            </p>
          </div>
        </div>
        <div className="member-card">
          <img className="member-img" src={Daniel} alt="Member 2" />
          <div className="member-info">
            <h3>Daniel Mendoza Contreras</h3>
            <p></p>
            <p>
              Como estudiante avanzado en Ingeniería de Sistemas, mi pasión
              reside en el aprendizaje constante y la aplicación de soluciones
              tecnológicas en el ámbito de la salud. Mi objetivo es utilizar mis
              habilidades en programación para innovar en ingeniería biomédica,
              un campo que considero tiene un potencial transformador. La
              experiencia adquirida durante mi pasantía en Sophos Solutions ha
              enriquecido mis capacidades de colaboración y comunicación,
              aspectos esenciales para el éxito en proyectos
              interdisciplinarios. Determinado a contribuir al avance
              tecnológico con un impacto positivo en la sociedad, busco roles
              donde pueda influir en el desarrollo de tecnologías que promuevan
              el bienestar global.
            </p>
          </div>
        </div>
        <div className="member-card">
          <img className="member-img" src={Yassary} alt="Member 3" />
          <div className="member-info">
            <h3>Yassary Garcia Potes</h3>
            <p></p>
            <p>
              Originario de Barranquilla, actualmente curso Ingeniería de
              Sistemas en la Universidad del Norte, con un enfoque particular en
              las redes de computación y el diseño de software. Mi experiencia
              se extiende a proyectos de diseño de aplicaciones móviles. Busco
              expandir mis conocimientos en desarrollo backend, mejorar mi
              dominio del inglés y adquirir fluidez en una tercera lengua, con
              el objetivo de enriquecer mi perfil profesional y abrir nuevas
              puertas en el ámbito tecnológico internacional.
            </p>
          </div>
        </div>
        <div className="member-card">
          <img className="member-img" src={Mateo} alt="Member 4" />
          <div className="member-info">
            <h3>Mateo Arcieri</h3>
            <p></p>
            <p>
              Soy Mateo Arcieri, un estudiante de 25 años de Ingeniería de
              Sistemas en la Universidad del Norte, especializándome en
              Desarrollo Web Frontend con React. A lo largo de mi carrera, he
              completado varios proyectos que no solo han ampliado mi
              conocimiento en esta área, sino que también han despertado mi
              interés en el desarrollo backend con el objetivo de convertirme en
              un desarrollador Full Stack. Aunque la ciberseguridad también me
              atrae, mi enfoque actual es adquirir habilidades diversificadas
              para descubrir mi verdadera pasión dentro del amplio espectro de
              la tecnología.
            </p>
          </div>
        </div>
        <div className="member-card">
          <img className="member-img" src={Camilo} alt="Member 5" />
          <div className="member-info">
            <h3>Camilo Andres Sagrado Rada</h3>
            <p></p>
            <p>
              Estudiante en la Universidad del Norte, he desarrollado
              habilidades clave en desarrollo Frontend, incluyendo React, CSS y
              HTML, a través de mi participación en diversos proyectos. Poseo
              experiencia en manejo de bases de datos y SQL, lo que refuerza mi
              base técnica. Aspiro a impactar en la industria de las
              telecomunicaciones, aprovechando mi formación para contribuir a la
              innovación y mejorar la conectividad global. Mi enfoque está en
              aplicar mis conocimientos en un sector en constante evolución,
              buscando siempre aprender y enfrentar nuevos retos.
            </p>
          </div>
        </div>
      </section>
      {/* Section 2: Dataset Choice */}
      <section className="purple-section" id="dataset-choice">
        <h2>Explorando el Dataset &apos;Hotel Booking Demand&apos;</h2>
        <p>
          Analizar el conjunto de datos &quot;Hotel booking demand&quot; en un
          proyecto de minería de datos ofrece múltiples beneficios para la
          industria hotelera, incluyendo la optimización de precios y ocupación
          mediante la identificación de patrones en reservas y cancelaciones, la
          mejora de la experiencia del cliente al entender sus preferencias y
          necesidades, la gestión eficaz de la demanda a través del
          reconocimiento de tendencias estacionales, el análisis detallado de
          segmentos de mercado para dirigir esfuerzos de marketing y ventas de
          manera más efectiva, y la predicción de cancelaciones para ajustar
          políticas de reservas y minimizar pérdidas. Estos análisis no solo
          permiten a los hoteles optimizar sus operaciones y maximizar ingresos,
          sino también personalizar servicios, mejorando significativamente la
          satisfacción del cliente y fortaleciendo la estrategia comercial en un
          mercado competitivo.
        </p>
      </section>
      {/* Section 3: Charts Derived from the Dataset */}
      <section className="white-section" id="charts1">
        <h2 className="white-section-title">
          <span className="word1">Panorama</span>{" "}
          <span className="word2">General</span>
        </h2>

        <div className="content-row">
          <p className="personalP">
            El gráfico de dispersión revela que reservas hechas con mayor
            anticipación generalmente corresponden a estancias más largas, y que
            las reservas de último minuto son más propensas a cancelarse. Esta
            información es clave para que los hoteles formulen estrategias que
            minimicen las cancelaciones.
          </p>
          <div className="image-container">
            <img
              src={Grafico2}
              alt="Gráfico de dispersión mostrando la relación entre anticipación de la reserva y duración de la estancia"
            />
          </div>
        </div>
      </section>

      <section className="white-section" id="charts2">
        <div className="content-row">
          <div className="image-container">
            <img
              src={Grafico}
              alt="Gráfico de líneas que muestra tendencias de reservas y cancelaciones"
            />
          </div>
          <p className="personalP">
            El gráfico de líneas muestra que las reservas hechas con más
            anticipación suelen corresponder a estancias más largas. Las
            reservas canceladas tienden a tener menor anticipación que las no
            canceladas, con una mayor variabilidad en la duración de las
            estancias canceladas. Esto indica que las reservas más próximas a la
            fecha de llegada tienen más riesgo de cancelación, y que las
            canceladas suelen ser para estancias más cortas.
          </p>
        </div>
      </section>

      {/* Section 4: Another Section (To Be Defined) */}
      <section className="purple-section" id="another-section">
        <h2>Hipótesis</h2>
        <h3>Anticipación de la Reserva y su Impacto en las Cancelaciones</h3>
        <p>
          En el dinámico entorno de las reservas hoteleras, el tiempo de
          anticipación emerge como un factor crítico en la probabilidad de
          cancelación. Nuestro análisis se enfoca en descifrar la correlación
          entre el periodo de anticipación de la reserva y las tasas de
          cancelación, ofreciendo insights valiosos para optimizar estrategias
          de gestión de inventario y políticas de cancelación.
        </p>
      </section>
    </div>
  );
}

export default App;
