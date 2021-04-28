let redim=false
let bouge=false
let inseretexte=false
let sourisX
let sourisY



let postit1 =new post_it("postit1")

postit1.affiche()


document.body.addEventListener('click',()=>{
redim=false
bouge=false
inseretexte=false

})

document.body.addEventListener('mousemove', (e)=>{

sourisX=e.clientX
sourisY=e.clientY


if(bouge==true){
postit1.bouge(e.clientX -20,e.clientY -20)
postit1.affiche()

}

else if (redim==true){
  
postit1.redim(postit1.LInit +(e.clientX - postit1.sourisXInit),
postit1.HInit+(e.clientY - postit1.sourisYInit))
postit1.affiche()

}

})

document.body.addEventListener('keydown',(e)=>{
    if(inseretexte==true)
if(e.key=='Enter'){
    postit1.inseretexte(postit1.texte+"<br>")
    postit1.affiche()
}
    else if(e.key=='Shift'){

    }
    else if (e.key==" "){
        postit1.inseretexte(postit1.texte+"&nbsp;")
        postit1.affiche()
    

    }
    else if (e.key=="Backspace"){
        postit1.inseretexte(postit1.texte.substr(0, postit1.texte.lenght -1))
        postit1.affiche()
    
    }


     else{ postit1.inseretexte(postit1.texte+e.key)
        postit1.affiche()
    

}})

