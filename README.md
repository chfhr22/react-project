# react를 이용한 포트폴리오 사이트 만들기
https://green-react-project.web.app
## react 특징
1. 컴포넌트 기반: React.js는 UI를 작은 독립적인 컴포넌트로 구성합니다. 이러한 컴포넌트는 재사용성이 높고 유지보수가 용이하며, 각각의 컴포넌트는 자체적인 상태(State)와 렌더링 로직을 가질 수 있습니다.
2. 가상 DOM: React.js는 가상 DOM을 사용하여 실제 DOM과의 차이를 최소화합니다. 이를 통해 효율적인 UI 업데이트를 수행하고, 성능을 향상시킵니다.
3. 단방향 데이터 흐름: React.js는 단방향 데이터 흐름을 따릅니다. 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하고, 자식 컴포넌트는 전달받은 데이터를 변경할 수 없습니다. 이를 통해 예측 가능하고 유지보수가 쉬운 애플리케이션을 구축할 수 있습니다.
4. JSX: React.js는 JSX라는 자바스크립트와 XML을 결합한 문법을 사용합니다. JSX는 컴포넌트의 UI를 선언적으로 작성할 수 있게 해주며, 가독성과 개발 생산성을 높여줍니다.

## 작업 순서
1. 리액트 설치
2. git에 업로드

## 설치
1. react 설치 `npx create-react-app 프로젝트이름`
2. gsap 설치 `npm i gsap`
3. sass 설치 `npm i sass`
4. lenis 설치 `npm i @studio-freight/lenis`
5. react-router-dom 설치 `npm i react-router-dom`

## firebase 배포 (명령 프롬프트 *경로 확인)
1. 설치 `npm install -g firebase-tools`
2. 로그인 `firebase login`
3. 시작 `firebase init` (선택시 잘 모르겠으면 대문자가 추천)
4. 배포 `firebase deploy`


## 트러블 슈팅
<details>
<summary>Whitespace 에러</summary>
유닉스 시스템에서는 한 줄의 끝이LF(Line Feed)로 이루어지는 반면, <br>
윈도우에서는 줄 하나가 CR(Carriage Return), 즉 CRLF로 이루어지는데 <br>
git이 둘 중 어느 쪽을 선택할지 혼란이 온 것이다.<br>
해결방법<br>
git config --global core.autocrlf true // 시스템 전체에 적용<br>
git config core.autocrlf true // 해당 프로젝트에만 적용
</details>

### [GSAP](https://gsap.com/)
GSAP(GreenSock Animation Platform)은 웹 애니메이션을 만들기 위한 JavaScript 라이브러리입니다. GSAP은 HTML, CSS 및 SVG 요소를 사용하여 다양한 애니메이션 효과를 생성하고 제어하는 데 사용됩니다.

### [lenis](https://lenis.studiofreight.com/)
lenis.js는 JavaScript로 작성된 오픈 소스 웹 프레임워크로, 웹 어플리케이션 및 API를 개발하기 위해 사용됩니다. 애니메이션의 부드러움과 자연스러움을 유지하는데 강점을 가지고 있습니다.
