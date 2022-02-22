var card = document.querySelectorAll('.section-2-card');

for (var i = 0; i < card.length; i++) {
    var element = card[i]; 
    var newElement = document.createElement("button");
    element.appendChild(newElement)
    newElement.classList.add("delete");
    newElement.addEventListener('click', (e) => {
        e.target.parentElement.remove();
        
    })
  }

