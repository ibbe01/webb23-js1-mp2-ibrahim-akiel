function createDivs() {
    for(let i = 1; i < 6; i++ ) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    div.append(p);
    document.body.append(div);

    const placement = "center";
    const hue = (i - 1) * 45;
    const saturation = "100%";
    const lightness = "75%";
        // jag vet inte vilka färger du använde, hoppas dessa duger
    const color = `hsl(${hue}, ${saturation}, ${lightness})`;
    
    p.innerText = "Rad" + ' ' + i;

    p.style.textAlign = placement;
    p.style.backgroundColor = color
    p.style.fontSize = (10 + i * 4.5) + "px";
    
    }
}
function secondRow() {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const nummer = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];
  
    const parentDiv = document.createElement('div');
    document.body.append(parentDiv);
    parentDiv.style.backgroundColor = "none";
    parentDiv.style.height = "200px";
    parentDiv.style.display = "flex";
    parentDiv.style.alignItems = "center";
    parentDiv.style.justifyContent = "center";
    parentDiv.style.border = '1px solid black';
  
    for (let i = 0; i < 3; i++) {
      const divs = document.createElement('div');
      parentDiv.append(divs);
      divs.style.backgroundColor = "rgb(203, 195, 260)";
      divs.style.height = "180px";
      divs.style.width = "40px";
      divs.style.margin = "12%";
  
      divs.style.display = "flex";
      divs.style.flexDirection = "column";
      divs.style.alignItems = "center";
      divs.style.justifyContent = "center";
  
      if (i === 2) { // check if this is the last div
        for (let j = 0; j < nummer.length; j++) { // use nummer instead of numbers
          const p = document.createElement('p');
          const number = document.createTextNode(nummer[j]);
          p.append(number);
          divs.append(p);
          if(nummer[j] === 'sex') {
            p.style.margin = '0'
            p.style.backgroundColor = "none";
            p.style.width = "14px";
            }
         else if (j % 2 === 0) {
            p.style.backgroundColor = 'black';
            p.style.color = "white";
            p.style.fontSize = "14px"
            p.style.textAlign = "right"
            p.style.width = "27px";
          } else {
            p.style.backgroundColor = 'white';
            p.style.fontSize = "14px"
            p.style.textAlign = "right"
            p.style.width = "27px";
          }
          p.style.margin = '0'; // Add this line to set the margin of p elements to 0
        }
      } else if (i === 1) { // check if this is the second div
        for (let j = numbers.length - 1; j >= 0; j--) { // iterate over numbers in reverse order
          const p = document.createElement('p');
          const number = document.createTextNode(numbers[j]);
          p.append(number);
          divs.append(p);
          
          if(numbers[j] === 8) {
            p.style.backgroundColor = 'none';
            p.style.margin = '0';
            p.style.color = "white"
            p.style.fontSize = "14px";
        } 
          else if (numbers[j] % 2 === 0) {
            p.style.backgroundColor = 'black';
            p.style.margin = '0';
            p.style.color = "white";
            p.style.width = "20px"
            p.style.textAlign = "center"
            p.style.fontSize = "14px";
          } else {
            p.style.margin = '0';
            p.style.backgroundColor = 'white';
            p.style.width = "20px";
            p.style.textAlign = "center";
            p.style.fontSize = "14px";
          }
        }
      } else { // for the first div, use numbers as-is
        for (let j = 0; j < numbers.length; j++) {
          const p = document.createElement('p');
          const number = document.createTextNode(numbers[j]);
          p.append(number);
          divs.append(p);
            
            if(numbers[j] === 4) {
                p.style.backgroundColor = 'none';
                p.style.margin = '0';
                p.style.color = "white";
                p.style.width = "20px";
                p.style.fontSize = "14px";
            } 
            else if (numbers[j] % 2 === 0) {
            p.style.backgroundColor = 'black';
            p.style.margin = '0';
            p.style.color = "white";
            p.style.width = "20px";
            p.style.textAlign = "left";
            p.style.fontSize = "14px";
          } else {
            p.style.backgroundColor = 'white';
            p.style.margin = '0';
            p.style.width = "20px";
            p.style.fontSize = "14px";
            p.style.textAlign = "left"
            
        }
        }
      }
    }
  }
  
  
  
  

createDivs();
secondRow();

