# Chapter17. Observer - 상태 변화를 알려주기

## Observer 패턴

> 오브젝트의 상태 변화를 다른 오브젝트에 알리는 패턴

- 관찰 대상의 상태가 변하면, 관찰자에게 알려주는 패턴
  - `동기화`가 주 목적!
- ex. React, Redux

> 교환 가능성 (클래스 내 인스턴스 사용시 주의사항)

- 추상클래스, 인터페이스를 사용해 구상/추상 클래스를 분리
- 필드에서 인스턴스를 저장할 때는, 구상이 아닌 추상 클래스 형태로 할 것
  - 나중에 교환하기 쉽도록!

> Observer 순서

- observers 배열에 있는 Observer들의 순서가 변해도 상관없도록, 독립적으로 구현해야함
  - 의존성 혼란 발생하지 않도록!

> Observer 행위가 Subject에 영향을 미칠 때

- Subject -> Observer -> Subject -> Observer ...
- 무한 호출되는 경우 조심!
- 현재 Subject에서 전달받는 중인지, 아닌지 나타내는 `flag 변수` 두면 좋음

> Publish-Subscribe 패턴이라고도 함

- Observer는 Subject를 `subscribe(구독)`
- Subject는 상태 변화를 `publish(발행)`

> Model : View = Subject : Observer

- 보통 `Model : View = 1 : 다` 관계
  - Model : 표시 형식에 의존하지 않는 내부 모델을 조작하는 부분
  - View : 어떻게 보일지 관리하는 부분

<br/>

## 관련 패턴

- Mediator 패턴
  - Mediator, Colleague 통신에 Observer 패턴 적용 가능
