//  Interval Exercise (follow the instructions below).

//  This code will run as soon as the page loads.
window.onload = function() {
var questionsObject = {
q1: ["Who was the legendary Benedictine monk who invented champagne?", "Dom Perignon."],
q2: ["Name the largest freshwater lake in the world?", "Lake Superior."],
q3: ["Where would you find the Sea of Tranquility?", "The Moon."],
q4: ["What is someone who shoes horses called?", "A farrier."],
q5: ["What item of clothing was named after its Scottish inventor?", "A Mackintosh."],
q6: ["What kind of weapon is a falchion?", "A sword."],
q7: ["Which word goes before vestbeans and quartet?", "String."],
q8: ["What is another word for lexicon?", "Dictionary."],
q9: ["Name the seventh planet from the sun.", "Uranus."],
q10: ["Who invented the rabies vaccination?", "Louis Pasteur."]
};
// var questionsArray = ["Who was the legendary Benedictine monk who invented champagne?", "Name the largest freshwater lake in the world?", "Where would you find the Sea of Tranquility?", "What is someone who shoes horses called?", "What item of clothing was named after its Scottish inventor?", "What kind of weapon is a falchion?", "Which word goes before vest, beans and quartet?", "What is another word for lexicon?", "Name the seventh planet from the sun.", "Who invented the rabies vaccination?"];
// var answersArray = ["Dom Perignon", "Lake Superior", "The Moon", "A farrier", "A Mackintosh", "A sword", "String", "Dictionary", "Uranus", "Louis Pasteur"];
// function insertQList(a){ 
//   for(var i = 0; a.length<10; i++){
//   // var a = "q" + i.toString();
//   console.log("q" + i.toString())
//   console.log(questionsArray[i])
//   console.log(answersArray[i])
//   questionsObject.a[i] = questionsArray[i];
//   questionsObject.a[i]  = answersArray[i];
// }}
// insertQList()
console.log(questionsObject)

  //  Click events:
  // $("#reset").click(stopwatch.reset);
  $("#start").click(stopwatch.start);
};

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

//prevents the clock from being sped up unnecessarily
var clockRunning = false;

//  Stopwatch object.
var stopwatch = {

  time: 0,
  lap: 1,

  reset: function() {

    stopwatch.time = 0;
    stopwatch.lap = 1;

    //  TODO: Change the "display" div to "00:00."
    $("#display").empty()
    $("#display").text("00:00")
    clockRunning = false;
    stopwatch.stop()
  },

  start: function() {
      //  TODO: Use setInterval to start the count here and set the clock to running.
      if (!clockRunning) {
        var questionsObject = {
        q1: ["Who was the legendary Benedictine monk who invented champagne?", "Dom Perignon"],
        q2: ["Name the largest freshwater lake in the world?", "Lake Superior"],
        q3: ["Where would you find the Sea of Tranquility?", "The Moon"],
        q4: ["What is someone who shoes horses called?", "A farrier"],
        q5: ["What item of clothing was named after its Scottish inventor?", "A Mackintosh"],
        q6: ["What kind of weapon is a falchion?", "A sword"],
        q7: ["Which word goes before vestbeans and quartet?", "String"],
        q8: ["What is another word for lexicon?", "Dictionary"],
        q9: ["Name the seventh planet from the sun.", "Uranus"],
        q10: ["Who invented the rabies vaccination?", "Louis Pasteur"]
        };
        var fakeAnswers = [
        "acoustics","marked","divergent","puzzling","shade","distance","rely","modern","loud","home","tangy","billowy","touch","realise","dreary","bedroom","lame","impulse","obedient","steam","holiday","hapless","wide-eyed","soup","striped","bed","faithful","agree","damaged","cheap"
        ]

        for(var i=1; i<Object.keys(questionsObject).length - 7; i++){
        var q = "q"+i.toString();
          var newDiv = $("<div></div>").attr("id", ("q1"));
          newDiv.attr("class", "question");
          // console.log(questionsObject.q+(i.toString())[0])
          newDiv.append(questionsObject.q+i[0])
          $("#wrapper").append(newDiv)
        }

        $.each( questionsObject, function( key, value ) {
          var rand = fakeAnswers[Math.floor(Math.random() * fakeAnswers.length)];
          // alert( key + ": " + value )
          $.each( [value], function( i, l ){
          var q = $("#q1").append( "Question" + ": " + l[0]+"<br>")
          q.append($("<button>").attr("class", "btn btn-primary").text(l[1]));
          q.append($("<button>").attr("class", "btn btn-primary").text(fakeAnswers[Math.floor(Math.random() * fakeAnswers.length)]));
          q.append($("<button>").attr("class", "btn btn-primary").text(fakeAnswers[Math.floor(Math.random() * fakeAnswers.length)]));
          q.append($("<button>").attr("class", "btn btn-primary").text(fakeAnswers[Math.floor(Math.random() * fakeAnswers.length)]));
          });
          // console.log(i)
        
        });

        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
        
      

  }},
  stop: function() {
    //  TODO: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId)
    clockRunning = false;
  },

  count: function() {

    //  TODO: increment time by 1, remember we cant use "this" here.
      stopwatch.time++
    //  TODO: Get the current time, pass that into the stopwatch.timeConverter function,
    //        and save the result in a variable.
      var counter = stopwatch.timeConverter(stopwatch.time)
    //  TODO: Use the variable you just created to show the converted time in the "display" div.
      $("#display").text(counter)
  },

  timeConverter: function(t) {
    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  }
};
// console.log(stopwatch.time)
