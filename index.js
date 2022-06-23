var pageNumber = 1;

async function getAll() {
  try {
    let res = await fetch(
      `https://api.unsplash.com/photos/?client_id=5-Zn9Ve50ZTGUw5OZYXRwpNl1GlbVDTCVuCm9D_jcfg&per_page=20&page=${pageNumber}`
    );
    let data = await res.json();
    console.log(data);
    show(data);
  } catch (error) {
    console.log(error.message);
  }
}
getAll();

function show(images) {
  const container = document.querySelector("#container");
  images.forEach((e) => {
    let div = document.createElement("div");
    div.style.width = "200px";
    div.style.padding = "20px";
    div.style.paddingBottom = "10px";

    let img = document.createElement("img");
    img.src = e.urls.small;

    let name = document.createElement("h3");
    name.innerText = e.user.first_name;
    name.style.color = "white";
    name.style.textAlign = "center";

    let Info = document.createElement("div");
    Info.style.display = "flex";
    Info.style.justifyContent = "spaceBetween";

    let like = document.createElement("p");
    like.innerText = "likes" + " " + e.likes;
    like.style.textAlign = "center";
    like.style.color = "white";
    // Info.append(like)

    div.append(img, name, like);
    container.append(div);
  });
}
//Infinite scroll code starts from here
function showData(){
  setTimeout(()=>{
    pageNumber++;
    getAll()
  },50)

}

window.addEventListener("scroll",()=>{
  const {scrollHeight,scrollTop,clientHeight}=document.documentElement;
  if(scrollTop+clientHeight+20>=scrollHeight){
    showData();
  }
})

// Infinite Scroll ends above