// const apikey = "_DDIVJSgdK-GI1wA3aHOtxC9YTt8tCY6-4jMk7guznY";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apikey}&count=30`;

console.log(apiUrl);

async function fetchData(){
  let repsonse = await fetch(apiUrl)
  let data = await repsonse.json();

  // console.log(data);
  let box = document.querySelector(".box");
  // console.log(box);
  data.forEach(photo => {
    let img = document.createElement("img");
    img.className.add = "images";
    img.src = photo.urls.regular;
    img.style.height = "250px";
    img.style.widthht = "250px";
    box.appendChild(img);
  });
  // console.log(box);

}
fetchData();
window.addEventListener("scroll", () => {
  if(this.window.scrollY + this.window.innerHeight >= this.document.body.offsetHeight ){
    fetchData();
  }
})