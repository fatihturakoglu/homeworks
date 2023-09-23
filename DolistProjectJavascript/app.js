let addToDoButton = document.getElementById('addToDO');
let todoContainer = document.getElementById('todoContainer');
let inputTEXT = document.getElementById('inputTEXT');
let silButton = document.getElementById('Sil');


addToDoButton.addEventListener('click',function(event){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    todoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputTEXT.value;  /* inputun içine attığımız değeri paragraph içine atar */
    inputTEXT.value = "";
    event.preventDefault();

    /* paragraph üzerine tıklandığında çizmesi  */
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = 'Line-through';
    })

    silButton.addEventListener('click', function(){
        paragraph.style.display = 'none';
    })  
})
































