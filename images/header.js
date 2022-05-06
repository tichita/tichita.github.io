window.onload = () => {
  const html = document.querySelector("html");
  const header = document.querySelector("header");
  header.innerHTML = "<a href=\"index.html\"><img src=\"images/Frame 2.svg\" alt=\"\" id=\"logo\"></a><nav><ul><li><a href=\"aboutme.html\" onmouseover=\"underline()\"onmousedown=\"underlineNO()\">About Me</a></li><div class=\"underline aboutme\"></div><li><a href=\"interest.html\">Interest</a></li><div class=\"underline interest\"></div><li><a href=\"roadmap.html\">Roadmap</a></li><div class=\"underline roadmap\"></div><li><a href=\"login.html\">SignIn</a></li><div class=\"underline signIn\"></div></ul></nav>";
  const logIn = document.querySelector("#logIn");
  const footer = document.querySelector("footer");
  footer.innerHTML = "<a href=\"https://github.com/tichita/kh\"><img src=\"images/git.svg\" alt\"git 주소\" id=\"gitIcon\"></a>";
  const roadmap = document.querySelector("#roadmap");
  const aboutMe = document.querySelector("#aboutMe");
  const main = document.querySelector("#main");
  const interest = document.querySelector("#interest");
  console.log(interest);

if(interest)
interest.style.height =  parseFloat(screen.availHeight) * 0.7 + "px";

  const nav = document.querySelector("nav");
  const ul = document.querySelector("nav>ul");
  const lists = document.querySelectorAll("nav>ul>li");

  const links = document.querySelectorAll(":link, :visited");

  html.style.color = "#837b6b"
  html.style.background = "#f4f6f8"
  html.style.fontFamily = "LeferiPoint-WhiteA";
  header.style.background = "#f4f6f8"
  header.style.display = "flex";
  header.style.position = "sticky";
  header.style.top = "0";
  header.style.height = document.documentElement.clientHeight * 0.15 + "px";
  header.style.zIndex = "33";
  header.style.borderBottom = "2px dashed #837b6b";

  lists.forEach(function (li) {
    li.style.display = "block";
    li.style.padding = "0 10px";
    li.style.alignItems = "center";
    li.style.fontSize = "30px";

  });

  links.forEach(function (link) {
    link.style.color = "#837b6b";
    link.style.textDecoration = "none";
    link.style.transition = "150ms";
  });

  const logo = document.querySelector("#logo");
  logo.style.height = header.style.height;
  logo.style.paddingLeft = "20px"
  logo.style.position = "relative";

  nav.style.display = "flex";
"auto";
  nav.style.position = "relative"
  nav.style.left = (document.documentElement.clientHeight - (parseInt)(window.getComputedStyle(nav).width)) / 2 + "px";
  nav.style.left = (document.documentElement.clientHeight - (parseInt)(window.getComputedStyle(nav).width)) / 2 + "px";
  nav.style.alignItems = "center"

  ul.style.display = "flex";
  ul.style.listStyle = "none";
  ul.style.justifyContent = "end";
  ul.style.fontFamily = "LeferiPoint-WhiteA";
  ul.style.textShadow = "1px 1px 1px";

  gitIcon.style.height = parseFloat(window.getComputedStyle(header).height) * 0.8 + "px";

  console.log(footer);
  footer.style.height = parseFloat(window.getComputedStyle(header).height) + "px";
  footer.style.display = "flex";
  footer.style.alignItems = "center";
  footer.style.justifyContent = "center";

  main && indexCss(main);
  console.log(main);
  aboutMe && aboutMeCss(aboutMe);
  // aboutMe && aboutMeHtml(aboutMe);
  // logIn && logInHtml(logIn);
  roadmap && roadmapCss(roadmap);

  logIn && logInfunction(logIn);

};
//로그인페이지
const logInfunction = (logIn) => {
  logInCss(logIn);
  signUp();

}

indexCss = (main) => {
  console.dir(main);
  main.style.height = parseFloat(screen.availHeight) * 0.7 + "px";

  main.style.backgroundImage = "url(./images/rocks-1869970.jpg)";
  main.style.backgroundSize = "cover";
  main.style.opacity = "75%"
};

const aboutMeCss = () => {
  const sectionH1 = document.querySelector("#aboutMe #section1>h1");
  const table = document.querySelector("#aboutMe table");
  const thTd = document.querySelectorAll("#aboutMe th, td");

  console.log(thTd);
  aboutMeContainer.style.height = parseFloat(screen.availHeight) * 0.7 + "px";
  aboutMeContainer.style.display = "flex";
  aboutMeContainer.style.justifyContent = "space-evenly";
  aboutMeContainer.style.background = "#c2c9d670";
  aboutMeContainer.style.alignItems = "center";

  sectionH1.style.fontSize = "35px";
  sectionH1.style.textAlign = "center";
  sectionH1.style.color = "#4b463d";
  sectionH1.style.marginTop = "0";
  sectionH1.style.marginBottom = (parseFloat)(window.getComputedStyle(codingImg).height) -
    (parseFloat)(window.getComputedStyle(table).height) - (parseFloat)(sectionH1.style.height) + "px";

  table.style.border = "solid #4b463d 2px";
  table.style.borderCollapse = "collapse";

  console.log((parseFloat)(window.getComputedStyle(section1).height));
  section1.style.height = (parseFloat)(window.getComputedStyle(codingImg).height) + "px";

  thTd.forEach(function (elem) {
    elem.style.border = "solid #4b463d 2px";
    elem.style.fontSize = "25px";
    elem.style.padding = "20px 30px 20px 40px";
    elem.style.textAlign = "left";
    elem.style.color = "#837b6b";
  });


  aboutMeContainer.style.margin = "0";
  aboutMeContainer.setyle.background = "#c2c9d6";

gImg.style.position = "relative";

};

const roadmapCss = () => {
  //section 높이 설정
  const header = document.querySelector("header");
  const articles = document.querySelectorAll("article");

  roadmap.style.height = parseFloat(screen.availHeight) * 0.8 + "px";
  section2.style.height = parseFloat(screen.availHeight) * 0.8 + "px";

  //원 높이
  circle1.style.top = (parseFloat)(window.getComputedStyle(header).height) + (parseFloat)(window.getComputedStyle(roadmap).height) * 0.05 + "px";
  circle2.style.top = (parseFloat)(window.getComputedStyle(header).height) + (parseFloat)(window.getComputedStyle(roadmap).height) * 0.35 + "px";
  circle3.style.top = (parseFloat)(window.getComputedStyle(header).height) + (parseFloat)(window.getComputedStyle(roadmap).height) * 0.65 + "px";

  //막대기 길이
  bar.style.height = parseFloat(screen.availHeight) * 0.8 - 70 + "px"
  //세모 위치
  // triangle.style.top = "500px";
  console.log(window.getComputedStyle(article1).display);
  //상자랑 원 연결

  circle1.addEventListener('click', () => {
    articles.forEach(function (e) {
      e.style.display = "none";
    });
    article1.style.display = "block";
  });
  circle2.addEventListener('click', () => {
    articles.forEach(function (e) {
      e.style.display = "none";
    });
    article2.style.display = "block";
  });
  circle3.addEventListener('click', () => {
    articles.forEach(function (e) {
      e.style.display = "none";
    });
    article3.style.display = "block";
  });

  console.log(window.getComputedStyle(circle1).height);
};

const logInCss = (logIn) => {
  const logIn_section = document.querySelector("#logIn_section");
  if(!logIn_section) return;
  const section2_container = document.querySelector(".section2_container");
  const section1 = document.querySelector("#section1");
  const section2 = document.querySelector("#section2");
  logIn.style.height = parseFloat(screen.availHeight) * 0.7 + "px";

  logIn_section.style.width = (parseFloat)(window.getComputedStyle(logIn).width) * 0.5 + "px";
  section1.style.width = (parseFloat)(window.getComputedStyle(logIn).width) * 0.3 + "px";
  section2.style.width = (parseFloat)(window.getComputedStyle(logIn).width) * 0.2 + "px";
  logIn_section.style.height = (parseFloat)(window.getComputedStyle(logIn).height) * 0.6 + "px";

  logIn_section.style.left = ((parseFloat)(window.getComputedStyle(logIn).width) - (parseFloat)(window.getComputedStyle(logIn_section).width)) / 2 + "px";
  logIn_section.style.left = ((parseFloat)(window.getComputedStyle(logIn).width) - (parseFloat)(window.getComputedStyle(logIn_section).width)) / 2 + "px";

  signIn_form.style.position = "relation";
  signIn_form.style.width = (parseFloat)(getComputedStyle(section1).width) + "px";

  logIn_section.style.border = "solid"
  logIn_section.style.top = parseFloat(screen.availHeight) * 0.15 + "px";
  //   signIn_form.style.top=((parseFloat)(getComputedStyle(section1).height)-
  // (parseFloat)(getComputedStyle(sectionH1).height)-
  // (parseFloat)(getComputedStyle(signIn_form).height))/5+"px";

  section2_container.style.position = "relative";
  section2_container.style.top = (parseFloat)(getComputedStyle(sectionH1).height) + (parseFloat)(getComputedStyle(sectionH1).paddingTop) +
    (parseFloat)(getComputedStyle(sectionH1).paddingBottom) + "px";
  // alert(getComputedStyle(sectionH1).padding);
  const inputs = document.querySelectorAll("input");
  inputs.forEach(function (input) {
    input.addEventListener('focus', () => {
      const box = input.parentElement;
      box.style.border = "2px solid #7b8496";
    });
    input.addEventListener('blur', () => {
      const box = input.parentElement;
      box.style.border = "1.7px solid #c2c9d6";
    });
  });
  // signInButton.addEventListener('click');

};

const signUphtml = () => {

};

const signUp = () => {
  const registration=document.querySelector("#registration");
  console.log(registration);
  document.querySelector("#registration").addEventListener('click',form_submit);
  // document.querySelector("#registration").onclick=form_submit;
};
function form_submit(){

    const _name = document.querySelector("#name");
    const ID = document.querySelector("#ID");
    const password = document.querySelector("#password");
    const password2 = document.querySelector("#password2");
    const email = document.querySelector("#email");
    const phoneNo = document.querySelector("#phoneNo");
  
     if(!/^[a-z0-9]{5,15}$/g.test(ID.value)){
      alert("아이디를 영문/숫자로 5자 이상입력해주세요.");
      return false;
  }
  else if(!/^[\w]{4,}@[\w]+.([\w]+){2,3}$/.test(email.value)){
      alert("이메일 형식에 어긋납니다.");
      return false;
  }
  else if(!(/\d/.test(userPwd.value) 
          && /[a-zA-Z]/.test(userPwd.value) 
          && /[~!@#$%^&*()_+|<>?:{}]/.test(password.value)
          &&/^.{8,16}$/.test(userPwd.value))){
      alert("비밀번호는 8~16자리 숫자/문자/특수문자를 모두 포함해야합니다.");
      return false;
  }
  else if(!(password.value == password2.value)){
      alert("비밀번호가 일치하지 않습니다.");
      return false;
  }

      //저장
      const user = {
        name: _name.value,
        id: ID.value,
        password: password.value,
        email: email.value,
        phoneNo: phoneNo.value
      };
 
      localStorage.setItem(ID.value, JSON.stringify(user));
  
  
  
    //초기화
   
  };


