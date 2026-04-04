# Portafolio 3D Interactivo | Nadia Rizo

### [Ver Proyecto en Vivo](https://portafolio-3d-one.vercel.app)

¡Bienvenido! Este es mi portafolio inmersivo desarrollado como estudiante de **Ingeniería en Sistemas de Información (UTN FRT)**. Busqué romper con el esquema del CV tradicional creando una habitación 3D interactiva.

---

## Stack Tecnológico

Este proyecto combina desarrollo frontend moderno con herramientas de automatización:

* **Frontend:** [React.js](https://reactjs.org/) + [Vite](https://vitejs.dev/)
* **Gráficos 3D:** [Three.js](https://threejs.org/) (usando React Three Fiber & Drei)
* **Modelado:** blockbench (Habitación modelada y texturizada desde cero)
* **Automatización:** [n8n](https://n8n.io/) (Webhook para procesar el formulario de contacto)
* **Despliegue:** [Vercel](https://vercel.com/) (Frontend) & [Hugging Face](https://hugging_face.co) (n8n Server)

---

## Características Principales

* **Experiencia 3D:** Entorno navegable con cámara controlada y selección de objetos con efectos de "outline".
* **Visualizador de CV:** Ventana estilo Windows 95 con visualización de PDF y funciones de descarga.
* **Contacto Automatizado:** Formulario de correo integrado que envía mensajes reales a través de un flujo de n8n.
* **Diseño Adaptativo:** Optimizado para una experiencia fluida tanto en computadoras como en dispositivos móviles.

---

## Estructura del Proyecto

```text
src/
 ├── components/
 │    ├── 3d/        # Modelos .glb, luces y ambiente
 │    └── ui/        # Ventanas Win95, Modales y Formularios
 ├── hooks/          # Lógica de cámara y detección de dispositivos
 ├── data/           # Contenido de las interacciones
 └── App.jsx         # Orquestador de la escena y estados