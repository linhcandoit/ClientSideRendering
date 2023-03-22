const form = document.querySelector("form");
const button = document.querySelector("form button");
const body = document.querySelector("body");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  fetch("/api/ninja")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const article = document.createElement("article");
      article.innerText = data.name;
      body.append(article);
    });
});
