document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchResultsContainer = document.createElement("div");
    searchResultsContainer.id = "searchResults";
    searchInput.parentNode.appendChild(searchResultsContainer);

    // Listen for input in the search bar
    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();
        searchResultsContainer.innerHTML = ""; // Clear previous results

        if (query.trim() === "") {
            searchResultsContainer.classList.remove("active"); // Hide results if input is empty
            return;
        }

        searchResultsContainer.classList.add("active"); // Show results when typing

        // Get all users from localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Filter users based on the search query
        const filteredUsers = users.filter(user =>
            user.username.toLowerCase().includes(query) || user.email.toLowerCase().includes(query)
        );

        if (filteredUsers.length > 0) {
            filteredUsers.forEach(user => {
                const result = document.createElement("div");
                result.innerHTML = `
            <a href="#" class="user-link" data-username="${user.username}">
                <p><strong>${user.username}</strong> (${user.email})</p>
            </a>
            `;
                searchResultsContainer.appendChild(result);
            });

            // Add click event listeners to user links
            document.querySelectorAll(".user-link").forEach(link => {
                link.addEventListener("click", function (event) {
                    event.preventDefault();
                    const username = this.getAttribute("data-username");

                    // Find the user in localStorage
                    const users = JSON.parse(localStorage.getItem("users")) || [];
                    const selectedUser = users.find(user => user.username === username);

                    if (selectedUser) {
                        // Save the selected user's profile to localStorage
                        localStorage.setItem("selectedUserProfile", JSON.stringify(selectedUser));

                        // Redirect to profile.html
                        window.location.href = "profile.html";
                    }
                });
            });
        } else {
            const noResult = document.createElement("p");
            noResult.textContent = "No user found.";
            searchResultsContainer.appendChild(noResult);
        }
    });

    // Hide search results when clicking outside the search bar
    document.addEventListener("click", function (event) {
        if (!searchInput.contains(event.target) && !searchResultsContainer.contains(event.target)) {
            searchResultsContainer.classList.remove("active");
        }
    });
});