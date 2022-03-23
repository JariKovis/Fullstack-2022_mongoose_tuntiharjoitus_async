// Otetaan moduuli käyttöön
require("dotenv").config();
var mongoose = require("mongoose");

// Määritellään yhteysosoite
var user = process.env.DB_USER
var salis = process.env.DB_PASS
const uri = "mongodb+srv://" + user + ":" + salis + "@cluster0.anqd5.mongodb.net/mongoosedemo?retryWrites=true&w=majority";

// Luodaan yhteys
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;


// Tulostetaan tieto yhteyden onnistumisesta tai virheestä
db.on("error", () => console.log("Yhteysvirhe!:"));

db.once("open", function () {
    console.log("Yhteys on muodostettu!");
});

/* Määritellään kittySchema-niminen Schema, huomaa myös kentän validaattorit*/
const kittySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    }
});

/* The next step is compiling kittySchema- schema into a Model. */
const Kitten = mongoose.model('Kitten', kittySchema);

/* Luodaan uusi kitten olio ja tulostetaan sen nimi konsoliin */
const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'