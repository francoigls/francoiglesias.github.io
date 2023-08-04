import React from "react";
import './Works.css'
import Proyecto from './trabajos';

const proyectosData = [
  {
    id: 1,
    titulo: 'Proyecto 1',
    imagen: './PORFOLIO.jpg',
    descripcion: 'Portfolio personal',
    demoLink: 'https://ejemplo.com/demo-proyecto-1',
    codigoFuenteLink: 'https://github.com/tu-usuario/proyecto-1',
  },{
    id: 2,
    titulo: 'proyecto 2',
    imagen: '',
    descripcion: 'descripcion asdasd',
    demoLink: 'https://ejemplo.com/demo-proyecto-1',
    codigoFuenteLink: 'codigo de github'
  },
  {
    id: 3,
    titulo: 'proyecto 3',
    imagen: '',
    descripcion: 'la descripcion',
    demoLink: 'wwwww',
    codigoFuenteLink: 'link para ver codigo'

  }
  // Agrego los trabajos en el array
];

const Trabajos = () => {
  return (
    <div className="works" id="works">
      <h3 className="Subtext" > PROYECTOS</h3>
      <div className="proyectos-list">
        {proyectosData.map((proyecto) => (
          <Proyecto key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </div>
  );
};

export default Trabajos;
