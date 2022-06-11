# JS_review

- # 0610 (금)

  ## 1. 기술의 3가지 종류

  1. 변하지 않는 기술 => 네트워크, 운영체제, 컴퓨터 시스템, 논리학, 대수학
  2. 느리게 변하는 기술 => 프로그래밍 언어, 패러다임, 자료구조, 보안, 알고리즘
  3. 빠르게 변하는 기술 => 프레임워크, 라이브러리, UI, UX, 디자인 패턴

  ## 2. 프로그래밍 역량

  1. 일관성
  2. 유연성
  3. 확장성
  4. 독립성<br><br>

- # 0611 (토)

  ## 1. 모던 JavaScript와 개발 환경

  1. 모듈 (import, export)
  2. 브라우저 호환성
  3. 번들러 (webpack)
  4. 트랜스파일러 (babel)<br>
     => 내가 사용하고 싶은 언어를 자바스크립트 언어로 변환 (브라우저 호환 해결책)

  ## 2. JavaScript vs TypeScript

  - JavaScript를 충분히 학습하고 TypeScript를 학습하면 어려움이 없다.

  ```javascript
  // JS, TS 비교
  let age = 10;

  type Centimeter = number;
  type RainbowColor = "red" | "orange" | "yellow" | "green";
  // 데이터 타입을 명시적으로 지정
  let weight: number = 80;
  // 단위까지 지정이 가능하다.
  let height: Centimeter = 176;
  // RainbowColor에서 지정해준 색 이외에는 에러를 발생시킨다.
  let color: RainbowColor = "orange";
  ```

  ## 3. Node.js, npm

  - Node.js => 자바스크립트를 꼭 브라우저가 아닌 다른 언어처럼 운영체제 환경에서 실행이 가능하게 해줌.<br>
    `node <파일명>.js`
  - npm => 여러 기능들을 설치하여 사용할 수 있음 (앱스토어 느낌)
