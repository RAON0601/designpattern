interface AbstractFactory {
  create(): Notebook;
}

class AppleFactory implements AbstractFactory {
  create(): Notebook {
    return new Macbook();
  }
}

class SamsungFactory implements AbstractFactory {
  create(): Notebook {
    return new SamsungNotebook();
  }
}

class RenovoFactory implements AbstractFactory {
  create(): Notebook {
    return new Thinkpad();
  }
}

interface Notebook {
  useNotebook(): string;

  getFactory(): string;
}

class Macbook implements Notebook {
  useNotebook(): string {
    return "Mackbook";
  }

  getFactory(): string {
    return "Apple";
  }
}

class SamsungNotebook implements Notebook {
  useNotebook(): string {
    return "SamsungNotebook";
  }

  getFactory(): string {
    return "Samsung";
  }
}

class Thinkpad implements Notebook {
  useNotebook(): string {
    return "Thinkpad";
  }

  getFactory(): string {
    return "Renovo";
  }
}

function clientCode(factory: AbstractFactory) {
  let notebook = factory.create();
  console.log(notebook.getFactory());
  console.log(notebook.useNotebook());
  console.log("------------------------------------");
}

clientCode(new AppleFactory());
clientCode(new SamsungFactory());
clientCode(new RenovoFactory());
