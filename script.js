const input = document.querySelector(".input");
const submit = document.querySelector(".search");
const container = document.querySelector(".container");
window.addEventListener('DOMContentLoaded', (event) => {
  fetch(`https://api.tvmaze.com/search/shows?q=games`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        html = `<div class="main">
    <img src="${data[i].show.image.medium}" />
    <h3><span>Name:</span>${data[i].show.name}</h3>
    <h4><span>Start date:</span>${data[i].show.premiered}</h4>
    <h4><span>Language:</span>${data[i].show.language}</h4>
    <a href="./show.html"id="${data[i].score}">Show more</a>
     <h2 </h2>  
     </div>`;
        container.innerHTML += html;
        container.addEventListener("click", (e) => {
          // console.log(e.target.id);
          if (e.target.id == data[i].score) {
            let datas = data[i];
            // console.log(datas);
            sessionStorage.setItem("transferdata", JSON.stringify(datas));
          }
        });
      }
    });
});

submit.addEventListener("click", () => {
  fetch(`https://api.tvmaze.com/search/shows?q=${input.value}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      container.innerHTML = null;
      for (let i = 0; i < data.length; i++) {
        html = `<div class="main">
    <img src="${data[i].show.image.medium}" />
    <h3><span>Name:</span>${data[i].show.name}</h3>
    <h4><span>Start date:</span>${data[i].show.premiered}</h4>
    <h4><span>Language:</span>${data[i].show.language}</h4>
    <a href="./show.html"id="${data[i].score}">Show more</a>
     <h2 </h2>  
     </div>`;
        container.innerHTML += html;
        container.addEventListener("click", (e) => {
          console.log("hai");
          if (e.target.id == data[i].score) {
            let datas = data[i];
            // console.log(datas);
            sessionStorage.setItem("transferdata", JSON.stringify(datas));
          }
        });
      }
    });
});
