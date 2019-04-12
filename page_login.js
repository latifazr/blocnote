function verif(){
    var l=document.getElementById("log").value;
    var m=document.getElementById("mp").value;

    var tab = JSON.parse(localStorage.getItem("tabU"));
    if ((l.length== 0 )||(m.length == 0)){
        alert ("il faut remplire ts les champs");
    }
    else{ var t = false
        for (let i=0;i<tab.length;i++){
            if((l === tab[i].mail) && ( m === tab[i].password))
            {
                location.href="page_user.html";
                localStorage.setItem("authentification",tab[i].id);
                t = true;
                break;      
            }
            }
            if ( t = false )
            {  alert("mail ou/et mot de pass incorret");}
         }   
}

