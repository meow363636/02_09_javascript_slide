// 전역 변수
var $slideWrap = document.getElementsByClassName('.slide-wrap');
var $nextBtn = document.getElementsByClassName('.next-btn');
var $prevBtn = document.getElementsByClassName('.prev-btn');

    // console.log('$slideWrap 객체 배열 값 :', $slideWrap.length );

    // // 반복문 ) 반복적인 작업을 손쉽게 한번에 처리한다.
    // for(var i=0; i<$slideWrap.length; i++){
    //     console.log( $slideWrap[i] );
    // }

var slide = {
    init:       function(){
        this.slide1Fn();
        this.slide2Fn();
        this.slide3Fn();
        this.slide4Fn();
    },
    slide1Fn:   function(){
        // DOM
        // 1. 요소 선택 querySelector
        // document.querySelector('#아이디');
        // document.querySelector('.클래스');
        // document.querySelector('태그');

        // 2. 아이디 #section1 요소 선택 방법
        var $section1 = document.getElementById('section1');  
            // 확인  
            // console.log( $section1 );

            $section1.onclick = function(){
                alert('$section1 클릭 선택')
            }

        // 3. 클래스 .slide-wrap 요소 선택 방법
        var $slideWrap = document.getElementsByClassName('slide-wrap');
            // 확인
            // console.log($slideWrap);
            // console.log($slideWrap[0]);

            $slideWrap[0].onclick = function(){
                alert('$slideWrap[0]');
            }
            $slideWrap[0].onclick = function(){
                alert('$slideWrap[0]');
            }
            $slideWrap[0].onclick = function(){
                alert('$slideWrap[0]');
            }
            $slideWrap[0].onclick = function(){
                alert('$slideWrap[0]');
            }

        // 4. 태그 div 요소 선택 방법
        var $div = document.getElementsByTagName('div');
            // 확인
            // console.log($div[10]);

        
        var cnt = 0;


        function nextSlideFn(){
            cnt++;
            cnt > 3 ? cnt=3 : cnt; 
            $slideWrap.style = 'left:' + (-1200*cnt) + 'px';
        }       
        function prevSlideFn(){
            cnt--;
            cnt < 0 ? cnt=0 : cnt;
            $slideWrap.style = 'left:' + (-1200*cnt) + 'px';
        }

        // 버튼 등록 onclick
        // 클릭 이벤트 타켓 $nextBtn
        // $nextBtn[0].onclick = function(event){
        //     event.preventDefault();
        //     nextSlideFn();
        // }
        // $prevBtn[0].onclick = function(event){
        //     event.preventDefault();
        //     prevSlideFn();
        // }


        // 버튼 등록 방법 : 버튼 추가(등록)(add) 이벤트(event) 리스너(listener)
        // $nextBtn[0].addEventListener ('click',nextSlideFn, false);
        $nextBtn[0].addEventListener ('click', function(event){
            event.preventDefault();
            nextSlideFn();
        },false);
        // $prevBtn[0].addEventListener ('click',prevSlideFn,false);
        $prevBtn[0].addEventListener ('click', function(event){
            event.preventDefault();
            prevSlideFn();
        },false);
        // 버튼 전파 차단 
     
        
    },
    slide2Fn:   function(){

        // 2. 아이디
        var $section2 = document.getElementById('section2');
        $section2.onclick = function(){
        }
            // 확인
            // console.log($section2);
        
        // 3. 클래스
        var $slideWrap = document.getElementsByClassName('left-box');
            $slideWrap[1].onclick = function(){
                alert('$slideWrap[0]');
            }
            // 확인
            // console.log($slideWrap);
            // console.log($slideWrap[0]);

            $slideWrap[1].onclick = function(){
                alert('$slideWrap[0]');
            }
            $slideWrap[1].onclick = function(){
                alert('$slideWrap[1]');
            }
            $slideWrap[1].onclick = function(){
                alert('$slideWrap[2]');
            }
        
        // 4. 태그
            var $div = document.getElementsByTagName('div');
            // 확인
            // console.log($div[10]);




        var cnt = 0;

        function nextSlideFn(){
        cnt++;
        cnt > 2 ? cnt=0 : cnt;
        $slideWrap.style = 'left:' + (-400*cnt) + 'px';
        }
        function prevSlideFn(){
        cnt--;
        cnt < 0 ? cnt=2 : cnt;
        $slideWrap.style = 'left:' + (-400*cnt) + 'px';
        }

        // 버튼 등록 onclick
        // $nextBtn[1].onclick = function(event){
        //     event.preventDefault();
        //     nextSlideFn();
        // }
        // $prevBtn[1].onclick = function(event){
        //     event.preventDefault();
        //     prevSlideFn();
        // }

        // 버튼 추가(add) 이벤트(Event) 리스너(Listener) 등록
        // $nextBtn[1].addEventListener('click', nextSlideFn, false);
        // $prevBtn[1].addEventListener('click', nextSlideFn, false);

        $nextBtn[1].addEventListener('click',function(e){
            e.preventDefault();
            nextSlideFn();
        },false)
        $prevBtn[1].addEventListener('click',function(e){
            e.preventDefault();
            nextSlideFn();
        },false)

    },
    slide3Fn:   function(){

        // 2. 아이디
        var $section2 = document.getElementById('section2');
        $section2.onclick = function(){
            alert('$section2 클릭 선택')
        }
            // 확인
            // console.log($section2);
        
        // 3. 클래스
        var $slideWrap = document.getElementsByClassName('center-box');
            $slideWrap[2].onclick = function(){
                alert('$slideWrap[0]');
            }
            // 확인
            // console.log($slideWrap);
            // console.log($slideWrap[0]);

            $slideWrap[2].onclick = function(){
                alert('$slideWrap[0]');
            }
            $slideWrap[2].onclick = function(){
                alert('$slideWrap[1]');
            }
            $slideWrap[2].onclick = function(){
                alert('$slideWrap[2]');
            }
        
        // 4. 태그
            var $div = document.getElementsByTagName('div');
            // 확인
            // console.log($div[10]);
        

        var cnt = 0;

        function nextSlideFn(){
        cnt++;
        cnt > 2 ? cnt=0 : cnt;
        $slideWrap.style = 'left:' + (-400*cnt) + 'px';
        }
        function prevSlideFn(){
        cnt--;
        cnt < 0 ? cnt=2 : cnt;
        $slideWrap.style = 'left:' + (-400*cnt) + 'px';
        }

        // 버튼 등록 onclick
        $nextBtn.onclick = function(event){
            event.preventDefault();
            nextSlideFn();
        }
        $prevBtn.onclick = function(event){
            event.preventDefault();
            prevSlideFn();
        }
    },
    slide4Fn:   function(){

        // 2. 아이디
        var $section2 = document.getElementById('section2');
        $section2.onclick = function(){
            alert('$section2 클릭 선택')
        }
            // 확인
            // console.log($section2);
        
        // 3. 클래스
        var $slideWrap = document.getElementsByClassName('right-box');
            $slideWrap[3].onclick = function(){
             //   alert('메롱');
            }
            // 확인
            // console.log($slideWrap);
            // console.log($slideWrap[0]);

            $slideWrap[3].onclick = function(){
                alert('$slideWrap[0]');
            }
            $slideWrap[3].onclick = function(){
                alert('$slideWrap[1]');
            }
            $slideWrap[3].onclick = function(){
                alert('$slideWrap[2]');
            }
        
        // 4. 태그
            var $div = document.getElementsByTagName('div');
            // 확인
            // console.log($div[10]);

        var cnt = 0;

        function nextSlideFn(){
        cnt++;
        cnt > 2 ? cnt=0 : cnt;
        $slideWrap.style = 'left:' + (-400*cnt) + 'px';
        }
        function prevSlideFn(){
        cnt--;
        cnt < 0 ? cnt=2 : cnt;
        $slideWrap.style = 'left:' + (-400*cnt) + 'px';
        }

        // 버튼 등록 onclick
        $nextBtn.onclick = function(event){
            event.preventDefault();
            nextSlideFn();
        }
        $prevBtn.onclick = function(event){
            event.preventDefault();
            prevSlideFn();
        }
    }
};
slide.init();