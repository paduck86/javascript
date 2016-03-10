/**
 * Created by user on 2016-02-16.
 */
/* eval() is evil
 코드가 런타임에 동적으로 생성된다면, 대개 eval() 없이 목표를 달성할 수 있는
 더 나은방법이 존재한다.
 */

//안티패턴
var proprty = "name";
alert(eval("obj." + property));

//권장안
alert(obj[proprty]);


//안티패턴
setTimeout("myFunc()", 1000);
setTimeout("myFunc(1, 2, 3)", 1000);

//권장안
setTimeout(myFunc, 1000);
setTimeout(function(){
    myFunc(1,2,3);
}, 1000);


/* eval() 대신 new Function() 의 사용을 고려해본다.
  new Function() 안에서 평가되는 코드는 지역 함수의 유효범위 안에서 실행되기 때문에
  코드 내에서 var로 선언된 변수들이 자동으로 전역변수가 되지 않는다.
  다음 예제에서, 전역변수로 남아 네임스페이스를 어지럽히는 것은 un 뿐이다.
*/

console.log(typeof un); //undefined
console.log(typeof deux); //undefined
console.log(typeof trois); //undefind

var jsString = "var un = 1; console.log(un);";
eval(jsString); // "1"

jsString = "var deux = 2; console.log(deux);";
new Function(jsString)(); // "2"

jsString = "var trois = 3; console.log(trois);";
(function () {
    eval(jsString);
})();

console.log(un); //"number"
console.log(deux); //"undefined"
console.log(trois); //"undefined"


/* eval() 과 Function 생성자 간의 또다른 차이는 eval()은 유효범위 체인에 간섭을
   일으킬 수 있지만, Function은 어디서 실행시키든 상관 없이 전역 유효범위를
   바라본다. (좀더 봉인되어 있는 개념)
 */
(function () {
    var local = 1;
    eval("local = 3; console.log(local)"); // 3
    console.log(local); // 3
})();

(function () {
    var local = 3;
    new Function("console.log(typeof local);")(); // undefined
})();
