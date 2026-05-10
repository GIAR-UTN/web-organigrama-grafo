# Organigrama · Constelación de subproyectos

Visualización interactiva de los integrantes de un equipo y su pertenencia a subproyectos, implementada como sitio estático con [D3.js](https://d3js.org/) v7 y ES Modules. Diseñada para publicarse en GitHub Pages sin pasos de compilación.

## Características

- Grafo de fuerzas interactivo: arrastrá nodos, hacé zoom y paneo
- Click en cualquier nodo para ver el detalle en el panel lateral
- Hover sobre nodos o ítems de la leyenda para resaltar conexiones
- Soporte para fotos locales o URLs externas
- Responsive (en móvil se ocultan leyenda y panel)

---

## Correr versión de debug local

### Opción A — Docker Compose (recomendado)

Requiere tener [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado y corriendo.

```bash
docker compose up
```

Abrí [http://localhost:8080](http://localhost:8080). Para detenerlo: `Ctrl+C` y luego `docker compose down`.

> Los archivos se montan en modo lectura (`ro`), así que cualquier cambio en el código
> se refleja al recargar el navegador sin necesidad de reiniciar el contenedor.

### Opción B — WSL con Python (sin dependencias extra)

```bash
# Dentro de WSL, navegá a la carpeta del proyecto
cd /mnt/c/Users/<tu-usuario>/ruta/al/organigrama
python3 -m http.server 8080
```

Abrí [http://localhost:8080](http://localhost:8080) en el navegador.

> **¿Por qué un servidor?** Los módulos ES (`type="module"`) no pueden cargarse
> desde `file://` por restricciones CORS del navegador. Necesitás un servidor HTTP,
> aunque sea mínimo.

### Opción C — WSL con Node.js / `npx serve`

```bash
# Requiere Node.js instalado en WSL
cd /mnt/c/Users/<tu-usuario>/ruta/al/organigrama
npx serve .
```

Seguí la URL que muestre la terminal (por defecto `http://localhost:3000`).

---

## Publicar en GitHub Pages

1. Creá un repositorio público en GitHub y subí el código.
2. Ve a **Settings → Pages**.
3. En *Source* seleccioná **GitHub Actions**.
4. El workflow `.github/workflows/deploy.yml` se encarga del resto en el próximo push a `main`.

La URL del sitio será `https://<tu-usuario>.github.io/<nombre-del-repo>/`.

---

## Estructura del proyecto

```
organigrama/
├── index.html                  # Esqueleto HTML
├── docker-compose.yml          # Levanta nginx:alpine en puerto 8080
├── css/
│   └── styles.css              # Paleta, layout y componentes visuales
├── js/
│   ├── data.js                 # ← EDITAR AQUÍ: personas y subproyectos
│   ├── graph.js                # Motor D3: simulación, nodos, zoom, drag
│   ├── panel.js                # Panel de detalle lateral
│   ├── legend.js               # Leyenda flotante
│   └── main.js                 # Punto de entrada; conecta los módulos
├── fotos/                      # (crear si usás fotos locales)
├── .github/
│   └── workflows/
│       └── deploy.yml          # Deploy automático a GitHub Pages
└── README.md
```

---

## Cómo modificar los datos del grafo

El único archivo que necesitás editar es **`js/data.js`**. Contiene dos arrays: `proyectos` y `personas`.

### Agregar o editar un subproyecto

```js
// En DATA.proyectos:
{ id: 'nuevo', nombre: 'Nombre visible', color: 'var(--c-steel)' }
```

Colores disponibles (definidos en `css/styles.css`):

| Variable        | Color        |
|-----------------|--------------|
| `var(--c-amber)`| Dorado cálido|
| `var(--c-coral)`| Rojo coral   |
| `var(--c-sage)` | Verde salvia |
| `var(--c-plum)` | Ciruela      |
| `var(--c-olive)`| Oliva        |
| `var(--c-steel)`| Azul acero   |

También podés usar cualquier valor CSS directo: `'#e07b54'`, `'hsl(200 60% 50%)'`.

### Agregar o editar una persona

```js
// En DATA.personas:
{
  id:        'p13',              // identificador único, sin espacios
  nombre:    'Nombre',
  apellido:  'Apellido',
  rol:       'Descripción del rol / área',
  foto:      'fotos/nombre.jpg', // ruta local o URL externa
  proyectos: ['alpha', 'gamma']  // array de ids de proyectos
}
```

- El borde del nodo adopta el color del **primer** proyecto de la lista.
- Una persona puede pertenecer a cualquier cantidad de proyectos.

### Usar fotos locales

1. Creá la carpeta `fotos/` en la raíz del proyecto.
2. Copiá las imágenes allí (`.jpg`, `.png`, `.webp`).
3. Referenciá la ruta en el campo `foto`: `'fotos/nombre.jpg'`.

### Cambiar el título o la fecha

Editá directamente en `index.html`:

```html
<div class="eyebrow">Equipo · Mayo 2026</div>
<h1>Constelación <em>de subproyectos</em></h1>
```
