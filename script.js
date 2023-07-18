console.log("Welcomto MyTic Tac Toe..");
let bmusic = new Audio("");
let turnm = new Audio("ting.mp3");
let overm = new Audio("gameover.mp3");
let turn = "X";
let isgameOver = false;

//function to change the turn
const turnChange = () =>{
    return turn === "X"? "0": "X"
}

//function for check the winner 
const checkWinner = () =>{
    let boxtext = document.getElementsByClassName("boxtext")
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=="") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText  + ' Won';
            isgameOver = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            overm.play();
        }
    })
}

//Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(Element =>{
    let boxtext = Element.querySelector(".boxtext")
    Element.addEventListener('click', () =>{
        if(boxtext.innerHTML === ""){
            boxtext.innerHTML = turn;
            turn = turnChange();
            turnm.play();
            checkWinner();
            if (!isgameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn for " +turn;
                
            }
        }
    })
})

// Logic for Reset Button 
reset.addEventListener('click',() =>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(Element =>{
        Element.innerText = ""
    });
    isgameOver = false;
    turn = "X"
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

})