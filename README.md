# Portafolio - Juan Manuel Cordoba Florez

Portafolio personal desarrollado con tecnologias modernas de desarrollo web. Desplegado en Vercel.

Sitio en vivo: https://portafolio-rouge-pi-72.vercel.app

---

## Tecnologias

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- CSS Variables (sistema de temas)

## Caracteristicas principales

### Interfaz
- Modo claro y oscuro con toggle
- Sistema de idiomas (Espanol / Ingles) con archivos JSON
- Cursor personalizado en desktop (desactivado en movil)
- Splash screen con logo animado y barra de progreso
- Boton scroll to top
- Separadores de seccion con gradiente
- Glassmorphism en modo claro
- Fondo animado con blobs en modo claro

### Secciones
- Hero con foto de presentacion y animacion de reveal
- Acerca de mi con carrusel de imagenes por interes
- Integracion con Spotify (playlist embebida)
- Estadisticas animadas con conteo al scroll
- Skills con efecto scramble, barras animadas y rotacion de iconos
- Proyectos con preview de imagen y link directo
- Testimonios con tarjetas glassmorphism
- Experiencia con tabs (Laboral / Academico) y timeline interactivo
- Footer con formulario de contacto y redes sociales

### Proyectos incluidos
- Freshcut: App de barberia con inteligencia artificial
- Mercado Libre Clone: Clon colaborativo a gran escala
- Spot-tunes: Web app de musica estilo Spotify
- CalcGraf: Calculadora de calculo multivariado con visualizacion 3D

### Accesibilidad y SEO
- Aria-labels en todas las secciones y botones
- Focus-visible para navegacion con teclado
- Skip-to-content link
- Prefers-reduced-motion
- Meta tags, OpenGraph y keywords
- HTML lang dinamico segun idioma seleccionado
- Favicon personalizado

### Responsive
- Adaptado para mobile, tablet y desktop
- Navbar compacta en mobile con menu hamburguesa
- Grid responsive en skills, stats, proyectos y testimonios
- Avatar escalado en pantallas pequenas

### Performance
- Will-change en animaciones pesadas
- Lazy loading en imagenes
- Prefijos webkit para cross-browser
- Overflow-x hidden global

## Como ejecutar

```bash
npm install
npm run dev
```

Abrir http://localhost:3000

## Build de produccion

```bash
npm run build
```

## Estructura del proyecto

```
app/              Layout, pagina principal, estilos globales
components/       Componentes reutilizables (17 componentes)
context/          Contexto de idioma (LanguageContext)
public/           Imagenes, iconos, logos, CV, traducciones
public/locales/   Archivos JSON de traduccion (es.json, en.json)
public/projects/  Capturas de pantalla de proyectos
public/icons/     Iconos SVG de tecnologias
public/interests/ Fotos de intereses personales
```

## Despliegue

Desplegado en Vercel con deploy automatico desde GitHub.
Cada push a la rama main genera un nuevo despliegue.

## Autor

Juan Manuel Cordoba Florez
Estudiante de Ingenieria de Software
Universidad Cooperativa de Colombia - Pasto
