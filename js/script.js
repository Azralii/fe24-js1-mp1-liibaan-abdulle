const newHue = 200; // Basnyans (justera för olika färgtoner)

// Skapa första containern
const container1 = document.createElement('div');
container1.style.display = "flex"; 
container1.style.flexDirection = "column"; 
container1.style.alignItems = "center"; 
container1.style.justifyContent = "center"; 
container1.style.height = "50vh"; 
document.body.appendChild(container1);

// Skapa rad 1
const rad1 = document.createElement('h1');
rad1.innerText = "Rad 1";
rad1.style.color = `hsl(${(newHue + 180) % 360}, 80%, 20%)`; // Mörkare kontrastfärg
rad1.style.backgroundColor = `hsl(${newHue}, 30%, 90%)`; // Ljusa nyanser för bakgrund
rad1.style.padding = "6px";
rad1.style.width = "50%";
rad1.style.textAlign = "center";
rad1.style.fontSize = "14px";
container1.appendChild(rad1);

// Skapa rad 2
const rad2 = document.createElement('h2');
rad2.innerText = "Rad 2";
rad2.style.color = `hsl(${(newHue + 160) % 360}, 70%, 20%)`; // Mörk nyans för kontrast
rad2.style.backgroundColor = `hsl(${newHue + 20}, 30%, 90%)`; // Ljus ton för bakgrund
rad2.style.padding = "7px";
rad2.style.width = "50%";
rad2.style.textAlign = "center";
rad2.style.fontSize = "16px";
container1.appendChild(rad2);

// Skapa rad 3
const rad3 = document.createElement('h3');
rad3.innerText = "Rad 3";
rad3.style.color = `hsl(${(newHue + 140) % 360}, 80%, 20%)`;
rad3.style.backgroundColor = `hsl(${newHue + 40}, 30%, 90%)`;
rad3.style.padding = "8px";
rad3.style.width = "50%";
rad3.style.textAlign = "center";
rad3.style.fontSize = "18px";
container1.appendChild(rad3);

// Skapa rad 4
const rad4 = document.createElement('h4');
rad4.innerText = "Rad 4";
rad4.style.color = `hsl(${(newHue + 120) % 360}, 80%, 20%)`;
rad4.style.backgroundColor = `hsl(${newHue + 40}, 30%, 85%)`;
rad4.style.padding = "9px";
rad4.style.width = "50%";
rad4.style.textAlign = "center";
rad4.style.fontSize = "20px";
container1.appendChild(rad4);

// Skapa rad 5
const rad5 = document.createElement('h5');
rad5.innerText = "Rad 5";
rad5.style.color = `hsl(${(newHue + 140) % 360}, 80%, 20%)`;
rad5.style.backgroundColor = `hsl(${newHue + 40}, 50%, 80%)`;
rad5.style.padding = "10px";
rad5.style.width = "50%";
rad5.style.textAlign = "center";
rad5.style.fontSize = "24px";
container1.appendChild(rad5);

// Skapa andra containern för kolumner
const container2 = document.createElement('div');
container2.style.display = 'grid';
container2.style.gridTemplateColumns = '1fr 1fr 1fr';  // Tre lika breda kolumner
container2.style.justifyContent = 'center';  // Centrerar kolumnerna horisontellt i container
container2.style.alignItems = 'flex-start';  // Justera vertikalt om så behövs
container2.style.marginTop = 'px';
container2.style.border = '1px solid black';  // Svart kant runt hela containern
container2.style.width = '50%';  // Sätt bredden till 50% av sidan
container2.style.margin = '10px auto';  // Centrerar containern horisontellt
container2.style.padding = '5px';  // Lägger till utrymme mellan kant och kolumner
document.body.appendChild(container2);

// Skapa tre kolumner med hjälp av en loop
const numbersDown = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];  // Kolumn 1: 9 till 0 (vänsterjusterat)
const numbersUp = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];    // Kolumn 2: 0 till 9 (centrerat)
const textArray = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"]; // Kolumn 3: ett till tio (högerjusterat)
const arrays = [numbersDown, numbersUp, textArray];  // Array med alla data för kolumner

// Skapa kolumner och celler
for (let i = 0; i < arrays.length; i++) {
    const column = document.createElement('div');
    column.style.display = 'flex';
    column.style.flexDirection = 'column';
    column.style.margin = '40px';
    column.style.border = '10px solid purple';  // Grå kant runt varje kolumn
    column.style.padding = '0px';

    // Loopa igenom varje array (kolumnens innehåll)
    for (let j = 0; j < arrays[i].length; j++) {
        const cell = document.createElement('div');
        cell.innerText = arrays[i][j];  // Sätt cellens textinnehåll
        
        // Bestäm bakgrundsfärg baserat på om indexet är jämnt eller udda
        if (j % 2 === 0) {
            cell.style.backgroundColor = 'black';  // Jämna index får svart bakgrund
            cell.style.color = 'white';  // Vit text
        } else {
            cell.style.backgroundColor = 'white';  // Udda index får vit bakgrund
            cell.style.color = 'black';  // Svart text
        }

      // Anpassa specifika celler till lila
      if (
        (i === 0 && j === 5) || // Kolumn 1, cell 4
        (i === 1 && j === 1) || // Kolumn 2, cell 8
        (i === 2 && j === 5)    // Kolumn 3, cell 6
    ) {
        cell.style.backgroundColor = 'purple';  // Lila bakgrund
        cell.style.color = 'white';            // Vit text
    }

        // Justera textjustering beroende på kolumn
        if (i === 0) {
            cell.style.textAlign = 'left';  // Första kolumnen (9 till 0) till vänster
        } else if (i === 1) {
            cell.style.textAlign = 'center';  // Andra kolumnen (0 till 9) i mitten
        } else if (i === 2) {
            cell.style.textAlign = 'right';  // Tredje kolumnen (ett till tio) till höger
        }

        // Lägg cellen till kolumnen
        column.appendChild(cell);
    }

    // Lägg kolumnen till containern
    container2.appendChild(column);
}
