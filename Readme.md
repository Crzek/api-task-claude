# Proyecto API con Claude

Este proyecto es una API construida con Node.js y Express que utiliza el modelo Claude para procesar texto. La API permite enviar texto y recibir una respuesta generada por el modelo Claude.

## Requisitos

- Node.js
- Una API Key de Claude

## Instalación

1. Clona este repositorio en tu máquina local.
2. Navega al directorio del proyecto.
3. Instala las dependencias ejecutando el siguiente comando:

   ```bash
   npm install
   ```

4. Crea un archivo `.env` en la raíz del proyecto y añade tu API Key de Claude:

   ```
   CLAUDE_API_KEY=tu_api_key_aqui
   ```

## Uso

Para iniciar el servidor, ejecuta el siguiente comando:

```bash
npm start
```

El servidor se ejecutará en `http://localhost:3000`.

## Endpoints

### POST /api/new

Este endpoint recibe un objeto JSON con el texto que deseas procesar. El cuerpo de la solicitud debe tener el siguiente formato:

```json
{
  "content": "Tu texto aquí"
}
```

La respuesta será un objeto JSON con la respuesta generada por Claude:

```json
[
	{
		"step": 1,
		"description": "Definir el objetivo de aprendizaje sobre el concepto de RAG (Registro de Actividades de Gestión)."
	},
    ...
	{
		"step": 5,
		"description": "Poner en práctica el uso del RAG en un proyecto de Inteligencia Artificial y evaluar su efectividad en la gestión y seguimiento de las actividades."
	}
]
```

## Descripción del Proyecto

Este proyecto utiliza el SDK de Anthropic para interactuar con el modelo Claude. El modelo está configurado para actuar como un coach que proporciona pasos para realizar cualquier tarea en cinco pasos. La API procesa el texto enviado y devuelve una respuesta generada por el modelo.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio que desees realizar.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.