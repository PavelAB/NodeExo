// Créer UN module qui permet de calculer 
// 	- Combien de jours il reste avant Noël
// 	- Combien de jours il reste avant votre anniversaire
// 	- Combien de jours il reste avant les vacances

// 	- Bonus : Combien de jours avant le prochain solstice
// 		21 juin, 21 décembre
// 	- Bonus horrible : Combien de jours avant le prochain vendredi 13


let date;


let calculDate ={
    
    

    jourAvantNextNoel:()=>{
        this.ajd=new Date();
        if(this.ajd.getMonth() === 11 && this.ajd.getDay()>=25)
        {
            this.date=new Date(`${this.ajd.getFullYear()+1}-12-25`);
        }
        else{
            this.date=new Date(`${this.ajd.getFullYear()}-12-25`);
        }
        this.test=calcul(this.date,this.ajd);
        console.log(`A titre informatif : ${this.test} `);
    },
    jourAvantNextBD:()=>{  
        this.ajd=new Date(); 
        this.date=new Date('2024-01-22');
        this.test=calcul(this.date,this.ajd);
        console.log(`A titre informatif : ${this.test}`);
    },
   
};
function calcul(a, b){
    let c =Math.floor((a-b)/(1000*60*60*24));
    return c;
};

module.exports=calculDate;