function daysInThisMonth() {
    var now = new Date();
    return new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
  }

function getToday(){
    var today = new Date();
    return parseInt(String(today.getDate()).padStart(2, '0'));
}

function appendView(val){
    var element = document.createElement('p');
    element.style.fontSize = "90px";
    if(val < 0){
        element.style.color = "red";
    } else {
        element.style.color = "green";
    }
    element.innerHTML = val;
    element.style.textAlign = "center";
    document.body.appendChild(element);
}


var row = document.getElementsByClassName("dtb")[0].textContent;
var usage_arr = row.split('/')[0].split(' ')
var mbgb = usage_arr[1]
var usage = parseFloat(usage_arr[0])

if(mbgb == 'MB'){
    usage = usage/1000
}

var daysInThisMonth = daysInThisMonth()
var dailyAllowed = 18.0/daysInThisMonth
var tillTodayAllowed = dailyAllowed*getToday()
var netUsage = tillTodayAllowed - usage
appendView(netUsage.toFixed(2));

