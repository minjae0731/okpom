function sans() {
    const body = document.querySelector("body");
    const html = document.querySelector("html");
  
    body.innerHTML =
      "<iframe src='https://jcw87.github.io/c2-sans-fight/' style='width:100%;height:100%;overflow:hidden;'>";
  
    body.style.width = "100%";
    body.style.height = "100%";
    html.style.width = "100%";
    html.style.height = "100%";
  
    setTimeout(() => {
      const iframe = document.querySelector("iframe");
      iframe.style.border = "none";
      iframe.focus();
    }, 1000);
  }