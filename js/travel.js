window.addEventListener('scroll', () => {
    const btn = document.querySelector("#scrollTopBtnImage");
    if(document.getElementsByTagName('html')[0].scrollTop < 200) {
        btn.style.display = 'none';
    } else btn.style.display = 'block';
});

const mouseEnterBackgroundImage = (className, source) => {
    if(className === 'mainBookImage') {
        document.querySelector(`.${className}`).style.animation = 'fadein 2s';
    } else {
        document.querySelector(`.${className}`).style.transition = '1s ease-out';
    }
    document.querySelector(`.${className}`).style.backgroundImage = `url(${source})`;
};

const mouseleaveBackgroundImageNone = () => {
    document.querySelector(".mainBookImage").style.animation = 'fadeout 2s';
    document.querySelector(".mainBookImage").style.backgroundImage = `url(image/mainBook_main.png`;
};

const mouseleaveBackgroundImageRestore = (className, source) => {
    document.querySelector(`.${className}`).style.transition = '1s ease-out';
    document.querySelector(`.${className}`).style.backgroundImage = `url(${source})`;
}

// 첫번째 무한 슬라이드 구현
const firstSlides = document.querySelector(".first-slides");
const firstSlideImg = document.querySelectorAll(".first-slides li");
let firstCurrentIndex = 0;
const firstSlideCount = firstSlideImg.length;
const slideWidth = 900;

makeCloneFirst(); // 처음이미지와 마지막 이미지 복사 함수
initfunctionFirst(); //슬라이드 넓이와 위치값 초기화 함수

function makeCloneFirst() {
    let cloneSlide_first = firstSlideImg[0].cloneNode(true);
    let cloneSlide_last = firstSlides.lastElementChild.cloneNode(true);
    firstSlides.append(cloneSlide_first);
    firstSlides.insertBefore(cloneSlide_last, firstSlides.firstElementChild);
}

function initfunctionFirst() {
    firstSlides.style.width = (slideWidth) * (firstSlideCount + 2) + 'px';
    firstSlides.style.left = -(slideWidth) + 'px';
}

document.querySelector(".firstNext").addEventListener('click', () => {
    if(firstCurrentIndex <= firstSlideCount-1) {
        firstSlides.style.left = -(firstCurrentIndex+2) * slideWidth + 'px';
        firstSlides.style.transition = `${0.5}s ease-out`;
    }
    if(firstCurrentIndex == firstSlideCount-1) {
        setTimeout(function () {
            firstSlides.style.left = -(slideWidth) + 'px';
            firstSlides.style.transition = `${0}s ease-out`;
        }, 500);
        firstCurrentIndex = -1;
    }
    firstCurrentIndex += 1;
});

document.querySelector(".firstPrev").addEventListener('click', () => {
    if(firstCurrentIndex >= 0) {
        firstSlides.style.left = -firstCurrentIndex * slideWidth+'px';
        firstSlides.style.transition = `${0.5}s ease-out`;
    }
    if(firstCurrentIndex === 0) {
        setTimeout(() => {
            firstSlides.style.left = -firstSlideCount * (slideWidth)+'px';
            firstSlides.style.transition = `${0}s ease-out`;
        }, 500);
        firstCurrentIndex = firstSlideCount;
    }
    firstCurrentIndex -= 1;
});

// 두번째 무한 슬라이드 구현
const secondSlides = document.querySelector(".second-slides");
const secondSlideImg = document.querySelectorAll(".second-slides li");
let secondCurrentIndex = 0;
const secondSlideCount = secondSlideImg.length;

makeCloneSecond(); // 처음이미지와 마지막 이미지 복사 함수
initfunctionSecond(); //슬라이드 넓이와 위치값 초기화 함수

function makeCloneSecond() {
 let cloneSlide_first = secondSlideImg[0].cloneNode(true);
 let cloneSlide_last = secondSlides.lastElementChild.cloneNode(true);
 secondSlides.append(cloneSlide_first);
 secondSlides.insertBefore(cloneSlide_last, secondSlides.firstElementChild);
}

function initfunctionSecond() {
 secondSlides.style.width = (slideWidth) * (secondSlideCount + 2) + 'px';
 secondSlides.style.left = -(slideWidth) + 'px';
}

document.querySelector(".secondNext").addEventListener('click', () => {
    if(secondCurrentIndex <= secondSlideCount-1) {
     secondSlides.style.left = -(secondCurrentIndex+2) * slideWidth + 'px';
     secondSlides.style.transition = `${0.5}s ease-out`;
    }
    if(secondCurrentIndex == secondSlideCount-1) {
        setTimeout(function () {
         secondSlides.style.left = -(slideWidth) + 'px';
         secondSlides.style.transition = `${0}s ease-out`;
        }, 500);
        secondCurrentIndex = -1;
    }
    secondCurrentIndex += 1;
});

document.querySelector(".secondPrev").addEventListener('click', () => {
    if(secondCurrentIndex >= 0) {
     secondSlides.style.left = -secondCurrentIndex * slideWidth+'px';
     secondSlides.style.transition = `${0.5}s ease-out`;
    }
    if(secondCurrentIndex === 0) {
        setTimeout(() => {
         secondSlides.style.left = -secondSlideCount * (slideWidth)+'px';
         secondSlides.style.transition = `${0}s ease-out`;
        }, 500);
        secondCurrentIndex = secondSlideCount;
    }
    secondCurrentIndex -= 1;
});

// 세번째 무한 슬라이드 구현
const thridSlides = document.querySelector(".third-slides");
const thirdSlideImg = document.querySelectorAll(".third-slides li");
let thirdCurrentIndex = 0;
const thirdSlideCount = thirdSlideImg.length;

makeCloneThird(); // 처음이미지와 마지막 이미지 복사 함수
initfunctionThird(); //슬라이드 넓이와 위치값 초기화 함수

function makeCloneThird() {
 let cloneSlide_first = thirdSlideImg[0].cloneNode(true);
 let cloneSlide_last = thridSlides.lastElementChild.cloneNode(true);
 thridSlides.append(cloneSlide_first);
 thridSlides.insertBefore(cloneSlide_last, thridSlides.firstElementChild);
}

function initfunctionThird() {
 thridSlides.style.width = (slideWidth) * (thirdSlideCount + 2) + 'px';
 thridSlides.style.left = -(slideWidth) + 'px';
}

document.querySelector(".thirdNext").addEventListener('click', () => {
    if(thirdCurrentIndex <= thirdSlideCount-1) {
     thridSlides.style.left = -(thirdCurrentIndex+2) * slideWidth + 'px';
     thridSlides.style.transition = `${0.5}s ease-out`;
    }
    if(thirdCurrentIndex == thirdSlideCount-1) {
        setTimeout(function () {
         thridSlides.style.left = -(slideWidth) + 'px';
         thridSlides.style.transition = `${0}s ease-out`;
        }, 500);
        thirdCurrentIndex = -1;
    }
    thirdCurrentIndex += 1;
});

document.querySelector(".thirdPrev").addEventListener('click', () => {
    if(thirdCurrentIndex >= 0) {
     thridSlides.style.left = -thirdCurrentIndex * slideWidth+'px';
     thridSlides.style.transition = `${0.5}s ease-out`;
    }
    if(thirdCurrentIndex === 0) {
        setTimeout(() => {
         thridSlides.style.left = -thirdSlideCount * (slideWidth)+'px';
         thridSlides.style.transition = `${0}s ease-out`;
        }, 500);
        thirdCurrentIndex = thirdSlideCount;
    }
    thirdCurrentIndex -= 1;
});

// 로그인 시 헤더에 표시
const loginInfo = () => {
const loginData = JSON.parse(localStorage.getItem("loginInfo"));
const loginMemberInfoDiv = document.querySelector(".loginMemberInfo");
    
    if(loginData) {
        if(loginData.permission === 'normal') {
            loginMemberInfoDiv.innerHTML = `<a href='myPage.html'>${loginData.userName}</a>님, 환영합니다!`;
            loginText.innerHTML = `LOGOUT`;
            joinText.innerHTML = '';
        } else if(loginData.permission === 'admin') {
            loginMemberInfoDiv.innerHTML = `<a href='managerPage.html'>매니저 ${loginData.managerId}</a> 계정으로 접속되었습니다.`;
            loginText.innerHTML = `LOGOUT`;
            joinText.innerHTML = '';
        }
    } else {
        loginMemberInfoDiv.innerHTML = '';
        loginText.innerHTML = 'LOGIN';
        joinText.innerHTML = 'JOIN';
    }
};

loginInfo();

const loginBtn = (element) => {
    const loginMemberInfoDiv = document.querySelector(".loginMemberInfo");
    
    if(element.innerHTML === 'LOGIN') {
        window.location.href = "login.html";
        return;
    }

    if(element.innerHTML === 'LOGOUT') {
        const flag = confirm("로그아웃 하시겠습니까?");
        if(flag) {
            localStorage.removeItem('loginInfo');
            loginMemberInfoDiv.innerHTML = '';
            loginText.innerHTML = 'LOGIN';
            joinText.innerHTML = 'JOIN';
            window.location.href = 'index.html';
        } else {
            return;
        }
    }
};