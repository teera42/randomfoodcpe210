$(document).ready(function(){
    var menu = $(".left-sidebar");
    var side = $(".side");
    var line = $(".line");
    var close = $(".close");
    var menuopen;       
  
  function openMenu(){
    menu.css("left","0%");
    line.css("background" , "#111");
    menuopen = true;
  }
  function closeMenu(){
    menu.css("left","-20%");
    line.css("background" , "#bcad90");
    menuopen = false;
  }
  function toggleMenu(){
    if(menuopen){
        closeMenu();
    }
    else{
        openMenu();
    }
  }
  side.on({
    mouseenter: function() {
        openMenu();
    }
  });
  close.on({
  click:function(){
    toggleMenu();
  }
  });
  });