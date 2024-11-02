"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// This is your server file :)
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const page_routes_1 = __importDefault(require("./routes/page.routes"));
//Create server
const app = (0, express_1.default)();
//Middleware
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
//Set view engine to EJS
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, "../src/views"));
// Routes
app.use("/", page_routes_1.default);
// app.use("/todos", todoRouter);
// Start server
const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
});
