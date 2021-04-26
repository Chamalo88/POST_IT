class post_it{
texte;
Height;
Width ;
couleur;
x ;
y


 constructor (){
    this.texte=""
    this.Height=120
    this.Width=120
    this.couleur="yellow"
    this.x=150
    this.y=150

 }
 
 
affiche() {
   
    let contener = document.getElementById('contener')
    
  
    let monElem = document.createElement('div');
    monElem.classList.add("post_it")
 
    monElem.innerHTML=this.texte
    monElem.style.top=this.y +"px"
    monElem.style.left=this.x +"px"
    monElem.style.height = this.Height+"px"
    monElem.style.width = this.Width+"px"
    monElem.style.backgroundColor=this.couleur
    
    monElem.style.position="fixed"
  
 
    contener.appendChild(monElem)
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
}

inseretexte(text){
                this.texte=text


}
}

