import express from 'express';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());

let port = process.env.PORT || 3003;
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        console.log(`Server is running in http://localhost:${port}.`);
    } else {
        console.log(`Server is not running.`);
    }
})
export default app;