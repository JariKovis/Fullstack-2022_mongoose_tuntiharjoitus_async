// Otetaan moduuli käyttöön
require("dotenv").config();
var mongoose = require("mongoose");

// Määritellään yhteysosoite
var user = process.env.DB_USER
var salis = process.env.DB_PASS
const uri = "mongodb+srv://" + user + ":" + salis + "@cluster0.anqd5.mongodb.net/mongoosedemo?retryWrites=true&w=majority";


// Luodaan yhteys

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });


    /* Määritellään kittySchema-niminen Schema, huomaa myös kentän validaattorit*/
    const kittySchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            minlength: 3
        }
    });

    /* methods must be added to the schema before compiling it with mongoose.model() */
    kittySchema.methods.speak = function speak() {
        const greeting = this.name
            ? "Meow name is " + this.name
            : "I don't have a name";
        console.log(greeting);
    };

    /* The next step is compiling kittySchema- schema into a Model. */
    const Kitten = mongoose.model('Kitten', kittySchema);

    /* Luodaan uusi kitten olio ja tulostetaan sen nimi konsoliin */
    const silence = new Kitten({ name: 'Silence' });
    console.log(silence.name); // 'Silence'

    const fluffy = new Kitten({ name: 'Fluffy' });
    fluffy.speak(); // "Meow name is Fluffy"
    await fluffy.save()
}