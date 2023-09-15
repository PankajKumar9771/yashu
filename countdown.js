const enddate = "17 Sep 2023";
document.getElementById("enddate").innerHTML = enddate;
const inputs = document.querySelectorAll("input");
clock = () => {
  const end = new Date(enddate);
  const now = new Date();
  const diff = (end - now) / 1000;

  inputs[0].value = Math.floor(diff / 3600 / 24);
  inputs[1].value = Math.floor(diff / 3600) % 24;
  inputs[2].value = Math.floor(diff / 60) % 60;
  inputs[3].value = Math.floor(diff) % 60;
};
clock();
setInterval(() => {
  clock();
}, 1000);
