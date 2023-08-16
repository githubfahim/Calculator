let inpout = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            inpout.value = string;
        }

        else if (e.target.innerHTML == 'AC'){
            string = "";
            inpout.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            inpout.value = string;
        }
        else{
            string += e.target.innerHTML;
            inpout.value = string;
        }
        
    })
} )