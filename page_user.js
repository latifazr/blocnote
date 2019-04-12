// affichage nom utilisateur
function nom(){
    var Ulist  = JSON.parse(localStorage.getItem("tabU"));
    var user   = localStorage.getItem("authentification");
       for(i=0;i<Ulist.length;i++){
      if (user == Ulist[i].id) {
           var nom = Ulist[i].prenom;}
    }
    var pn = document.getElementById("nm").innerHTML = nom; 
}
// fonction déconnecter
function deconnecter(){
   localStorage.removeItem("authentification");
}
// fonction ajou note
function ajouter(){
    var date  = document.getElementById("day").value;
    var titre = document.getElementById("tit").value;
    var txt   = document.getElementById("text").value;
    var user = localStorage.getItem("authentification");
    if (( date.length != 0) && ( titre.length != 0) && ( txt.length != 0)){
    note = {
        id :generetID(),
        day  :  date ,
        titre : titre ,
        text : txt ,
        idUser : user,
    }
    var TABN = JSON.parse(localStorage.getItem("tabN"))||[];
    if (TABN == null ) {TABN=[];}
    TABN.push(note);
    alert (" votre note a ete ajouter");
    localStorage.setItem("tabN",JSON.stringify(TABN));
}
else { alert (" il faut remplire tous les champs ");}
}

// function consulter
function consulter(){
    var Ulist = JSON.parse(localStorage.getItem("tabU"));
    var note = JSON.parse(localStorage.getItem("tabN")); 
    var user = localStorage.getItem("authentification");
       for(i=0;i<Ulist.length;i++){
       if ( Ulist[i].id == user)
      {
        document.getElementById("liste").style.display = "block";
        for(j=0;j<note.length;j++){
            if ( note[j].idUser == user){
        var i=note[j].id;
        var date = note[j].day;
        var titre = note[j].titre;
        var text = note[j].text;
        doc = document.getElementById("aa");
        doc.innerHTML+=`
        <table id="${i}">
                  <tr>
            <td >${date}                                 </td>
            <td >${titre}                                </td>
            <td >${text}                                 </td>
            <td ><button onclick="afficher('${i}')">afficher</button></td>
            <td ><button onclick="supprimer('${i}')">supprimer</button></td>
            <td ><button onclick="modifier('${i}')">modifier</button></td>
                   </tr>
        </table>`; 
       } ;
    }
    }
}
}


function Nov()
{
    document.getElementById("nouveau").style.display = "block";
}


function generetID()
{
    return '_' + Math.random().toString(36).substr(2, 9);
}

function afficher(iduser){
    var note = JSON.parse(localStorage.getItem("tabN"));
    for (j=0;j<note.length;j++){
        if ( note[j].id == iduser){
            document.getElementById("aff").style.display = "block";
            var titre = note[j].titre;
            var date  = note[j].day;
            var txt   = note[j].text;
            var t = document.getElementById("tit1").innerHTML = titre;
            var d = document.getElementById("day1").innerHTML = date ;
            var x = document.getElementById("txt").innerHTML = txt ;
            break;
        }
    }

}

function supprimer(iduser){
    var note = JSON.parse(localStorage.getItem("tabN"));
    for (j=0;j<note.length;j++){
        if ( note[j].id == iduser){
            var i= note[j].id;
            note.splice(i,1);
            alert(" votre note a ete supprimer")
            localStorage.setItem ("tabN",JSON.stringify(note));
            break;
        }
    }
}

function modifier(idu){
    var note = JSON.parse(localStorage.getItem("tabN"));
    var user = localStorage.getItem("authentification");
    for (j=0;j<note.length;j++){
        if ( note[j].id == idu){
            var i= note[j].id;
            afficher(idu);
            ajouMOD(idu , note , user);
            alert(" votre note a ete modiffier")
            break;
        }
    }
}

function ajouMOD(ids , n , u){
    var date  = document.getElementById("day1").value;
    var titre = document.getElementById("tit1").value;
    var txt   = document.getElementById("txt").value;
    if (( date.length != 0) && ( titre.length != 0) && ( txt.length != 0)){
    u = {
        id :ids,
        day  :  date ,
        titre : titre ,
        text : txt ,
        idUser : u,
    }
    note.push(u);
    localStorage.setItem ("tabN",JSON.stringify(note));
}
else { alert (" il faut remplire tous les champs ");}
}