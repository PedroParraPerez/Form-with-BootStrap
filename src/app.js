import "./style.css";

const MyForm = document.querySelector("#formulario");

MyForm.addEventListener("Submit", v => {
  v.preventDefault();
  alert("se");
});
