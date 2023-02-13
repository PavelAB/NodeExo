const TODAY=new Date();
const msInDay = (24*3600*1000);
function getDiff(msDiff){
    return Math.ceil(Math.abs(msDiff/msInDay));
}
function getNextDate(baseDate){
    //Est ce que la date est deja passee?
    if (baseDate<TODAY){
        return new Date(baseDate.getFullYear()+1,baseDate.getMonth(),baseDate.getDay());
    }else{
        return baseDate;
    }
}

const daysBefore ={
    christmas :()=>{
        const chrismasDate=new Date(TODAY.getFullYear(),11,25);
        let msDiff=TODAY-chrismasDate;
        const days=getDiff(msDiff)
        console.log(`Nous sommes le ${TODAY.toLocaleDateString()}. Il reste ${days} jours avant le prochain Noel!`);
    },
    birthDay :()=>{
        const birthdayDate=new Date(TODAY.getFullYear,9,16);
        
    },
    vacation :()=>{
        const vacationDate=new Date(TODAY.getFullYear,9,16);
    },
    solstice :()=>{
        const summer =new Date(TODAY.getFullYear(),5,21);
        const winter =new Date(TODAY.getFullYear(),11,21);
    
    const daysSolSum=getDiff(summer);
    const daysSolWin=getDiff(winter);
    console.log(`Nous somme ${TODAY.toLocaleDateString()}, il reste ${daysSolSum} jours avant le Solstice d'ete et ${daysSolWin} jours avant le solstice d'ete`);

    },
    friday13 :()=>{
        let month=TODAY.getMonth();
        //pour ce mois ci,est ce qu'on a deja passele 13? si oui on passe direct au suivant
        if(TODAY.getDay()>=13){
            month ++;
        }
        //On cree une date au prochain vendredi 13
        const nextFriday13=new Date(TODAY.getFullYear(),month,13);

        while(nextFriday13.getDay() !== 5){
            nextFriday13.setMonth(nextFriday13.getMonth()+1)
            //
        }
        let msDiff=TODAY-nextFriday13;
        const days=getDiff(msDiff)
        console.log(`Nous sommes le ${TODAY.toLocaleDateString()}. Il reste ${days} jours avant le prochain Noel! ${nextFriday13}`);

    }
}
module.exports= daysBefore;