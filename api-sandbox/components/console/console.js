var _consoles = new  Map();

function copyOnClick(msg, id) {
    _consoles.get(id).callbacks.forEach(callback=>callback(msg));
}

class Console {

  constructor(elementId) {
    this.id =  "log-entries" + window.performance.now();
    _consoles.set(this.id, this);
    let html = "<div>"
        + "<div class='log-header'>"
          + "<button onclick=clearLog('"+this.id+"'); title='Clear the log' type='button' class='remove-log-button'>"
            + "<svg viewBox='0 0 15 15' class='icon'><path class='st0' d='M.5 2.521l9.444 9.444m0-9.444L.5 11.965M12.391 2.5H14.5m-4.375 3.162H14.5m-4.408 3.162H14.5m-1.74 3.162h1.74'></path>"
            + "</svg>"
            + "Clear Log"
          + "</button>"
        + "</div>"
        + "<div id='"+this.id+"' class='log-entries'></div>"
      + "</div>";

    appendHtmlElement(elementId, html);
    this.entries = document.getElementById(this.id);
    this.callbacks = new  Array();
  }

  onLogSelected(callback) {
      this.callbacks.push(callback)
  }

  id(){
    return this.id;
  }

  log (message, time) {
        if(time===undefined){
            time= now();
        }
        this.appendEntry("DEBUG",message,time);
    }

  info (message, time) {
    if(time===undefined){
      time= now();
    }
    this.appendEntry("INFO",message,time);
  }

  debug(message, time) {
      if(time===undefined){
          time= now();
      }
    this.appendEntry("DEBUG",message, time);
  }

  error(message, time) {
      if(time===undefined){
          time= now();
      }
    this.appendEntry("ERROR",message, time);
  }

  warn(message, time) {
      if(time===undefined){
          time= now();
      }
    this.appendEntry("WARN",message, time);
  }

  appendEntry(type, msg, time ){
    let title = "This command finished after "+ time +" seconds.";
    let color = "log-info";
    if(type === "DEBUG") {
      color = "log-info";
    } else if (type === "ERROR") {
      color = "red";
    } else if (type === "WARN") {
      color = "yellow";
    } else if (type === "INFO") {
      color = "green";
    }

    if (!(typeof msg === 'string')) {
        msg = JSON.stringify(msg);
    }

    let html = "<div class='log-line'>"
      +   "<div class='log-line-copy'>"
      +      "<button style='background: url(import_btn.svg) no-repeat' class='btn' onclick='return copyOnClick(" + msg + ",\"" + this.id + "\")'/>"
      +   "</div>"
      +   "<span title='"+ title +"'>"+ time + "</span>"
      +   "<span class='"+color+"'>"+ msg +"</span>"
      + "</div>";

    appendHtmlElement(this.id,html);
  }
}
function now(){
    const currentTime = new Date();
    return " | " + currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds() + "." +  currentTime.getMilliseconds() + " | ";
}
function clearLog(elementId){
  let entries = document.getElementById(elementId);
  while (entries.hasChildNodes()) {
    entries.removeChild(entries.lastChild);
  }
}
