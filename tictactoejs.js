let buttons=document.querySelectorAll(".btns");
let value=true;
let result=document.querySelector(".result");
let count=0;
let winnerPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
buttons.forEach(button => {                         //ye for each funtion ka use kia kyuki bhai saare classes ko ek baar me access to kr skte h but ek sath unme changes nahi kr skte ..... uske liye ye for each se ek ek element ko change kia smjha naa
    button.addEventListener("click", () => {
        if(value)
        {
            console.log("O aana tha bhai");
            button.innerText="O";
            value=false;
            count++;
        }
        else
        {
            console.log("X aana tha bhai");
            button.innerText="X";
            value=true;
            count++;
        }
        button.disabled=true;
        checkWinner();
    });
});


    checkClick=() => {
        if(count===9)
        {
            console.log("draw");
            result.innerText="Game Draw !! Press Reset Button to Play Again";
            result.classList.add("winning");
        }
        console.log(count);
    }



checkWinner = () => {
    for(let check of winnerPattern)
    {
        let pos1Val=buttons[check[0]].innerText;
        let pos2Val=buttons[check[1]].innerText;
        let pos3Val=buttons[check[2]].innerText;
        
        if(pos1Val!=="" && pos2Val!=="" && pos3Val!=="")
        {
            if(pos1Val===pos2Val && pos2Val===pos3Val)
            {
                console.log("Winner");
                result.classList.add("winning");
                result.innerText=`Congratulations Winner is ${pos1Val}`;
                disablefunc();
            }
            else
            {
                checkClick();
            }
        }
    }
}





const disablefunc = () => {
    for(let butt of buttons)
    {
        butt.disabled=true;
    }
}

let resetbtn=document.querySelector(".resetbtn");

resetbtn.addEventListener("click", () => {
    for(let btns of buttons)
    {
        btns.disabled=false;
        btns.innerHTML="";
        result.classList.remove("winning");
    }
})