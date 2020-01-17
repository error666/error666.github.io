<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/TEP.ico");
         document.title = '|ω･`) 404 NOT FOUND ~';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = '°˖✧◝( ´ω` )◜✧˖°';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });
