document.getElementById("chatbot-toggle").addEventListener("click", function() {
    document.querySelector(".chatbot-container").style.display = "flex";
    this.style.display = "none";
    
    // Greet the user
    setTimeout(() => {
        appendMessage("bot", "Hello! How can I assist you today?");
    }, 500);
});

document.getElementById("close-chatbot").addEventListener("click", function() {
    document.querySelector(".chatbot-container").style.display = "none";
    document.getElementById("chatbot-toggle").style.display = "block";
});

document.getElementById("send-btn").addEventListener("click", function() {
    let userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        appendMessage("user", userInput);
        setTimeout(() => {
            botResponse(userInput);
        }, 1000);
    }
    document.getElementById("user-input").value = "";
});

function appendMessage(sender, message) {
    let messageElement = document.createElement("div");
    messageElement.classList.add("chatbot-message", sender);
    messageElement.innerText = message;
    document.getElementById("chatbot-messages").appendChild(messageElement);
    document.getElementById("chatbot-messages").scrollTop = document.getElementById("chatbot-messages").scrollHeight;
}

function botResponse(input) {
    let response = "I'm sorry, I didn't understand that.";
    if (input.toLowerCase().includes("hello")) {
        response = "Hello! How can I assist you today?";
    } else if (input.toLowerCase().includes("register")) {
        response = "To register, please visit the registration page.";
    } else if (input.toLowerCase().includes("login")) {
        response = "You can login by visiting the login page.";
    }
    appendMessage("bot", response);
}
document.getElementById("chatbot-toggle").addEventListener("click", function() {
    document.querySelector(".chatbot-container").style.display = "flex";
    this.style.display = "none";
    
    // Greet the user
    setTimeout(() => {
        appendMessage("bot", "Hello! How can I assist you today?");
    }, 500);
});

document.getElementById("close-chatbot").addEventListener("click", function() {
    document.querySelector(".chatbot-container").style.display = "none";
    document.getElementById("chatbot-toggle").style.display = "block";
});

document.getElementById("send-btn").addEventListener("click", function() {
    let userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        appendMessage("user", userInput);
        setTimeout(() => {
            botResponse(userInput);
        }, 1000);
    }
    document.getElementById("user-input").value = "";
});

function appendMessage(sender, message) {
    let messageElement = document.createElement("div");
    messageElement.classList.add("chatbot-message", sender);
    messageElement.innerText = message;
    document.getElementById("chatbot-messages").appendChild(messageElement);
    document.getElementById("chatbot-messages").scrollTop = document.getElementById("chatbot-messages").scrollHeight;
}

function botResponse(input) {
    let response = "I'm sorry, I didn't understand that.";
    if (input.toLowerCase().includes("hello")) {
        response = "Hello! How can I assist you today?";
    } else if (input.toLowerCase().includes("register")) {
        response = "To register, please visit the registration page.";
    } else if (input.toLowerCase().includes("login")) {
        response = "You can login by visiting the login page.";
    }
    appendMessage("bot", response);
}
