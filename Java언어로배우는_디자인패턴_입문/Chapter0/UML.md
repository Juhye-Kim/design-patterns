# UML (Unified Modeling Language)

## UML

- 시스템을 시각화하거나, 시스템 사양이나 설계를 문서화하기 위한 표현 방법
- 클래스, 인스턴스의 관계 표현을 위해 사용

## 클래스 다이어그램 (Class Diagram)

<img width="400" alt="스크린샷 2021-10-09 오후 4 41 58" src="https://user-images.githubusercontent.com/63178953/136649211-7d5c5a55-6e6d-4db6-9f1c-84c4d241c96c.png">

- 클래스, 인스턴스, 인터페이스 등의 정적인 관계를 표현한 것

**표현방법**

- `직사각형`: 각 클래스
- `실선 화살표`: 클래스 계층관계 (하위 -> 상위, extends)
  - 수평선으로 분할해서 클래스명, 필드명, 메서드명 순서대로 적음
  - 클래스 필드명은 `밑줄` 사용
  - 클래스 메서드는 `밑줄` 사용
  - 추상클래스명은 `이탤릭체` 사용
  - 추상 메서드는 `이탤릭체` 사용

### 인터페이스와 구현

- 구현 클래스 -> 인터페이스로 화살표 표시 (implements)
- `<<interface>>` 표시

### 집약 (Aggregation)

- '갖고 있는' 관계
- 어떤 구현이라해도 인스턴스를 갖고 있으면 개수에 상관없이 집약 관계!
- `마름모꼴`로 관계 표시

### 액세스 제어

- 메서드, 필드 액세스 제어 표현
- 기호로 표현
  - `+` : public
  - `-` : private
  - `#` : protect
  - `~` : 동일 패키지 내

## 클래스 관계

- 관련 이름에 `▶` 표시 붙이기

## 시퀀스 다이어그램 (Sequence Diagram)

<img width="500" alt="sequence" src="https://user-images.githubusercontent.com/63178953/136650618-b809ea92-23ef-47f6-a2a2-bece27b47ad6.png">

- 프로그램 작동시 어떤 메서드가 어떤 순서로 실행되는지, 어떤 추상클래스가 어떤 순서로 실행되는지를 표현
- 클래스 다이어그램 : 시간에 의해 변하지 않는 것 (정적인 관계)
- 시퀀스 다이어그램 : 시간에 따라 변하는 것 (동적인 관계)

### 처리흐름과 객체 간 협조 동작

- `인스턴스명:클래스명` 형태로 표현
- `라이프 라인 (생존선)`
  - 각 인스턴스에서 아래 방향으로 뻗어있는 점선
    - 위 = 과거, 아래 = 미래
    - 인스턴스가 존재하는 동안만 존재
- `긴 직사각형` = 객체 활동 중
- `검은 화살표` = 메서드 호출
- `점선 화살표` = 메서드 리턴 (반환)
