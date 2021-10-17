# Chaapter19. State - 상태를 클래스로 표현하기

## State 패턴

- '상태'를 클래스로 표현
  - 클래스를 교체해서 '상태의 변화'를 표현
  - 새로운 상태 추가시 클래스를 추가
- [금고 경비 시스템 예제 수도코드](./pseudocode.md)

> 자기 모순에 빠지지 않도록 주의하기

- 시스템 상태가 여러개인 경우, 모순이나 불균형이 없어야함

## 등장인물

- **State**
  - 상태 interface
- **Concrete State**
- **Context**
  - 현재 상태 정보 저장
  - 이용자에게 필요한 인터페이스(API) 결정
  - ex.Context, SafeFrame

## Divide & Conquer

> 규모가 크고 복잡한 문제는 작게 나누어 해결하자!

- 복잡한 조건분기 대신, 상태를 클래스로 표현해서 복잡한 프로그램을 분할

## 관련 패턴

- **Singleton 패턴**
  - Concrete State 역할이 Singleton으로 구현되는 경우가 많음
- **Flyweight 패턴**
  - 상태를 표시하는 클래스는 인스턴스를 갖지 않기 때문에, Flyweight 패턴으로 Concrete State 역할을 여러 Context가 공유하도록 구현 가능
