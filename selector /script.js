
let titre = document.querySelectorAll(".important");
for (elem of titre){
    elem.setAttribute("title", "This is an important item");
}
let images = document.getElementsByTagName('img');

for (i=0; i<images.length;i ++){
    let image = images[i];
    if(!image.classList.contains("important")){
        image.style.display= 'none';
    }
}
const paragraphs = document.querySelectorAll('p');

for (let i = 0; i < paragraphs.length; i++) {
  const paragraph = paragraphs[i];
  if (!paragraph.classList.length) {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    paragraph.style.color = randomColor;
  }
}

