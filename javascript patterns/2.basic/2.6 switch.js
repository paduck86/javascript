/**
 * Created by user on 2016-02-16.
 */

// 다음 패턴을 따르면 switch문의 가독성과 견고성을 향상시킬 수 있다

var inspect_me = 0,
    result = '';

switch (inspect_me) {
    case 0:
        result = 'zero';
        break;
    case 1:
        result = 'one';
        break;
    default:
        result = 'unknown';
}
