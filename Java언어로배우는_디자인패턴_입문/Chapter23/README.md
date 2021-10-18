# Chapter23. Interpreter - 문법규칙을 클래스로 표현하기

> 미니 언어를 사용해 문제를 해결하는 패턴

- 프로그램이 해결하려는 문제를 간단한 `미니언어`로 표현
  - 구체적인 문제를 `미니언어`로 기술된 `미니 프로그램`으로 표현
  - 이 `미니 프로그램`은 그 자체로 동작 X - `통역(Interpreter)` 역할 하는 프로그램도 필요!
- 해결할 문제가 바뀌면, 프로그램 대신 미니 프로그램을 수정!

> 건너뛸 것인가, 읽을 것인가

- nonterminal 메서드는 '이 메서드에 왔을 때 어디까지 토큰을 읽고 있고, 어디까지 토큰을 읽을지' 염두해야함
  - 인터프리터 만들 때, 토큰을 한 개 많이 읽거나 적게 읽는 버그 주의!

<br/><br/>

## 등장 인물

- **Abstract Expression (추상적인 표현)**
  - 구문트리 노드 공통 인터페이스(API)
  - ex. Node
- **Terminal Expression (종착점 표현)**
  - ex. PrimitiveCommandNode
- **Nonterminal Expression (비종착점 표현)**
  - ex. ProgramNode, Commandnode, RepeatNode, CommandListNode ...
- **Context**
  - 인터프리터가 구문해석을 실행하기 위한 정보를 제공
  - ex. Context

<br/><br/>

## 관련 패턴

- **Composite 패턴**
  - NonterminalExpression은 재귀적인 구조인 경우가 많음
- **Flyweight 패턴**
  - TerminalExpression은 Flyweight패턴으로 공유되는 경우가 많음
- **Visitor 패턴**
  - 구문트리 작성 후, 각 노드를 순회하며 처리하는 경우 사용되기도 함
