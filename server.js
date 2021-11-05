import expressConfig from "./src/config/expressConfig.js";

const app = expressConfig();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log('Server up'));