const card1 = document.querySelector(".card1");
const hover = document.querySelector(".hover");
const card2 = document.querySelector(".card2");
const hover2 = document.querySelector(".hover2");
//Items
const toolimg = document.querySelector(".toolimg");
const toolimg2 = document.querySelector(".toolimg2");

//Moving Animation Event
hover.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card1.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
hover.addEventListener("mouseenter", (e) => {
  card1.style.transition = "none";
  //Popout
  toolimg.style.transform = "translateZ(150px)";
  toolimg.style.transition = "all 0.5s ease";
  //toolimg.style.transform = "translateZ(200px) rotateZ(-45deg)";
});
//Animate Out
hover.addEventListener("mouseleave", (e) => {
  card1.style.transition = "all 0.5s ease";
  card1.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  toolimg.style.transform = "translateZ(0px)";
  toolimg.style.transition = "all 0.5s ease";
  //toolimg.style.transform = "translateZ(0px) rotateZ(0deg)";
  
});
///Animation for card 2
hover2.addEventListener("mousemove", (e) => {
  let xAxis = (hover.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (hover.innerHeight / 2 - e.pageY) / 25;
  card2.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
hover2.addEventListener("mouseenter", (e) => {
  card1.style.transition = "none";
  //Popout
  toolimg2.style.transform = "translateZ(200px)";
  toolimg2.style.transition = "all 0.5s ease";
  //toolimg.style.transform = "translateZ(200px) rotateZ(-45deg)";
});
//Animate Out
hover2.addEventListener("mouseleave", (e) => {
  card2.style.transition = "all 0.5s ease";
  card2.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  toolimg2.style.transform = "translateZ(0px)";
  toolimg2.style.transition = "all 0.5s ease";
  //toolimg.style.transform = "translateZ(0px) rotateZ(0deg)";
  
});
