import express, {Router} from "express";
import cors from "cors";
import setupRoutes from "./src/routes.js";

const app = express();
const router = Router();

app.use(express.json());
app.use(cors());
app.use("/api", router);
app.listen(3000, ()=>{
    console.log("App in port 3000")
})

// Importar Rutas
setupRoutes(router);


export {app, router};


