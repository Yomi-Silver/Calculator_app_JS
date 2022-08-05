//
// let result = document.getElementById("inputScreen");
let result = document.getElementById("inputScreen");

let action = (number) => {
  //   result.value += number;
  result.value = result.value + number;
};

let equals = () => {
  try {
    result.value = eval(result.value);
  } catch (error) {
    alert("error");
  }
};

function clearAll() {
  result.value = " ";
}

function del() {
  result.value = result.value.slice(0, -1);
  //   result.value = result.value.slice(0, -1);
}
