var pics = [
    "lightbulb.jpg",
    "lungs.jpg",
    "oliveyou.jpg",
    "pizzayou2.jpg",
    "tomato2.JPG",
    "whisk.jpg",
    "yodaone.png",
    "Capture1.JPG",
    "yellow-octopus-valentines-day-puns-1.jpg"
    

    ];
    
    var btn = document.querySelector("button");
    var img = document.querySelector("img");
    var counter = 0;
    btn.addEventListener("click", function(){
     if(counter === 9){
         counter = 0;
     }
     img.src = pics [counter]
     counter = counter + 1;
    
    
    });