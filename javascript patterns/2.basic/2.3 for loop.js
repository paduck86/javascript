var myarray=[1,2,3,4,5];
/*for(var i = 0; i < myarray.length; i++ ) {

}*/

// ===>
for(var i = 0, max = myarray.length; i < max; i++) {

}

// 단일 var 패턴
function looper() {
    var i = 0,
        max,
        myarray = [];

    for(i = 0, max = myarray.length; i < max; i++) {

    }
}