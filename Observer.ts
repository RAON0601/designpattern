function createReactiveObject(target: any, callback: (str: string) => void) {
  const proxy = new Proxy(target, {
    set(obj, prop, value) {
      if (value !== obj[prop]) {
        const prev = obj[prop];
        obj[prop] = value;
        callback(
          `${prop.toString()}가 [${prev}] >> [${value}]로 변경되었습니다`
        );
      }

      return true;
    },
  });

  return proxy;
}

const a = {
  a: "b",
};

const b = createReactiveObject(a, console.log);
b.a = "123";
b.a = "456";
