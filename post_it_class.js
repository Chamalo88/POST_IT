class post_it{
Height;
Width ;
couleur;
x ;
y


 constructor (Height,Width,couleur,x,y){
   
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

  
    monElem.style.top=this.y +"px"
    monElem.style.left=this.x +"px"
    monElem.style.height = this.Height+"px"
    monElem.style.width = this.Width+"px"
    monElem.style.backgroundColor=this.couleur
  
 
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



}