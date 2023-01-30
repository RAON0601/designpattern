interface IFruit {
  name?: string;
  color?: string;
  price?: number;
}

/**
 * 장점: 구현 간편함, 자동완성 조금 도움 받을 수 있음
 * 단점: 자동완성이 정석 구현 보다는 구려서 필드를 직접 확인해야 할 수 있음
 * 데코레이터 없이 현실적으로 구현 가능
 */
class Fruit {
  private name: string;
  private color: string;
  private price: number;

  constructor(obj?: IFruit) {
    this.name = obj?.name ?? "default"; // obj가 존재하면 name을 찾는다. name이 없으면 default 값을 준다.
    this.color = obj?.color ?? "default";
    this.price = obj?.price ?? 100;
  }
}

const f1 = new Fruit();
const f2 = new Fruit({ color: "red" });
const f3 = new Fruit({ color: "blue", price: 5000 });

console.log(
  "디폴트 파라매터를 이용한 빌더 구현 (손 많이 안간다는 장점이 있음)"
);
console.log(f1);
console.log(f2);
console.log(f3);

/**
 * Builder 정석 구현
 * 장점: 코드 자동완성 좋음
 * 단점: 구현 코드가 너무 많다 빌더 패턴을 쓴다면 필드가 엄청 많을 텐데 이거 어떻게 관리함?
 */
class Home {
  name: string;
  address: string;
  price: string;

  constructor(builder: HomeBuilder) {
    this.name = builder.getName() ?? "기본 값";
    this.address = builder.getAddress() ?? "기본값";
    this.price = builder.getPrice() ?? "기본 가격";
  }

  static builder() {
    return new HomeBuilder();
  }
}

class HomeBuilder {
  private _name: string | undefined;
  private _address: string | undefined;
  private _price: string | undefined;

  name(arg: string) {
    this._name = arg;
    return this;
  }

  address(arg: string) {
    this._address = arg;
    return this;
  }

  price(arg: string) {
    this._price = arg;
    return this;
  }

  getName() {
    return this._name;
  }

  getAddress() {
    return this._address;
  }

  getPrice() {
    return this._price;
  }

  build() {
    return new Home(this);
  }
}

console.log("정석 빌더 구현");
const home = Home.builder().address("주소").price("1억").build();
console.log(home);
