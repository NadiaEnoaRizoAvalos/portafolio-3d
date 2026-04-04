import React, { useState } from 'react';
import { Code, Mail, FileText, UserCircle } from 'lucide-react';
import { win95IconContainerStyle, win95IconTextStyle, win95ButtonStyle } from './win95Styles';
import { EmailWindow } from './EmailWindow';
import { CvWindow } from './CvWindow';
import { useIsMobile } from '../../hooks/useIsMobile';

export function FloatingScreen({ type, title, children, onClose }) {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showCvWindow, setShowCvWindow] = useState(false);
  const isMobile = useIsMobile();

  if (type === 'pc') {
    return (
      <> 
        <div style={{ 
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1000, 
          width: isMobile ? '95vw' : '90vw', 
          height: isMobile ? '90vh' : '85vh', 
          maxWidth: '1300px', backgroundColor: '#c0c0c0', color: '#000000', 
          borderTop: '2px solid #ffffff', borderLeft: '2px solid #ffffff', borderRight: '2px solid #000000', borderBottom: '2px solid #000000', fontFamily: '"MS Sans Serif", Arial, sans-serif', display: 'flex', flexDirection: 'column', boxSizing: 'border-box', padding: '3px' 
        }}>  

          <div style={{ padding: '4px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#000080', color: '#ffffff' }}>
            <h2 style={{ margin: 0, fontSize: isMobile ? '14px' : '16px', fontWeight: 'bold' }}>C:\UTN\FRT\Portafolio</h2>
            <button onClick={onClose} style={{ ...win95ButtonStyle, padding: isMobile ? '2px 8px' : '0px 6px', marginTop: 0 }}>X</button>
          </div>

          <div style={{ backgroundColor: '#ffffff', margin: isMobile ? '5px' : '10px', flex: 1, borderTop: '2px solid #808080', borderLeft: '2px solid #808080', borderRight: '2px solid #ffffff', borderBottom: '2px solid #ffffff', padding: isMobile ? '10px' : '20px', display: 'flex', flexWrap: 'wrap', 
          gap: isMobile ? '15px' : '40px', 
          justifyContent: isMobile ? 'center' : 'flex-start',
          alignContent: 'flex-start', overflowY: 'auto' }}>
            
            <div style={win95IconContainerStyle} onClick={() => window.open('https://www.linkedin.com/in/nadia-rizo-avalos-b34888349/', '_blank')}>
              <UserCircle size={isMobile ? 50 : 60} color="#0077b5" strokeWidth={1.5} />
              <span style={win95IconTextStyle}>LinkedIn</span>
            </div>

            <div style={win95IconContainerStyle} onClick={() => window.open('https://github.com/NadiaEnoaRizoAvalos', '_blank')}>
              <Code size={isMobile ? 50 : 60} color="#000" strokeWidth={1.2} />
              <span style={win95IconTextStyle}>GitHub</span>
            </div>

            <div style={win95IconContainerStyle} onClick={() => setShowEmailForm(true)}>
              <Mail size={isMobile ? 50 : 60} color="#000" strokeWidth={1.2} />
              <span style={win95IconTextStyle}>Gmail</span>
            </div>

            <div style={win95IconContainerStyle} onClick={() => setShowCvWindow(true)}>
              <FileText size={isMobile ? 50 : 60} color="#d32f2f" strokeWidth={1} />
              <span style={win95IconTextStyle}>curriculum.pdf</span>
            </div>
          </div>
        </div>

        {showEmailForm && <EmailWindow onClose={() => setShowEmailForm(false)} />}
        {showCvWindow && <CvWindow onClose={() => setShowCvWindow(false)} />}
      </>
    );
  }

if (type === 'libro') {
    return (
      <div style={{ 
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', 
        zIndex: 1000, 
        width: isMobile ? '90vw' : '450px', 
        maxHeight: '85vh',
        padding: '20px 30px', 
        backgroundColor: '#f4ecd8', color: '#2c1e16', 
        border: '1px solid #d4c5b0', borderRadius: '5px', 
        boxShadow: '10px 10px 20px rgba(0,0,0,0.5)', 
        fontFamily: '"Comic Sans MS", "Caveat", cursive',
        display: 'flex', flexDirection: 'column'
      }}>
        
        <button onClick={onClose} style={{ alignSelf: 'flex-end', background: 'none', border: 'none', color: 'red', fontSize: '20px', cursor: 'pointer', padding: 0 }}>✖</button>
        <h2 style={{ borderBottom: '2px dashed #b5a68b', paddingBottom: '10px', marginTop: 0 }}>{title}</h2>
        
       
        <div style={{ fontSize: '15px', lineHeight: '1.6', overflowY: 'auto', paddingRight: '10px' }}>
          {children}
        </div>

      </div>
    );
  }

  return null;
}