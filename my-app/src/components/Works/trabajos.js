import React from 'react';

const Proyecto = ({ proyecto }) => {
  const { titulo, imagen, descripcion, demoLink, codigoFuenteLink } = proyecto;

  return (
    <div className="proyects">
      <h3>{titulo}</h3>
      <div className="imagen-container">
        <img src={imagen} alt={titulo} />
      </div>
      <p>{descripcion}</p>
      <a href={demoLink}>Demo</a>
      <a href={codigoFuenteLink}>Código Fuente</a>
    </div>
  );
};

export default Proyecto;

