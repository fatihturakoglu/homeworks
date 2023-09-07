
    /* İsim girme kısmı START */
    
    let isim =document.getElementById("Name");
    
   
    
        let isimGir =  prompt("Hoşgeldin Lütfen adını gir !")
    
        isim.innerHTML = isimGir;
    
    /* İsim girme kısmı END */


/* Saat kısmı START */

function GetTime() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    var day = now.getDate();
    var month = now.getMonth()+1;
    var year = now.getFullYear();

    document.getElementById("hour").innerText=hour;
    document.getElementById("minute").innerText=minute;
    document.getElementById("second").innerText=second;

    document.getElementById("date").innerText=day+" / "+month+ " / " +year;
}


setInterval(function(){GetTime();},1000);

/* Saat kısmı END */