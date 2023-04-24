document.title ="Modifying the dom";
document.body.style.backgroundColor = "red";


// let body = document.body;
// let childNodes = body.childNodes;

// for(let i = 0; i < childNodes.length; i++) {
//   let childNode = childNodes[i];
//   if(childNode.nodeType === Node.ELEMENT_NODE) {
//     console.log(childNode); 
//   }
// }

let child = document.body.children;

for (elem of child){

    console.log(elem);
}