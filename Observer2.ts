interface Subject {
  attach(observer: Observer): void;

  detach(observer: Observer): void;

  notify(): void;
}

class HandphoneShop implements Subject {
  public isNewPhone = false;
  private observers: Observer[] = [];

  attach(observer: Observer): void {
    if (this.observers.includes(observer)) return;
    this.observers.push(observer);
  }
  detach(observer: Observer): void {
    const index = this.observers.indexOf(observer);

    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notify(): void {
    this.observers.forEach((observer) => observer.update(this));
  }

  newPhoneArrived() {
    this.isNewPhone = true;
    this.notify();
  }

  newPhoneSoldeOut() {
    this.isNewPhone = false;
    this.notify();
  }
}

interface Observer {
  update(subject: Subject): void;
}

class Customer implements Observer {
  constructor(private name: string) {
    this.name = name;
  }

  update(subject: HandphoneShop): void {
    console.log(`${this.name}: 새로운 폰이 왔나요??`);
    console.log(`핸드폰 가게: ${subject.isNewPhone}`);
  }
}

const handphoneShop = new HandphoneShop();
const c1 = new Customer("정민");
const c2 = new Customer("민정");

handphoneShop.attach(c1);
handphoneShop.attach(c2);
handphoneShop.newPhoneArrived();
console.log("----------------------");
handphoneShop.newPhoneSoldeOut();
