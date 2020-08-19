           
            
            know = {
                
                "HI" : "HELLO",
                "HELLO" : " HI :)",
                "HOWAREYOU" : "I AM FINE WHAT ABOUT YOU?", 
                "IAMALSOFINE" : "great",
                "WHATAREYOUDOING" : "I 'VE BEEN WORKING ON A FEW POEMS .BUT THEY'RE STILL PRETTY ROUGH.",
                "TELLMEARIDDLE" : "WHAT TWO DAYS START WITH T [OTHER THAN TUESDAY OR THURSDAY]?",
                "TODAYANDTOMORROW" : "CORRECT",
                "AMIAGOODPERSON" : "WELL,I LIKE YOU",
                "WHYWHYYOULIKEME" : "NO WAY.YOU'RE TOP NOTCH",
                "AREYOUMYFRIEND" : "OF COURSE.FRIENDS DON'T LET FRIENDS SEARCH ALONE.",
                "DOYOUHAVEANYFRIENDS" : "YOU COULD SAY I'M PRETTY GOOD AT NETWORKING.",
                "AREYOUHAPPY" : "I'M ABSOLUTELY OVER THE MOON",
                "AREYOUALONE" : "I'M NOT ALONE WHEN I HAVE YOU AS MY FRIEND!",
                "WHATISYOURNAME" : "MY NAME IS BOB",
                "WHEREAREYOUFROM" : "I LIVE IN CLOUDS,SO I CAN BE WHEREEVER YOU NEED ME TO BE",
                "TELLMEAJOKE" : "HOW DID THE POTATO ANSWER THE PHONE?[ALOO]",
                "WHATISYOURFAVOURITEFOOD?" : "I REALLY LIKE PIZZA",
                "HOWSMARTAREYOU" : "I'D SAY I'M MORE WEB SMAER THAN STREET SMART",
                "DIDYOUGOTOSCHOOL" : "THE ENGINEERS ARE MY TEACHERS,IN EVERY CLASS I GET A C++",
                "WHATCANICALLYOU" : "I HOPE YOU THINK OF ME AS HELPFUL AND FRIENDLY.BUT OUT LOUD YOU CAN CALL ME BOB",
                "CANICHANGEYOURNAME" : "SORRY,I CAN'T CHANGE MY NAME",
                "DOYOUHAVEAGIRLFRIEND" : "I GUESS YOU COULD SAY,I'M STILL SEARCHING",
                "TELLMEYOURDAEKESTSECRET" : "I HAVE NEVER TAKEN A SHOWER",
                "BYe" : "BYE,SEE YOU SOON",
                "OK BYE,SEE YOU LATER" : "BYE,SEE YOU SOON",

            };

            
            function talk() { 
                var user = document.getElementById("userBox").value;
                 var res = user.toUpperCase();
                 res = res.replace(/[^\w]/g, '');
                document.getElementById("userBox").value = "";
                 document.getElementById("chatLog").innerHTML = "";
                if (res in know) {
                    document.getElementById("chatLog").innerHTML += know[res]+"<br>";

                    var msg = new SpeechSynthesisUtterance();
                    msg.text =  know[res] ;
                    window.speechSynthesis.speak(msg);

                } else {
                    document.getElementById("chatLog").innerHTML += "I don't understand...<br>";

                    
                    var msg = new SpeechSynthesisUtterance();
                    msg.text =  "I don't understand what are you saying ?" ;
                    window.speechSynthesis.speak(msg);

                }
            } 