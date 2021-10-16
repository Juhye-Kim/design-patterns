# Chapter8. Abstract Factory - 관련 부품을 조합해 제품 만들기

### Abstract Factory 패턴

> 추상적인 공장에서는, 추상적인 부품을 조합해, 추상적인 제품을 만듭니다.

- 구체적인 구현에는 주목하지 않고, 인터페이스(API)에 주목
- 인터페이스(API)만 사용해서 부품을 조립하고, 제품으로 완성
- 하위 클래스에서 구체적인 공장이 등장, 구체적 부품을 조합해 구체적 제품을 만듦!

### 등장인물

**Abstract Product (추상적인 제품)**

- 추상 부품, 제품 인터페이스(API) 결정
- ex. Link, Tray, Page

**Abstract Factory (추상적인 공장)**

- `Abstract Factory` 역할의 인스턴스를 만들어내기 위한 인터페이스(API) 결정
- ex. Factory
- 부품을 새로 추가하는건 곤란
  - factory에 새로 추가하면, 구현된 모든 구체적인 공장들에도 추가해줘야함

**Client (의뢰자)**

- Abstract Factory, Abstract Product만 이용해 역할을 실행
- 구체적인 제품, 공장은 알지 못함
- ex. Main

**Concrete Product (구체적인 제품)**

- Abstract Product 구체적으로 구현

**Concrete Factory (구체적인 공장)**

- Abstract Factory 구체적으로 구현
- 구체적인 공장을 새로 추가하려면, Abstract Product들을 구현하고, 각각의 추상메서드를 수현하면 됨!
  - factory 패키지 클래스들의 추상적인 부분을 하나씩 구체화하기!

### 관련 패턴

**Builder 패턴**

- Abstract Factory: 인터페이스(API)가 정해진 추상적인 부품을 조합해 복잡한 구조의 인스턴스 생성
- Builder: 단계적으로 큰 인스턴스를 생성

**Factory Method 패턴**

- Abstract Factory의 제품, 부품 만드는 부분에서 쓰이는 경우가 있음

**Composite 패턴**

- Abstract Factory 제품이 Composite 패턴이 되는 경우가 있음

**Sigleton 패턴**

- Abstract Factory 공장이 Singleton 패턴이 되는 경우가 있음
