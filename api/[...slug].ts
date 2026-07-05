import express from 'express';
const app = express();
app.all('*', (req, res) => res.json({ ok: true, msg: 'Isolated function deployed', url: req.url }));
export default app;
