const buttonClick = document.getElementById("submit");

const colorChangeFun = () => {
  let code = "#";
  let value = "ABCDEF0123456789";
  for (let i = 0; i < 6; i++) {
    code = code + value[Math.floor(Math.random() * 16)];
  }
  return code;
};

function linkColor() {
  const colorchange = document.querySelector(".colorChangeArea");
  colorchange.style.backgroundColor = colorChangeFun();
}

buttonClick.addEventListener("click", linkColor);
