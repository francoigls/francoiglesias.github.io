import React from 'react';
import './Header.css'
const CvDownloadButton = () => {
  const downloadPdf = () => {
    const pdfUrl = './Mi_CV.pdf'; // Ruta relativa al archivo PDF
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'Mi_CV.pdf');
    link.setAttribute('target', '_blank'); // Abre el enlace en una nueva pestaña
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className='conteinercv'>
  
      <button className='botoncv' onClick={downloadPdf}>Descargar CV</button> {/* click de descarga */}
    </div>
  );
};

export default CvDownloadButton;