import { ClaudeResponse } from "./claude.js";

// routes.js
async function setupRoutes(router) {
    router.post("/new", async (req, res) => {
        try {
            const { content } = req.body;
            if (content === "" || content == undefined || content == null){
                return res.status(400).json({
                    "error": true,
                    "msg": "missing Content in Body"
                })
            }

            const claude_res = await ClaudeResponse(content);
            const json_res = JSON.parse(claude_res);
            return res.status(200).json(json_res);
        } catch (error) {
            console.error("Error al obtener respuesta de Claude:", error);
            return res.status(500).json({
                "error": "Error interno del servidor"
            });
        }
    });
}

export default setupRoutes;