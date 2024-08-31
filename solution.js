async function getSolution() {
    const API_KEY = "AIzaSyCHnvCwrO6FkIYKd2Wh5redx5bdKdws43Y";
    const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;

    // Get the values from the form
    const projectType = document.querySelector("#projectType").value;
    const budget = document.querySelector("#budget").value;
    const location = document.querySelector("#location").value;
    const area = document.querySelector("#area").value;
    const timeline = document.querySelector("#timeline").value;

    // Construct the prompt
    const prompt = `I have a budget of ${budget} and I want to make a ${projectType} in ${location}. Make a simple budget for the project.`;

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [{
                    role: "user",
                    parts: [{ text: prompt }]
                }]
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const result = data.candidates[0].content.parts[0].text;

        // Display formatted summary
        const summaryContent = document.querySelector("#summaryContent");
        summaryContent.innerHTML = `
            <h3>Project Budget Summary</h3>
            <p>${result.replace(/\*\*/g, '<strong>').replace(/\n/g, '<br>').replace(/<\/strong><br>/g, '</strong><br><br>')}</p>
        `;
        document.querySelector("#summary").style.display = "block";

    } catch (error) {
        console.log('Error:', error);
        const botMsg = document.querySelector("#summaryContent");
        botMsg.innerHTML = `<p>Sorry, something went wrong. Please try again later.</p>`;
    }
}

document.querySelector("#submit").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the form from submitting
    getSolution();
});
