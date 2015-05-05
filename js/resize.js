(function() {
  "use strict";

  var
    ROOT_FONT_SIZE = 1,
    A1 = document.getElementById('A1'),
    A2 = document.getElementById('A2'),
    A3 = document.getElementById('A3');


  function remCalibrate() {
    // var size = Math.max(16,window.innerWidth/100);
    // document.documentElement.style.fontSize = size + 'px';
    // console.log('calibrate '+size)
    // var root = document.querySelector(":root");

    document.getElementById('msg1').innerHTML = window.innerWidth;
    document.getElementById('msg2').innerHTML = window.innerHeight + " : width:";
  }
  remCalibrate();
  window.addEventListener('resize', remCalibrate, false);
  // remCalibrate

  document.getElementById("text-sizer").addEventListener("click", function(event) {
    // 1 = screen
    // 2 = tablet
    // 3 = phone
    ROOT_FONT_SIZE++;
    if (ROOT_FONT_SIZE > 3) ROOT_FONT_SIZE = 1;
    if ((ROOT_FONT_SIZE === 1) || (ROOT_FONT_SIZE === 3))
      document.body.classList.toggle("overide-card_width"); //ie10
    var root = document.querySelector(":root");
    root.style.fontSize = (ROOT_FONT_SIZE + "em");
    document.getElementById('msg1').innerHTML = ("font: " + ROOT_FONT_SIZE);
    changePhoneIcon(ROOT_FONT_SIZE);
  }, false);


  function changePhoneIcon(id) {
      // A1.style.display = "none";
      // A2.style.display = "none";
      // A3.style.display = "none" ;
      A1.classList.remove("outline");
      A2.classList.remove("outline");
      if (id === 1)
        A1.classList.add("outline");
      else
        A2.classList.add("outline");
        // if(id===1) A1.style.display = "inline";
        // if(id===2) A2.style.display = "inline";
        // if(id===3) A3.style.display = "inline";
    }
    // changing class attributes in CSS directly was complex and wasn't proceeded with
    // TODO
  function setClassWidth(klass, width) {
    // document.styleSheets[0].cssRules[0].cssText = ".card {width: 100 % !important;}";
    // document.styleSheets[0].cssRules[0].cssText = "\
    //  #myID {
    //      myRule: myValue;
    //      myOtherRule: myOtherValue;
    //  }";

    //myStyles.deleteRule(0);    IE8
    // var elements = document.getElementsByClassName(klass);
    // for (var i = 0; i < elements.length; i++) {
    //   elements[i].style.width = width;
    // }
    // var aaa=document.styleSheets[2];
    // setClassWidth("card", "100%");
    // resetWidthCSS( "100%" );
    // document.body.style.fontSize = (ROOT_FONT_SIZE+"rem");
    var sheet = document.styleSheets[2]
    console.log(document.styleSheets[2]);
    sheet.insertRule(".cwidth { width:100%;}", 0); //IE8
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

  window.onload = function() {
    document.getElementById("spinner").style.display = "none";
  };

})();
