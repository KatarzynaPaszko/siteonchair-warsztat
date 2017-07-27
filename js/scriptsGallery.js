// Galerry

document.addEventListener("DOMContentLoaded", function() {

       var li = document.querySelectorAll(".gallery ul li");
       console.log(li);
       var body = document.querySelector(".gallery");

       for (var i = 0; i < li.length; i++) {
         li[i].addEventListener("click", function(e){
           console.log("jaja");
           var src = this.firstElementChild.firstElementChild.getAttribute("src");
           var div = document.createElement("div");
           div.classList.add("fullScreen");
           var img =document.createElement("img");
           img.setAttribute("src", src);

           var btn = document.createElement("button");
           btn.classList.add("close");
           btn.innerText="Zamknij";

           div.appendChild(img);
           div.appendChild(btn);


           body.appendChild(div);
           btn.addEventListener("click", function(e){
              body.removeChild(div);
            })
         });
       }
});
