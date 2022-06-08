import { log } from './logging/logger';
import server from './server';
const PORT = 3000;

const app = server();
app.listen(PORT, () => log("Server running on ", PORT))