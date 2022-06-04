import app from "./app.js";
const port = 5011;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
