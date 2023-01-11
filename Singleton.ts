class Singleton {
  private static instance: Singleton;

  // 생성자를 직접 호출하지 못하도록 막는다.
  private constructor() {}

  // 클래스의 인스턴스를 얻기 위해서는 getInstance 메소드로만 호출 할 수 있어야 한다.
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      // 만약 멀티 스레드를 지원하는 프로그램이라면 여기서 동기화 이슈가 발생하여 여러개의 인스턴스가 생기지 않도록 락을 걸어야 한다.
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  public someBusinessLogic() {
    // ...
  }
}

function clientCode() {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  if (s1 === s2) {
    console.log("싱글톤이다");
  } else {
    console.log("아니다");
  }
}

clientCode();

export {};
