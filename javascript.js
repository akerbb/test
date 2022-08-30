let btn = document.createElement("button");
btn.innerHTML = "Submit";
btn.type = "submit";
btn.name = "formBtn";
document.body.appendChild(btn);

let btn = document.createElement("button");
btn.innerHTML = "Save";
btn.onclick = function () {
  alert("Button is clicked");
};
document.body.appendChild(btn);

let btn = document.createElement("button");
btn.innerHTML = "Save";
btn.addEventListener("click", function () {
  alert("Button is clicked");
});
document.body.appendChild(btn);