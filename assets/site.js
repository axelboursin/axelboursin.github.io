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

(function(){
  var btn=document.querySelector('.pdf-btn');
  if(!btn)return;
  var title=document.title;
  btn.addEventListener('click',function(){
    // The browser uses document.title as the default PDF file name
    document.title=btn.getAttribute('data-file');
    (document.fonts?document.fonts.ready:Promise.resolve()).then(function(){window.print()});
  });
  window.addEventListener('afterprint',function(){document.title=title});
})();
