// ****************** space on code tag &********************

document.querySelectorAll("pre code").forEach(function (element, n) {
  if (element.classList.contains("nuke-html")) {
    var text = element.innerHTML;
  } else {
    var text = element.innerText;
  }
  text = text.replace(/^\n/, '').trimEnd();// goodbye starting whitespace
  var to_kill = Infinity;
  var lines = text.split("\n");
  for (var i = 0; i < lines.length; i++) {
    if (!lines[i].trim()) { continue; }
    to_kill = Math.min(lines[i].search(/\S/), to_kill);
  }
  out = [];
  for (var i = 0; i < lines.length; i++) {
    out.push(lines[i].replace(new RegExp("^ {" + to_kill + "}", "g"), ""));
  }
  element.innerText = out.join("\n");
});