var innertext;

function makeeditable() {
    innertext = document.getElementById("titletext").innerText;
    document.getElementById("titletextbox").children[0].value = innertext;
    document.getElementById("titletext").style.display = "none";
    document.getElementById("titletextbox").style.display = "block";
    document.getElementById("btnedit").style.display = "none";
    document.getElementById("btnsave").style.display = "block";

}

function save() {

}