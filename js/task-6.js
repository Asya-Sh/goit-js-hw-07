function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  }

  const refs = {
    input: document.querySelector("#controls>input"),
    createBtn: document.querySelector("[data-create]"),
    destroyBtn: document.querySelector("[data-destroy]"),
    box: document.querySelector("#boxes")
}

const elements = [];

refs.createBtn.addEventListener('click', onCreateBtnClick);
refs.destroyBtn.addEventListener('click', onDestroyBtnClick);

function onCreateBtnClick() {

  const num = refs.input.value; 

    if (num < 1 || num > 100) return alert("The number must be between 1 and 100");

    onDestroyBtnClick();

    let divArr = renderBoxes(+num);

    refs.box.prepend(...divArr);
}

 
function renderBoxes(num) {
    
        const divArr = [];
        let pixel = 20;

    for (let i = 1; i <= num; i++) {
        pixel += 10;
        const elem = document.createElement("div");
        elem.style.backgroundColor = getRandomHexColor();
        elem.style.width = `${pixel}px`;
        elem.style.height = `${pixel}px`;
        divArr.push(elem);
    
    };
    return divArr;
}

function onDestroyBtnClick() {
    refs.box.innerHTML = "";
    refs.input.value = "";
}