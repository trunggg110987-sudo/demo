let year = parseInt(prompt("nhập năm"));
let isLeapyyear = false;

let isDivisibleBy4 = year % 4 === 0;
if(isDivisibleBy4){
    let isDivisibleBy100 = year % 100 === 0;
    if(isDivisibleBy100){
        let isDivisibleBy400 = year % 400 === 0;
        if(isDivisibleBy400){
            isLeapyyear = true;
        }
    }else {
        isLeapyyear = true;
    }
}
if(isLeapyyear){
    alert(year + " day la nam nhuan")
}else {
    alert(year + " day 0 la nam nhuan")
}


