$(document).ready(function(){
    // sidebarNabMenu
    let navigation = document.querySelector('.navigation');
        let toggle = document.querySelector('.toggle');
        toggle.onclick = function() {
        navigation.classList.toggle('active');
    }


    $(function () {
        $('.popup-modal').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#username',
            modal: true
        });
        $(document).on('click', '.popup-modal-dismiss', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    });
})



var count = 0; 
  $(document).on('click','.sidebar_arrow',function(){
    if(count == 0){ 
        $(this).css({'transform':'rotate(180deg)'});
        $('.sk_main_drp').hide(); 
        $('.ar_navigation_logo a img').css({"width":"140px"}); 
        $('.ar_dashboard_main_content_area').css({"flex":"0 0 95%"});    
        $('.ar_dashboard_main_sidebar_area').css({"flex":"0 0 5%"});    
      
        count = 1;
    }else{  

        $(this).css({'transform':'rotate(0)'});
        $('.sk_main_drp').show(); 
        $('.ar_navigation_logo a img').css({"width":"250px"}); 
        $('.ar_dashboard_main_content_area').css({"flex":"0 0 85%"});    
        $('.ar_dashboard_main_sidebar_area').css({"flex":"0 0 15%"});  
      
        count = 0; 
    }
    return false;
  }); 