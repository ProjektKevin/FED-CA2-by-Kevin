/*
    CA2 – Interactive Website
    
    Give random text message page
    Author: Min Thet Khine
    Date:   5 Aug 2023

    Filename: random.js
*/

// Array of random texts
const randomTexts = [
    "Turn off lights, electronics, and appliances when not in use.",
    "Eat more plant-based meals to reduce your carbon footprint.",
    "Buy locally grown produce to reduce transportation emissions.",
    "Install water-saving fixtures like low-flow toilets and efficient showerheads",
    "Use energy-efficient light bulbs and appliances.",
    "If possible, install solar panels on your property or support renewable energy initiatives.",
    "Stay informed about environmental issues and sustainable practices.",
    "When possible, choose alternatives to flying such as trains or buses for shorter distances.",
    "Recycle paper, glass, plastic, and other materials as per your local recycling guidelines.",
    "Minimize single-use plastics by using reusable bags, bottles, and containers.",
    "Donate or repurpose items instead of throwing them away.",
    "Unplug chargers and devices when they're not in use.",
    "Consider the environmental impact of your purchases and opt for products that are durable and have a longer lifespan."
];

// Function to generate random texts
function generateRandomText() {
    const textContainer = document.getElementById("textContainer");   //get id
    textContainer.innerHTML = ""; // Clear previous content

    const list = document.createElement("ol"); // Create an ordered list
    const selectedIndices = []; // to keep track of selected indices

    while (selectedIndices.length < 3) {   // loop until 'selectedIndices' have 3 items
        const randomIndex = Math.floor(Math.random() * randomTexts.length);

        // Check if the index has already been selected
        if (!selectedIndices.includes(randomIndex)) {
            selectedIndices.push(randomIndex);

            const text = randomTexts[randomIndex];
            const listItem = document.createElement("li"); // Create a list item
            listItem.textContent = text;
            list.appendChild(listItem); // Add the list item to the ordered list
        }
    }

    textContainer.appendChild(list); // Add the ordered list to the container
}

// Attach event listener to the button
const generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", generateRandomText);