document.addEventListener('DOMContentLoaded', function () {
    // Asynchronous function to fetch user data
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API endpoint
        const dataContainer = document.getElementById('api-data'); // Select data container

        try {
            // Fetch the data from the API
            const response = await fetch(apiUrl);
            
            // If the fetch is not successful, throw an error
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const users = await response.json(); // Convert response to JSON

            // Clear the loading message
            dataContainer.innerHTML = '';

            // Create a user list
            const userList = document.createElement('ul');

            // Loop through each user and create list items
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name; // Set list item content to user's name
                userList.appendChild(listItem); // Append list item to the list
            });

            // Append the list to the data container
            dataContainer.appendChild(userList);
        } catch (error) {
            // Clear the loading message and show error message
            dataContainer.innerHTML = 'Failed to load user data.';
            console.error('Error fetching user data:', error);
        }
    }

    // Invoke the fetchUserData function once the DOM is fully loaded
    fetchUserData();
});
