class post_it{
texte;
Height;
Width ;
couleur;
x ;
y;
id;
LInit;
HInit;
sourisXInit;
sourisYInit;






 constructor (id){
    this.texte=""
    this.Height=300
    this.Width=300
    this.couleur="pink"
    this.x=430
    this.y=20
    this.id=id
  

 }
 
 
affiche() {
    
    let monElem = document.getElementById(this.id);
   if(monElem===null){
       monElem=document.createElement ('div');
    monElem.id=this.id;
    document.body.appendChild(monElem);
    monElem.addEventListener('wheel',(e)=>{

    })
}      
   
   monElem.innerHTML=this.texte
   monElem.style.top=this.y +"px"
   monElem.style.left=this.x +"px"
   monElem.style.height = this.Height+"px"
   monElem.style.width = this.Width+"px"
   monElem.style.backgroundColor=this.couleur
   monElem.style.position="fixed"
   //Boite à outil après innerHTML
   let menu = document.createElement('div')
   menu.style.height = '20px'
   menu.style.border = '1px solid black'
   menu.style.position = "absolute"
   menu.style.bottom = '0'
   menu.style.right = '0'
   menu.style.width = this.largeur + "px"
   monElem.appendChild(menu)

   let bout1 = document.createElement('i')
   bout1.classList.add('fas')
   bout1.classList.add('fa-arrows-alt')
   bout1.addEventListener('click',(e)=>{
       bouge=true
       e.stopPropagation()
   })

    let bout2 = document.createElement('i')
    bout2.classList.add('fas')
    bout2.classList.add('fa-expand-arrows-alt')
    bout2.addEventListener('click',(e)=>{
        redim=true
        this.LInit=this.Width
        this.HInit=this.Height
        this.sourisXInit=sourisX
        this.sourisYInit=sourisY
        e.stopPropagation()

    })
    let bout3 = document.createElement('i')
    bout3.classList.add('far')
    bout3.classList.add('fa-edit')
    bout3.addEventListener('click',(e)=>{
       inseretexte=true
        e.stopPropagation()

    })


 
   menu.appendChild(bout1)
   menu.appendChild(bout2)
   menu.appendChild(bout3)

 
}
redim(L,H){
                this.Width=L
                this.Height=H

}
bouge(x,y){
    this.x=x
    this.y=y
         


}

couleurmodif(coul){
    this.couleur=coul
        document.getElementById(this.id).style.backgroundColor="coul"
    
    }
                
                
                


inseretexte(text){
       this.texte=text


}

}
