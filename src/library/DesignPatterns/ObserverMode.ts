
export class ObserverList { //观察者列表
  observerList: Array<Observer> = [];

  Add(obj: Observer) {
    return this.observerList.push(obj);
  }

  Insert(obj: Observer, index: number) {
    let pointer = -1;
    if (index === 0) {
      this.observerList.unshift(obj);
      pointer = index;
    } else if (index === this.observerList.length) {
      this.observerList.push(obj);
      pointer = index;
    }
    return pointer;
  }

  Empty() {
    this.observerList = [];
  }

  RemoveAt(index: number) {
    if (index === 0) {
      this.observerList.shift();
    } else if (index === this.observerList.length - 1) {
      this.observerList.pop();
    } else {
      // this.observerList.pop();
    }
  }

  Count() {
    return this.observerList.length;
  }

  Get(index: number) {
    if (index > -1 && index < this.observerList.length) {

      return this.observerList[index];
    }
    // throw new Error(`Parameter 'index' must be greater than -1 and less than observerList.length`);
  }

  IndexOf(obj: Observer, startIndex = 0) {
    let i = startIndex, pointer = -1;
    while (i < this.observerList.length) {
      if (this.observerList[i] === obj) {
        pointer = i;
        break;
      }
      i++;
    }
    return pointer;
  }

}

export class Subject { //被观察者
  observers: ObserverList = new ObserverList();
  AddObserver(observer) {
    this.observers.Add(observer);
  }
  RemoveObserver(observer) {
    this.observers.RemoveAt(this.observers.IndexOf(observer, 0));
  }

  /**
   * @desc 通知函数
   */
  Notify(context: any) {
    let observerCount = this.observers.Count();
    for (let i = 0; i < observerCount; i++) {
      this.observers.Get(i).Update(context);
    }
  }
}

class Observer { //观察者
  Update(context: any) {

  }
}

export function extend(extension: Object, obj: Object) {
  for (let key in extension) {
    obj[key] = extension[key];
  }
}