// let square = document.getElementById("square");
// console.log(square.style.left, square.style.top);

// document.addEventListener("keydown", (e) => {
//     console.log(e.key);
// });

document.addEventListener("keydown", (e) => { 

    if(e.key === "ArrowRight" && square.style.left !== "300px" ){
      square.style.left = parseInt(square.style.left)+10 + "px";
    } else{
      
    }
    if(e.key === "ArrowLeft" && square.style.left !== "0px"){
      square.style.left = parseInt(square.style.left)-10 + "px";
    }
    if(e.key === "ArrowUp" && square.style.top !== "0px"){
      square.style.top=parseInt(square.style.top)-10 +'px';
    }
    if(e.key === "ArrowDown" && square.style.top !== "300px"){
      square.style.top=parseInt(square.style.top)+10 +'px';
    }
});

square.addEventListener("click", () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  square.style.backgroundColor = "#" + randomColor;
})
