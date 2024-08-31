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
    const prompt = `I have a budget of ${budget} and I want to make a ${projectType} in ${location}. Make a simple budget for the project, and also provide a graph based on this data and a table of different components.`;

    // Show loading animation
    const loading = document.querySelector("#loading");
    loading.style.display = "block";

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
        const resultText = data.candidates[0].content.parts[0].text;

        // Assuming the API also returns a graph image URL and a table in some structure
        // Placeholder variables (you will need to adjust according to actual API response)
        const graphUrl = data.candidates[0].content.parts[0].graphUrl || '';
        const tableHtml = data.candidates[0].content.parts[0].tableHtml || '';

        // Display the summary text
        const summaryContent = document.querySelector("#summaryContent");
        summaryContent.innerHTML = `
            <h3>Project Budget Summary</h3>
            <p>${resultText.replace(/\*\*/g, '<strong>').replace(/\n/g, '<br>').replace(/<\/strong><br>/g, '</strong><br><br>')}</p>
        `;

        // Display the graph if available
        if (graphUrl) {
            summaryContent.innerHTML += `
                <h3>Project Budget Graph</h3>
                <img src="${graphUrl}" alt="Budget Graph" style="max-width: 100%;">
            `;
        }

        // Display the table if available
        if (tableHtml) {
            summaryContent.innerHTML += `
                <h3>Component Table</h3>
                <div>${tableHtml}</div>
            `;
        }

        document.querySelector("#summary").style.display = "block";

    } catch (error) {
        console.log('Error:', error);
        const botMsg = document.querySelector("#summaryContent");
        botMsg.innerHTML = `<p>Sorry, something went wrong. Please try again later.</p>`;
    } finally {
        // Hide loading animation
        loading.style.display = "none";
    }
}

document.querySelector("#submit").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the form from submitting
    getSolution();
});
