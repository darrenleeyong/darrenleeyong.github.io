 function delay(millis, action)  {
              setTimeout(action, millis);
          }

          
delay(500, function () {
        responsiveVoice.speak("four-oh-four", "US English Male", {volume: 1, rate: 1, pitch: 1});
    }
);
delay(3500, function () {
        responsiveVoice.speak("how did you end up here?", "US English Male", {volume: 1, rate: 1, pitch: 1});
    }
);
delay(8500, function () {
        responsiveVoice.speak("click on the link to go home!", "US English Male", {volume: 1, rate: 1, pitch: 1});
    }
); 
delay(13500, function () {
        responsiveVoice.speak("why are you still here?", "US English Male", {volume: 1, rate: 1, pitch: 1});
    }
);       
