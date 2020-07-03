(function () {
    function byId(id) {
      return document.getElementById(id);
    }
    
    document.addEventListener ? document.addEventListener('DOMContentLoaded', onDOMContentLoaded) : window.onload = doCanvasNotSupported;
  
    function onDOMContentLoaded() {
      byId('vader').getContext ? doCanvas() : doCanvasNotSupported();
    }
    
    function doCanvas() {    
      drawVader(byId('vader'));
    }
    
    function drawVader(canvas) {
      var w = canvas.width,
          h = canvas.height,
          context = canvas.getContext('2d'),
          pi = Math.PI;
      
      // Left side
      context.fillStyle = '#2A2F32';
      context.beginPath();
      context.ellipse(250, 210, 87, 100, 0, 0.5*Math.PI, Math.PI*1.5);
      context.closePath();
      context.fill();
          
      context.fillStyle = '#2A2F32';
      context.beginPath();
      context.moveTo(125, 335);
      context.lineTo(170, 231);
          context.lineTo(250, 231);
          context.lineTo(250, 388);
      context.lineTo(125, 335);
      context.closePath();
      context.fill();
      
      context.fillStyle = '#000';
      context.beginPath();
      context.moveTo(125, 335);
          context.bezierCurveTo(175,248,230,220,250,250);
          context.lineTo(250, 388);
      context.lineTo(125, 335);
      context.closePath();
      context.fill();
      
      context.fillStyle = '#262A2E';
          context.beginPath();
          context.moveTo(190,265);
          context.quadraticCurveTo(205,310,235,275);
      context.quadraticCurveTo(205,285,190,265);
          context.closePath();
          context.fill();
      
      context.fillStyle = '#787B7C';
      context.beginPath();
      context.rect(215, 326, 8, 21);
      context.closePath();
          context.fill();
      
      context.fillStyle = '#787B7C';
      context.beginPath();
      context.rect(230, 305, 8, 43);
      context.closePath();
          context.fill();
      
      context.fillStyle = '#787B7C';
      context.beginPath();
      context.rect(246, 283, 4, 65);
      context.closePath();
          context.fill();
      
      // Right side
      context.fillStyle = '#201D23';
      context.beginPath();
      context.ellipse(250, 210, 87, 100, 0, 1.5*Math.PI, 0.5*Math.PI);
      context.closePath();
      context.fill();
      
      context.fillStyle = '#201D23';
      context.beginPath();
      context.moveTo(375, 335);
      context.lineTo(330, 231);
          context.lineTo(250, 231);
          context.lineTo(250, 388);
      context.lineTo(375, 335);
      context.closePath();
      context.fill();
      
      context.fillStyle = '#000';
      context.beginPath();
      context.moveTo(375, 335);
          context.bezierCurveTo(325,248,270,220,250,250);
          context.lineTo(250, 388);
      context.moveTo(375, 335);
      context.closePath();
      context.fill();
      
          context.fillStyle = '#1D1A20';
          context.beginPath();
          context.moveTo(305,265);
          context.quadraticCurveTo(290,310,265,275);
          context.quadraticCurveTo(290,285,305,265);
          context.closePath();
          context.fill();
      
      // context.fillStyle = '#262A2E';
          // context.beginPath();
          // context.moveTo(190,265);
          // context.quadraticCurveTo(205,310,235,275);
          // context.quadraticCurveTo(205,285,190,265);
          // context.closePath();
          // context.fill();
      
      context.fillStyle = '#4A484D';
      context.beginPath();
      context.rect(275, 326, 8, 21);
      context.closePath();
          context.fill();
      
      context.fillStyle = '#4A484D';
      context.beginPath();
      context.rect(260, 305, 8, 43);
      context.closePath();
          context.fill();
      
      context.fillStyle = '#4A484D';
      context.beginPath();
      context.rect(250, 283, 4, 65);
      context.closePath();
          context.fill();
      
      
      
    }
    
  })();