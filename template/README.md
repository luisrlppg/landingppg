# Landing Page Template

Plantilla genérica de landing page estilo "Linear Look" (dark mode, moderno, elegante) construida con Astro + Tailwind CSS.

---

## Tech Stack

| Capa | Tecnología |
|---|---|
| Framework | Astro 5 |
| Estilos | Tailwind CSS v3 |
| Despliegue | Docker + nginx |
| Contenido | JSON centralizado |

## Inicio rápido

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Comandos

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo con hot reload |
| `npm run build` | Build de producción → `dist/` |
| `npm run preview` | Vista previa del build |

---

## Estructura del proyecto

```
template/
├── src/
│   ├── data/
│   │   └── content.json              # TODO el contenido editable
│   ├── components/
│   │   ├── Header.astro              # Nav sticky + mobile menu
│   │   ├── Hero.astro                # Sección principal con glows
│   │   ├── Products.astro            # Grid de productos
│   │   ├── About.astro               # Sobre nosotros + stats
│   │   ├── Process.astro             # Proceso (4 pasos)
│   │   ├── Testimonials.astro        # Testimonios
│   │   ├── FAQ.astro                 # Preguntas frecuentes
│   │   ├── Contact.astro             # Formulario + datos
│   │   ├── Footer.astro              # Pie de página
│   │   ├── WhatsAppButton.astro      # Botón flotante WhatsApp
│   │   └── ui/                       # Componentes reutilizables
│   │       ├── GlowCard.astro        # Tarjeta con borde gradiente
│   │       ├── Button.astro          # Botones primary/secondary
│   │       ├── GridBackground.astro  # Patrón de cuadrícula
│   │       └── SectionHeader.astro   # Título de sección
│   ├── layouts/
│   │   └── Layout.astro              # HTML base + meta tags
│   ├── pages/
│   │   └── index.astro               # Ensambla todos los componentes
│   └── styles/
│       └── global.css                # Tailwind + efectos custom
├── public/
│   └── favicon.svg
├── Dockerfile
├── nginx.conf
├── package.json
└── README.md
```

---

## Personalización

### 1. Editar contenido (lo más importante)

**TODO el texto se edita en un solo archivo: `src/data/content.json`**

No necesitas tocar ningún componente `.astro` para cambiar textos.

#### Cambiar datos de la empresa

```json
{
  "company": {
    "name": "Mi Empresa",
    "fullName": "Mi Empresa S.A. de C.V.",
    "tagline": "Mi slogan aquí",
    "description": "Descripción de mi empresa."
  }
}
```

#### Cambiar el hero

```json
{
  "hero": {
    "title": "Mi título principal",
    "subtitle": "Mi subtítulo descriptivo.",
    "cta": "Texto del botón",
    "ctaSecondary": "Texto del botón secundario"
  }
}
```

#### Añadir un producto

```json
{
  "products": [
    {
      "title": "Nombre del producto",
      "description": "Descripción corta.",
      "icon": "droplet",
      "image": "/images/placeholder.jpg"
    }
  ]
}
```

#### Añadir un testimonio

```json
{
  "testimonials": [
    {
      "name": "Nombre del cliente",
      "company": "Empresa del cliente",
      "quote": "El testimonio."
    }
  ]
}
```

#### Añadir una pregunta frecuente

```json
{
  "faq": [
    {
      "question": "¿Tu pregunta?",
      "answer": "Tu respuesta."
    }
  ]
}
```

#### Actualizar contacto

```json
{
  "contact": {
    "email": "mi@email.com",
    "phone": "+52 (55) 1234-5678",
    "address": "Mi dirección",
    "hours": "Lunes - Viernes: 9:00 am - 6:00 pm",
    "whatsapp": "5215512345678",
    "whatsappMessage": "Hola, me interesa...",
    "instagram": "https://instagram.com/miempresa"
  }
}
```

### 2. Cambiar colores

Edita `tailwind.config.js` → `colors.accent`:

```js
accent: {
  DEFAULT: '#818cf8',   // ← Tu color principal
  hover: '#6366f1',     // ← Color hover
  glow: '#a78bfa',      // ← Color de glows
},
```

Luego actualiza en `src/styles/global.css`:
- `.border-gradient` → colores del degradado de bordes
- `.text-gradient` → colores del texto degradado
- `.grid-bg` → color de la cuadrícula de fondo

### 3. Cambiar tipografía

1. Actualiza el import de Google Fonts en `src/styles/global.css`
2. Cambia `fontFamily.sans` en `tailwind.config.js`

### 4. Añadir una sección nueva

1. Crear `src/components/NuevaSeccion.astro`
2. Añadir contenido en `content.json`
3. Importar y usar en `src/pages/index.astro`

---

## Guía para Vibe Coding (AI Editing)

Esta landing está diseñada para ser editada fácilmente por herramientas de AI. Aquí va la guía:

### Arquitectura pensada para AI

- **Un solo archivo de contenido**: `content.json` (~150 líneas) tiene todo el texto
- **Componentes modulares**: cada `.astro` es independiente (~50-80 líneas)
- **Sin dependencias complejas**: solo Astro + Tailwind, sin frameworks pesados

### Flujo de edición típico

| Qué quieres hacer | Qué archivo tocar |
|---|---|
| Cambiar textos | `src/data/content.json` |
| Cambiar diseño de una sección | El componente `.astro` de esa sección |
| Cambiar colores | `tailwind.config.js` + `global.css` |
| Añadir productos | Array `products` en `content.json` |
| Añadir sección completa | Crear `.astro` + importar en `index.astro` |
| Cambiar WhatsApp | Campo `whatsapp` en `content.json` |

### Prompt sugerido para AI

Copia y pega esto al iniciar una sesión con una herramienta de AI:

```
Estoy trabajando en una landing page con Astro + Tailwind CSS.
El contenido está en src/data/content.json.
Los componentes están en src/components/.
Para editar textos solo toca content.json.
Para editar diseño toca el componente .astro específico.
NO leas archivos de node_modules ni dist/.
Empieza leyendo src/data/content.json para entender el contenido actual.
```

### Qué NO hacer

- **No** leer `node_modules/` ni `dist/` — son generados
- **No** modificar `package.json` a menos que añadas una dependencia
- **No** tocar `astro.config.mjs` sin razón
- **No** mezclar contenido con diseño — contenido en JSON, diseño en `.astro`

### Iconos disponibles

Los productos usan iconos inline de Heroicons. Iconos disponibles:

| Icono | Valor | Descripción |
|---|---|---|
| `droplet` | Gotita | Productos líquidos, skincare |
| `palette` | Paleta | Maquillaje, color |
| `sparkles` | Brillos | Productos premium |
| `brush` | Brocha | Herramientas, brushes |
| `tube` | Tubo | Envases flexibles |
| `cog` | Engranaje | Accesorios, componentes |
| `plane` | Avión | Travel size, viajes |

---

## Deploy con Docker

```bash
docker build -t mi-landing .
docker run -d -p 8080:80 mi-landing
```

### Deploy en VPS

```bash
# Copiar proyecto al VPS
scp -r . usuario@vps:/home/usuario/landing

# SSH al VPS
ssh usuario@vps

# Build y run
cd landing
docker build -t mi-landing .
docker run -d -p 80:80 --restart unless-stopped mi-landing
```

---

## Paleta de colores

| Elemento | Tailwind | Valor |
|---|---|---|
| Fondo | `bg-black` | `#000000` |
| Superficie | `bg-surface` | `#18181b` |
| Superficie hover | `bg-surface-light` | `#27272a` |
| Acento | `text-accent` | `#818cf8` |
| Acento hover | `bg-accent-hover` | `#6366f1` |
| Glow | `bg-accent-glow` | `#a78bfa` |
| Texto primario | `text-zinc-50` | `#fafafa` |
| Texto secundario | `text-zinc-400` | `#a1a1aa` |
