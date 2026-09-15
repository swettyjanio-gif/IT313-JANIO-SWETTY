const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/about", (req, res) => {
    res.send(`
        <h1>About IT313</h1>
        <p>This is my IT313 Mobile Programming project.</p>
        <a href="/">Go Home</a>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
