let evenFoot = [];

for (let i = 0; i < 6; i++) {
    const userNumber = Number.parseInt (prompt ("Digita un numero"), 10);

    if (userNumber % 2 === 0) {
        evenFoot.push (userNumber)
    }
    
    console.log (evenFoot)
}