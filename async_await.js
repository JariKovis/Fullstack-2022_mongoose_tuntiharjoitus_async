// Otetaan moduuli käyttöön
require("dotenv").config();
var mongoose = require("mongoose");

// Määritellään yhteysosoite
var user = process.env.DB_USER
var salis = process.env.DB_PASS
const uri = "mongodb+srv://" + user + ":" + salis + "@cluster0.anqd5.mongodb.net/mongoosedemo?retryWrites=true&w=majority";

main().catch(err => console.log(err));

/* Luodaan async funktio main()*/
async function main() {
    const aika = 1000;
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), aika)
    });
    /* The function execution “pauses” and resumes when the promise settles, with result becoming its result (= "done!")  */
    let result = await promise;

    console.log(result + " ...in " + aika + " msec"); // "done!"
}
