window.onload = function()
{
      var line = document.getElementById("line");
      var angle = 0; // Initial angle
      var speed = 1; // Rotation speed
      function rotateLine() {
        line.style.transform = "rotate(" + angle + "deg)";
        angle += speed;
        requestAnimationFrame(rotateLine);
      }
      rotateLine();
    };