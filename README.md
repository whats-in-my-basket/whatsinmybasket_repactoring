# 💡 What's im my Basket ❓
> 기존에 개발했던 쇼핑 플랫폼 프로젝트를 Refactoring 해보자!

<br /><br />

# ⚽ Goal 
1️⃣ 클린 코드를 작성하여 **가독성**을 높이자


2️⃣ 사용자의 편의를 고려하여 **웹 성능**을 개선해보자

<br /><br />

# 🛠️ 기술 스택

<div align="left">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/> 
  <img src="https://img.shields.io/badge/Redux Toolkit-764ABC?style=flat&logo=Redux&logoColor=white"/> 
  <img src="https://img.shields.io/badge/React Router-CA4245?style=flat&logo=React Router&logoColor=white"/> 
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=Axios&logoColor=white"/> 
  <img src="https://img.shields.io/badge/SCSS-CC6699?style=flat&logo=Sass&logoColor=white"/>
  <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat&logo=Tailwind CSS&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vercel-000000?style=flat&logo=Tailwind CSS&logoColor=white"/>
</div>

<br /><br />

# 🌟 Point Skills


||
|:---:|
|카테고리 필터 기능|


|||
|:---:|:---:|
|장바구니 기능||

<br /><br />

# 🚀 Refactoring Contents

### 1️⃣ 컴포넌트 구조 재설계 
1) ##### pages 내 파일 - components 폴더 - styles/layout 폴더의 이름 및 구조가 완전히 일치하도록 설계

2) ##### 재사용 여지가 있는 컴포넌트를 공통 컴포넌트로 분리
   ###### ex) CommonWrapper, Modal 컴포넌트 등 

4) ##### 데이터 기반 컴포넌트 분리 

<br />

### 2️⃣ Languages & Tools 변경
1. ##### TypeScript
   ###### 빌드 이전 단계에서 오류를 선제적으로 찾아 코드 안정성을 높힘
   
2. ##### SCSS
   ###### 변수 선언 : 프로젝트 내 color 간의 오차를 줄일 수 있고, 대대적 color 변경 시에도 유지보수가 간편함 
   ###### 중첩 기능 : 스타일 코드의 가독성을 높이고 더욱 효율적인 개발이 가능
   
3. ##### Redux-Toolkit
   ###### Redux의 기존 단점을 보완하고 간결하고 정형화된 코드 패턴을 사용

<br />

### 3️⃣ 사용자 친화적인 UI 
1) ##### 반응형 디자인
   ###### 모든 플랫폼에서 일관된 콘텐츠 경험을 사용자에게 제공
   |<img width="460" alt="데스크탑" src="https://github.com/whats-in-my-basket/whatsinmybasket_repactoring/assets/102032298/ccd1c281-2b72-410b-856e-86c4a6dbb7e0">|<img width="301" alt="모바일" src="https://github.com/whats-in-my-basket/whatsinmybasket_repactoring/assets/102032298/5049d86c-f368-44b5-9094-9ac60a5b220e">|
   |:----:|:----:|
   |Desktop|Mobile|
   


3) ##### Skeleton UI 기능
   ###### 실제 데이터가 렌더링 되기 전 화면의 윤곽을 미리 보여줌으로써 사용자의 이탈을 막음

<br />

### 4️⃣ 성능 최적화
1) ##### loading : lazy 속성 이용
   
2) ##### 로컬 내 이미지의 원본이 실제 화면에 렌더되는 사이즈에 비해 지나치게 크지 않도록 리사이징
   
3) ##### react-lazy-load 라이브러리 사용
   ###### 페이지 내의 이미지 컨텐츠가 스크롤 동작으로 화면에 보여질 때, 그때마다 요청해서 이미지를 받아오는 효과

<br />

### 5️⃣ 프론트 배포
[<img src="https://img.shields.io/badge/Whats in my Basket-000000?style=for-the-badge&logo=Whats in my Basket&logoColor=white"/>](https://whatsinmybasket.vercel.app/)
##### Vercel 배포를 통해 실제 동작하는 웹페이지의 모습 확인

