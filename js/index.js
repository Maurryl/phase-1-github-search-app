// app.js

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const resultsContainer = document.querySelector('#results-container');

searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value.trim();

  // Construct the User Search Endpoint URL
  const userSearchUrl = `https://api.github.com/search/users?q=${searchTerm}`;
  const response = await fetch(userSearchUrl, {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
    },
  });
  const data = await response.json();

  // Display user information (username, avatar, profile link)
  resultsContainer.innerHTML = '';
  data.items.forEach((user) => {
    const userCard = document.createElement('div');
    userCard.innerHTML = `
      <img src="${user.avatar_url}" alt="${user.login}" />
      <a href="${user.html_url}" target="_blank">${user.login}</a>
    `;
    resultsContainer.appendChild(userCard);
  });
});

// Add event listener for clicking on a user (to fetch repositories)
// Similar logic for fetching repositories and displaying them
// Bonus: Toggle search type (user/repo) based on user interaction
