var posicaoSlide = 1;
showDivs(posicaoSlide);

function clicaBotao(n) {
  showDivs(posicaoSlide += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides-informacoes");
  if (n > x.length) {posicaoSlide = 1}
  if (n < 1) {posicaoSlide = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[posicaoSlide-1].style.display = "inline-block";
}