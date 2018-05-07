  $(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('.navbar');
   var offset = startchange.offset();
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.navbar').css('background-color', '#1F2532');
          $('.navbar').css('padding','10px 15px 10px 15px');
          $('.nav-link').css('color','#fff');
       } else {
          $('.navbar').css('background-color', 'transparent');
           $('.navbar').css('padding','30px 15px 30px 15px');
           $('.nav-link').css('color','brown');
       }
   });
});
