(function() {
  "use strict";


  function remCalibrate() {
    // var size = Math.max(16,window.innerWidth/100);
    // document.documentElement.style.fontSize = size + 'px';
    // console.log('calibrate '+size)
    // var root = document.querySelector(":root");

    document.getElementById('msg1').innerHTML = window.innerWidth;
    document.getElementById('msg2').innerHTML = window.innerHeight;
  }
  remCalibrate();
  window.addEventListener('resize', remCalibrate, false);
  //-----



  var rootFontSize = 1

  function changeFontSize() {
    // var size = Math.max(16,window.innerWidth/100);
    // document.documentElement.style.fontSize = size + 'px';
    // console.log('calibrate '+size)
    // var root = document.querySelector(":root");

  }

  function resetFonts(size) {
    var A1 = document.getElementById('A1')
    var A2 = document.getElementById('A2')
    var A3 = document.getElementById('A3')
    var sizes = [A1, A2, A3]

  }

  document.getElementById("text-sizer").addEventListener("click", function(event) {
    // display the current click count inside the clicked div
    // var aaa=document.styleSheets[2];
    // console.log(aaa);
    rootFontSize++;
    if (rootFontSize > 3) rootFontSize = 1;
    // resetFonts(rootFontSize);
    if ((rootFontSize === 1) || (rootFontSize === 3))
      document.body.classList.toggle("overide-card_width");//ie10

    // setClassWidth("card", "100%");
    // resetWidthCSS( "100%" );
    // else
    // setClassWidth("card", "10rem");
    // resetWidthCSS( "10rem" );


    document.getElementById('msg1').innerHTML = ("font: " + rootFontSize);
    var root = document.querySelector(":root");

    root.style.fontSize = (rootFontSize + "em");


    // document.body.style.fontSize = (rootFontSize+"rem");
  }, false);



  function setClassWidth(klass, width) {
    // document.styleSheets[0].cssRules[0].cssText = ".card {width: 100 % !important;}";
    // 	document.styleSheets[0].cssRules[0].cssText = "\
    //  #myID {
    //      myRule: myValue;
    //      myOtherRule: myOtherValue;
    //  }";
    var sheet = document.styleSheets[2]
    console.log(document.styleSheets[2]);
    sheet.insertRule(".cwidth { width:100%;}", 0); //IE8
    //myStyles.deleteRule(0);    IE8
    var elements = document.getElementsByClassName(klass);
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.width = width;
    }

    var bdy = document.getElementsByClassName("body");


  }





  function fullwidth() {
      // document.styleSheets[2].cssRules[0].cssText = ".card {width: 100 % !important;}";
    }
    // clip to a decent range size to avoid, making endless size adjustments as screens being bigger and bigger
    // var aspect_ratio =  (window.innerHeight/window.innerWidth)/0.75
    // var vwh =  window.innerWidth/100
    // var rem = Math.max(8,Math.min(24,vwh*aspect_ratio))
    //
    // document.documentElement.style.fontSize =  rem + 'px';
    //
    //

  // SUN to WED, 10:00 - 22:30
  // THUR 10:00 - 23:00
  // FRI to SAT, 10:00 - 23:30



})();
