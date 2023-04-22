function UnosImena(){
    var igrac=prompt("Unesite vaše ime.");
    var niz=igrac.split(" ");
    for(var i=0; i<niz.length;i++){
        niz[i]=niz[i].charAt(0).toUpperCase()+ niz[i].slice(1);
    }
    var igrac1=niz.join(" ");
    document.getElementById("dobrodosli").innerHTML="Dobrodošli, "+igrac1+" u igru Kamen Papir Makaze!";
    document.getElementById("protivnik").innerHTML="Vaš protivnik je: Kompjuter.";
    document.getElementById("opisigre").innerHTML="Izaberite Kamen, Papir ili Makaze. ⬇"
}

var naslov;
naslov="<h1 style='color:greenyellow;position:absolute;left:800px;top:5px;' id='naslov' align='center' onmouseover='promenaStila()'>Kamen Papir Makaze</h1>";
document.write(naslov);

function promenaStila(){
    var naslov = document.getElementById('naslov');

    naslov.style.fontSize="40";
    naslov.style.padding="20px";
    naslov.style.background="black";
    naslov.style.color="#60718F";
    return;
}

var rezultat=[0,0];
var igracodabir;

function IgracOdabir(x){
   switch(x){
        case 1:
            igracodabir="kamen";
            kompjuterodabir=PromenaKompOdabira()
            if (kompjuterodabir=="makaze"){
                document.getElementById("ispis").innerHTML="Kompjuter je izabrao makaze, a ti "+igracodabir+ ". Pobedio si!"
                rezultat[0]++;
            }else if(kompjuterodabir=="papir"){
                document.getElementById("ispis").innerHTML="Kompjuter je izabrao papir, a ti "+igracodabir+ ". Izgubio si!"
                rezultat[1]++;
            }else {
                document.getElementById("ispis").innerHTML="Kompjuter je izabrao kamen, a ti "+igracodabir+ ". Nerešeno!"
            }
            break;
            
        case 2:
            igracodabir="papir";
            kompjuterodabir=PromenaKompOdabira()
            if (kompjuterodabir=="makaze"){
                document.getElementById("ispis").innerHTML="Kompjuter je izabrao makaze, a ti "+igracodabir+ ". Izgubio si!"
                rezultat[1]++;
            }else if(kompjuterodabir=="papir"){
                document.getElementById("ispis").innerHTML="Kompjuter je izabrao papir, a ti "+igracodabir+ ". Nerešeno!"
            }else {
                document.getElementById("ispis").innerHTML="Kompjuter je izabrao kamen, a ti "+igracodabir+ ". Pobedio si!"
                rezultat[0]++;
            }
            break;
        case 3:
            igracodabir="makaze";
            kompjuterodabir=PromenaKompOdabira()
            if (kompjuterodabir=="makaze"){
                document.getElementById("ispis").innerHTML="Kompjuter je izabrao makaze, a ti "+igracodabir+ ". Nerešeno!"
            }else if(kompjuterodabir=="papir"){
                document.getElementById("ispis").innerHTML="Kompjuter je izabrao papir, a ti "+igracodabir+ ". Pobedio si!"
                rezultat[0]++;
            }else {
                document.getElementById("ispis").innerHTML="Kompjuter je izabrao kamen, a ti "+igracodabir+ ". Izgubio si!"
                rezultat[1]++;
            }
            break;
    }
    return igracodabir;
}

function Rezultat(){
    document.getElementById("rezultat").innerHTML= "Kompjuter: "+rezultat[1]+ " - Igrač: "+rezultat[0];
}

function PromenaKompOdabira(){
    var kompjuterodabir=Math.floor(Math.random()*100)+1;

if(kompjuterodabir<=33){
    kompjuterodabir="kamen";
}else if (kompjuterodabir<=67){
    kompjuterodabir="papir";
}else{
    kompjuterodabir="makaze";
}
return kompjuterodabir;
}

function hvala(){
    var ime1=document.poruka1.ime.value;
    alert("Hvala na poslatom komentaru, "+ime1+"!");
    return;
}

function obrisiUnos() {
    document.getElementById("poruka1").reset();
}

function resetujRezultat(){
    rezultat[0]=0;
    rezultat[1]=0;
    document.getElementById("ispis").innerHTML="Rezultat Restartovan!";
    document.getElementById("rezultat").innerHTML= "Kompjuter: "+rezultat[1]+ " - Igrač: "+rezultat[0];
}

