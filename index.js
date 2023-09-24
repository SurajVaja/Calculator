let input = document.getElementById("input");
let print = (id) => {
  if (input.value.length >= 9) {
    input.style.fontSize = "35px";
  }
  input.value += id;
};
let CE = () => {
  input.value = "";
};
let res = () => {
  if (input.value.length <= 10) {
    input.style.fontSize = "50px";
  }
  let result = eval(input.value);
  input.value = result;
};
let back = () => {
  if (input.value.length <= 10) {
    input.style.fontSize = "50px";
  }
  let bk = input.value.slice(0, -1);
  input.value = bk;
};
