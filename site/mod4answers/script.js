(function (window) {

var names = ["Yaakov", "Johnny Bhiya", "Martin Garrix", "Josh Brolin", "Hardwell", "Jim Moriarty", "Afrojack", "Martha", "Jaggu PanWala", ];

for (var i in names) {
  var firstLetter = ((names[i]).charAt(0)).toLowerCase();
  if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);