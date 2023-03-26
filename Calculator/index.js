

let buttons = document.querySelectorAll('.btn')
let str = "";

let a = Array.from(buttons)

console.log(a)


Array.from(buttons).forEach(button =>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == "="){
            str = eval(str)
            document.querySelector(".screen").value = str
        }else if(e.target.innerHTML == "C"){
            str = ""
            document.querySelector(".screen").value = ""
        }else if(e.target.innerHTML == "AC"){
            let temp = Array.from(str)
            temp.pop()
            str = temp.join("")
            document.querySelector('.screen').value = str;
        }else{
            str = str + e.target.innerHTML
            document.querySelector(".screen").value = str
        }
    })
})