// Visualizzare in pagina 5 numeri casuali.
//  Da lì parte un timer di 30 secondi
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


function genericNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  const cpuNum = [];
//1.1 ciclo per generare 5 numeri
  while ( cpuNum.length < 5) {
      let number =  genericNumber(1, 100);
      //1.2   non fa ripetere i numeri
      if (!cpuNum.includes(number)) {
        cpuNum.push(number);
    }
  }
  console.log(cpuNum);

// imposto timer e chiedo all'user di replicare i numeri
let userNum = [];
let inputNum;
setTimeout(function() {
    for (let i = 0; i < 5; i++) {
        do {
            inputNum = Number(prompt("Inserisci i numeri che ti sono stati mostrati"))
        } while (isNaN(inputNum) || inputNum < 1 || inputNum > 100);
        if (cpuNum.includes(inputNum)) {
            userNum.push(inputNum);
        }
    }
    // 3. Stampo in console quanti e quali numeri sono stati indovinati
    console.log(`Hai indovinato ${userNum.length} numeri (${userNum})`);
}, 30000);