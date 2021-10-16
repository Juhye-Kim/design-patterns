# Chapter7. Builder - 복잡한 인스턴스 조립하기

## Builder 패턴

> 구조를 가진 인스턴스를 쌓아 올리는 패턴

- 한번에 완성시키는게 아니라, 단계를 밟아 만들어 나가는 패턴!

## 관련 패턴

**Template Method 패턴**

- Builder: Director이 Builder 역할을 제어
- Template: 상위클래스가 하위클래스를 제어

**Composite 패턴**

- Builder 패턴의 생성물이 Composite 패턴이 되는 경우가 있음

**Abstract Factory 패턴**

- 둘 다 복잡한 인스턴스를 생성

**Facade 패턴**

- Builder: Director은 Builder의 복잡한 메서드를 조합해 인스턴스를 단축하는 API를 외부에 제공
- Facade: 내부모듈을 조합해 단순한 API를 외부에 제공
