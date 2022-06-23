//console.log("Client side javascript is loaded");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

// messageOne.textContent = "";

weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const location = search.value;

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  fetch("/weather?address=" + search.value).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.log(data.error);
        messageOne.textContent = data.error;
      } else {
        console.log(data.location);
        messageOne.textContent = data.location;
        console.log(data.forecast);
        messageTwo.textContent = data.forecast;
      }
    });
  });
});
