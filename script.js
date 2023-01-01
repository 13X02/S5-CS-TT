function cd(cdate,dest){
    var x = setInterval(function() {
    
        var now = new Date().getTime();
      var distance = cdate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);  
      dest.innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
    
      if (distance < 0) {
        clearInterval(x);
        dest.innerHTML = "EXAM OVER";
      }
    }, 1000);
    }
    var cdflat = new Date("Jan 16, 2023 9:30:00").getTime();
    var flat  = document.querySelector('.flat');
    cd(cdflat,flat);
    var cdcn = new Date("Jan 19, 2023 9:30:00").getTime();
    var cn  = document.querySelector('.cn');
    cd(cdcn,cn);
    var cdss = new Date("Jan 23, 2023 9:30:00").getTime();
    var ss  = document.querySelector('.ss');
    cd(cdss,ss);
    var cdmpmc = new Date("Jan 27, 2023 9:30:00").getTime();
    var mpmc  = document.querySelector('.mpmc');
    cd(cdmpmc,mpmc);
    var cdmoss = new Date("Jan 30, 2023 9:30:00").getTime();
    var moss  = document.querySelector('.moss');
    cd(cdmoss,moss);
    var cddm = new Date("Feb 1, 2023 9:30:00").getTime();
    var dm  = document.querySelector('.dm');
    cd(cddm,dm);