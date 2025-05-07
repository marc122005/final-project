document.addEventListener("DOMContentLoaded", () => {
    const postsContainer = document.querySelector(".posts-container");
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const userProfile = JSON.parse(localStorage.getItem("userProfile")); // Get user profile data

    posts.forEach((post, index) => {
        const postCard = document.createElement("div");
        postCard.classList.add("post-card", "position-relative");
        postCard.innerHTML = `
        <button class="btn-close position-absolute top-0 end-0 m-2" aria-label="Close" onclick="deletePost(${index})"></button>
        <div class="post-header">
          <a href="#">
            <img src="${post.profilePicture || 'img/av1.png'}" alt="User Avatar" class="avatar">
            <div>
              <h3 class="username">${post.username || 'Anonymous'}</h3>
              <p class="time">${post.time}</p>
            </div>
          </a>
        </div>
        <div class="post-content">
          <h4 class="text-white">${post.title}</h4>
          <p>${post.content}</p>
          ${post.image
                ? `<img src="${post.image}" alt="Post Image" class="post-image">`
                : ""
            }
        </div>
        <div class="post-footer">
          <button class="btn btn-light" onclick="likePost(${index})">
            <i class="fa-solid fa-heart mx-2"></i><span id="like-count-${index}">${post.likes || 0}</span>
          </button>
          <button class="btn btn-light" onclick="toggleCommentSection(${index})">
            <i class="fa-solid fa-comments mx-2"></i><span id="comment-count-${index}">${post.comments?.length || 0}</span>
          </button>
          <button class="btn btn-light"><i class="fa-solid fa-share mx-2"></i>Share</button>
        </div>
        <div class="comment-section" id="comment-section-${index}" style="display: none;">
          <div class="comments">
            ${post.comments?.map((comment) => `<p>${comment}</p>`).join("") || ""}
          </div>
          <div class="comment-input mt-2">
            <input type="text" class="form-control" id="comment-input-${index}" placeholder="Write a comment...">
            <button class="btn btn-primary mt-2" onclick="addComment(${index})">Post Comment</button>
          </div>
        </div>
      `;
        postsContainer.prepend(postCard); // Use prepend instead of appendChild
    });
});

function likePost(index) {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts[index].likes = (posts[index].likes || 0) + 1;
    localStorage.setItem("posts", JSON.stringify(posts));
    document.getElementById(`like-count-${index}`).textContent =
        posts[index].likes;
}

function toggleCommentSection(index) {
    const commentSection = document.getElementById(`comment-section-${index}`);
    commentSection.style.display =
        commentSection.style.display === "none" ? "block" : "none";
}

function addComment(index) {
    const commentInput = document.getElementById(`comment-input-${index}`);
    const commentText = commentInput.value.trim();
    if (!commentText) return;

    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts[index].comments = posts[index].comments || [];
    posts[index].comments.push(commentText);
    localStorage.setItem("posts", JSON.stringify(posts));

    const commentSection = document.getElementById(`comment-section-${index}`);
    const commentsDiv = commentSection.querySelector(".comments");
    commentsDiv.innerHTML += `<p>${commentText}</p>`;

    const commentCount = document.getElementById(`comment-count-${index}`);
    commentCount.textContent = posts[index].comments.length;

    commentInput.value = "";
}

function deletePost(index) {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.splice(index, 1); // Remove the post at the specified index
    localStorage.setItem("posts", JSON.stringify(posts)); // Update localStorage
    window.location.reload(); // Refresh the page to reflect changes
}

function submitPost(event) {
    event.preventDefault();

    // Get form values
    const title = document.getElementById("postTitle").value;
    const content = document.getElementById("postContent").value;
    const image = document.getElementById("postImage").value;

    // Get user profile data
    const userProfile = JSON.parse(localStorage.getItem("userProfile"));

    // Create a new post object with likes and comments
    const newPost = {
        username: userProfile?.username || "Anonymous",
        profilePicture: userProfile?.profilePicture || "img/av1.png",
        title,
        content,
        image,
        time: new Date().toLocaleString(),
        likes: 0,
        comments: [],
    };

    // Save post data to localStorage
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(posts));

    // Redirect back to index.html
    window.location.href = "index.html";
}
