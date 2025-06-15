// Initialize the Async Function
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the Data Container Element
    const dataContainer = document.getElementById('api-data');

    // Fetch Data Using try-catch
    try {
        // Fetch the response from the API
        const response = await fetch(apiUrl);

        // Check if the response was successful (e.g., status 200 OK)
        if (!response.ok) {
            // If not successful, throw an error to be caught by the catch block
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Convert the response to JSON
        const users = await response.json();

        // Clear the Loading Message
        dataContainer.innerHTML = ''; // Clear "Loading user data..."

        // Create and Append User List
        const userList = document.createElement('ul');

        // Loop through the users array and create list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set text content to user's name
            userList.appendChild(listItem); // Append the list item to the unordered list
        });

        // Append the userList to the dataContainer
        dataContainer.appendChild(userList);

    } catch (error) {
        // Error Handling: Display an error message if fetching fails
        console.error('Failed to fetch user data:', error); // Log error for debugging
        dataContainer.innerHTML = ''; // Clear any existing content
        dataContainer.textContent = 'Failed to load user data.';
        dataContainer.style.color = 'red'; // Optional: make error message red
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
