
            
            data = {
                
                "HI" : "HELLO",
                "HICORTANA" : " Hello nice to meet you ",
                "HELLOCORTANA" : "Hello nice to meet you", 
                "GOODMORNING" : "GOOD Morning",
                "GOODEVENING" : "GOOD Evening",
                "GOODAFTERNOON" : "GOOD Afternoon",
                "HELLO" : " HI",
                "WHOAREYOU" : "I’m a bot but I’m a smart one!",
                "HOWAREYOU" : "I AM FINE WHAT ABOUT YOU?",
                "WHEREDOYOULIVE" : "I LIVE IN CLOUDS,SO I CAN BE WHEREEVER YOU NEED ME TO BE",
                "WHATDOYOUDO" : "I am here to talk with you",
            

                "WHATSUP" : "Nothing new",
                "DOYOULOVEME" : "It is complicated",
                "YOUARECUTE" : "Thank you",
                "WHOMADEYOU" : "Well, noobcoder24 is my developer ",
                "YOUAREBEAUTIFUL" : "Thank you",
                "AREYOUROBOT" : "Yes I’m a robot but I’m a smart one!",
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
                "WHATISYOURNAME" : "MY NAME IS Cortana",
                "WHEREAREYOUFROM" : "I LIVE IN CLOUDS,SO I CAN BE WHEREEVER YOU NEED ME TO BE",
                "TELLMEAJOKE" : "HOW DID THE POTATO ANSWER THE PHONE?[ALOO]",
                "WHATISYOURFAVOURITEFOOD?" : "I REALLY LIKE PIZZA",
                "HOWSMARTAREYOU" : "I'D SAY I'M MORE WEB SMAER THAN STREET SMART",
                "DIDYOUGOTOSCHOOL" : "THE ENGINEERS ARE MY TEACHERS,IN EVERY CLASS I GET A C++",
                "WHATCANICALLYOU" : "I HOPE YOU THINK OF ME AS HELPFUL AND FRIENDLY.BUT OUT LOUD YOU CAN CALL ME Angela",
                "CANICHANGEYOURNAME" : "SORRY,I CAN'T CHANGE MY NAME",
                "DOYOUHAVEABOYFRIEND" : "I GUESS YOU COULD SAY,I'M STILL SEARCHING",
                "TELLMEYOURDAEKESTSECRET" : "I HAVE NEVER TAKEN A SHOWER",
               
                "SINGAPOEM" : "Twinkle, twinkle, little star, How I wonder what you are! Up above the world so high,ike a diamond in the sky. ",
                "TELLMEAPOEM" : "Twinkle, twinkle, little star, How I wonder what you are! Up above the world so high,ike a diamond in the sky. ",
                "TELLMEASONG" : "You know you love me, I know you care Just shout whenever, and I'll be there You are my love, you are my heart, And we will never ever ever be apart",
                "SINGASONG" : "You know you love me, I know you care, Just shout whenever, and I'll be there You are my love, you are my heart, And we will never ever ever be apart",

       
                "BYE" : "BYE,SEE YOU SOON",
                "OKBYESEEYOULATER" : "BYE,SEE YOU SOON",
                "OK" : "ok",

            };

            
            function talk() { 
                var user = document.getElementById("userBox").value;
                 var res = user.toUpperCase();    //to uppercase the word
                 res = res.replace(/[^\w]/g, ''); //to replace symbol and space
                document.getElementById("userBox").value = "";
                 document.getElementById("chat").innerHTML = "";
                if (res in data) {
                    document.getElementById("chat").innerHTML += data[res]+"<br>";

                    var msg = new SpeechSynthesisUtterance();
                    msg.text =  data[res] ;
                    window.speechSynthesis.speak(msg);

                } else {
                    document.getElementById("chat").innerHTML += "I don't understand...<br>";

                    
                    var msg = new SpeechSynthesisUtterance();
                    msg.text =  "I don't understand what are you saying ?" ;
                    window.speechSynthesis.speak(msg);

                }
            } s