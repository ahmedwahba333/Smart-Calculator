var mainBtns = document.querySelectorAll(".mainBtn");
var result = document.querySelector(".result");

mainBtns.forEach((e)=>{
        e.addEventListener('click',(a)=>{
           result.innerHTML += (a.target.dataset.btn);
        })
})

var equal = document.querySelector(".equal");

equal.addEventListener("click",()=>{
    result.innerHTML = eval(result.innerHTML)
})

var remove = document.querySelector(".remove")

remove.addEventListener("click",()=>{
    result.innerHTML = ("")
})

