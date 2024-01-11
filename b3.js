const random_number = Math.floor(Math.random() * 2); 
function guessNumber() {
    let user_guess;
    while (true) {
        user_guess = prompt("Hãy đoán số (nhập từ 1 đến 10): ");
        
        user_guess = parseInt(user_guess);
        if (!isNaN(user_guess) && user_guess >= 1 && user_guess <= 10) {
            break;
        } else {
            alert("Số nhập vào không đúng. Hãy nhập lại.");
        }
    }

    if (user_guess === random_number) {
        alert("Chúc mừng! Bạn đã đoán đúng số.");
    } else {
        alert("Rất tiếc, số đúng là " + random_number + ". Bạn hãy thử lại.");
    }
}

// Gọi hàm để bắt đầu chương trình
guessNumber();

