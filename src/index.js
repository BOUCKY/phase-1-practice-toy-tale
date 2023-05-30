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
    // classList allows us to link newCard to css styling
    newCard.classList.add('card')
    //creating the location to append each toy to 
    const toyContainer = document.getElementById("toy-collection")
    // appending the new element to location
    toyContainer.append(newCard)
    //location for newName
    let newName = document.createElement("h2")
    //setting newName content to name of toy
    newName.textContent = toy.name
    //append newName to newCard
    newCard.append(newName)
     //location for newImg
    let newImg = document.createElement("img")
    // classList allows us to link newImg to toy-avatar styling
    newImg.classList.add('toy-avatar')
     //setting new image content to image of toy
     newImg.src = toy.image
     //append newImg to newCard
    newCard.append(newImg)
    //location ffor newLikes
     let newLikes = document.createElement("p")
     //setting newName content to name of toy
     newLikes.textContent = toy.likes
     //append newLikes to newCard
    newCard.append(newLikes)
     //append info
     //let toyInfo = `${newName} ${newImg} ${newLikes}`
     //newCard.append(toyInfo)
     // location for likes button
     let likeBtn = document.createElement("button")
     // create an event listener so the button actually adds likes
     // create an anonymous function that calls updateLikes and pass in the toy variable and newLikes so updateLikes knows about them outside this scope
    likeBtn.addEventListener('click', () => updateLikes(toy, newLikes))
     //set like button
    likeBtn.textContent = "Like ❤️"
    //append like button to card
    newCard.append(likeBtn)
     console.log(newCard)
  })
}

// get the like button to like toys
// pass in toy object and p to get info
function updateLikes(toy, p){
  //increments likes
  toy.likes++
  //sets the p containg number of likes to the new number of likes
  p.textContent = toy.likes
  console.log(toy, p)
 }
