document.getElementById("change").onclick = () => {
  document.getElementById("demo").textContent = "Text changed!";
};

document.getElementById("form").onsubmit = (e) => {
  e.preventDefault();
  document.getElementById("msg").textContent = "Message sent!";
};
