
function toggleShow(){
    col = document.getElementById("KNNHeartRateKNN");
    col.classList.toggle("active");
    var content = col.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
}