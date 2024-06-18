var numselected = null;
var titeleselecte = null;

var errors = 0;
var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
];

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
];
window.onload = function () {
    setGame();
}
function setGame() {
    for (let i = 0; i <= 9; i++) {
        let number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        number.addEventListener("click", numberSelected)
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.addEventListener("click",selectTile);
            if(board[r][c]!= "-"){
                tile.innerHTML= board[r][c];
                tile.classList.add("tile_number");
            }
            if(r== 2|| r==5){
                tile.classList.add("horizontal_line")
            }
            if(c== 2|| c==5){
                tile.classList.add("vertical_line")
            }
            tile.classList.add("tile");
            document.getElementById("board").appendChild(tile);
        }
    }
}
function numberSelected() {
    if (numselected != null) {
        numselected.classList.remove("number_selected");
    }
    numselected = this;
    numselected.classList.add("number_selected");
}
function selectTile(){
    if(numselected){
        if(this.innerText != ""){
            return;
        }
        
        let coards=this.id.split("-");
        let r=parseInt(coards[0]);
        let c=parseInt(coards[1]);
        if(solution[r][c]== numselected.id){
            this.innerText=numselected.id;
        }else{
            errors += 1;
            document.getElementById("errors").innerText=errors;
        }
    }
}