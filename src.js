function visitPage() {
  window.open('https://www.youtube.com/watch?v=rL6RRIOZyCM');
}

function validateSeed() {
  var seed = document.getElementById("myText").value;
  var seeds = [{
      'seed': 'AxpLN8k'
    },
    {
      'seed': 'Ztr6Bms'
    },
    {
      'seed': 'JJk1N4x'
    },
    {
      'seed': 'Luv3Rss'
    }
  ];


  var hasMatch = false;

  for (var index = 0; index < seeds.length; ++index) {

    var s = seeds[index];

    if (s.seed == seed) {
      hasMatch = true;
      document.getElementById("result_field").innerHTML = "Congratualtions, you have passed level 2. Please click the button below for your last clue.";
      var parent = document.getElementsByClassName("main-container")[0];
      var btn_nxt = document.createElement("button");
      btn_nxt.innerHTML = "Next puzzle";
      btn_nxt.setAttribute("class", "button_next");
      btn_nxt.setAttribute("onclick", "visitPage();");
      parent.appendChild(btn_nxt);

      var btn_old = document.getElementsByClassName("button_validate");
      btn_old[0].remove();

      break;

    } else {
      document.getElementById("result_field").innerHTML = "Sorry, that is not a valid seed.";

    }
  }

}
