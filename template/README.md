# Landing Page Template

Plantilla genérica de landing page estilo "Linear Look" (dark mode, moderno, elegante) construida con Astro + Tailwind CSS.

## Personalización rápida

### 1. Editar contenido

Abre `src/data/content.json` y reemplaza los placeholders:

| Placeholder | Qué es |
|---|---|
| `Tu Empresa` | Nombre de tu empresa |
| `Tu tagline o slogan aquí` | Slogan principal |
| `contacto@tuempresa.com` | Tu email |
| `+52 (55) 1234-5678` | Tu teléfono |
| `5215512345678` | Tu número de WhatsApp (sin espacios ni guiones) |

### 2. Cambiar colores

Edita `tailwind.config.js` → sección `colors.accent`:

```js
accent: {
  DEFAULT: '#818cf8',   // ← Cambia este valor
  hover: '#6366f1',
  glow: '#a78bfa',
},
```

Luego actualiza las referencias en `src/styles/global.css` (clases `.border-gradient`, `.text-gradient`, `.grid-bg`).

### 3. Añadir/quitar productos

En `content.json`, edita el array `products`:

```json
{
  "products": [
    {
      "title": "Nombre del producto",
      "description": "Descripción corta",
      "icon": "droplet",
      "image": "/images/placeholder.jpg"
    }
  ]
}
```

### 4. Cambiar tipografía

1. Actualiza el import en `src/styles/global.css`
2. Cambia `fontFamily.sans` en `tailwind.config.js`

## Inicio rápido

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy con Docker

```bash
docker build -t mi-landing .
docker run -d -p 8080:80 mi-landing
```

## Estructura

```
template/
├── src/
│   ├── data/content.json      ← EDITA AQUÍ
│   ├── components/             ← Componentes modulares
│   ├── layouts/Layout.astro    ← HTML base
│   ├── pages/index.astro      ← Página principal
│   └── styles/global.css      ← Estilos + efectos
├── Dockerfile
├── nginx.conf
└── package.json
```

## Iconos disponibles

Los productos usan iconos de Heroicons. Iconos disponibles:
- `droplet` — Gotita
- `palette` — Paleta
- `sparkles` — Brillos
- `brush` — Brocha
- `tube` — Tubo
- `cog` — Engranaje
- `plane` — Avión
