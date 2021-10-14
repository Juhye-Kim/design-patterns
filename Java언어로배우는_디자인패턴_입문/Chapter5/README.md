# Chapter5. Singleton - 인스턴스 한 개만 만들기

## Singleton 패턴

> 인스턴스가 한 개만 존재하는 것을 보증하는 패턴

- `singleton` = 요소가 1개 뿐인 집합!
- `singleton pattern` = 인스턴스가 1개만 존재하는 클래스!
- Singleton 클래스 생성자는 private로 되어있음
  - 클래스 외부에서 생성자 호출을 금지하기 위해
  - `new Singleton` -> 컴파일 에러 발생
- ex. DB 커넥션 (한 시스템에서 여러번 연결할 필요 X)

## 등장인물

**Singleton의 역할**

- 유일한 인스턴스를 얻기 위한 static 메서드를 가짐
  - `getInstance`
  - 언제나 동일한 인스턴스를 반환
- 유일한 인스턴스는 언제 생성될까?
  - 프로그램 실행 후 getInstance() 호출 시, Singleton 클래스는 초기화되고, 유일한 인스턴스가 생성됨!ㄴ
- 인스턴스 개수를 왜 제한해야할까?
  - 복수 인스턴스 존재시, 서로 영향을 미치고 뜻하지 않은 버그를 초래할 수 있음

## 관련패턴

- 인스턴스가 하나인 경우가 많은 패턴
  - Abstract Factory, Builder, Facade, Prototype
