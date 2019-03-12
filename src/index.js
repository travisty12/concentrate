import './sass/styles.scss';
import $ from 'jquery';
import jack from './assets/img/jack.png';
import queen from './assets/img/queen.png';
import king from './assets/img/king.png';
import ace from './assets/img/ace.png';
import joker from './assets/img/joker.png';


function prep() {
  var html = "";
  // var flipped;
  for (var i = 0; i < 2; i++) {
    html += "<div class='row'>";
    for (var j = 0; j < 5; j++) {
      html += "<div class='card' id='row-" + i + "-col-" + j + "'>";
      html += "</div>";
    }
    html += "</div>";
  }
  return html;
}

$(document).ready(function() {
  var html = prep();
  var hasClicked = false;
  $(".wrapper").append(html);
  var cardArr = [jack,queen,king,ace,joker];
  // var current;
  $(".card").click(function() {
    // var lastCard = current;
    // current = $(this);
    var card = cardArr[Math.floor(5*Math.random(1))];
    var cardHtml = "<img src=" + card + " alt='card'>";
    if (!hasClicked) {
      $(this).addClass("flip");
      $(this).removeClass("flip");
      $(this).append(cardHtml);
      $(this).addClass("flipBack");
    } else {
      $(this).addClass("flip");
      $(this).removeClass("flip");
      $(this).append(cardHtml);
      $(this).addClass("flipBack");
    }
    hasClicked = hasClicked == true ? false : true;
  });
});
