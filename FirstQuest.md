# La Primera Misión

---

*El salón del gremio huele a café frío y soldadura. En una pizarra llena de ecuaciones hay un post-it que dice tu nombre. Un integrante te lo señala y te dice:*


> [!NOTE]
> Bienvenid@ al **GIAR**, aventurer@.
> 
> Antes de mandarte al frente con el código y los circuitos, tenés que completar una prueba de iniciación. No es difícil, de hecho, la resolvieron todos los que llegaron antes que vos. Pero vas a tener que aprender a manejarte con las herramientas del gremio.
> 
> Tu misión: **agregarte al organigrama del grupo**.
> 
> Eso implica modificar un archivo de código, y enviarnos la modificación de una manera que nosotros podamos revisarla antes de incorporarla. Para eso vas a usar **Git** y **GitHub**, que son las herramientas con las que todo el equipo trabaja y comparte código.
> 
> No te preocupes si nunca los usaste. Esta guía te va a dar el mapa, pero el camino lo tenés que recorrer vos.
> 
---

## El inventario que necesitás

Antes de salir, asegurate de tener esto:

- Una cuenta en [GitHub](https://github.com/) (gratis, si no la tenés creala ahora)
- [Git](https://git-scm.com/downloads) instalado en tu computadora
- Un editor de código. Si no tenés uno, [Visual Studio Code](https://code.visualstudio.com/) es una buena elección.

Si nunca usaste Git ni la terminal, el gremio te recomienda empezar por acá antes de seguir:

> **Guía oficial de introducción a GitHub (en español):**
> https://docs.github.com/es/get-started/start-your-journey/hello-world

---

## La misión

### Etapa I — El Gran Fork

El repositorio del organigrama es propiedad del gremio. Vos no podés modificarlo directamente, primero necesitás hacer una **copia propia**. Esa copia se llama **fork**.

Un fork es tu versión personal del repositorio, donde podés experimentar sin miedo a romper nada.

> **Cómo hacer un fork:**
> https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo

> [!TIP] 
> *Pss... Te dejo una pista.. Buscá el botón "Fork" en la esquina superior derecha del repositorio original en GitHub.*

---

### Etapa II — Bajá tu copia al mundo local

Un fork existe en los servidores de GitHub, pero para editarlo necesitás tenerlo en tu máquina. Eso se hace con `git clone`.

Una vez que lo tengas clonado, vas a ver la carpeta del proyecto en tu computadora como cualquier otra carpeta.

> **Qué es clonar y cómo hacerlo:**
> https://docs.github.com/es/repositories/creating-and-managing-repositories/cloning-a-repository

---

### Etapa III — Tu propia rama

En Git, los cambios no se hacen directamente sobre la línea principal del proyecto (llamada `main`). Primero creás una **rama**: un camino paralelo donde podés trabajar sin afectar lo que ya existe.

Pensalo como abrir un borrador antes de enviar el mensaje definitivo.

Dale un nombre descriptivo a tu rama, por ejemplo: `agregar-tu-nombre`.

> **Cómo crear y cambiar de rama:**
> https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository

> **Más sobre qué es una rama y por qué existe:**
> https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches

---

### Etapa IV — El trabajo real

Abrí el archivo `js/data.js`. Ahí, en el array `personas`, vas a encontrar la lista de integrantes del grupo.

Tu tarea es agregarte vos. El formato de cada persona está documentado al principio del archivo. Prestá atención especialmente a:

- El campo `id` — tiene que ser único y seguir la numeración existente
- El campo `pertenece` — indica a qué subproyecto pertenecés y con qué rol
- El campo `linkedin` — podés poner `null` si no querés que aparezca

Si tenés dudas sobre el formato, mirá las entradas existentes como referencia. Cualquier integrante ya cargado es un ejemplo válido.

Finalmente, si querés, podés agregar tu foto. Para ello fijate el contenido de la carpeta `img`. Intentá deducir cómo funciona.

---

### Etapa V — Guardá el progreso

En Git, guardar cambios se llama "hacer un **commit**". Un commit es como una foto del estado del proyecto en ese momento, con un mensaje que explica qué cambiaste.

Después de hacer el commit, necesitás subir esos cambios a tu fork en GitHub. Eso se llama **push**.

> **Cómo hacer un commit y un push:**
> https://docs.github.com/es/get-started/using-git/pushing-commits-to-a-remote-repository

---

### Etapa VI — El regreso al reino: el Pull Request

Ya modificaste el archivo, lo commiteaste y lo subiste a tu fork. Ahora viene el paso final: pedirle al gremio que incorpore tus cambios al repositorio oficial.

Eso se hace con un **Pull Request** (PR). Es básicamente decir: *"Acá están mis cambios, ¿los revisamos y los sumamos?"*

El equipo va a ver tu PR, puede dejarte comentarios si hay algo para ajustar, y cuando todo esté bien lo va a aprobar.

> **Cómo abrir un Pull Request desde un fork:**
> https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork

> **Qué es un Pull Request:**
> https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests

---

## Si te trabás

Git tiene una curva de aprendizaje. Es normal que algo no funcione a la primera.

Antes de rendirte, probá con:

- **La documentación oficial de Git** (hay versión en español): https://git-scm.com/book/es/v2
- **Buscar el mensaje de error en Google**, casi siempre alguien ya lo tuvo y lo resolvió
- **Preguntarle a alguien del equipo**... para eso estamos :)

---

## La recompensa

Cuando tu Pull Request sea aceptado, tu nombre va a aparecer en el organigrama del grupo.

>[!IMPORTANT]
> **¡Bienvenid@ al equipo!**

