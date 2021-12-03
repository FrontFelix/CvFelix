# CV_Felix
 
## Demo Sida
Här är min demo sida [Demo Sida](https://frontfelix.github.io/Labb-3/).

## Uppgiften
Uppgiften gick ut på att skapa sig en egen CV sida och sidan skulle vara interaktiv med javascript. Det jag gjorde som var häftigt var att lägga in att man kunde ändra språk på hemsidan och då ändrades innehållet på hemsidan beroende på vilket språk man valde. Sen la jag även till en liten effekt när man startade hemsidan att top innehållet kom inflygandes från botten.

Har även gjort min egna CV sida på min Fritid som är lite mer detaljerat [Devfelix](https://devfelix.com/).

## Hur jag skapade det
För att ändra språken så gjorde jag att alla min P taggar & H1 taggar fick varsit ID som jag sedan sparade i en array som kallas "textVar". Och med hjälp av Localstorage så la jag in att i början om man inte hade valt ett språk så kommer det upp antingen svenska eller engelska beroende på vad man valde så sparades antingen "Eng" eller "Swe" i en variabel i localstorage som jag sedan kunde använda mig utav.
Med hjälp utav localstorage så kunde jag se vad användaren hade valt för språk och sedan ändra alla min P & H1 taggar beroende på. 
Om man valde fel språk så kunde man även välja längst upp på sidan att byta språk igen.

Effekten på sidan skapades med hjälp av en simpel transition och Transform:TranslateX, då satte jag en -px från start sedan när sidan laddes in så kunde jag ändra det valuet. 
