const express = require("express");
const app = express();
const port = 3030;
const crudRoutes = require("./routes/index");

//middleware
app.use(express.json())

app.get("/", (req, res) => {
  res.send("This Route is working...");
});

app.use("/api", crudRoutes);

app.listen(port, () => {
  console.log(`server running on port ${port} `);
});
