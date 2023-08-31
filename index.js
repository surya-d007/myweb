import express from "express";
import path from "path";
const loc = process.cwd();
const app = express();
app.use(express.static(path.join(loc, 'public')));



app.get('/', (req, res) => {
    res.render("home.ejs");
});

app.get('/home', (req, res) => {
    res.render("home.ejs");
});


app.get('/about', (req, res) => {
    res.render("about.ejs");
});

app.get('/services', (req, res) => {
    res.render("services.ejs");
});

app.get('/contacts', (req, res) => {
    res.render("contacts.ejs");
});


app.listen(2000, () => {
    console.log(`Server started on port 2000`);
});