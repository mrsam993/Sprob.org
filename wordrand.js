var p = $('p[id^="content-"]').hide(),
    i = Math.floor(Math.random() * 10);
    last = 0;

(function cycle() { 

    p.eq(i).fadeIn(400)
           .delay(2500)
           .fadeOut(400, cycle);
    do {
      i = Math.floor(Math.random() * 10);
    }while (i == last)    
    last = i;  
})();