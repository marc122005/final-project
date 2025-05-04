function toggleChat() {
    const chat = document.getElementById("chatSidebar");
    chat.style.display = chat.style.display === "flex" ? "none" : "flex";
  }

  function sendMessage() {
    const input = document.getElementById("chatInput");
    const msg = input.value.trim();
    if (msg) {
      const chatBox = document.getElementById("chatMessages");
      const div = document.createElement("div");
      div.textContent = "🧑‍💬 " + msg;
      chatBox.appendChild(div);
      chatBox.scrollTop = chatBox.scrollHeight;
      input.value = "";
    }
  }

  function openShareWindow() {
    window.open(
      'about:blank',
      'shareWindow',
      'width=400,height=400,top=200,left=400'
    ).document.write(`
      <h2 style="font-family: Tahoma;">مشاركة المنشور</h2>
      <textarea style="width:90%;height:100px;margin-bottom:10px;"></textarea><br>
      <button onclick="alert('تمت المشاركة بنجاح!')">مشاركة</button>
    `);
  }