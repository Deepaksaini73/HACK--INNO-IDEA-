fetch("AIzaSyBk0zECpSPzdv6MDX5eH_YYdS7HdS4lwvQ")

function sendMessage() {
    const inputElement = document.getElementById('user-input');
    const message = inputElement.value.trim();
    if (message === '') return;

    // Display the user's message
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `<p class="user">You: </p>`;
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear the input field
    inputElement.value = '';

    // Simulate a response from the AI
    setTimeout(() => {
        const aiMessage = "This is a simulated response. Your message was: " ;
        chatBox.innerHTML += `<p class="ai">AI: </p>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000); // Simulate a 1-second delay before the AI responds
}

// Allow pressing "Enter" to send the message
document.getElementById('user-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
