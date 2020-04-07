window.onload = () => {
  var toggle = document.getElementById("chk");

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      document.documentElement.style.setProperty("--bg", "hsl(230, 17%, 14%)");
      document.documentElement.style.setProperty(
        "--bg-p",
        "hsl(232, 19%, 15%)"
      );
      document.documentElement.style.setProperty(
        "--card-bg",
        "hsl(228, 28%, 20%)"
      );
      document.documentElement.style.setProperty("--h1", "white");
      document.documentElement.style.setProperty(
        "--span",
        "hsl(228, 34%, 66%)"
      );
    } else {
      document.documentElement.style.setProperty("--bg", "white");
      document.documentElement.style.setProperty(
        "--card-bg",
        "hsl(227, 47%, 96%)"
      );
      document.documentElement.style.setProperty("--h1", "black");
      document.documentElement.style.setProperty(
        "--span",
        "hsl(228, 12%, 44%)"
      );
    }
  });
};
