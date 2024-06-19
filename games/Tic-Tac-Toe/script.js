const state = document.querySelector("h2")
let activegame = true 
let activeplayer = "X"
let game = ["","","","","","","","",""]
const  winconditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]



const winnertext = () => `${activeplayer} is the winner!`
const draw = () => "Draw"
const playerturn = () => `Player ${activeplayer} turn`
state.innerHTML = playerturn()

document.querySelectorAll(".tile").forEach(cell => cell.addEventListener("click",clicked))
document.querySelector("#rematch").addEventListener("click",rematch)    

function clicked(){
    const indextile = parseInt(this.dataset.index)
    if(game[indextile] !== "" || !activeplayer){
        return
    }
game[indextile] = activeplayer
this.innerHTML =activeplayer
  winner()
}

function winner(){
    let winturn = false
    for(let wincondition of winconditions){
        let a = game[wincondition[0]]
        let b = game[wincondition[1]]
        let c = game[wincondition[2]]
        if(a == "" || b=="" || c==""){continue}
        if(a == b && b==c){winturn = true;break;}


    }
    if(winturn){
        state.innerHTML = winnertext()
        activegame = false
        return
    }
    if(!game.includes("")){
        state.innerHTML = draw()
        activegame = false
        return
    }

    activeplayer = activeplayer ==="X" ? "O" : "X"
    state.innerHTML = playerturn()


}

function rematch(){
    activeplayer = "X"
    activegame = true
    game = ["","","","","","","","",""]
    state.innerHTML = playerturn()
    document.querySelectorAll(".tile").forEach(cell => cell.innerHTML="")
}



onclick = "hygiene"  
onclick = "selfcare"  
onclick = "lifestyle" 
onclick = "all" 

function hygiene() {
    
const selfcare = document.querySelectorAll('.selfcare');
const lifestyle = document.querySelectorAll('.lifestyle');

selfcare.forEach(element => {
  element.display = 'none';   });
lifestyle.forEach(element => {
    element.display = 'none';     });
    
}
   


function selfcare() {
const hygiene = document.querySelectorAll('.hygiene');
const lifestyle = document.querySelectorAll('.lifestyle');

hygiene.forEach(element => {
  element.display = 'none';   });
lifestyle.forEach(element => {
    element.display = 'none';     });
    
  
}


function lifestyle() {
const selfcare = document.querySelectorAll('.selfcare');
const hygiene = document.querySelectorAll('.hygiene');

selfcare.forEach(element => {
  element.dispaly = 'none';   });
hygiene.forEach(element => {
    element.display = 'none';     });
    

     
}

function all(){
    const selfcare = document.querySelectorAll('.selfcare');
const lifestyle = document.querySelectorAll('.lifestyle');
const hygiene = document.querySelectorAll('.hygiene');


selfcare.forEach(element => {
  element.textContent = 'flex';   });
lifestyle.forEach(element => {
    element.display = 'flex';     });
hygiene.forEach(element => {
    element.display = 'flex';     });
    

    
}





