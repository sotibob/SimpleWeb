function addText() {
    var text = document.getElementById("myText").value;
    if(text !== null && text !== "") {
        document.getElementById("blogText").innerHTML += `<div class="Text bg-light"><p>${text}</p></div>`;
        document.getElementById("myText").value = "";
    }
}