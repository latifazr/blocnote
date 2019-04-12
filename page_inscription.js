function verification () {
if (Nom() && Tel() && Adresse() && mail() && Motpass())
       {
        alert (" inscription reusite");
        mytab();
       }
else {
        alert ("il faut remplire tous les champs correctement");
      }
}
   
    
// verification nom et prémon
function Nom()
{
    var n = document.getElementById("nom").value;
    var pn = document.getElementById("prenom").value;
    var ok = false;
    if(( n.length == 0)||( pn.length == 0))
    {
      alert( " nom ou/et prenom sont vide ");
    }
    if ( ver(n) && ver(pn) ) 
    { 
        ok = true ;
    }
    return ok;
}

function ver(s)
{
    nb="0,1,2,3,4,5,6,7,8,9,),(,[,],*,à,_,-,',&,@";
    rest = true;
    for (i=0;i<s.length;i++)
    {
        if (nb.indexOf(s[i]) > -1 )
        {
            rest = false ; 
            break;
        }
    }
  return rest;
}

function Adresse()
{
    var a=document.getElementById("adrs").value;
    r = true;
    if (a.length == 0)
    {
        r = false;
        alert(" adrs est vide ");
    }
    return r;
}

function Tel()
{
    var t=document.getElementById("tel").value;
    r = true ;
    if (t.length < 8)
    {
        r = false;
        alert(" n° tel invalide il faut que etre >=8 ");
    }
return r;
}

function mail()
{
    var ml=document.getElementById("mail").value;
    r=true;
    if ((ml.indexOf("@")<0) || (ml.indexOf(".")<0) || (ml =="") || ((ml.indexOf(".")) < (ml.indexOf("@"))))
    {    
        console.log("hello");
        alert("mail invalide");
        r=false;
    }
    return r;
}

function Motpass()
{
    var pm=document.getElementById("mp").value;
    r=true;
    if( pm.length < 8)
    {  
            r= false;
            alert ("mot de pass invalide");
    }
    return r;
}

function mytab()
{
   // var ID = '_' + Math.random().toString(36).substr(2, 9);
    var n = document.getElementById("nom").value;
    var pn = document.getElementById("prenom").value;
    var a=document.getElementById("adrs").value;
    var t=document.getElementById("tel").value;
    var ml=document.getElementById("mail").value;
    var pm=document.getElementById("mp").value;
    user= {
        id : generetID(),
        nom :n,
        prenom:pn,
        adresse:a,
        Tel:t,
        mail:ml,
        password:pm,
    }
    var TAB = JSON.parse(localStorage.getItem("tabU"))||[];
    if (TAB == null ) {TAB=[];}
    TAB.push(user);
    localStorage.setItem("tabU",JSON.stringify(TAB));
    console.log (TAB);
    id = user.id;
    console.log(id);
    
}

function generetID(){
 return '_' + Math.random().toString(36).substr(2, 9);

}
































//<a href=".\page_login.html">


