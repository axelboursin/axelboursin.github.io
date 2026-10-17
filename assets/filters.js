(function(){
  var btns=document.querySelectorAll('.filters button');
  var cards=document.querySelectorAll('.proj');
  btns.forEach(function(b){
    b.addEventListener('click',function(){
      var f=b.getAttribute('data-f');
      btns.forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')});
      cards.forEach(function(c){c.hidden=!(f==='all'||c.getAttribute('data-cat').split(' ').indexOf(f)>-1)});
    });
  });
})();
