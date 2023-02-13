// Créer UN module qui permet de calculer 
// 	- Combien de jours il reste avant Noël
// 	- Combien de jours il reste avant votre anniversaire
// 	- Combien de jours il reste avant les vacances

// 	- Bonus : Combien de jours avant le prochain solstice
// 		21 juin, 21 décembre
// 	- Bonus horrible : Combien de jours avant le prochain vendredi 13

let calculDate ={
    // this.date=new Date();
    // this.ajd=new Date();
    // this.ajd=this.ajd.getTime();
    // this.test=(this.date-this.ajd)/(1000*60*60*24);

    jourAvantNextNoel:()=>{
        this.date=new Date();
        this.ajd=new Date();
        this.ajd=this.ajd.getTime();
        this.date=new Date('2023-12-25');
        this.test=(this.date-this.ajd)/(1000*60*60*24);
        console.log(`A titre informatif : ${this.test}`);
    },
    jourAvantNextBD:()=>{   
        this.date=new Date('2024-01-22');
        this.test=(this.date-this.ajd)/(1000*60*60*24);
        console.log(`A titre informatif : ${this.test}`);
    },
    coucou:()=>{
        console.log("coucou");
    }
   
}

module.exports=calculDate;