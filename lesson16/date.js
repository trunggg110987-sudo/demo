let myDate = function(day , month, year){
    this.day = day;
    this.month = month;
    this.year = year;
    this.getDay = function(){
        return this.day;
    }
    this.getMonth = function(){
        return this.month;
    }
    this.getYear = function(){
        return this.year;
    }
    this.setDay = function(day){
        this.day = day;
    }
    this.setMonth = function(month){
        this.month = month;
    }
    this.setYear = function(year){
        this.year = year;
    }

this.setDate = function(day, month, year){
    this.day = day;
    this.month = month;
    this.year = year;
}
this.toString = function() {
    let dd = this.day < 10 ? '0' + this.day : this.day;
    let mm = this.month < 10 ? '0' + this.month : this.month;
    let yyyy = this.year < 1000 ? '0' + this.year : this.year;
    return dd + "/" + mm + "/" + yyyy;
}
}
let date = new myDate(17, 8, 2006);
console.log(date.toString());

date.setDate(1, 5, 2005);
console.log(date.toString());


