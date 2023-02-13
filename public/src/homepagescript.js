const menu = document.querySelectorAll('.navbarLinks')

document.getElementById("downarrowbtnid").addEventListener("click", () => {
    document
      .getElementById("parallax-break-div")
      .scrollIntoView({ block: "start", behavior: "auto" });
  });
  
document.getElementById("totopsvg").addEventListener("click", () => {
    document
      .getElementById("categoriesaccordian")
      .scrollIntoView({ block: "center", behavior: "auto" });
  });
  
  // document.getElementById("burger").addEventListener("click", () => {
  //   document.getElementById("linksWrap").classList.toggle('burgeractive');
  //   menu.forEach((item) => {
  //     item.classList.toggle('active');
  //     item.classList.toggle('burgerMenuNav');
       
  //   })
  
  // });