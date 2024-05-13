const usersList = ["giangiorgio@camelot.cm", "giero@camelot.cm", "garluccio@camelot.cm", "genoveffa@camelot.cm"]

const userMail = prompt ("Inserisci la tua mail")

if (usersList.includes (userMail) === true) {
    console.log ("Le tue credenziali sono state accettate")
} else {
    console.log ("Le tue credenziali non sono state riconosciute")
}