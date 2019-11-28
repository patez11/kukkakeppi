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
  function diagrammiFunktio(){
    // etsitään harjoitus2.html sivulta elementti, jonka id=myCanvas
    var c = document.getElementById('myCanvas');
    var ctx = c.getContext('2d');
    ctx.beginPath();

    // diagrammiin voidaan kirjoittaa numeroita haluttuihin kohtiin.
    ctx.fillText('50', 0, 450);
    
    // Alla olevalla koodilla voidaan piirtää viivaa diagrammiin.
    ctx.moveTo(40, 200);
    ctx.fillText('200', 40, 200);
    ctx.lineTo(60, 250);
    ctx.fillText('250', 60, 250);
    ctx.lineTo(80, 200);
    ctx.fillText('200', 80, 200);
    ctx.lineTo(100, 220);
    ctx.fillText('220', 100, 220);
    ctx.lineTo(120, 240);
    ctx.fillText('240', 110, 240);
    ctx.lineTo(140, 260);
    ctx.fillText('260', 140, 260);
    ctx.lineTo(160, 280);
    ctx.fillText('280', 160, 280);
    ctx.lineTo(180, 120);
    ctx.fillText('120', 180, 120);
    ctx.lineTo(200, 80);
    ctx.fillText('80', 200, 80);
    ctx.lineTo(205, 111);
    ctx.fillText('111', 205, 111);
    ctx.stroke();

    ctx.fillText('80', 10, 100);
    ctx.fillText('111', 10, 120);
    ctx.fillText('120', 10, 140);
    ctx.fillText('140', 10, 160);
    ctx.fillText('160', 10, 180);
    ctx.fillText('200', 10, 200);
    ctx.fillText('220', 10, 220);
    ctx.fillText('240', 10, 240);
    ctx.fillText('250', 10, 260);
    ctx.fillText('260', 10, 280);
    ctx.fillText('280', 10, 300);

    ctx.fillText('200', 40, 300);
    ctx.fillText('250', 60, 300);
    ctx.fillText('200', 80, 300);
    ctx.fillText('220', 100, 300);
    ctx.fillText('240', 120, 300);
    ctx.fillText('260', 140, 300);
    ctx.fillText('280', 160, 300);
    ctx.fillText('80', 180, 300);
    ctx.stroke();


  }
    
    
