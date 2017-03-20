window.addEventListener('load',function () {
var s=0;var ss=0;
function spClickListening (event) {
      var sp=event.target;
    if (sp.matches('p span')){
        if(s===0){
        sp.classList.add('active');
        s++;
        ss=sp;

            }
        else {
            sp.classList.add('active');
            ss.classList.remove('active');
            ss=sp;

        }

    }
    else{
        ss.classList.add('active');

        ss.addEventListener('transitionend',fun);
    }
}
function fun(event) {
 var t=event.target;
   // t.removeEventListener('transitionend',fun);
    t.classList.remove('active');
}



document.body.addEventListener('click',spClickListening);
});