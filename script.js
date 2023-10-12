let password
let attempts = 0
do {
    password = +prompt("Enter your code:")
    attempts += 1
} while (password !== 1111 && attempts < 3) {
    if (password === 1111) alert("Everything is fine!")
    else alert("You have no more attempt left!")
}