const input = document.querySelector(".input");
const submit = document.querySelector(".search");
const container = document.querySelector(".container");

submit.addEventListener("click", () => {
  fetch(`https://api.tvmaze.com/search/shows?q=${input.value}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        html = `<div class="main">
    <img src="${data[i].show.image.medium}" />
    <h3>Name:${data[i].show.name}</h3>
    <h4>Start date:${data[i].show.premiered}</h4>
    <h4>Language:${data[i].show.language}</h4>
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
