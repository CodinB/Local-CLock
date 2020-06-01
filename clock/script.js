(function(){

    function updateHour(){
    
        let date = new Date();
        var week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        //week[dayWeek]
    
        //get info from the system using Date
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let ampm;
    
        let dayWeek = date.getDay();
        let month = date.getMonth();
        let day = date.getDate();
        let year = date.getFullYear();
    
        //add a 0 for the hours, min and seconds with 1 digit
        if(seconds<10){
            seconds ="0"+ seconds;
        }
    
        if(minutes<10){
            minutes = "0" + minutes;
        }
    
    
    
        //print the date information in the html
        document.getElementById("dayWeek").innerHTML = week[dayWeek];
        document.getElementById("month").textContent = months[month];
        document.getElementById("day").textContent = day;
        document.getElementById("year").textContent = year;
    
        document.getElementById("hour").innerHTML = hour;
        document.getElementById("min").textContent = minutes;
        document.getElementById("sec").textContent = seconds;
        // document.getElementById("ampm").textContent = ampm;
    
        //add the am pm condition
        if(hour<12){
            document.getElementById('ampm').textContent='am';
        }else{
            document.getElementById('ampm').textContent='pm';
        }
        
    
    }
    
    //updateHour();
    
    // use the updateHour
    // use an autocalling function 
    // set interval
    
    var inter = setInterval(updateHour, 1000);

})();


