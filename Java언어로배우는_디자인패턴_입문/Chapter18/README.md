# Chapter18. Memento - 상태를 저장하기

## Memento 패턴

- `memento`: 기념물, 유품, 추억거리

> 인스턴스 상태를 나타내는 역할을 도입해 캡슐화의 파괴에 빠지지 않고 저장과 복원을 실행하는 패턴

- `undo` (실행취소)를 구현하려면, 인스턴스의 정보를 저장해두고, 이 정보로 인스턴스 상태를 되돌려야함
- 인스턴스 복원을 위해서는 내부 정보에 자유롭게 액세스 가능해야함
  - but 원치 않는 액세스까지 허용하면, `캡슐화의 파괴`가 일어남
  - 캡슐화의 파괴 = 클래스 내부구조에 의존한 코드가 프로그램 여기저기로 흩어져, 클래스 수정이 어려워지는 것

> 현재 오브젝트의 상태를 기록, 저장하기 위한 패턴

- 이 패턴을 사용하면 undo(실행취소), redo(재실행), history(작업이력), snapshot(현재상태 저장) 등 실행 가능
- 어떤 시점의 인스턴스 상태를 기록해 저장해두면, 나중에 인스턴스를 그 시점으로 되돌릴 수 있음!

## 등장인물

- **Originator(작성자)**
  - 자신의 현재상태를 저장하고 싶을 때, Memento를 생성
  - 이전 Memento를 전달받으면, 그 Memento를 만든 시점으로 돌리는 처리를 실행
  - ex. Gamer
- **Memento**
  - Originator 내부 정보를 정리
  - Originator 역할의 내부 정보를 가지고 있지만, 누구에게도 공개 X
  - 두 종류의 API를 가짐 (캡슐화 파괴 방지)
    - wide interface : 오브젝트 상태를 되돌리기 위해 필요한 정보를 모두 얻을 수 있는 메서드 집합
    - narrow interface : 외부의 Caretaker에게 보여지는 정보, 내부 상태가 외부로 공개되는 것을 방지
      - ex. 현재 누적 금액
- **Caretaker (관리인)**
  - 현재 Originator 상태를 저장하고 싶을 때, Originator에게 전달
    - Originator는 Memento를 만들어서 Caretaker에게 전달
  - 미래의 필요에 대비해서 Memento역할을 저장해둠
  - ex. Main

## Memento

- 예제에서는 하나의 값만 저장했지만, 배열 등으로 여러 시점 저장 가능
- **Caretaker(Main), Originator(Gamer) 역할을 분리**해두면, 여러 단계의 undo를 실행하도록 변경하고 싶다! 현재 상태를 파일에 저장하고싶다! 할 때, Originator 역할을 변경할 필요 X

## 관련 패턴

- **Command 패턴**
  - 명령 처리할 때 Memennto 패턴으로 undo/redo 실행 가능
- **Prototype 패턴**
  - Memento: 복원을 위해 필요한 정보만 저장
  - Prototype: 인스턴스 내용을 전부 복사
- **State 패턴**
  - Memento: 인스턴스가 '상태'를 표현
  - State: 클래스가 '상태'를 표현
