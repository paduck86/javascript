/**
 * Created by user on 2016-02-16.
 */
/*
* for-in 루프
* for-in 루프는 배열이 아닌 객체를 순회할 때만 사용해야 한다.
* for-in 루프를 도는 것을 열거(enumeration)라고도 한다.
* 객체의 프로퍼티를 순회할 때는 프로토타입 체인을 따라 상속되는 프로퍼티들을 걸러내기 위해
* hasOwnProperty() 메서드를 사용해야 한다.
*/

//객체
var man = {
    hands: 2,
    legs: 2,
    heads: 1
};

// 코드어딘가에 모든 객체에 메서드가 하나 추가되었다.
if(typeof Object.prototype.clone == 'undefined') {
    Object.prototype.clone = function() {};
}

//1.for-in 루프
for (var i in man) {
    if(man.hasOwnProperty(i)) { //프로토타입 프로퍼티를 걸러낸다.
        console.log(i, ":", man[i]);
    }
}
/* 결과
    hands : 2
    legs : 2
    heads : 1
 */

//2.for-in 루프 패턴 2 (man 에서 hasOwnProperty 재정의했을 경우에도 활용가능함.)
for (var i in man) {
    if(Object.prototype.hasOwnProperty.call(man, i)) {
        console.log(i, ":", man[i]);
    }
}

//3. 메서드캐시
var i,
    hasOwn = Object.prototype.hasOwnProperty;

for(i in man) {
    if(hasOwn.call(man, i)) {
        console.log(i, ":", man[i]);
    }
}

