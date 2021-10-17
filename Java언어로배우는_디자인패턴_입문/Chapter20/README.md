# Chapter20. Flyweight - 동일한 것을 공유해서 낭비 없애기

> 오브젝트를'가볍게'하는 패턴

- `flyweight` : 플라이급 (권투에서 체중이 제일 가벼운 체급)
- 컴퓨터에서 '가볍다' = '메모리 사용량이 적다'

> 인스턴스를 가능한 공유시켜서, 쓸데없이 new하지 않도록 하는 패턴

- 인스턴스가 필요할 때 항상 new를 하는게 아니라, 이미 만들어진 인스턴스를 이용할 수 있다면 그걸 공유해서 사용!
  - ex. getBigChar()

```js
class BigCharFactory {
  constructor() {
    this._pool = new Map();
  }

  getBigChar(charname) {
    let bc = this._pool.get(charname);
    if (!bc) {
      bc = new BigChar(charname);
      this._pool.set(charname, bc);
    }
  }

  getInstance() {
    if (BigCharFactory._instance) return BigCharFactory._instance;
    return (BigCharFactory._instacne = new BigCharFactory());
  }
}

BigCharFactory._instance = null;
```

> 여러곳에 영향을 미칠 수 있다.

- 공유하는 것을 변경하면 여러곳에 영향이 갈 수 있다. (주의사항)

> intrinsic, extrinsic

- `intrinsic` : 공유하는 정보
  - 어떤 상황에서도 변하지 않는 정보
  - 상태에 의존 X
- `extrinsic` : 공유하지 않는 정보
  - 인스턴스를 두는 장소에 따라 변하는 정보
  - 상황에 따라 변화 O
  - 상태에 의존 O

> 리소스를 줄일 수 있다.

- 리소스 = 메모리 + 시간 + ...
- 인스턴스를 공유하면, 인스턴스 생성을 위해 필요한 리소스의 양을 줄일 수 있음
  - 프로그램의 속도가 올라감!

## 등장인물

- **Flyweight**
  - 무거운 객체
  - ex. BigChar
- **Flyweight Factory**
  - Flyweight을 생성하는 공장
  - ex. BigCharFactory

## 관련 패턴

- **Proxy 패턴**
  - Flyweight 패턴에선 인스턴스 생성에 시간이 걸리는 경우, 인스턴스 공유에 따라 처리 속도가 향상됨
- **Composite 패턴**
  - 컴포지트 패턴의 Leaf 역할을 공유할 수 있는 경우 존재
- **Singleton 패턴**
  - Flyweight Factory가 싱글톤 패턴이 되는 경우 존재
    - Singleton 역할 인스턴스는 intrinsic한 정보만 가짐
