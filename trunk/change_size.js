var cs = 13;
var sm = 21;
var smi = 8;
function tangsize(){
    var fs = cs;
    if(fs < sm){
        fs++;
        cs = fs;
        jQuery('.post-body').css("font-size",fs+'px');
    }
}
function giamsize(){
    var fs = cs;
    if(fs > smi){
        fs--;
        cs = fs;
        jQuery('.post-body').css("font-size",fs+'px');
    }
}
function reset_size(){
    cs=13;
    jQuery('.post-body').css("font-size",cs);
}
