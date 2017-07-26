document.addEventListener("DOMContentLoaded", function() {
  var slider = document.querySelectorAll(".slider .baner-body");
  var nextPicture = document.querySelector(".baner-next");
  var prevPicture = document.querySelector(".baner-prev");

  var counter = 0;

  slider[counter].classList.add("visible");

  nextPicture.addEventListener("click", function(e){

    slider[counter].classList.remove("visible");
    counter++;
    counter = counter >= slider.length ? 0 : counter; ////turnery operator
    slider[counter].classList.add("visible");
  })

  prevPicture.addEventListener("click", function(e){

    slider[counter].classList.remove("visible");
    counter--;
    counter = counter < 0 ? slider.length-1 : counter; //turnery operator
    slider[counter].classList.add("visible");
  })

});
