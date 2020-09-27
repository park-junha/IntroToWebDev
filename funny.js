var funnyCount = 0;

function getFunnyCountText() {
  var postfix;
  if (funnyCount === 1) {
    postfix = " time.";
  } else {
    postfix = " times.";
  }
  return "You clicked the funny button " + funnyCount + postfix;
}

function funnyScript() {
  funnyCount++;
  document.getElementById("funny-output").innerHTML = getFunnyCountText();
}
