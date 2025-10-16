import app from "./app";

const port = process.env.PORT || 3000;

// Start server
app.listen(port, () => {
  console.log(
    `Coach2B backend listening on port ${port}. Available at http://localhost:${port}/`,
  );
  console.log(`Swagger API docs available at http://localhost:${port}/docs`);
});