let container = document.querySelector(".container");
let totalMinContainer = 3654;

let minContainer = "";

for (let i = 0; i < totalMinContainer; i++) {
  minContainer = document.createElement("div");
  minContainer.className = "min-card";
  container.appendChild(minContainer);

  /*
       minContainer.addEventListener('mousemove', function(){

           minContainer.style.backgroundColor = (`rgb(${r},${g},${b})`);

       })
       */
}

let allMinContainer = document.querySelectorAll(".min-card");
//console.log(allMinContainer.length);

for (let j = 0; j < allMinContainer.length; j++) {
  allMinContainer[j].addEventListener("mousemove", function () {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    allMinContainer[j].style.backgroundColor = `rgb(${r},${g},${b})`;
    /*
    allMinContainer[j].style.boxShadow = ` 0 0 20px rgb(${r},${g},${b}), 0 0 30px rgb(${r},${g},${b}),
    0 0 40px rgb(${r},${g},${b}), 0 0 50px rgb(${r},${g},${b})`
    */
  });

  allMinContainer[j].addEventListener("mouseleave", function () {
    //allMinContainer[j].style.backgroundColor = `rgb(${53},${51},${51})`;
    allMinContainer[j].style.backgroundColor = `rgb(${9},${9},${54})`;
    allMinContainer[j].style.boxShadow = 'none'
    allMinContainer[j].style.transition = `5s`;
  });
}
