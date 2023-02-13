// Créer UN module qui permet de calculer 
// 	- Combien de jours il reste avant Noël
// 	- Combien de jours il reste avant votre anniversaire
// 	- Combien de jours il reste avant les vacances

// 	- Bonus : Combien de jours avant le prochain solstice
// 		21 juin, 21 décembre
// 	- Bonus horrible : Combien de jours avant le prochain vendredi 13

let calculDate = function(dateDonner) {
    this.date=dateDonner.getTime();
    this.ajd=new Date();
    this.ajd=this.ajd.getTime();
    this.test=(this.date-this.ajd)/(1000*60*60*24);
}

module.exports=calculDate;