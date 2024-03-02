// App.jsx
import React from "react";
import "./App.css";
import Mateo from "./assets/Mateo.jpg";
import Daniel from "./assets/Daniel.png";
import Celien from "./assets/Celien.png";
import Yassary from "./assets/yassary.jpg";
import Camilo from "./assets/Camilo.jpg";
import Grafico from "./assets/Grafica3.jpeg";
import Graficos from "./assets/Graficos.jpeg";
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
        <h2>Sobre Nosotros</h2>
        <div className="member-card">
          <img className="member-img" src={Celien} alt="Member 1" />
          <div className="member-info">
            <h3>Celien Bonhomme</h3>
            <p></p>
            <p>
              Saludos, mi nombre es Célien Bonhomme y me desempeño como
              estudiante internacional francés. En Francia, tras completar el
              bachillerato, nos embarcamos en dos años de clases preparatorias
              intensivas, diseñadas como un trampolín para ingresar a las
              prestigiosas escuelas de ingeniería. Este período es crucial, ya
              que nos brinda una sólida formación en áreas fundamentales como
              matemáticas, ciencias físicas e informática. Concluidas las
              oposiciones, tuve el honor de ser admitido en Ensimag, reconocida
              como una de las instituciones líderes en informática en Francia,
              donde he dedicado tres años a especializarme en inteligencia
              artificial. Durante este tiempo, realicé prácticas de seis meses
              focalizadas en el procesamiento del lenguaje natural (PLN),
              centrando mis estudios en proyectos de tipo RAG. Mi aspiración es
              contribuir al campo de la ciencia de datos, con un enfoque
              especial en la aplicación de estos conocimientos para la
              protección y mejora del medio ambiente.
            </p>
          </div>
        </div>
        <div className="member-card">
          <img className="member-img" src={Daniel} alt="Member 2" />
          <div className="member-info">
            <h3>Daniel Mendoza Contreras</h3>
            <p></p>
            <p>
              Saludos, mi nombre es Célien Bonhomme y me desempeño como
              estudiante internacional francés. En Francia, tras completar el
              bachillerato, nos embarcamos en dos años de clases preparatorias
              intensivas, diseñadas como un trampolín para ingresar a las
              prestigiosas escuelas de ingeniería. Este período es crucial, ya
              que nos brinda una sólida formación en áreas fundamentales como
              matemáticas, ciencias físicas e informática. Concluidas las
              oposiciones, tuve el honor de ser admitido en Ensimag, reconocida
              como una de las instituciones líderes en informática en Francia,
              donde he dedicado tres años a especializarme en inteligencia
              artificial. Durante este tiempo, realicé prácticas de seis meses
              focalizadas en el procesamiento del lenguaje natural (PLN),
              centrando mis estudios en proyectos de tipo RAG. Mi aspiración es
              contribuir al campo de la ciencia de datos, con un enfoque
              especial en la aplicación de estos conocimientos para la
              protección y mejora del medio ambiente.
            </p>
          </div>
        </div>
        <div className="member-card">
          <img className="member-img" src={Yassary} alt="Member 3" />
          <div className="member-info">
            <h3>Yassary Garcia Potes</h3>
            <p></p>
            <p>
              Saludos, mi nombre es Célien Bonhomme y me desempeño como
              estudiante internacional francés. En Francia, tras completar el
              bachillerato, nos embarcamos en dos años de clases preparatorias
              intensivas, diseñadas como un trampolín para ingresar a las
              prestigiosas escuelas de ingeniería. Este período es crucial, ya
              que nos brinda una sólida formación en áreas fundamentales como
              matemáticas, ciencias físicas e informática. Concluidas las
              oposiciones, tuve el honor de ser admitido en Ensimag, reconocida
              como una de las instituciones líderes en informática en Francia,
              donde he dedicado tres años a especializarme en inteligencia
              artificial. Durante este tiempo, realicé prácticas de seis meses
              focalizadas en el procesamiento del lenguaje natural (PLN),
              centrando mis estudios en proyectos de tipo RAG. Mi aspiración es
              contribuir al campo de la ciencia de datos, con un enfoque
              especial en la aplicación de estos conocimientos para la
              protección y mejora del medio ambiente.
            </p>
          </div>
        </div>
        <div className="member-card">
          <img className="member-img" src={Mateo} alt="Member 4" />
          <div className="member-info">
            <h3>Mateo Arcieri</h3>
            <p></p>
            <p>
              Saludos, mi nombre es Célien Bonhomme y me desempeño como
              estudiante internacional francés. En Francia, tras completar el
              bachillerato, nos embarcamos en dos años de clases preparatorias
              intensivas, diseñadas como un trampolín para ingresar a las
              prestigiosas escuelas de ingeniería. Este período es crucial, ya
              que nos brinda una sólida formación en áreas fundamentales como
              matemáticas, ciencias físicas e informática. Concluidas las
              oposiciones, tuve el honor de ser admitido en Ensimag, reconocida
              como una de las instituciones líderes en informática en Francia,
              donde he dedicado tres años a especializarme en inteligencia
              artificial. Durante este tiempo, realicé prácticas de seis meses
              focalizadas en el procesamiento del lenguaje natural (PLN),
              centrando mis estudios en proyectos de tipo RAG. Mi aspiración es
              contribuir al campo de la ciencia de datos, con un enfoque
              especial en la aplicación de estos conocimientos para la
              protección y mejora del medio ambiente.
            </p>
          </div>
        </div>
        <div className="member-card">
          <img className="member-img" src={Camilo} alt="Member 5" />
          <div className="member-info">
            <h3>Camilo Andres Sagrado Rada</h3>
            <p></p>
            <p>
              Saludos, mi nombre es Célien Bonhomme y me desempeño como
              estudiante internacional francés. En Francia, tras completar el
              bachillerato, nos embarcamos en dos años de clases preparatorias
              intensivas, diseñadas como un trampolín para ingresar a las
              prestigiosas escuelas de ingeniería. Este período es crucial, ya
              que nos brinda una sólida formación en áreas fundamentales como
              matemáticas, ciencias físicas e informática. Concluidas las
              oposiciones, tuve el honor de ser admitido en Ensimag, reconocida
              como una de las instituciones líderes en informática en Francia,
              donde he dedicado tres años a especializarme en inteligencia
              artificial. Durante este tiempo, realicé prácticas de seis meses
              focalizadas en el procesamiento del lenguaje natural (PLN),
              centrando mis estudios en proyectos de tipo RAG. Mi aspiración es
              contribuir al campo de la ciencia de datos, con un enfoque
              especial en la aplicación de estos conocimientos para la
              protección y mejora del medio ambiente.
            </p>
          </div>
        </div>
      </section>
      {/* Section 2: Dataset Choice */}
      <section className="purple-section" id="dataset-choice">
        <h2>Explorando el Dataset 'Hotel Booking Demand'</h2>
        <p>
          Analizar el conjunto de datos "Hotel booking demand" en un proyecto de
          minería de datos ofrece múltiples beneficios para la industria
          hotelera, incluyendo la optimización de precios y ocupación mediante
          la identificación de patrones en reservas y cancelaciones, la mejora
          de la experiencia del cliente al entender sus preferencias y
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
      <section className="white-section" id="charts">
        <h2>Panorama General</h2>

        <div className="image-row">
        <p className="personalP">
            El gráfico de dispersión revela que reservas hechas con mayor
            anticipación generalmente corresponden a estancias más largas, y que
            las reservas de último minuto son más propensas a cancelarse. Esta
            información es clave para que los hoteles formulen estrategias que
            minimicen las cancelaciones.
          </p>
          <div className="image-container">
            <img src={Grafico2} alt="Descripción de la imagen" />
          </div>
          
        </div>
      </section>
      <section className="white-section" id="charts">
        <div className="image-row">
          {/* <div className="image-container">
            <img src={Graficos} alt="Descripción de la imagen" />
          </div> */}
          <div className="image-container">
            <img src={Grafico} alt="Descripción de la imagen" />
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
