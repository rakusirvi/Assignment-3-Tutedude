const boxes = document.getElementsByClassName("box");

const onclick0 = () => {
  boxes[0].style.backgroundColor = "red";
};

const onclick1 = () => {
  boxes[1].style.backgroundColor = "blue";
};
const onclick2 = () => {
  boxes[2].style.backgroundColor = "green";
};
const onclick3 = () => {
  boxes[3].style.backgroundColor = "yellow";
};

function get_text() {
  const text = document.getElementById("text").value;
  console.log("Your text is :", text);
  const greeting_text = ", " + text;
  document.getElementById("Greet").innerHTML = greeting_text;
}
