import express from "express";

// Inicializamos la aplicación Express
const app = express();

// Usamos el tipico body parser para JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ejemplo de endpoint simple
app.get("/", (req: Request, res: Response) => {
  res.send("Servidor del bot funcionando correctamente 🚀");
});

// Ejemplo: endpoint para simular un “bot de juego”
app.post("/bot/move", (req: Request, res: Response) => {
  const { position } = req.body;

  // Aquí podrías poner tu lógica para decidir el siguiente movimiento
  const move = decideNextMove(position);

  res.json({ move });
});

// Función de ejemplo para simular la lógica del bot
function decideNextMove(position: number): string {
  if (position < 5) return "move_forward";
  if (position === 5) return "attack";
  return "defend";
}

export default app;
