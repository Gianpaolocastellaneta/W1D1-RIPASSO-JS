/* 1) CREA UNA FUNZIONE CHE CONTROLLI DUE NUMERI INTERI . RITORNA TRUE SE UNO DEI DUE E' 50 O SE LA SOMMA DEI DUE E' 50*/

function control(num1, num2){
    if((num1 === 50 || num2 === 50) || num1 + num2 === 50){
        return true
    } else {
        return false
    }
}
console.log(control(10,30))

/* 2) SCRIVI UNA FUNZIONE CHE RIMUOVA IL CARATTERE AD UNA SPECIFICA POSIZIONE DA UNA STRINGA. PASSA LA STRINGA E LA POSIZIONE 
      COME PARAMETRI E RITORNA LA STRINGA MODIFICATA */

function removeG(parola,y){
    let newParola = parola.split('')
    newParola.splice(0,1) //splice va a togliere con il primo num (0) la posizione e la seconda(1) quante lettere togliere
    return newParola.join('')
}
console.log(removeG("Gianpaolo"))

/* 3) CREA UNA FUNZIONE CHE CONTROLLI SE 2 NUMERI SIANO COMPRESI  TRA 40 E 60 o TRA 70 E 100. RITORNA TRUE SE RISPECCHIANO
      QUESTE CONDIZIONI, ALTRIMENTI RIORNA FALSE.*/

function controlNum(num1,num2){
    if((num1 >= 40 && num1 <= 70 && num2 >= 40 && num2 <= 100)|| (num1 >= 70 && num1 <=100 && num2 >= 70 && num2 <= 100)){
        return true
} else return false
}
console.log(controlNum(40,50))

/* 4) CREA UNA FUNZIONE CHE ACCETTI UN NOME DI CITTA' COME PARAMETRO E RITORNI IL NOME STESSO SE INZIA CON LOS O NEW, ALTRIMENTI FALSE.*/

 function controlCity(city){
    if (city.startsWith("Los")|| city.startsWith("New")){//startsWith determina se questa stringa inizia con i caratteri di una stringa specificata
        return city
 } else return false
}
console.log(controlCity("Los Angeles"))

/* 5) CREA UNA FUNZIONE CHE CALCOLI E RITORNI  LA SOMMA  DI TUTTI GLI ELEMENTI DI UN ARRAY . L'ARREY DEVE ESSERE PASSATO COME PARAMETRO*/

function somma(array){
    let sum = 0
    for (let i = 0; i < array.length; i++){
        sum += array[i] //oppure sum = sum + array[i]
    }
    return sum
}
console.log(somma([1,2,3,4,5]))

/* 6) CREA UNA FUNZIONE CHE CONTROLLI CHE UN ARRAY NON CONTENGA I NUMERI 1 o 3. SE NON LI CONTIENE, RITORNA TRUE, ALTRIMENTI RITORNA FALSE.*/

function controlDueNum(array){
    return !array.includes(1) && !array.includes(3)
}
console.log(controlDueNum([1, 5]))

/* 7) CREA UNA FUNZIONE PER TROVARE IL TIPO DI ANGOLO I CUI GRADI SONO PASSATI COME PARAMETRO.
      ANGOLO ACUTO: MENO DI 90° = RITORNA ACUTO
      ANGOLO OTTUSO: TRA I 90° E I 180° = RITORNA OTTUSO
      ANGOLO RETTO: 90° = RITORNA RETTO
      ANGOLO PIATTO: 180° = RITORNA PIATTO */

function angolo(gradi){
    switch (true){
        case (gradi < 90):
            return "acuto"
        case (gradi > 90 && gradi < 180):
            return "ottuso"
        case (gradi === 90):
            return "retto"
        case (gradi === 180):
            return "piatto"
    }
}
console.log(angolo(80))
console.log(angolo(91))
console.log(angolo(90))
console.log(angolo(180))

/* 8) CREA UNA FUNZIONE CHE CREI UN ACRONIMO A PARTIRE DA UNA FRASE . ES (FABBRICA ITALIANA AUTOMOBILI TORINO) DEVE TORNARE FIAT */

function frase(fiat){
    let FIAT = fiat.toUpperCase()
    let array = FIAT.split(" ")
    let acronimo = ""
    for (index of array){
        acronimo += index.charAt(0)
    }
    return acronimo 
}
console.log(frase("fabbrica italiana automobili torino"))

/* EXTRA */


/* 1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.*/

function carattere(str) {
    // Oggetto per memorizzare la frequenza di ogni carattere
    const frequenzaCar = {};

    // Itera attraverso la stringa per contare le frequenze dei caratteri
    for (let char of str) {
        if (frequenzaCar[char]) {
            frequenzaCar[char]++;
        } else {
            frequenzaCar[char] = 1;
        }
    }

    // Variabili per memorizzare il carattere più frequente e la sua frequenza
    let maxCar = '';
    let maxCount = 0;

    // Trova il carattere con la frequenza più alta
    for (let char in frequenzaCar) {
        if (frequenzaCar[char] > maxCount) {
            maxCar = char;
            maxCount = frequenzaCar[char];
        }
    }

    return maxCar;
}

// Esempi di utilizzo:
console.log(carattere("abbccc"));
console.log(carattere("javascript"));
console.log(carattere("epicode"));


/* 1. Secondo metodo --> Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.*/

function extra1(string){
    let letteraPiuUsata = "" //variabile della lettera piu usata
    let count = 0 //variabile che serve per contare quante volte viene ripetuta una lettera
    let arrayLettere = string.split("") //creo array dalla stringa con lo split come parametro dello split il divisore
    for (let i = 0; i < arrayLettere.length; i++){
        let calcoloSingolaLettera = string.split(string.charAt(i)).length-1 //splitto la stringa per il carattere che sto ciclando, calcoliamo quante volte è presetne la lettera all'interno e tolgo 1
        if (calcoloSingolaLettera>count){
            count=calcoloSingolaLettera
            letteraPiuUsata = string.charAt(i)
        }
    }
    return letteraPiuUsata
}
console.log(extra1("epicodecpippo"))

//esercizio extra2

function anagrammi(str1,str2){
    let var1 = str1.toLowerCase().split("").sort().join()
    let var2 = str2.toLowerCase().split("").sort().join()
    if (var1 === var2){
        return true
    }else{
        return false
    }
}
console.log(anagrammi("noTizia","tiziano"))

//esercizio extra3

function anagramma(par1,par2){
    let array = []
    for(let i=0; i < par1.length; i++){
        if(anagrammi(par1[i], par2)){
                array.push(par1[i])
        }     
        } return array
    }
console.log(anagramma(["ciao", "Notizia"], "tiziano"))

//esercizio extra4

function palindromo(string){
    let reverse=string.split("").reverse().join("")
    if(reverse===string){
        return true
    }else{
        return false;
    }
}
console.log(palindromo("anna"))