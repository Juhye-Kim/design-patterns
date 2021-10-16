# Chapter13. Visitor - 데이터 구조를 돌아다니면서 처리하기

## Visitor 패턴

> 데이터 구조 안을 돌아다니는 주체인 '방문자' 클래스가 '처리'를 담당

- `데이터 구조`와 `처리`를 분리
- 많은 요소들이 있는 데이터 구조가 있고, 각 요소에 어떤 '처리'를 해야할 때 사용
  - 처리는 클래스 안에 기술해도 되지만, 처리의 종류가 늘어날 떄마다 클래스를 수정해야함
  - 방문자 클래스가 있으면, 처리가 추가될 때마다 방문자를 새로 만들면 됨

> 데이터 구조와 연산을 분리해, 데이터 구조의 원소들을 변경하지 않고 새로운 연산을 추가 할 수 있습니다.
> 새로운 연산을 추가하려면 새로운 방문자를 추가하기만 하면 됩니다.

- 단, Element는 Visitor에게 필요한 정보를 공개할 필요가 있음

<br />

## 더블 디스패치 (double dispatch)

![다운로드 (7)](https://user-images.githubusercontent.com/63178953/137579006-ee8e900b-23ea-4111-9f38-c809aae62a72.png)

- element는 visitor를 `accept`
- visitor는 element를 `visit`
- ConcreteElement, ConcreteVisitor이 한 쌍을 이뤄 실제 처리를 결정
  - 이런걸 보통 **더블 디스패치(이중 분리)**라고 함

<br />

## 왜 이렇게 복잡하게 할까?

> Visitor 패턴의 목적은 처리를 데이터 구조에서 분리하는 일이다.

- File, Directory 클래스이 좀 더 '부품'으로서 독립적으로 존재하도록 도움

---

- Concrete Visitor 추가는 간단
  - 처리를 위해 Element는 건들지 않아도 됨
- Concrete Element 추가는 곤란
  - 하위 클래스들에 전부 해당 기능을 구현해야함

<br />

## OCP (The Open-Closed Principle)

> 클래스는 확장에 대해서는 열려있지만, 수정에 대해서는 닫혀있어야한다.

- **기존 클래스를 수정하지 않고, 확장할 수 있도록 하자**는 원칙

## 관련 패턴

**Iterator 패턴**

- 둘 다 어떤 데이터 구조 상에서 처리를 실행
  - Iterator : 데이터 구조의 요소를 하나씩 얻는데 사용
  - Visitor : 데이터 구조의 요소에 특정 처리를 하는데 사용

**Composite 패턴**

- 방문처가 되는 데이터 구조가 Composite 패턴이 되는 경우가 있음

**Interpreter 패턴**

- Interpreter 패턴에서 Visitor 패턴이 사용되기도 함
  - ex. 구문트리 생성 후, 각 노드를 순회하며 처리를 실행하는 경우
