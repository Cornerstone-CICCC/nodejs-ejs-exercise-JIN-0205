// This is your server file :)
import express from "express";
import path from "path";
import pageRouter from "./routes/page.routes";

//Create server
const app = express();

//Middleware
app.use(express.static(path.join(__dirname, "public")));

//Set view engine to EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../src/views"));

// Routes
app.use("/", pageRouter);
// app.use("/todos", todoRouter);

// Start server
const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
