function laatikkoFunktio(boxNumber){
    alert("Nyt vaihdetaan laatikko"+ boxNumber + ":n sisältöä!");

    if (boxNumber == 1){
        document.getElementById("laatikko1").innerHTML = "<h1 class='uusiOtsikko1'>Tähän tulee uusi otsikko!</h1>"+ 
        "<p>Ja tähän tietysti jotain sisältöä...</p>";
        document.getElementById("laatikko1").style.lineHeight = "50px";
    }
    else if (boxNumber == 2){ 
        document.getElementById("laatikko2").innerHTML = "<table style='width:100%'>" +
        "<tr>"+
          "<th>etunimi</th>"+
          "<th>sukunimi</th>"+
          "<th>Age</th>"+
        "</tr>"+
        "<tr>"+
          "<td>patrik</td>"+
          "<td>räsänen</td>"+
          "<td>17</td>"+
        "</tr>"+
        "<tr>"+
          "<td>panu</td>"+
          "<td>liimatainen</td>"+
          "<td>17</td>"+
        "</tr>"+
      "</table>";
        // toiminnallisuus puuttuu!
    }
    else if (boxNumber == 3){
        document.getElementById("laatikko3").innerHTML ="<img src='omakuva.jpg' alt='jussi'>";
        //toiminnallisuus puuttuu!
    }
    else if (boxNumber == 4){
        document.location.reload();
    }
    
}
function yhteystietoFunktio() {
    var x = document.getElementById("yhteystietolomake");
    var text = "";
    var i;
    for (i =  x.length-1; i >= 0; i--) {
      text += x.elements[i].name +": "+ x.elements[i].value + "<br>";
    }
    document.getElementById("yhteystiedotTuloste").innerHTML = text;
  }
