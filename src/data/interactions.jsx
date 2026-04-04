import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const retroButtonStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '10px 20px',
  backgroundColor: 'rgba(0, 255, 65, 0.1)',
  color: '#00ff41',
  border: '1px solid #00ff41',
  textDecoration: 'none',
  fontFamily: '"VT323", monospace',
  fontSize: '22px',
  cursor: 'pointer',
  boxShadow: '0 0 5px rgba(0, 255, 65, 0.5)'
};

export const INTERACTION_DATA = {
  pc: {
     title: "NadiaCore_OS - Terminal",
    camPos: [2, 2.4, -2], 
    lookAt: [3, 2.1, -1.8], 
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontFamily: '"VT323", monospace', fontSize: '24px' }}>
        <p style={{ margin: 0 }}> Iniciando sistema operativo...</p>
        <p style={{ margin: 0 }}> Cargando módulos: [ React, C#, Java, n8n ] ... [ OK ]</p>
        <p style={{ margin: 0, color: '#fff' }}> Seleccione un protocolo de conexión:</p>

        <div style={{ display: 'flex', gap: '20px', marginTop: '20px', flexWrap: 'wrap' }}>
          
          <a href="https://github.com/tu-usuario" target="_blank" rel="noreferrer" style={retroButtonStyle}>
            <FaGithub size={24} /> GitHub
          </a>

          <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noreferrer" style={retroButtonStyle}>
            <FaLinkedin size={24} /> LinkedIn
          </a>

          <a href="mailto:tu-correo@gmail.com" style={retroButtonStyle}>
            <FaEnvelope size={24} /> gmail
          </a>

        </div>
      </div>
    )
  },
  libro: {
    title: "Portafolio de Nadia Rizo",
    camPos: [-2.95, 3.80, 2.31], 
    lookAt: [-3.3, 1.75, 3],
   content: (
          <>
            <h2>Descripción sobre este Portafolio</h2>
            <p>
              Quería escapar del clásico formato plano y estático para crear una experiencia inmersiva e interactiva.
            </p>

            <h3 style={{ marginTop: '20px', marginBottom: '10px', color: '#8b4513' }}>Arquitectura y Automatización</h3>
            <p>Para que este entorno funcione de manera fluida y dinámica, construí la siguiente infraestructura:</p>
            <ul style={{ paddingLeft: '20px', margin: '10px 0' }}>
              <li style={{ marginBottom: '8px' }}><strong>Servidor y Hosting:</strong> El proyecto corre sobre un servidor que configuré en Hugging Face, lo que me permite manejar el entorno y los procesos de manera eficiente.</li>
              <li style={{ marginBottom: '8px' }}><strong>Base de Datos:</strong> Implementé una base de datos para gestionar y persistir la información del portafolio.</li>
              <li style={{ marginBottom: '8px' }}><strong>n8n:</strong> Integré flujos de automatización con n8n para optimizar procesos en el backend y conectar las distintas partes del proyecto.</li>
            </ul>

            <h3 style={{ marginTop: '20px', marginBottom: '10px', color: '#8b4513' }}>Diseño y Modelado 3D (.gltf)</h3>
            <p>El apartado visual es una combinación de trabajo personalizado y recursos optimizados:</p>
            <ul style={{ paddingLeft: '20px', margin: '10px 0' }}>
              <li style={{ marginBottom: '8px' }}><strong>Construcción desde cero:</strong> La habitación principal la modelé completamente desde cero, cuidando la estructura y el diseño. Además, trabajé en el texturizado de forma manual; por ejemplo, la textura del mapa y otros detalles clave fueron creados por mí para darle una identidad única al espacio.</li>
              <li style={{ marginBottom: '8px' }}><strong>Assets de apoyo:</strong> Para poblar el entorno y mantener el desarrollo ágil, utilicé algunos modelos externos en formato .gltf que descargué y adapté para que encajaran perfectamente con la estética y el rendimiento del sitio.</li>
            </ul>
          </>
        )
  },

};