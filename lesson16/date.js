let Date = function(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.getDay = function () {
        return this.day;
    }
    this.getMonth = function () {
        return this.month;
    }
    this.getYear = function () {
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
    this.toString = function(){
        let d = this.day;
        let m = this.month;
        if(d < 10){
            d = '0' + d;
        }
        if(m < 10){
            m = '0' + m;
        }
        return d + "/" + m + "/" + this.year;
    }
}

let date = new Date(1,5,2005);
date.setDate(17,8,2006)
console.log(date.toString());