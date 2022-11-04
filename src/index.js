

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
let breeds;
console.log(breeds);
fetch(imgUrl)
.then((res) => res.json())
.then((dogImageData) => appendImages(dogImageData.message));

function appendImages(dogImages){

    dogImages.forEach(image => {
        const imgContainer = document.querySelector("div");
        // yak image element misazim
        const img = document.createElement('img') // this s a blnk elmnt
    // we need to connect it to our url whic is going to be src atrbt
      img.src = image;
      // img.alt = image for accessiblity
      //append image to the dom
      imgContainer.appendChild(img);

    })
}

fetch(imgUrl)
.then((response) => response.json())
.then((breedData) =>{
  breeds = Object.keys(breedData.message);
     renderBreeds(breeds)
});
const ul = document.querySelector("ul");
function renderBreeds(breeds){
    console.log(breeds);

    for(let breed of breeds) {
   const li = document.createElement("li");
   li.textContent = breed;
   li.addEventListener("click", (e)=>{
    // console.log(e.target);
    // debugger
    e.target.style.color = 'red';
   });
   ul.appendChild(li);
    }
    }
     
    const dropdown = document.querySelector('select');

    dropdown.addEventListener("change", filterBreeds);

    function filterBreeds(event){
        let letter = event.target.value;
        console.log(breeds);

        let filterbreeds = breeds.filter((breed)=> {
            return breed[0] === letter;
        });
        console.log(filterBreeds);
        ul.innerHTML = "";
    }

