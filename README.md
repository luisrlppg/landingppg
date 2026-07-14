# Plásticos Plasa — Landing Page

Landing page corporativa para Plásticos Plasa, fabricante de envases cosméticos y herramientas de maquillaje. Diseño dark-mode estilo "Linear Look" con Astro + Tailwind CSS.

## Tech Stack

| Capa | Tecnología |
|---|---|
| Framework | [Astro 5](https://astro.build/) |
| Estilos | [Tailwind CSS v3](https://tailwindcss.com/) |
| Despliegue | Docker + nginx |
| Git | Repositorio local |

## Requisitos

- Node.js >= 18
- npm
- Docker (para deploy)

## Inicio rápido

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Abrir en el navegador
# → http://localhost:3000
```

## Comandos disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo con hot reload |
| `npm run build` | Build de producción (archivos estáticos en `dist/`) |
| `npm run preview` | Vista previa del build de producción |

## Estructura del proyecto

```
landing/
├── src/
│   ├── data/
│   │   └── content.json              # Todo el contenido editable
│   ├── components/
│   │   ├── Header.astro              # Nav sticky + mobile menu
│   │   ├── Hero.astro                # Sección principal con glows
│   │   ├── Products.astro            # Grid de productos (Bento Box)
│   │   ├── About.astro               # Sobre nosotros + estadísticas
│   │   ├── Process.astro             # Proceso de fabricación (4 pasos)
│   │   ├── Testimonials.astro        # Testimonios de clientes
│   │   ├── FAQ.astro                 # Preguntas frecuentes (accordion)
│   │   ├── Contact.astro             # Formulario + datos de contacto
│   │   ├── Footer.astro              # Pie de página
│   │   └── ui/                       # Componentes reutilizables
│   │       ├── GlowCard.astro        # Tarjeta con borde gradiente
│   │       ├── Button.astro          # Botones primary/secondary
│   │       ├── GridBackground.astro  # Patrón de cuadrícula sutil
│   │       └── SectionHeader.astro   # Título de sección reutilizable
│   ├── layouts/
│   │   └── Layout.astro              # HTML base + meta tags
│   ├── pages/
│   │   └── index.astro               # Página principal (ensambla todo)
│   └── styles/
│       └── global.css                # Tailwind + efectos custom
├── public/
│   └── favicon.svg                   # Favicon del sitio
├── Dockerfile                        # Multi-stage build (Node → nginx)
├── nginx.conf                        # Configuración nginx
├── astro.config.mjs                  # Configuración de Astro
├── tailwind.config.js                # Configuración de Tailwind
├── postcss.config.js                 # PostCSS config
└── tsconfig.json                     # TypeScript config
```

## Edición de contenido

**TODO el texto de la landing se edita en un solo archivo:**

```
src/data/content.json
```

### Cambiar textos del hero

```json
{
  "hero": {
    "title": "Tu nuevo título aquí",
    "subtitle": "Tu subtítulo aquí",
    "cta": "Texto del botón principal",
    "ctaSecondary": "Texto del botón secundario"
  }
}
```

### Añadir un producto

```json
{
  "products": [
    {
      "title": "Nombre del producto",
      "description": "Descripción corta del producto",
      "icon": "droplet",
      "image": "/images/placeholder.jpg"
    }
  ]
}
```

### Modificar testimonios

```json
{
  "testimonials": [
    {
      "name": "Nombre del cliente",
      "company": "Nombre de la empresa",
      "quote": "El testimonio del cliente"
    }
  ]
}
```

### Editar preguntas frecuentes

```json
{
  "faq": [
    {
      "question": "¿Tu pregunta?",
      "answer": "Tu respuesta aquí"
    }
  ]
}
```

### Actualizar datos de contacto

```json
{
  "contact": {
    "title": "Título del CTA de contacto",
    "subtitle": "Subtítulo del CTA",
    "email": "tu@email.com",
    "phone": "+52 (55) 1234-5678",
    "address": "Tu dirección completa"
  }
}
```

## Despliegue con Docker

### Build de la imagen

```bash
docker build -t plasa-landing .
```

### Ejecutar el contenedor

```bash
docker run -d -p 8080:80 --name plasa plasa-landing
```

### Verificar que funciona

```bash
curl http://localhost:8080
```

### Comandos útiles de Docker

```bash
# Detener el contenedor
docker stop plasa

# Iniciar el contenedor detenido
docker start plasa

# Ver logs
docker logs plasa

# Reconstruir después de cambios
docker stop plasa && docker rm plasa
docker build -t plasa-landing .
docker run -d -p 8080:80 --name plasa plasa-landing

# Eliminar imagen vieja
docker rmi plasa-landing
```

## Despliegue en VPS

### Opción 1: Docker directo

```bash
# En tu VPS
git clone <tu-repo> && cd landing
docker build -t plasa-landing .
docker run -d -p 80:80 --restart unless-stopped --name plasa plasa-landing
```

### Opción 2: Docker Compose (recomendado)

Crear `docker-compose.yml`:

```yaml
services:
  landing:
    build: .
    ports:
      - "80:80"
    restart: unless-stopped
```

Luego:

```bash
docker compose up -d
```

### Opción 3: nginx reverso + Docker

Si ya tienes nginx en el VPS, puedes hacer proxy reverso:

```nginx
server {
    listen 80;
    server_name tu-dominio.com;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## Paleta de colores

| Elemento | Variable Tailwind | Valor CSS |
|---|---|---|
| Fondo principal | `bg-black` | `#000000` |
| Superficie cards | `bg-surface` | `#18181b` |
| Superficie hover | `bg-surface-light` | `#27272a` |
| Acento primario | `text-accent` | `#818cf8` |
| Acento hover | `bg-accent-hover` | `#6366f1` |
| Glow | `bg-accent-glow` | `#a78bfa` |
| Texto primario | `text-zinc-50` | `#fafafa` |
| Texto secundario | `text-zinc-400` | `#a1a1aa` |

## Personalización

### Cambiar el color de acento

1. Edita `tailwind.config.js` → sección `colors.accent`
2. Edita `src/styles/global.css` → variables `.border-gradient`, `.text-gradient`, `.grid-bg`

### Añadir una nueva sección

1. Crear `src/components/NuevaSeccion.astro`
2. Importar y usar en `src/pages/index.astro`
3. Añadir contenido en `src/data/content.json`

### Cambiar tipografía

1. Actualizar el import de Google Fonts en `global.css`
2. Cambiar `fontFamily.sans` en `tailwind.config.js`

## Notas para AI Editing

- Cada componente `.astro` es independiente (~50-80 líneas)
- Todo el contenido está centralizado en `content.json` (~200 líneas)
- Para cambiar textos: solo editar `content.json`
- Para cambiar diseño: editar el componente `.astro` específico
- Para añadir secciones: crear componente + importar en `index.astro`
