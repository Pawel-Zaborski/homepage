{
  const toggleBackround = () => {
    const button = document.querySelector(".button");
    const body = document.querySelector(".body");
    const themeName = document.querySelector(".themeName");

    button.addEventListener("click", () => {
      body.classList.toggle("dark");

      if (body.classList.contains("dark")) {
        themeName.innerText = "jasny";
      } else {
        themeName.innerText = "ciemny";
      }
    });
  };
  toggleBackround();
}
