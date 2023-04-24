let array = ["Abel", "Alexandra","Anthony","Benjamin","Bruno","Delphine","Emilien","Ethan","Ismaël","Jodie","Julien","Louka","Loïc","Luciano","Marine","Nikko","Noa","Steve","Sylvain","Willy"];
const article = document.querySelector("article");

// Fisher-Yates shuffle algorithm
for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
}

for (let i = 0; i < array.length; i++) {
    const section = document.createElement('section');
    const sectionParagraph = document.createElement('p');
    sectionParagraph.textContent = array[i];
    section.appendChild(sectionParagraph);
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    section.style.backgroundColor = randomColor;

    // Check the brightness of the background color
    const brightness = (0.299 * parseInt(randomColor.substring(1,3), 16) + 0.587 * parseInt(randomColor.substring(3,5), 16) + 0.114 * parseInt(randomColor.substring(5,7), 16));
  
    // Set the text color to white if the brightness is below a certain threshold
    if (brightness < 128) {
        sectionParagraph.style.color = 'white';
    }

    article.appendChild(section);
}

