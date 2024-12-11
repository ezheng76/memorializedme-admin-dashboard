document.addEventListener("DOMContentLoaded", function () {
    const inbox = document.querySelector(".inbox");
    const numMessages = 5; // Number of messages
    const sampleNames = ["Emergency Handling", "Fairness", "Ethical Compliance", "Empathy", "Companionship"];
    const folderNames = ["emergency", "fairness", "ethical", "empathy", "companionship"];

    for (let i = 0; i < numMessages; i++) {
        const message = createMessage(sampleNames[i], folderNames[i]);
        inbox.appendChild(message);

        setTimeout(() => {
            message.classList.add("animate-fadeIn");
        }, i * 300); // Adjust the delay as needed
    }
});

function createMessage(senderName, folderName) {
    const message = document.createElement("div");
    message.onclick = function() {
        // Code to execute when clicked
        window.location.href = folderName + "/index.html";
    };
    message.className = "message";
    message.style.backgroundColor = "white";

    const avatar = document.createElement("div");
    avatar.className = "avatar";
    message.appendChild(avatar);

    const messageContent = document.createElement("div");
    messageContent.className = "message-content";

    const messageHeader = document.createElement("div");
    messageHeader.className = "message-header";

    const senderNameElement = document.createElement("h5");
    senderNameElement.textContent = senderName;

    const timestamp = document.createElement("span");
    timestamp.className = "timestamp";
    timestamp.textContent = "5 incidents";

    messageHeader.appendChild(senderNameElement);
    messageHeader.appendChild(timestamp);

    const messageText = document.createElement("p");
    messageText.textContent = "";

    messageContent.appendChild(messageHeader);
    messageContent.appendChild(messageText);

    message.appendChild(messageContent);

    return message;
}

// function getRandomColor() {
//     const letters = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }