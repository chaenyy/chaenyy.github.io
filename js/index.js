// 메뉴바 이동
window.addEventListener('scroll', () => {
    const btn = document.querySelector("#scrollTopBtnImage");
    const scrollTop = document.documentElement.scrollTop;

    if(scrollTop < 200) {
        btn.style.display = 'none';
    } else {
        btn.style.display = 'block';
    }

    const mainIntroduceOffsetTop = document.querySelector("#mainIntroduce").scrollTop; //1220
    const mainTravelOffsetTop = document.querySelector("#mainTravel").offsetTop; // 1960
    const mainRoadmapOffsetTop = document.querySelector("#mainRoadmap").offsetTop; //2620
    const serviceOffsetTop = document.querySelector(".service").offsetTop;
    const menuBorderLine = document.querySelector("#menuBorderLine");

    const travelImage = document.querySelector(".mainTravelImage");
    
    const introduceBtn = document.querySelector("#introduceBtn");   
    const travelBtn = document.querySelector("#travelBtn");
    const roadMapBtn = document.querySelector("#roadMapBtn");

    if(scrollTop >= (serviceOffsetTop + mainRoadmapOffsetTop-240)) {
        menuBorderLine.style.width = `${roadMapBtn.offsetWidth}px`;
        menuBorderLine.style.left = `${roadMapBtn.offsetLeft}px`;
    } else if(scrollTop >= (serviceOffsetTop + mainTravelOffsetTop-240)) {
        menuBorderLine.style.width = `${travelBtn.offsetWidth}px`;
        menuBorderLine.style.left = `${travelBtn.offsetLeft}px`;
    } else if(scrollTop >= (serviceOffsetTop + mainIntroduceOffsetTop-160)) {
        menuBorderLine.style.width = `${introduceBtn.offsetWidth}px`;
        menuBorderLine.style.left = `${introduceBtn.offsetLeft}px`;
    } else {
        menuBorderLine.style.width = '';
        menuBorderLine.style.left = '';
    }
});

// 메뉴 클릭 시 이동
const menuScroll = (element) => {
    const serviceOffsetTop = document.querySelector(".service").offsetTop;
    const mainIntroduceOffsetTop = document.querySelector("#mainIntroduce").offsetTop-80 + serviceOffsetTop;
    const mainTravelOffsetTop = document.querySelector("#mainTravel").offsetTop-240 + serviceOffsetTop;
    const mainRoadmapOffsetTop = document.querySelector("#mainRoadmap").offsetTop-240 + serviceOffsetTop;
    
    if(element == 'INTRODUCE') {
        window.scroll({top:mainIntroduceOffsetTop});
    } else if(element == 'TRAVEL') {
        window.scroll({top:mainTravelOffsetTop});
    } else if(element == 'ROAD-MAP') {
        window.scroll({top:mainRoadmapOffsetTop});
    }
};

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