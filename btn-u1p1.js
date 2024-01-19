// select the button and the div
  var button = 
  document.getElementById('u1p1');
  button.addEventListener("click", changeContent);

  var div = document.getElementById('body-text');

  // define the function to change the HTML content
  function changeContent() {
    div.innerHTML = 
    '<div class="head-text">'+
          '<h1>Dylan Nelson\'s portfolio for Unity: Create with Code</h1>'+
      '</div>'+
      '<div class="head-title">'+
          '<h2>Unit 1: Prototype 1</h2>'+
      '</div>'+
    '<!--WebGL Player-------------------------------------->'+
    '<canvas id="unity-canvas" width=1280 height=720 style="width: 1280px; height: 720px; background: #231F20"></canvas>'+
    '<script src="Build/Unity-CWC-Prototype1.loader.js"></script>'+
    '<script>'+
      'createUnityInstance(document.querySelector("#unity-canvas"), {'+
        'dataUrl: "Build/Unity-CWC-Prototype1.data",'+
        'frameworkUrl: "Build/Unity-CWC-Prototype1.framework.js",'+
        'codeUrl: "Build/Unity-CWC-Prototype1.wasm",'+
        'streamingAssetsUrl: "StreamingAssets",'+
        'companyName: "MrJamz",'+
        'productName: "Unit1-Prototype1",'+
        'productVersion: "1",'+
        'matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.'+
        'devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.'+
      '});'+
    '</script>'+
    '<!--WebGL Player-------------------------------------->'+
      '<div class="text-info">'+
          '<h2>'+
              'Instructions:'+
              '<br />'+
              'Use the W&S keys to move forward and backward, use the A&D keys to turn left or right.'+
              'Refresh the page if the van falls off the road.'+
          '</h2>'+
          '<p>'+
              'This unit focused on:'+
          '</p>'+
          '<ul>'+
              '<li>Gaining user input with Input.GetAxis, allowing the player to move in different ways</li>'+
              '<li>Use the Rotate function to rotate an object around an axis</li>'+
              '<li>And cleaning/organizing your hierarchy with Empty objects</li>'+
          '</ul>'+
      '</div>'+
      '<div class="btns">'+
        '<button id="u1p1">View Unit 1 Prototype 1</button>'+
      '</div>'
      /* Reload the page after updating the html */
      location.reload();
  }

  // add event listener to the button
  button.addEventListener('click', changeContent);