# Chapter1. Iterator - 순서대로 지정해서 처리하기

## Iterator 패턴?

> 집합체 요소를 통일된 방법으로, 순서대로 지저하며 처리하는 패턴

> 여러개가 모여있는 것들을 순서대로 지정하면서, 전체를 검색하는 처리를 실행하기 위한 것

<br />

**Iterator**

```js
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

- `Iterator 패턴`
  - 반복문에서 현재 주목하는 배열 요소를 차례로 처리
  - 변수 i의 기능을 추상화해서 일반화한 것
- `iterator` = 반복자

<br />

## Iterator 패턴의 등장인물

1. Iterator (반복자)
   - 요소를 순서대로 검색하는 인터페이스를 결정
   - `Iterator`
2. ConcreteIterator (구체적인 반복자)
   - Iterator가 결정한 인터페이스를 실제로 구현
   - 검색에 필요한 필드 필요 (ex. index)
   - `BookShelfIterator`
3. Aggregate (집합체)
   - Iterator 역할을 만들어내는 인터페이스 결정
   - 요소들을 순서대로 검색해주는 사람을 만들어내는 메서드
   - `Aggregate`
4. ConcreteAggregate (구체적인 집합체)
   - Aggregate 역할이 결정한 인터페이스를 실제로 구현하는 역할
   - `BookShelf`

<br />

## 왜 굳이 Iterator를 사용해야할까?

> 왜 집합체 외부에 Iterator 역할같은걸 만들어야할까? 그냥 for문으로 돌리면 되는거 아닌가?

```js
while (it.hasNext()) {
  const book = it.next();
  console.log(book.name);
}
```

- Iterator를 사용함으로써 구현과 분리해 하나씩 셀 수 있기 떄문!
- while 루프는 BookShelf 구현에 의존 X
  - 여기서 쓰이는건 Iterator의 메서드 뿐!
  - BookShelf를 어떻게 수정해도 iterator 메서드만 제대로 작동하면 while문은 수정하지 않아도 됨!
- 디자인 패턴이 추구하는 `클래스의 재이용화`를 촉진
  - 클래스를 부품처럼 사용 가능
  - 한 부품을 수정해도, 다른 부품에 큰 영향 없이 적은 수정만으로도 끝낼 수 있음

## 추상클래스, 인터페이스

> 추상클래스, 인터페이스를 사용해 프로그래밍 하기!

- 구체적인 클래스만 사용하면 클래스 간 결합이 강해짐
  - 부품으로 재이용하기 어려움
- 결합을 약하게 해야 재이용이 쉬워짐!

## Iterator 클래스 검색 응용

- 역방향
- 정방향 + 역방향 (previous + next)
- 점프 (번호 지정)

## 관련 패턴

**Visitor 패턴**

- 하나씩 세면서 동시에 정해진 처리를 하는 패턴
- 많은 것이 모인 내부를 돌아다니며, <u>같은 처리를 반복 적용</u>

**Composite 패턴**

- 재귀적인 구조를 갖는 패턴
- 여기에 Iterator 패턴 적용하기는 어려움

**Factory Method 패턴**

- `iterator` 메서드가 `Iterator` 인스턴스를 작성할 때 사용하기도 함
