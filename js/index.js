$( document ).ready(function() {
  $('.c-form__content').click(function() {

    var $this = $(this);
  
    if ($this.next().hasClass('show-box')) {
        $this.next().removeClass('show-box');
        
    } else {
        $this.parent().parent().find('c-form__hidden').removeClass('show-box');
        $this.next().toggleClass('show-box');
       
    }
  });


  
});



