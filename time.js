var myVar = setInterval(function() {
    showTime();
  }, 1000);
  
  function showTime() {
    var d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString();
  }