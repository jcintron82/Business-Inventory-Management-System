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
  