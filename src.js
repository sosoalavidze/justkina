function visitPage() {
  window.open('https://www.youtube.com/watch?v=rL6RRIOZyCM');
}
function validateSeed() {
  var seed = document.getElementById("myText").value;
  var seed_decoded="";
  seed = seed.slice(2);
  var length = seed.length;
  for (var i = 0; i < length;) {
    var code = seed.slice(i, i += 2);
    seed_decoded += String.fromCharCode(parseInt(code, 16));
  }

  var RegEx = /^(?=.*\d)(?=.*[a-zA-Z]).{7,7}$/;
  if(seed_decoded.match(RegEx)){
    document.getElementById("result_field").innerHTML = "Congratualtions, you have passed level 2. Please click the button below for your last clue.";
    var parent = document.getElementsByClassName("main-container")[0];
    var btn_nxt = document.createElement("button");
    btn_nxt.innerHTML = "Next puzzle";
    btn_nxt.setAttribute("class", "button_next");
    btn_nxt.setAttribute("onclick", "visitPage();");
    parent.appendChild(btn_nxt);

    var btn_old = document.getElementsByClassName("button_validate");
    btn_old[0].remove();
  }else{
    document.getElementById("result_field").innerHTML = "Sorry, that is not a valid seed.";
}
}
