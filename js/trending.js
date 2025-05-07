document.addEventListener("DOMContentLoaded", () => {
    const trends = [
      {
        title: "#MessiReturns",
        desc: "85K mentions",
        category: "sports",
        img:"img/messi.jpg"
      },
      {
        title: "#FashionWeekParis",
        desc: "120K mentions",
        category: "fashion",
        img: "img/fashion.jpg"
      },
      {
        title: "#MusicVibes",
        desc: "45K mentions",
        category: "music",
        img: "img/musicvibes.jpg"
      },
      {
        title: "#RonaldoSkills",
        desc: "102K mentions",
        category: "sports",
        img: "img/ronaldo.jpg"
      },
      {
        title: "#StreetStyleQueen",
        desc: "89K mentions",
        category: "fashion",
        img: "img/streetstyle.jpg"
      },
      {
        title: "#MusicBeats",
        desc: "67K mentions",
        category: "music",
        img: "img/music.jpg"
      }
    ];
  
    const trendingList = document.getElementById("trendingList");
    const categoryLinks = document.querySelectorAll(".category-link");
  
    function renderTrends(filter = "all") {
      trendingList.innerHTML = "";
      const filtered = filter === "all" ? trends : trends.filter(t => t.category === filter);
  
      filtered.forEach(trend => {
        const trendItem = document.createElement("div");
        trendItem.className = "trend-item";
        trendItem.innerHTML = `
          <img src="${trend.img}" alt="${trend.title}">
          <div>
            <h3>${trend.title}</h3>
            <p>${trend.desc}</p>
            <div class="reactions">
              <button class="vote-up">⬆ <span class="vote-count">0</span></button>
              <button class="vote-down">⬇ <span class="vote-count">0</span></button>
              <button class="like-btn">❤</button>
              <button class="comment-btn">💬</button>
              <div class="comments-section hidden">
                <input type="text" placeholder="Write a comment..." class="comment-input" />
              </div>
            </div>
          </div>
        `;
        trendingList.appendChild(trendItem);
      });
  
      attachListeners();
    }
  
    function attachListeners() {
      document.querySelectorAll(".like-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          btn.style.color = btn.style.color === "red" ? "#000" : "red";
        });
      });
  
      document.querySelectorAll(".comment-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const section = btn.parentElement.querySelector(".comments-section");
          section.classList.toggle("hidden");
        });
      });
  
      document.querySelectorAll(".comment-input").forEach(input => {
        input.addEventListener("keydown", e => {
          if (e.key === "Enter" && input.value.trim() !== "") {
            const commentText = input.value.trim();
            const comment = document.createElement("p");
            comment.className = "user-comment";
            comment.textContent = commentText;
            input.parentElement.appendChild(comment);
            input.value = "";
          }
        });
      });
  
      document.querySelectorAll(".vote-up").forEach(btn => {
        let count = 0;
        btn.addEventListener("click", () => {
          count++;
          btn.querySelector(".vote-count").textContent = count;
          btn.style.color = "#0079d3";
        });
      });
  
      document.querySelectorAll(".vote-down").forEach(btn => {
        let count = 0;
        btn.addEventListener("click", () => {
          count++;
          btn.querySelector(".vote-count").textContent = count;
          btn.style.color = "#ff4500";
        });
      });
    }
  
    categoryLinks.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        categoryLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
        const filter = link.getAttribute("data-type");
        renderTrends(filter);
      });
    });
  
    document.getElementById("refreshBtn").addEventListener("click", () => {
      const current = document.querySelector(".category-link.active").getAttribute("data-type");
      renderTrends(current);
    });
  
    setInterval(() => {
      const current = document.querySelector(".category-link.active").getAttribute("data-type");
      renderTrends(current);
    }, 60000);
  
    document.getElementById("toggleSidebar").addEventListener("click", () => {
      document.getElementById("sidebar").classList.toggle("collapsed");
    });
  
    renderTrends();
  });