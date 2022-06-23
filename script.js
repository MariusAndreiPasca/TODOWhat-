

const input = document.getElementById("text");
const addBtn = document.getElementById("btn");
const list = document.getElementById("list");

let myToDo = "";

addBtn.addEventListener('click', (e) => {
    if(input.value != "") {
        e.preventDefault();

        const myList = document.createElement('li');
        myList.innerHTML = input.value;
        list.appendChild(myList);

        const mySpan = document.createElement('span');
        mySpan.innerHTML = 'X';
        myList.appendChild(mySpan);


    }
        const myDelete = document.querySelectorAll('span');
        for (let i = 0; i < myDelete.length; i++) {
            myDelete[i].addEventListener("click", () => {
                myDelete[i].parentElement.style.display = "none";
            })
        }
        const mySave = document.querySelectorAll('li');
        for (let i = 0; i < mySave.length; i++) {
            mySave[i].addEventListener("click", () => {
                mySave[i].removeAttribute;
            })
        }
        
input.value = "";
})





