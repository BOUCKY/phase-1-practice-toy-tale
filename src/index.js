let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

fetch("http://localhost:3000/toys")
  .then(function(response) {
    return response.json();
  })
  .then(function(data){
    renderToys(data)
  })

// new function-get array from DOM
function renderToys(toysArray) {
  console.log(toysArray)
  //forEach-go through each item in array and get info
  toysArray.forEach(function(toy) {
    console.log(toy)
    // create new element and new "physical" location
    const newCard = document.createElement("div")
      //moved to line 40
    //creating the location to append each toy to 
    const toyContainer = document.getElementById("toy-collection")
    // appending the new element to location
    toyContainer.append(newCard)
    //location for newName
    let newName = document.createElement("h2")
    //setting newName content to name of toy
    newName.textContent = toy.name
     //location for newName
    let newImg = document.createElement("img")
     //setting new image content to image of toy
     newImg = toy.image
     let newLikes = document.createElement("p")
     //setting newName content to name of toy
     newLikes.textContent = toy.newLikes
     //append info
     //let toyInfo = `${newName} ${newImg} ${newLikes}`
     //newCard.append(toyInfo)
     console.log(newCard)
  })
}
