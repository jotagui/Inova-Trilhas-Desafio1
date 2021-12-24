var posicaoSlide = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("foto-slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  posicaoSlide++;
  if (posicaoSlide > x.length) {posicaoSlide = 1}
  x[posicaoSlide-1].style.display = "inline-block";
  setTimeout(carousel, 4000);
}