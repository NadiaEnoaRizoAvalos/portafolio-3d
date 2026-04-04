import React, { useState } from 'react';
import { win95InputStyle, win95ButtonStyle } from './win95Styles';
import { useIsMobile } from '../../hooks/useIsMobile';

export function EmailWindow({ onClose }) {
  const [email, setEmail] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [estadoEnvio, setEstadoEnvio] = useState('reposo');
  
  const isMobile = useIsMobile();

  const enviarCorreo = async () => {
    if (!email || !asunto || !mensaje) { 
      alert("Por favor, completá todos los campos antes de enviar."); 
      return; 
    }
    if (!email.includes('@')) { 
      alert("El correo ingresado no es válido. Asegurate de incluir un '@'."); 
      return; 
    }
    
    setEstadoEnvio('enviando');
    
    try {
      const respuesta = await fetch('https://nadia325-n8n.hf.space/webhook/buzon-juego', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo_visitante: email, asunto_mensaje: asunto, cuerpo_mensaje: mensaje })
      });
      
      if (respuesta.ok) {
        setEstadoEnvio('exito');
        setTimeout(() => { onClose(); }, 2000); 
      } else { 
        setEstadoEnvio('reposo'); 
        alert("Algo salió mal en el servidor, No se pudo procesar tu mensaje."); 
      }
    } catch (error) { 
      console.error("Error de conexión:", error);
      setEstadoEnvio('reposo'); 
      alert("Servidor desactivado o sin conexión Por favor, intentá de nuevo más tarde."); 
    }
  };

  return (
    <div style={{ 
      position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1010, 
      width: isMobile ? '95vw' : '450px', 
      backgroundColor: '#c0c0c0', color: '#000000', borderTop: '2px solid #ffffff', borderLeft: '2px solid #ffffff', borderRight: '2px solid #000000', borderBottom: '2px solid #000000', fontFamily: '"MS Sans Serif", Arial, sans-serif', display: 'flex', flexDirection: 'column', boxSizing: 'border-box', padding: '3px', boxShadow: '5px 5px 15px rgba(0,0,0,0.5)' 
    }}>
      <div style={{ padding: '4px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#000080', color: '#ffffff' }}>
        <h2 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>Nuevo Mensaje - new message</h2>
        <button onClick={onClose} style={{ ...win95ButtonStyle, padding: isMobile ? '2px 8px' : '0px 6px', marginTop: 0 }}>X</button>
      </div>
      
      {estadoEnvio === 'exito' ? (
        <div style={{ padding: '30px', textAlign: 'center' }}>
          <h3 style={{ marginBottom: '10px' }}>Mensaje enviado correctamente</h3>
          <p>Tu correo ha sido procesado por el servidor.</p>
        </div>
      ) : (
        <div style={{ padding: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Para:</label>
          <input type="text" value="Nadia" disabled style={{ ...win95InputStyle, backgroundColor: '#e0e0e0', color: '#666' }} />

          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Tu Email:</label>
          <input 
            type="email" 
            placeholder="visitante@correo.com" 
            style={win95InputStyle} 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Asunto:</label>
          <input 
            type="text" 
            placeholder="¡Me encanta tu portafolio!" 
            style={win95InputStyle} 
            value={asunto}
            onChange={(e) => setAsunto(e.target.value)}
          />

          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Mensaje:</label>
          <textarea 
            placeholder="Escribe tu mensaje aquí..." 
            style={{ ...win95InputStyle, height: '120px', resize: 'none' }}
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
            <button onClick={onClose} style={win95ButtonStyle}>Cancelar</button>
            <button 
              onClick={enviarCorreo} 
              style={{ ...win95ButtonStyle, fontWeight: 'bold' }}
              disabled={estadoEnvio === 'enviando'} 
            >
              {estadoEnvio === 'enviando' ? 'Enviando...' : 'Enviar'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}