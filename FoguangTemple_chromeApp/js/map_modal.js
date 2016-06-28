var modal = document.getElementById('map-popup');

var btn = document.getElementById('map_trigger');

var span = document.getElementsByClassName('map_close')[0];

btn.onclick = function(){
  modal.style.display = "block";
}

span.onclick = function(){
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
