initSlider();

function initSlider(){
    const sliderContainer = document.getElementById('slider');
    const paginationContainer = document.createElement('div');

    let autoRun = setInterval(changeSlide, 5000);

    function changeSlide(){
        const radioButtons = [...document.querySelectorAll('.slide-radio')];
        const currentIndex = radioButtons.findIndex(rb => rb.checked)
        console.log(currentIndex);
        radioButtons[(currentIndex + 1 ) % radioButtons.length].checked = true;
    }    

    paginationContainer.addEventListener('mouseenter',()=> clearInterval(autoRun));
    paginationContainer.addEventListener('mouseleave',()=> autoRun = setInterval(changeSlide, 5000));
}



//모든 article 요소들을 변수 items에 저장
const items = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = aside.querySelector("span");

//items의 갯수만큼 반복을 돌면 반복 
for(let el of items){       
    el.addEventListener("mouseenter", e=>{
        e.currentTarget.querySelector("video").play();  
    });

    el.addEventListener("mouseleave", e=>{
        e.currentTarget.querySelector("video").pause();
    });

    //현재 반복돌고 있는 article요소에 click 이벤트 발생 시
    el.addEventListener("click", e=>{     
        //제목과 본문의 내용, 그리고 video요소의 src값을 변수에 저장  
        let tit = e.currentTarget.querySelector("h2").innerText;
        let txt = e.currentTarget.querySelector("p").innerText;
        let vidSrc = e.currentTarget.querySelector("video").getAttribute("src");

        //aside 요소 안쪽의 콘텐츠에 위의 변수 내용을 적용
        aside.querySelector("h1").innerText = tit;
        aside.querySelector("p").innerText = txt;
        aside.querySelector("video").setAttribute("src", vidSrc);

        //aside 요소 안쪽의 동영상을 재생하고 aside요소에 on을 붙여 팝업 패널 활성화
        aside.querySelector("video").play();
        aside.classList.add("on");
    });

    //닫기 버튼 클릭 시 
    close.addEventListener("click", ()=>{
        //aside 요소에 클래스 on을 제거해 비활성화 하고 안쪽의 영상을 재생중지
        aside.classList.remove("on");
        aside.querySelector("video").pause();
    });
}        


// // Scroll Magic
// const Controller = new ScrollMagic.Controller();
// const spyEls = document.querySelectorAll('section.scroll-spy');
// spyEls.forEach(function(spyEl) {
//     new ScrollMagic
//         .Scene({
//             triggerElement: spyEl,
//             // 보여짐 여부를 감시할 요소를 지정
//             triggerHokk: .8,
//             // 감시하고 있는 요소가 판단되는 위치 (걸렸다고 판단이 되면 아래 메소드 실행)
//         })
//         .setClassToggle(spyEl, 'show')
//         .addTo(new ScrollMagic.Controller());
//         // 실제로 동작할 수 있도록 만들어 주는 요소
// });
 