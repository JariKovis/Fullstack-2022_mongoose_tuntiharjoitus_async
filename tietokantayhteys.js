// Otetaan moduuli käyttöön
require("dotenv").config();
var mongoose = require("mongoose");

// Määritellään yhteysosoite
var user = process.env.DB_USER
var salis = process.env.DB_PASS
const uri = "mongodb+srv://" + user + ":" + salis + "@cluster0.anqd5.mongodb.net/mongoosedemo?retryWrites=true&w=majority";

main().catch(err => console.log(err));

/* Luodaan yhteys tietokantaan */
async function main() {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Yhteys on muodostettu!");

}

