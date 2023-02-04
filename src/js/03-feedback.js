import { throttle } from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener("input", function(event) {
  localStorage.setItem(
    "feedback-form-state",
    JSON.stringify({
      email: emailInput.value,
      message: messageInput.value
    })
  );
});

window.addEventListener("load", function() {
  const savedState = JSON.parse(
    localStorage.getItem("feedback-form-state") || "{}"
  );
  emailInput.value = savedState.email || "";
  messageInput.value = savedState.message || "";
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  localStorage.removeItem("feedback-form-state");
  console.log({
    email: emailInput.value,
    message: messageInput.value
  });
  emailInput.value = "";
  messageInput.value = "";
});

