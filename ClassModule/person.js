module.exports=function(id,lastname,firstname,birthdate){
    this.id=id;
    this.lastname=lastname;
    this.firstname=firstname;
    this.birthdate=birthdate;

    this.presentation=`Je m'appelle ${firstname} ${lastname} et je suis ne(e) le ${birthdate.toLocaleDateString()}`
}