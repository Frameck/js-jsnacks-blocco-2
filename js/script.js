const number = parseInt(prompt('Inserisci un numero'))

let message = ''

if (number % 2 === 0) {
    message = number
} else {
    message = number + 1
}

alert(message)