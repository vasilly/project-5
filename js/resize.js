(function() {
  "use strict";

  var
    ROOT_FONT_SIZE = 1,
		ROOT = document.querySelector(":root"),
    A1 = document.getElementById('A1'),
    A2 = document.getElementById('A2'),
    A3 = document.getElementById('A3'),
		mql = window.matchMedia("(orientation: portrait)");
		if (mql.matches) {
			ROOT_FONT_SIZE = 3;
			document.body.classList.add("overide-card_width"); //ie10
			ROOT.style.fontSize = (ROOT_FONT_SIZE * 16 + "px");
			changePhoneIcon(3);
		} else {}
function onResize() {
  // document.getElementById('msg1').innerHTML = "width:" + window.innerWidth;
  // document.getElementById('msg2').innerHTML = "height:" + window.innerHeight;

}

function resize(event) {
  // 1 = screen
  // 2 = tablet
  // 3 = phone
  document.body.classList.remove("overide-card_width"); //ie10

  ROOT_FONT_SIZE++;
  if (ROOT_FONT_SIZE > 3) ROOT_FONT_SIZE = 1;
  if ( (ROOT_FONT_SIZE === 1) || (ROOT_FONT_SIZE === 2) )
  	document.body.classList.remove("overide-card_width"); //ie10
  ROOT.style.fontSize = (ROOT_FONT_SIZE * 16 + "px");
  changePhoneIcon(ROOT_FONT_SIZE);
}

function changePhoneIcon(id) {
  A1.classList.remove("outline");
  A2.classList.remove("outline");
  A3.classList.remove("outline");

  if (id === 1)
    A3.classList.add("outline");
  else if (id === 2)
    A2.classList.add("outline");
  else (id === 3)
    A1.classList.add("outline");

}

// TODO
// SUN to WED, 10:00 - 22:30
// THUR 10:00 - 23:00
// FRI to SAT, 10:00 - 23:30

function removeSpinner() {
  document.getElementById("spinner").style.display = "none";
  // setTimeout(function() {
  //   document.getElementById('text-sizer').style.display = "none";
  // }, 90000);

}


onResize();
window.addEventListener('resize', onResize, false);
document.getElementById("text-sizer").addEventListener("click", resize, false);

window.onload = function() {
	// remove spinner onload
	document.getElementById("spinner").style.display = "none";

	// setTimeout(function() {
	//   document.getElementById('text-sizer').style.display = "none";
	// }, 90000);

};

})();
