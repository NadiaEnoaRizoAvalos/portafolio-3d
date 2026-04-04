import React, { useState } from 'react';
import { Square } from 'lucide-react';
import { win95ButtonStyle } from './win95Styles';

export function CvWindow({ onClose }) {
  const [isCvMaximized, setIsCvMaximized] = useState(false);

  return (
    <div style={{ position: 'absolute', top: isCvMaximized ? '0' : '50%', left: isCvMaximized ? '0' : '50%', transform: isCvMaximized ? 'none' : 'translate(-50%, -50%)', zIndex: 1020, width: isCvMaximized ? '100vw' : '90vw', maxWidth: isCvMaximized ? 'none' : '850px', height: isCvMaximized ? '100vh' : '85vh', backgroundColor: '#c0c0c0', borderTop: '2px solid #ffffff', borderLeft: '2px solid #ffffff', borderRight: '2px solid #000000', borderBottom: '2px solid #000000', display: 'flex', flexDirection: 'column', padding: '3px', boxShadow: '10px 10px 20px rgba(0,0,0,0.5)', transition: 'all 0.2s ease-in-out' }}>
      
      <div style={{ padding: '4px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#000080', color: '#ffffff' }}>
        <span style={{ fontSize: '14px', fontWeight: 'bold' }}>curriculum</span>
        <div style={{ display: 'flex', gap: '2px' }}>
          <button onClick={() => setIsCvMaximized(!isCvMaximized)} style={{ ...win95ButtonStyle, padding: '0px 4px', marginTop: 0 }}><Square size={12} strokeWidth={3} /></button>
          <button onClick={onClose} style={{ ...win95ButtonStyle, padding: '0px 6px', marginTop: 0 }}>X</button>
        </div>
      </div>

      <div style={{ padding: '4px 8px', display: 'flex', gap: '15px', fontSize: '14px', borderBottom: '1px solid #808080', marginBottom: '2px' }}>
        <span style={{ cursor: 'pointer' }}><u>A</u>rchivo</span>
        <span style={{ cursor: 'pointer' }}><u>V</u>er</span>
        <a href="/Cv_NadiaRizo.pdf" download="Cv_NadiaRizo.pdf" style={{ color: '#000', textDecoration: 'none', cursor: 'pointer' }}><u>D</u>escargar PDF</a>
      </div>

      <div style={{ flex: 1, backgroundColor: '#808080', margin: '2px', borderTop: '2px solid #808080', borderLeft: '2px solid #808080', borderRight: '2px solid #ffffff', borderBottom: '2px solid #ffffff' }}>
        <iframe src="/Cv_NadiaRizo.pdf" width="100%" height="100%" style={{ border: 'none', display: 'block' }} title="Curriculum Vitae" />
      </div>
      
    </div>
  );
}