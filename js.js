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

}



document.body.addEventListener('click',spClickListening);
});