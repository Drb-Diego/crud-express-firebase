import expressConfig from "./src/config/expressConfig.js";

const app = expressConfig();

const PORT = process.env.PORT || 4500;

app.listen(PORT, () => console.log(`Server up\nNa porta: ${PORT}`));