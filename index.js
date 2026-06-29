const send = document.querySelector("#send-btn");
const chatBox = document.querySelector(".chat-message");
const chatContent = document.querySelector(".chat-content");
const input = document.querySelector("#input");

send.addEventListener("click", function() {
    const div = document.createElement('div');
    const p = document.createElement("p");
    const i = document.createElement("span");
    if (input.value !== "") {
        div.style.display = "flex";
        div.style.justifyContent = "end";
        p.classList.add("message");
        p.classList.add("message-sent");
        i.classList.add("identifier");
        i.textContent = "You"
        p.appendChild(i);
        p.appendChild(document.createTextNode(input.value));
        div.appendChild(p);
        chatBox.appendChild(div)
    } else {
        return;
    }
    input.value = "";
    input.focus();
    scrollToBottom()

})

window.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        send.click();
    }
});

window.addEventListener("keydown", function(e) { 
    if (e.key === "Enter" && e.shiftKey) {
        input.value = input.value + " \n";
    }
});

function scrollToBottom() {
    chatContent.scrollTop = chatContent.scrollHeight;
  }