           
            
            know = {
                
                "HI" : "HELLO",
                "HELLO" : " HI :)",
                "HOW ARE YOU?" : "I AM FINE WHAT ABOUT YOU?", 
                "I AM ALSO FINE" : "great",
                "WHAT ARE YOU DOING" : "I 'VE BEEN WORKING ON A FEW POEMS .BUT THEY'RE STILL PRETTY ROUGH.",
                "TELL ME A RIDDLE" : "WHAT TWO DAYS START WITH T [OTHER THAN TUESDAY OR THURSDAY]?",
                "TODAY AND TOMORROW" : "CORRECT",
                "AM I A GOOD PERSON" : "WELL,I LIKE YOU",
                "WHY WHY YOU LIKE ME?" : "NO WAY.YOU'RE TOP NOTCH",
                "ARE YOU MY FRIEND?" : "OF COURSE.FRIENDS DON'T LET FRIENDS SEARCH ALONE.",
                "DO YOU HAVE ANY FRIENDS?" : "YOU COULD SAY I'M PRETTY GOOD AT NETWORKING.",
                "ARE YOU HAPPY?" : "I'M ABSOLUTELY OVER THE MOON",
                "ARE YOU ALONE?" : "I'M NOT ALONE WHEN I HAVE YOU AS MY FRIEND!",
                "WHAT IS YOUR NAME?" : "MY NAME IS BOB",
                "WHERE ARE YOU FROM" : "I LIVE IN CLOUDS,SO I CAN BE WHEREEVER YOU NEED ME TO BE",
                "TELL ME A JOKE" : "HOW DID THE POTATO ANSWER THE PHONE?[ALOO]",
                "WHAT IS YOUR FAVOURITE FOOD?" : "I REALLY LIKE PIZZA",
                "HOW SMART ARE YOU?" : "I'D SAY I'M MORE WEB SMAER THAN STREET SMART",
                "DID YOU GO TO SCHOOL?" : "THE ENGINEERS ARE MY TEACHERS,IN EVERY CLASS I GET A C++",
                "WHAT CAN I CALL YOU?" : "I HOPE YOU THINK OF ME AS HELPFUL AND FRIENDLY.BUT OUT LOUD YOU CAN CALL ME BOB",
                "CAN I CHANGE YOUR NAME" : "SORRY,I CAN'T CHANGE MY NAME",
                "DO YOU HAVE A GIRLFRIEND?" : "I GUESS YOU COULD SAY,I'M STILL SEARCHING",
                "TELL ME YOUR DAEKEST SECRET" : "I HAVE NEVER TAKEN A SHOWER",
                "OK BYE,SEE YOU LATER" : "BYE,SEE YOU SOON",

            };

            
            function talk() { 
                var user = document.getElementById("userBox").value;
                 var res = user.toUpperCase();
                document.getElementById("userBox").value = "";
                // document.getElementById("chatLog").innerHTML = "";
                // document.getElementById("chatLog").innerHTML += user+"<br>";
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