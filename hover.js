const b = document.querySelector('button.btnn')
b.addEventListener("mouseover", moveHover)

function moveHover (){
    const i=Math.floor(Math.random()*500)+1 ;
    const j=Math.floor(Math.random()*500)+1 ;

    b.style.left=i+"px"
    b.style.left=j+"px"
}