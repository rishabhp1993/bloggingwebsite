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
    innertext = document.getElementById("titletext").innerText = innertext;
    document.getElementById("titletext").style.display = "block";
    document.getElementById("titletextbox").style.display = "none";
    document.getElementById("btnedit").style.display = "block";
    document.getElementById("btnsave").style.display = "none";
}