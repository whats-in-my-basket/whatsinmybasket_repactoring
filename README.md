# 💡 What's im my Basket ❓
> 기존에 개발했던 쇼핑 플랫폼 프로젝트를 Refactoring 해보자!

<br /><br />

# ⚽ Goal 
1️⃣ 클린 코드를 작성하여 **가독성**을 높이자


2️⃣ 사용자의 편의를 고려하여 **웹 성능**을 개선해보자

<br /><br />

## 🛠️ 기술 스택

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

## 🌟 Point Skills


|||
|:---:|:---:|
|카테고리 필터 기능|검색 기능|


|||
|:---:|:---:|
|장바구니 기능||

<br /><br />

## 🚀 Refactoring Contents

### 1. 컴포넌트 구조 재설계
1) ##### pages 내 파일 - components 폴더 - styles/layout 폴더의 이름 및 구조가 완전히 일치하도록 설계

2) ##### 재사용 여지가 있는 컴포넌트를 공통 컴포넌트로 분리
   ###### ex) CommonWrapper, Modal 컴포넌트 등 

4) ##### 데이터 기반 컴포넌트 분리 

<br />

### 2. 전역 상태관리 Tool 변경 
##### Redux-Toolkit을 통해 무분별한 Props drilling을 방지하고 전역 상태를 관리함 

<br />

### 3. 사용자 친화적인 UI 
1) ##### 반응형 디자인 구현

2) ##### Skeleton UI 기능 추가

<br />

### 4. 성능 최적화
1) ##### loading : lazy 속성 이용
   
2) ##### 로컬 내 이미지의 원본이 실제 화면에 렌더되는 사이즈에 비해 지나치게 크지 않도록 리사이징
   
3) ##### react-lazy-load 라이브러리 사용
   ###### 페이지 내의 이미지 컨텐츠가 스크롤 동작으로 화면에 보여질 때, 그때마다 요청해서 이미지를 받아오는 효과
