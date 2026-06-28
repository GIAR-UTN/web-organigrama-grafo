/**
 * Resuelve la ruta de la imagen de una persona.
 *   Si la persona tiene campo "imagen", retorna -> img/{imagen}.
 *   Si no, retorna -> img/placeholder.png.
 */
export function resolveImage(persona) {
  if (persona.imagen) return `img/${persona.imagen}`;
  return 'img/placeholder.png';
}