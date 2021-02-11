
var cnt = 0; // 증가변수는 반드시 초기값이 설정되어야 함
var $slideWrap = document.querySelector('.slide-wrap_1');
function nextLeftFn(){
    cnt++;
    cnt > 3 ? cnt=3 : cnt; // 마지막 슬라이드 증가 숫자가 3을 초과하면 3으로 고정
                           // 아니면 증가 값 그대로
    $slideWrap.style = 'left:' + (-400*cnt) + 'px';
}
// 2-2. 이전 슬라이드 함수 - prevSlideFn()
function prevLeftFn(){
    cnt--;
    cnt < 0 ? cnt=0 : cnt; // 처음 슬라이드(0) 이전이면(-1) 0으로 초기화
                             // 그렇지 않으면 감소 값 그대로
    $slideWrap.style = 'left:' + (-400*cnt) + 'px';

    
}
