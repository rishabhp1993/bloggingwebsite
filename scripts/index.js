// Get the modal
var modal1 = document.getElementById("modalsignup");

var modal2 = document.getElementById("modalsignin");

var modal3 = document.getElementById("modalcreatepost");

// Get the button that opens the modal
var btnsignup = document.getElementById("btnopensignupmodal");

var btnsignin = document.getElementById("btnopensigninmodal");

var btncreatepost = document.getElementById("btncreatepost");

// Get the <span> element that closes the modal
var span1 = document.getElementById("btnclose1");
var span2 = document.getElementById("btnclose2");
var span3 = document.getElementById("btnclose3");

// When the user clicks the button, open the modal 
btnsignup.onclick = function() {
    modal1.style.display = "block";
}
btnsignin.onclick = function() {
    modal2.style.display = "block";
}
btncreatepost.onclick = function() {
    modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}
span3.onclick = function() {
    modal3.style.display = "none";
}

//On signup click
lnksignup.onclick = function() {
    document.getElementById('modalsignup').style.display = 'block';
    document.getElementById('modalsignin').style.display = 'none';
}