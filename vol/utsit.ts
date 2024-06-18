// Import necessary libraries
import axios from 'axios';

// Set website URL
const website = 'https://anastasia.net';

// Define a function to make GET request to the website
async function fetchData() {
  try {
    // Make GET request to the website
    const response = await axios.get(website);
    // Check if the response was successful
    if (response.status === 200) {
      // Process the response data
      const data = response.data;
      // Perform further processing on the data if needed
      console.log(data);
    } else {
      console.error(`Error: ${response.status}`);
    }
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

// Call the fetchData function to start the process
fetchData();
