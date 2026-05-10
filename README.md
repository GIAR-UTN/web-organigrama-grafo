# Proyectos del GIAR

![Badge](https://hitscounter.dev/api/hit?url=https%3A%2F%2Fgithub.com%2FGIAR-UTN%2Fweb-organigrama-grafo&label=Visitas&icon=github&color=%23198754&message=&style=flat&tz=America%2FArgentina%2FBuenos_Aires)

> [!SUCCESS]
> **Bienvenido al GIAR!**
> Realizá tu primera tarea! -> [FirstQuest.md](https://github.com/GIAR-UTN/web-organigrama-grafo/blob/main/FirstQuest.md)

> [!WARNING]
> **Este código fue completamente vibe codeado.**
> No confíen en su contenido. Se aceptan contribuciones :)


Visualización interactiva de los integrantes del GIAR (UTN.BA) y su pertenencia a subproyectos. Sitio estático con [D3.js](https://d3js.org/) v7 y ES Modules — sin pasos de compilación.

---

## Tabla de contenidos

1. [Características](#características)
2. [Correr localmente](#correr-versión-de-debug-local)
3. [Publicar en GitHub Pages](#publicar-en-github-pages)
4. [Estructura del proyecto](#estructura-del-proyecto)
5. [Cómo modificar los datos](#cómo-modificar-los-datos-del-grafo)
6. [Cómo contribuir](#cómo-contribuir)

---

## Características

- Grafo de fuerzas interactivo: arrastrá nodos, hacé zoom y paneo
- Vista de árbol jerárquico con un botón toggle (GIAR → proyecto → subproyecto → personas)
- Click en un nodo para resaltar todos sus descendentes; click en el fondo para limpiar
- Panel lateral de detalle: foto, metadata, LinkedIn y membresías de cada nodo
- Fotos cargadas desde `img/{id}.jpg` con fallback automático a `img/placeholder.png`
- Responsive (en móvil se ocultan leyenda y panel)

---

## Correr versión de debug local

Requiere tener [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado y corriendo.

```bash
docker compose up
```

Abrí [http://localhost:8080](http://localhost:8080). Para detenerlo: `Ctrl+C` y luego `docker compose down`.

> Los archivos se montan en modo lectura (`ro`), así que cualquier cambio en el código
> se refleja al recargar el navegador sin necesidad de reiniciar el contenedor.

---

## Estructura del proyecto

```
organigrama/
├── index.html                  # Esqueleto HTML
├── docker-compose.yml          # Levanta nginx:alpine en puerto 8080
├── css/
│   └── styles.css              # Paleta Gruvbox, layout y componentes visuales
├── js/
│   ├── data.js                 # ← EDITAR AQUÍ: estructura GIAR, proyectos y personas
│   ├── graph.js                # Motor D3: simulación, nodos, zoom, drag, highlight
│   ├── treeLayout.js           # Vista de árbol jerárquico con badges de rol
│   ├── panel.js                # Panel de detalle lateral
│   ├── legend.js               # Leyenda flotante
│   └── main.js                 # Punto de entrada; conecta los módulos
├── img/                        # Fotos de integrantes ({id}.jpg/png/jpeg)
│   └── placeholder.png         # Imagen usada cuando no se encuentra la foto del integrante
├── .github/
│   └── workflows/
│       └── deploy.yml          # Deploy automático a GitHub Pages
└── README.md
```

---

## Cómo modificar los datos del grafo

El único archivo que necesitás editar es **`js/data.js`**. Contiene tres secciones: `giar`, `proyectos` y `personas`.

### Agregar o editar un subproyecto

```js
// En DATA.proyectos[n].subproyectos:
{
  id:     'nuevo',
  nombre: 'Nombre visible',
  color:  'var(--c-steel)',
  meta:   { 'Objetivo': 'Descripción del objetivo' },
}
```

Colores disponibles (definidos en `css/styles.css`):

| Variable         | Color        |
|------------------|--------------|
| `var(--c-amber)` | Dorado       |
| `var(--c-coral)` | Naranja      |
| `var(--c-sage)`  | Verde        |
| `var(--c-plum)`  | Violeta      |
| `var(--c-olive)` | Aqua         |
| `var(--c-steel)` | Azul acero   |

También podés usar cualquier valor CSS directo: `'#e07b54'`, `'hsl(200 60% 50%)'`.

### Agregar o editar una persona

```js
// En DATA.personas:
{
  id:       'p33',              // identificador único — debe coincidir con el filename de la foto
  nombre:   'Nombre',
  apellido: 'Apellido',
  rol:      'Especialidad o cargo',
  linkedin: 'https://linkedin.com/in/...',  // null si no aplica
  meta: {
    'Especialidad': 'Ing. Electrónica',
    'Nivel':        'Tesista Grado',
    'Año de incorporación': '2025',
  },
  pertenece: [
    { id: 'HW',       rol: 'Integrante' },
    { id: 'nanosats', rol: 'Lider de Proyecto' },
  ],
}
```

**Roles disponibles** (`pertenece[].rol`):
`Director` · `Co-Director` · `Lider de Proyecto` · `Lider de Sub-Proyecto` · `Integrante` · `Oyente`

El borde del nodo adopta el color del subproyecto de mayor jerarquía en `pertenece`.

> [!WARNING]
> **BUG:** En lugar de jerarquía (rol) lo hace por orden de aparición.

### Agregar fotos

Copiá la imagen del integrante en la carpeta `img/` con el nombre `{id}.jpg` (o `.png` / `.jpeg`).
El sistema intenta cargar `.jpg`, luego `.png`, luego `.jpeg`, y cae en `placeholder.png` si no encuentra ninguna.

```
img/
├── p1.jpg
├── p2.png
└── placeholder.png
```

---

## Cómo contribuir

1. **Hacé un fork** del repositorio en GitHub (botón *Fork* arriba a la derecha).

2. **Clonalo** en tu máquina:
   ```bash
   git clone https://github.com/<tu-usuario>/<nombre-del-repo>.git
   cd <nombre-del-repo>
   ```

3. **Creá una rama** para tu cambio:
   ```bash
   git checkout -b mi-cambio
   ```

4. **Hacé los cambios**, corroboralos localmente y commitealos:
   ```bash
   git add .
   git commit -m "descripción del cambio"
   ```

5. **Pusheá** tu rama a tu fork:
   ```bash
   git push origin mi-cambio
   ```

6. Abrí un **Pull Request** desde tu fork hacia la rama `main` del repositorio original.
   GitHub te va a mostrar el botón *Compare & pull request* automáticamente.