/**
 * @ Virginie Ley
 * @ version 1.0
 * @ classe de postit
 *
 */

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

/**
 * constructeur de la classe postit
 * @param {number} id 
 * @param {string} couleur 
 */
constructor (id,couleur){
    this.texte=""
    this.Height=300
    this.Width=300
    this.couleur=couleur
    this.x=430
    this.y=20
    this.id=id
  

 }
 
 /**
  * fonction qui affiche le post it
  *
  */
affiche() {
    /**fonction de creation de l'element */
    let monElem = document.getElementById(this.id);
   if(monElem===null){
       monElem=document.createElement ('div');
        monElem.id=this.id;
        document.body.appendChild(monElem);
      
}      
   
        monElem.innerHTML=this.texte
        monElem.style.top=this.y +"px"
        monElem.style.left=this.x +"px"
        monElem.style.height = this.Height+"px"
        monElem.style.width = this.Width+"px"
        monElem.style.backgroundColor=this.couleur
         monElem.style.position="fixed"

   /**
    * fonction de creation de la Boite à outil après innerHTML
    
    */
   let menu = document.createElement('div')
         menu.style.height = '20px'
         menu.style.border = '1px solid black'
         menu.style.position = "absolute"
         menu.style.bottom = '0'
         menu.style.right = '0'
         menu.style.width = this.largeur + "px"
         monElem.appendChild(menu)
/**
 * fonction de creation du bouton bouge dans le postit
 */
   let bout1 = document.createElement('i')
        bout1.classList.add('fas')
        bout1.classList.add('fa-arrows-alt')
        bout1.addEventListener('click',(e)=>{
        bouge=true
        e.stopPropagation()
   })
/**
 * fonction de creation du bouton redim dans le postit
 * 
 */
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
    /**
     * fonction de creation du bouton inseretexte dans le postit
     */
    let bout3 = document.createElement('i')
        bout3.classList.add('far')
        bout3.classList.add('fa-edit')
        bout3.addEventListener('click',(e)=>{
        inseretexte=true
        e.stopPropagation()

    })


 /**
  * faire apparaitre les boutons dans le post dans le postit
  */
   menu.appendChild(bout1)
   menu.appendChild(bout2)
   menu.appendChild(bout3)

 
}
/**Fonction de redimensionnement du postit
 * @param {number} L 
 * @param {number} H 
 */
redim(L,H){
                this.Width=L
                this.Height=H

}
/**
 * fonction pour bouger le postit
 * @param {number} x 
 * @param {number} y 
 */
bouge(x,y){
                this.x=x
                this.y=y
         


}
/**
 * Fonction de modification couleur du postit
 * @param {string} coul 
 */
couleurmodif(coul){
                this.couleur=coul
       
    
    }
                
                
                
/**
 * Fonction de insertion de texte du postit
 * @param {string} text
 */

inseretexte(text){
                this.texte=text


}


majPostit(){
    this.x
    this.y
    this.couleur
    this.Height
    this.Width
    this.texte
}
}
