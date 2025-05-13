document.getElementById("poll-form").addEventListener("submit", function(event) {
    event.preventDefault(); // منع إرسال الفورم
    createPoll();
});

document.getElementById("add-option").addEventListener("click", function() {
    // إضافة حقل جديد لإدخال خيار
    const newOption = document.createElement("input");
    newOption.type = "text";
    newOption.classList.add("option");
    newOption.placeholder = "e.g. New Option";
    document.getElementById("options-container").appendChild(newOption);
});

let polls = []; // لتخزين الاستطلاعات

function createPoll() {
    const question = document.getElementById("question").value;
    const options = [...document.querySelectorAll(".option")].map(option => option.value).filter(option => option);

    if (!question || options.length < 2) {
        alert("Please enter a question and at least two options.");
        return;
    }

    const newPoll = {
        question: question,
        options: options.map(option => ({ text: option, votes: 0 })),
        id: Date.now()
    };

    polls.push(newPoll); // إضافة الاستطلاع إلى القائمة
    document.getElementById("poll-form").reset();
    renderPolls(); // تحديث عرض الاستطلاعات
}

function renderPolls() {
    const pollsList = document.getElementById("poll-list");
    pollsList.innerHTML = ""; // مسح الاستطلاعات القديمة

    polls.forEach(poll => {
        const pollElement = document.createElement("div");
        pollElement.classList.add("poll");
        pollElement.innerHTML = `
            <h4>${poll.question}</h4>
            <form class="poll-options-form" data-id="${poll.id}">
                ${poll.options.map((option, index) => `
                    <label>
                        <input type="radio" name="poll-${poll.id}" value="${index}"> ${option.text}
                    </label><br>
                `).join('')}
                <button type="button" onclick="submitVote(${poll.id})">Vote</button>
            </form>
            <div class="poll-results">
                ${poll.options.map((option, index) => `
                    <div>${option.text}: <span id="poll-${poll.id}-option-${index}-result">0%</span></div>
                `).join('')}
            </div>
        `;
        pollsList.appendChild(pollElement);
    });
}

function submitVote(pollId) {
    const poll = polls.find(p => p.id === pollId);
    const selectedOptionIndex = document.querySelector(`form[data-id="${pollId}"] input[name="poll-${pollId}"]:checked`);
    
    if (!selectedOptionIndex) {
        alert("Please select an option.");
        return;
    }

    const optionIndex = selectedOptionIndex.value;
    poll.options[optionIndex].votes += 1;

    // تحديث النتيجة
    renderPolls();
}

// تحديث عرض الاستطلاعات عند تحميل الصفحة
window.onload = renderPolls;
