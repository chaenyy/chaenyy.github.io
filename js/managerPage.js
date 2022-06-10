window.onload = () => {
    const members = JSON.parse(localStorage.getItem("members"));
    if(!members) return;

     const tbody = document.querySelector("#tb-membership-list tbody");
     tbody.innerHTML = '';
     const loginInfo = JSON.parse(localStorage.getItem("loginInfo"));
     const managers = JSON.parse(localStorage.getItem("managers"));
     const informationText = document.querySelector(".informationText");

     members.map((member, index) => {
         const {userId, userPwd, userPwd_Question, userPwd_Answer, userName, phoneNumber, mobileNumber, userEmail} = member;
         return `
             <tr>
                 <td class="userId">${userId}</td>
                 <td class="userPwd">${userPwd}</td>
                 <td class="userPwd_Question">${userPwd_Question}</td>
                 <td class="userPwd_Answer">${userPwd_Answer}</td>
                 <td class="userName">${userName}</td>
                 <td class="phoneNumber">${phoneNumber}</td>
                 <td class="mobileNumber">${mobileNumber}</td>
                 <td class="userEmail">${userEmail}</td>
             </tr>
         `
     }).forEach(tr => tbody.innerHTML += tr);

     if(loginInfo) {
         if(loginInfo.permission === 'admin') {
             const {managerId, managerPwd, permission} = loginInfo;
             informationText.innerHTML = `매니저 <strong>${managerId}</strong> 계정으로 접속하셨습니다. <strong>[${permission}]</strong> 회원이십니다.`;
         }
     } else return;
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