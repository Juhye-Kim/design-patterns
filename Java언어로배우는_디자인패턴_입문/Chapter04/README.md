# Chapter4. Factory Method - 하위 클래스에서 인스턴스 만들기

## Factory Method 패턴

- Template Method 패턴을 인스턴스 생성에 적용한 것
- **인스턴스 생성을 위한 골격 (framework)** & **실제 인스턴스 생성 클래스**를 분리
  - 전체적인 클래스들의 관계를 템플릿화하는 패턴

## 관련 패턴

**Template Method 패턴**

- 이 패턴을 응용한게 Factory Method 패턴!
- 예제에서 create()는 이 패턴으로 구현됨

**Singleton 패턴**

- Creator 클래스는 대부분 싱글톤 패턴으로 만들 수 있음
  - 프로그램 내에서 인스턴스가 여러개 존재할 필요는 거의 없기 때문
  - 이 예제에서는 사용 X

**Composite 패턴**

- Produt 역할에 적용 가능

**Iterator 패턴**

- iterator()가 Iterator 인스턴스를 작성할 때, Factory Method 패턴이 사용되는 경우가 있음
