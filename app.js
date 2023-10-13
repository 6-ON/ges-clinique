import express from "express";
// import {  Route } './routes' // import routes here hada gha exemple
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// link routes here
// app.use('/route', Route) // tahada gha exemple
// -----------------

app.listen(3000, () => {
	console.log("Example app listening on port 3000!");
});
