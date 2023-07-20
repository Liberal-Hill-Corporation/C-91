function submit(){
    var player1 = document.getElementById("p1input").value;
    var player2 = document.getElementById("p2input").value;

    localStorage.setItem("Player 1",player1);
    localStorage.setItem("Player 2",player2);

    window.location = "game.html";
}