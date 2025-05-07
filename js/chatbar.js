let currentChatName = "";

function openChat(name) {
    currentChatName = name;

    const chatBody = document.getElementById("chatBody");
    const chatTitle = document.getElementById("chatTitle");
    const backArrow = document.getElementById("backArrow");
    const chatInput = document.getElementById("chatInputContainer");

    chatTitle.textContent = name;
    backArrow.style.display = "inline";
    chatInput.style.display = "flex";

    chatBody.innerHTML = `
    <div class="message"><strong>${name}</strong>: Hey there!</div>
    <div class="message"><strong>You</strong>: Hello ${name}, how are you?</div>
    <div class="message"><strong>${name}</strong>: I'm good, thanks for asking!</div>
    `;
}

function goBack() {
    currentChatName = "";

    const chatBody = document.getElementById("chatBody");
    const chatTitle = document.getElementById("chatTitle");
    const backArrow = document.getElementById("backArrow");
    const chatInput = document.getElementById("chatInputContainer");

    chatTitle.textContent = "chat";
    backArrow.style.display = "none";
    chatInput.style.display = "none";

    chatBody.innerHTML = `
    <div class="contact" onclick="openChat('John Doe')">John Doe</div>
    <div class="contact" onclick="openChat('Jane Smith')">Jane Smith</div>
    <div class="contact" onclick="openChat('Ali Mahmoud')">Ali Mahmoud</div>
    `;
}

function sendMessage() {
    const input = document.getElementById("messageInput");
    const message = input.value.trim();
    const chatBody = document.getElementById("chatBody");

    if (message !== "") {
        const messageDiv = document.createElement("div");
        messageDiv.className = "message";
        messageDiv.innerHTML = `<strong>You</strong>: ${message}`;
        chatBody.appendChild(messageDiv);
        input.value = "";

        // Scroll to bottom
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}

// Allow pressing Enter to send message
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && document.getElementById("chatInputContainer").style.display === "flex") {
        sendMessage();
    }
});



