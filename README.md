# Plásticos Plasa — Landing Page

Landing page corporativa para Plásticos Plasa, fabricante de envases cosméticos y herramientas de maquillaje. Diseño dark-mode estilo "Linear Look" con Astro + Tailwind CSS.

## Tech Stack

| Capa | Tecnología |
|---|---|
| Framework | [Astro 5](https://astro.build/) |
| Estilos | [Tailwind CSS v3](https://tailwindcss.com/) |
| Animaciones | [AOS 2.3.4](https://michalsnik.github.io/aos/) (Animate On Scroll) |
| Despliegue | Docker + nginx |
| Proxy | Cloudflare Zero Trust Tunnel |
| Git | GitHub: [luisrlppg/landingppg](https://github.com/luisrlppg/landingppg) |

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
# → http://localhost:4321
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
│   │   ├── Header.astro              # Nav sticky + logo + Instagram + mobile menu
│   │   ├── Hero.astro                # Sección principal con glows + CTA catálogo
│   │   ├── Products.astro            # Grid de productos con imágenes + CTA venta en línea
│   │   ├── SocialProof.astro         # "Marcas que confían en nosotros" con logos
│   │   ├── About.astro               # Sobre nosotros + estadísticas (50+ años)
│   │   ├── Process.astro             # Proceso de fabricación (3 pasos)
│   │   ├── Testimonials.astro        # Testimonios de clientes
│   │   ├── FAQ.astro                 # Preguntas frecuentes (accordion ARIA) + link catálogo
│   │   ├── Contact.astro             # Formulario + datos de contacto
│   │   ├── WhatsAppButton.astro      # Botón flotante de WhatsApp
│   │   ├── Footer.astro              # Pie de página + año dinámico + Instagram
│   │   └── ui/                       # Componentes reutilizables
│   │       ├── GlowCard.astro        # Tarjeta con borde gradiente + soporte AOS
│   │       ├── Button.astro          # Botones primary/secondary + links externos
│   │       ├── GridBackground.astro  # Patrón de cuadrícula sutil
│   │       └── SectionHeader.astro   # Título de sección reutilizable + AOS
│   ├── layouts/
│   │   └── Layout.astro              # HTML base + meta tags + JSON-LD + AOS init
│   ├── pages/
│   │   └── index.astro               # Página principal (ensambla todo)
│   └── styles/
│       └── global.css                # Tailwind + efectos custom + prefers-reduced-motion
├── public/
│   ├── ppg.jpg                       # Logo de la empresa
│   ├── images/                       # Imágenes de productos y planta
│   ├── robots.txt                    # Directivas para crawlers
│   └── sitemap.xml                   # Sitemap XML para Google
├── Dockerfile                        # Multi-stage build (Node → nginx) con rm -rf dist
├── nginx.conf                        # Configuración nginx (cache, gzip, headers)
├── docker-compose.yml                # Deploy en puerto 3000
├── .dockerignore                     # Excluye node_modules, dist, .git
├── astro.config.mjs                  # Configuración de Astro
├── tailwind.config.js                # Configuración de Tailwind (colores)
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
      "image": "/images/tu-foto.jpg"
    }
  ]
}
```

> Las imágenes se colocan en `public/images/` y se referencian con ruta absoluta `/images/`.
> Se recomienda que las fotos tengan aspect ratio **4:3 horizontal** y estén recortadas con el producto centrado.
> Las URLs de imágenes incluyen un timestamp de build automáticamente (`?v=...`) para evitar problemas de cache.

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
      "answer": "Tu respuesta aquí. Soporta HTML como <a href='url'>links</a>."
    }
  ]
}
```

### Actualizar datos de contacto

```json
{
  "contact": {
    "email": "tu@email.com",
    "phone": "+52 (33) 4329-2726",
    "address": "Tu dirección completa",
    "hours": "Lunes - Viernes: 9:00 am - 2:00 pm y 4:00 pm - 6:00 pm",
    "whatsapp": "+523343292726",
    "instagram": "https://instagram.com/plasticosplasa"
  }
}
```

## Enlaces externos

| Botón | Destino | Ubicación |
|---|---|---|
| "Cotizar ahora" | [plasticosplasa.ventaenlinea.store](https://plasticosplasa.ventaenlinea.store) | Header nav |
| "Conoce nuestros productos" | Sección #productos | Hero |
| "Escoge tus productos para tu cotización" | [plasticosplasa.ventaenlinea.store](https://plasticosplasa.ventaenlinea.store) | Debajo del grid de productos |
| Instagram | [instagram.com/plasticosplasa](https://instagram.com/plasticosplasa) | Header + Footer |
| WhatsApp flotante | [wa.me/523343292726](https://wa.me/523343292726) | Botón flotante abajo-derecha |
| Catálogo en FAQ | [plasticosplasa.ventaenlinea.store](https://plasticosplasa.ventaenlinea.store) | Respuesta FAQ |

## Animaciones (AOS)

Todas las secciones usan animaciones de entrada con [AOS](https://michalsnik.github.io/aos/):

| Sección | Animación | Delay |
|---|---|---|
| Products cards | `fade-up` | 0ms, 100ms, 200ms (staggered) |
| About (texto) | `fade-right` | 0ms |
| About (features) | `fade-up` | 100ms, 200ms, 300ms |
| About (stats) | `fade-up` | 400ms, 500ms, 600ms, 700ms |
| About (imagen) | `fade-left` | 200ms |
| Process cards | `fade-up` | 0ms, 100ms, 200ms |
| Testimonials cards | `fade-up` | 0ms, 100ms, 200ms |
| FAQ items | `fade-up` | 0ms, 100ms, 200ms |
| Contact form | `fade-up` | 0ms |
| Contact info | `fade-right` | 0ms |
| WhatsApp button | `zoom-in` | 0ms |

**Configuración global** (en `Layout.astro`):
```js
AOS.init({
  duration: 600,
  easing: 'ease-out-cubic',
  once: true,    // solo se anima una vez
  offset: 80,
});
```

### Soporte para reduced motion

Los usuarios con preferencia de movimiento reducido tienen desactivadas todas las animaciones y transiciones automáticamente via `prefers-reduced-motion` en `global.css`.

## SEO

### Meta tags

- **Title**: configurable por página
- **Description**: de `content.json`
- **Canonical URL**: `https://plasticosplasa.net/`
- **Open Graph**: título, descripción, imagen, tipo, URL, locale
- **Twitter Card**: `summary_large_image`

### JSON-LD (Structured Data)

Tres schemas implementados:

1. **WebSite** — Información del sitio
2. **LocalBusiness** — Datos del negocio (dirección, teléfono, horario, coordenadas)
3. **FAQPage** — Preguntas frecuentes para rich results en Google

### Archivos SEO

- `public/robots.txt` — Directivas para crawlers (`Allow: /`)
- `public/sitemap.xml` — Sitemap XML con la URL principal

## Accesibilidad (a11y)

- **Navegación semántica**: `<ul>` + `<li>` en el nav del header (desktop y mobile)
- **FAQ accordion**: `aria-expanded`, `aria-controls`, `aria-labelledby`, `role="region"`
- **Links Instagram**: `aria-label` descriptivo
- **SVGs decorativos**: `aria-hidden="true"` en todos los iconos decorativos
- **Imágenes**: `alt` descriptivo en todas las imágenes

## Performance

- **Google Fonts**: Cargado via `<link>` en `<head>` con `preconnect` (no CSS @import)
- **Imágenes**: Todos los `<img>` tienen atributos `width` y `height` definidos
- **AOS**: Se inicializa con `once: true` para no re-animar al hacer scroll
- **Gzip**: Compresión habilitada para texto, CSS, JS, JSON, XML, SVG

## Paleta de colores

El color de acento se define en **un solo lugar** y se propaga a toda la landing:

```
tailwind.config.js → colors.accent
```

| Elemento | Token Tailwind | Valor actual |
|---|---|---|
| Fondo principal | `bg-black` | `#000000` |
| Superficie cards | `bg-surface` | `#18181b` |
| Superficie hover | `bg-surface-light` | `#27272a` |
| Acento primario | `text-accent` / `bg-accent` | `#3b82f6` (blue-500) |
| Acento hover | `bg-accent-hover` | `#2563eb` (blue-600) |
| Glow | `bg-accent-glow` | `#93c5fd` (blue-300) |
| Texto primario | `text-zinc-50` | `#fafafa` |
| Texto secundario | `text-zinc-400` | `#a1a1aa` |

> **Importante:** Al cambiar el color en `tailwind.config.js`, también hay que actualizar los valores hardcoded en `src/styles/global.css` (clases `.border-gradient`, `.text-gradient`, `.grid-bg`).
>
> **Nota:** Después de cambiar colores, reiniciar el servidor de desarrollo (`Ctrl+C` → `npm run dev`) para que Tailwind regenere el CSS.

## Despliegue con Docker

### Docker Compose (recomendado)

El proyecto incluye `docker-compose.yml` listo para usar:

```bash
# En el servidor
git clone git@github.com:luisrlppg/landingppg.git && cd landing
docker compose up -d
```

La landing queda disponible en `http://IP_SERVIDOR:3000`.

### Docker manual

```bash
docker build -t landing-ppg .
docker run -d -p 3000:80 --restart unless-stopped --name landing-ppg landing-ppg
```

### Comandos útiles

```bash
# Ver logs
docker logs -f landing-ppg

# Reconstruir después de cambios
docker compose down
docker compose build --no-cache
docker compose up -d

# Detener
docker compose down
```

### Nota sobre el build en Docker

El Dockerfile ejecuta `rm -rf dist && npm run build` para asegurar que el directorio `dist/` siempre se genere limpio desde `public/`. Esto previene que una versión anterior de `dist/` quede embebida en la imagen Docker por cache de capas.

## Deploy en el servidor (medusa)

El servidor ya tiene otros servicios corriendo. Puertos en uso:
- **22**: SSH
- **80**: nginx (intranet)
- **5000, 5001, 8069, 8070**: Odoo
- **8080**: nginx alternativo (intranet)
- **3000**: Landing PPG (asignado)

### Proceso de deploy completo

```bash
# 1. En local: commitear y pushear
git add -A
git commit -m "feat: descripción del cambio"
git push origin main

# 2. En el servidor (medusa):
cd ~/Documents/landingppg
git pull origin main
docker compose down
docker compose build --no-cache
docker compose up -d
```

### Cloudflare Zero Trust Tunnel

El sitio está expuesto a través de un Cloudflare Zero Trust Tunnel. Las imágenes y assets estáticos pueden quedar cacheados en el edge de Cloudflare.

**Cache busting automático**: Las URLs de imágenes incluyen un timestamp de build (`?v=<Date.now()>`). Cada build genera URLs únicas, forzando a Cloudflare a servir la versión más reciente sin necesidad de purgar cache manualmente.

**Si aun así se ven imágenes viejas** (raro, pero posible):
1. Ir al panel de Cloudflare → **Caché** → **Purgar todo**
2. O purgar por URL específica

### nginx.conf — Headers de cache

| Tipo de archivo | Cache | Header |
|---|---|---|
| Imágenes (jpg, png, gif, svg, webp) | must-revalidate | `Cache-Control "public, must-revalidate"` |
| CSS/JS | 1 año | `Cache-Control "public, immutable"` |
| Fuentes (woff, ttf) | 1 año | `Cache-Control "public, immutable"` |

Las imágenes usan `must-revalidate` en lugar de `expires 30d` para que el navegador siempre verifique con el servidor si hay una versión más reciente (combinado con el cache busting por query param).

## Personalización

### Cambiar el color de acento

1. Editar `tailwind.config.js` → sección `colors.accent`
2. Editar `src/styles/global.css` → clases `.border-gradient`, `.text-gradient`, `.grid-bg`

### Cambiar el logo

Reemplazar `public/ppg.jpg` y actualizar referencias en:
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/layouts/Layout.astro` (favicon, og:image, twitter:image, JSON-LD)

### Añadir una nueva sección

1. Crear `src/components/NuevaSeccion.astro`
2. Importar y usar en `src/pages/index.astro`
3. Añadir contenido en `src/data/content.json`

### Cambiar tipografía

1. Actualizar el import de Google Fonts en `Layout.astro` (`<link href="...">`)
2. Cambiar `fontFamily.sans` en `tailwind.config.js`

## Git / GitHub

### Configuración SSH para dos cuentas

El archivo `~/.ssh/config` maneja dos cuentas de GitHub:

```
Host github.com-lrolomeli
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_rsa

Host github.com-luisrlppg
  HostName github.com
  User git
  IdentityFile /path/to/gitkey/id_ed25519
```

Los repos de `luisrlppg` usan `git@github.com-luisrlppg:luisrlppg/repo.git`.

### Push

```bash
git add -A
git commit -m "feat: descripción del cambio"
git push
```

## Notas para AI Editing

- Cada componente `.astro` es independiente (~50-100 líneas)
- Todo el contenido está centralizado en `content.json`
- Para cambiar textos: solo editar `content.json`
- Para cambiar diseño: editar el componente `.astro` específico
- Para añadir secciones: crear componente + importar en `index.astro`
- Los colores usan el token `accent` de Tailwind — cambiar en el config propaga a todos los componentes
- El componente `Button.astro` detecta URLs externas y abre en nueva pestaña automáticamente
- El FAQ soporta HTML en las respuestas (usa `set:html`)
- Las imágenes de `public/images/` se cache bustean automáticamente con `?v=<timestamp>` en Products.astro y About.astro
- El componente `GlowCard.astro` acepta props de AOS (`data-aos`, `data-aos-delay`, `data-aos-duration`) para passthrough
