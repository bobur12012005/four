let password
let chances = 0
do {
    password = +prompt("Enter your code:")
    chances += 1
} while (password !== 1111 && chances < 3) {
    if (password === 1111) alert("Everything is fine!")
    else alert("You have no more attempt left!")
}