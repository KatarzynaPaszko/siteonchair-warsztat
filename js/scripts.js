// slider - zmiana slidera po wcisnieciu przycisku

document.addEventListener("DOMContentLoaded", function() {
  var slider = document.querySelectorAll(".slider .baner-body");
  var nextPicture = document.querySelector(".baner-next");
  var prevPicture = document.querySelector(".baner-prev");
  var sum = 0;

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

// Kalkulator - Formularz - skomponuj swoje krzeslo

 var listArrow = document.querySelectorAll(".list_arrow");
 var form = document.querySelector(".form");
 var summaryPanel = document.querySelector(".summary_panel");
 var sum =0;
 var toPay = 0;

 var titlePrice = document.querySelectorAll(".form .drop_down_list .list_panel li")

 for (var i = 0; i < listArrow.length; i++) {
    listArrow[i].addEventListener("click", function(e){
      this.nextElementSibling.style.display = "block";

      var choice = this.nextElementSibling.querySelectorAll("li");

      for (var j = 0; j < choice.length; j++) {
         choice[j].addEventListener("click", function(e){
           var selected = this.innerText;
           var toFillIn = this.parentElement.parentElement.firstElementChild;
           toFillIn.innerHTML = selected;
           toFillIn.style.color = "#5b5a5a";
           this.parentElement.style.display="none";

           if (form.children[0].firstElementChild.innerText!="Wybierz rodzaj") {
             var selectedTitle = summaryPanel.firstElementChild.firstElementChild;
             selectedTitle.innerText = form.children[0].innerText;

             for (var i = 0; i < titlePrice.length; i++) {
                 if (titlePrice[i].outerText==selectedTitle.innerText) {
                   summaryPanel.children[1].firstElementChild.innerText=titlePrice[i].getAttribute("data-price");
                 }
             }
           }

           if (form.children[1].firstElementChild.innerText!="Wybierz kolor") {
             var selectedColor = summaryPanel.firstElementChild.children[1];
             selectedColor.innerText=form.children[1].innerText;

             for (var i = 0; i < titlePrice.length; i++) {
                 if (titlePrice[i].outerText==selectedColor.innerText) {
                   summaryPanel.children[1].children[1].innerText=titlePrice[i].getAttribute("data-price");
                 }
             }
           }

           if (form.children[2].firstElementChild.innerText!="Wybierz materiał") {
             var selectedFabric = summaryPanel.firstElementChild.children[2];
             selectedFabric.innerText=form.children[2].innerText;

             for (var i = 0; i < titlePrice.length; i++) {
                 if (titlePrice[i].outerText==selectedFabric.innerText) {
                   summaryPanel.children[1].children[2].innerText=titlePrice[i].getAttribute("data-price");
                 }
             }
           }

           sum = parseInt(summaryPanel.children[1].children[0].innerText) +
                 parseInt(summaryPanel.children[1].children[1].innerText) +
                 parseInt(summaryPanel.children[1].children[2].innerText) +
                 parseInt(summaryPanel.children[1].children[3].innerText);
           toPay = summaryPanel.children[3].firstElementChild;
           toPay.innerText=sum;
         })
       }
    })
  }

  var checkBox = document.querySelector(".form .check-box");

  checkBox.addEventListener("click", function(e){
    if (document.getElementById("transport").checked) {
      console.log("checked");
        summaryPanel.children[1].children[3].innerText=form.children[3].children[0].getAttribute("data-price");
        summaryPanel.children[0].children[3].innerText="Transport";
    } else if (document.getElementById("transport").checked==false) {
      summaryPanel.children[1].children[3].innerText = 0;
    }

    sum = parseInt(summaryPanel.children[1].children[0].innerText) +
          parseInt(summaryPanel.children[1].children[1].innerText) +
          parseInt(summaryPanel.children[1].children[2].innerText) +
          parseInt(summaryPanel.children[1].children[3].innerText);
    toPay = summaryPanel.children[3].firstElementChild;
    toPay.innerText=sum;

  })
