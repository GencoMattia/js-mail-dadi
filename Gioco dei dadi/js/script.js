
// for (let i = 0; i <= 10; i++) {
//     let userNumber = Math.floor(Math.random() * 6) + 1;
//     console.log (userNumber)
// }

const userNumber = Math.floor(Math.random() * 6) + 1;
const computerNumber = Math.floor(Math.random() * 6) + 1;

console.log (userNumber + " " + computerNumber)

if (userNumber > computerNumber) {
    console.log ("Il giocatore vince con " + userNumber + " contro " + computerNumber)
} else if (userNumber < computerNumber) {
    console.log ("Il computer vince con " + computerNumber + " contro " + userNumber)
} else if (userNumber === computerNumber) {
    console.log ("Pareggio con doppio " + userNumber)
}
