(function($){
  $(document).ready(function(){


//Replace Title

    var firstTitle = $('h1:first-child');
    firstTitle.text('This is an AJAX test...');


//AJAX Call

    var col1 = $('.col:nth-child(1)')
    var col2 = $('.col:nth-child(2)')
    var col3 = $('.col:nth-child(3)')

    function myAjax (selector,file){
      selector.on('mouseenter',function(){
        $.ajax({
          url: file + ".html",
          type:'GET',
          dataType:"html"
        }).done(function(html){
          $('.ajaxContainer').html(html);
        })
      })

    }

    myAjax(col1,'chainz')
    myAjax(col2,'kanye')
    myAjax(col3,'jayz')


  })//End of ready function
})(jQuery)//IIFE passing in jQuery Object


