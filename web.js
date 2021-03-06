function loadHTML() {
  var link = "https://cdn.rawgit.com/Artificial-Nerds/botlers-messaging-web/master/widget.html";
  var xhttp;
  if (window.XMLHttpRequest) {
    // code for modern browsers
    xhttp = new XMLHttpRequest();
  } else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      loadStyles();
      document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', this.responseText);
    }
  };
  xhttp.open("GET", link, true);
  xhttp.send();
}

//WIDGET STYLES
function loadStyles() {
  var style = document.createElement('link');
  style.rel = 'stylesheet';
  style.href = 'https://cdn.rawgit.com/Artificial-Nerds/botlers-messaging-web/master/web-styles.css';
  document.getElementsByTagName('head')[0].appendChild(style);
}
