const express = require('express');
const con = require("./config");
const app = express();

app.use(express.json())
app.get('/users', (req, resp) => {
    con.query("Select * from users", (err, results) => {
        if (err) {
            resp.send("Error in database connection");
        }
        resp.send(results)
    })
});

app.post('/users', (req, resp) => {
    const data = req.body;
    console.log(req.body)
    con.query("Insert into users SET ?", data, (err, result, fields) => {
        if (err) resp.send(err);
        resp.send(result)
    })
})

app.put("/users/:id", (req, resp) => {
    const data = [req.body.name, req.params.id];
    con.query("Update users SET name = ? where id = ?", data, (err, result, fields) => {
        if (err) resp.send(err);
        resp.send(result)
    })
})


app.delete('/users/:id', (req, resp) => {
    con.query("Delete from users where id=" + req.params.id, (err, result)=>{
        if (err) resp.send(err);
        resp.send(result)
    })
});

app.listen(3000);