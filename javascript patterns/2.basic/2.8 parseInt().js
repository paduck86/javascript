/**
 * Created by user on 2016-02-16.
 */
/*
0으로 시작하는 문자열은 ECMAScript3 에서 8진수(기수 8)로 다루어진다.
ES5 에서는 변경되었지만, 일관성 없고 예측을 벗어나는 결과를 피하려면
항상 기수 매개변수를 지정해 주어야 한다.
 */

var month = "06",
    year = "09";

month = parseInt(month, 10);
year = parseInt(year, 10);

var str = "08hello";
console.log(parseInt(str));