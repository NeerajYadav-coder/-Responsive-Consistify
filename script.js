const listcontainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");
const btnEvent = document.querySelector("button");

const addTask = () => {
  if (inputBox.value === "") {
    alert("Pls add your task");
  } else {
    let task = document.createElement("li");
    task.textContent = inputBox.value;
    listcontainer.appendChild(task);

    let span = document.createElement("span");
    span.textContent = " \u00d7";
    task.appendChild(span);
  }
  inputBox.value = "";
  savedata();
};

btnEvent.addEventListener("click", addTask);

listcontainer.addEventListener("click", (el) => {
  if (el.target.tagName == "LI") {
    el.target.classList.toggle("checked");
    savedata();
  } else if (el.target.tagName == "SPAN") {
    el.target.parentElement.remove();
    savedata();
  }
});

const savedata = () => {
  localStorage.setItem("tasks", listcontainer.innerHTML);
};

const showdata = () => {
  listcontainer.innerHTML = localStorage.getItem("tasks");
};

showdata();
