let redim=false
let bouge=false
let inseretexte=false
/**
 * fonction determinant position x pour souris 
 */
let sourisX
/**fonction determinant position y pour souris  */
let sourisY
/** fonction de creation de tableau postit */
let tabpostit =[]
/** fonction permettant de creer plusieurs postit depart 0 */
let numCase=0


/** fonction d'ajout de postit jaune  */
let boutAjout =document.getElementById('boutplusJ')
let tabCookies =JSON.parse(readCookie('tabpostit'))

for (let i in tabCookies){
    numcase=tabpostit.length
    tabpostit.push(new postit(numcase))
    tabpostit[numCase].majPostit()
    tabpostit[numCase].affiche()
}

boutAjout.addEventListener('click',()=>{ 
    numCase=tabpostit.length
    tabpostit.push(new post_it(numCase,"yellow"))
    tabpostit[numCase].affiche()


})
/** fonction d'ajout de postit rose */
let boutAjout2 =document.getElementById('boutplusR')
boutAjout2.addEventListener('click',()=>{
    numCase=tabpostit.length
    tabpostit.push(new post_it(numCase,"pink"))
    tabpostit[numCase].affiche()
})
/** fonction d'ajout de postit bleu */
let boutAjout3 =document.getElementById('boutplusB')
boutAjout3.addEventListener('click',()=>{
    numCase=tabpostit.length
    tabpostit.push(new post_it(numCase,"paleturquoise"))
    tabpostit[numCase].affiche()

})

document.body.addEventListener('click',()=>{
redim=false
bouge=false
inseretexte=false

})

document.body.addEventListener('mousemove', (e)=>{

sourisX=e.clientX
sourisY=e.clientY


if(bouge==true){
tabpostit[numCase].bouge(e.clientX -20,e.clientY -20)
tabpostit[numCase].affiche()

}

else if (redim==true){ 
tabpostit[numCase].redim(tabpostit[numCase].LInit +(e.clientX - tabpostit[numCase].sourisXInit),
tabpostit[numCase].HInit+(e.clientY - tabpostit[0].sourisYInit))
tabpostit[numCase].affiche()

}

})

document.body.addEventListener('keydown',(e)=>{
    if(inseretexte==true)
    if(e.key=='Enter'){
    tabpostit[numCase].inseretexte(tabpostit[numCase].texte+"<br>")
    tabpostit[numCase].affiche()
}
    else if(e.key=='Shift'){

    }
    else if (e.key==" "){
        tabpostit[numCase].inseretexte(tabpostit[numCase].texte+"&nbsp;")
        tabpostit[numCase].affiche()
    

    }
    else if (e.key=="Backspace"){
        tabpostit[numCase].inseretexte(tabpostit[numCase].texte.substr(0, tabpostit[numCase].texte.lenght -1))
        tabpostit[numCase].affiche()
    
    }


     else{ tabpostit[numCase].inseretexte(tabpostit[numCase].texte+e.key)
        tabpostit[numCase].affiche()
    

}

    
})  


setInterval(saveTableau,1000)
function saveTableau(){

createCookie("tabpostit",JSON.stringify(tabpostit,30)){
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
        console.log.cookie
	}
	else var expires = "";
    document.cookie = tabpostit + "=" + value + expires + "; path=/; SameSite=None; Secure";
    }



readCookie(tabpostit) {
	var nameEQ = tabpostit + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(tabpostit) {
	createCookie(tabpostit,"",-1);
}}
