type QueueItem = () => Promise<void>; // a function returing promise void

export default class TypeWriter {
  private element: HTMLElement;
  private loop: boolean;
  private typingSpeed: number;
  private deletingSpeed: number;
  private queue: QueueItem[] = [];
  constructor(
    public parent: HTMLElement,
    { loop = false, typingSpeed = 50, deletingSpeed = 50 } = {}
  ) {
    this.element = document.createElement("div");
    this.element.classList.add("whitespace");
    parent.appendChild(this.element);
    this.loop = loop;
    this.typingSpeed = typingSpeed;
    this.deletingSpeed = deletingSpeed;
  }

  typeString(string: String): TypeWriter {
    this.addToQueue((resolve) => {
      // add string to screen
      let i = 0;
      const interval = setInterval(() => {
        this.element.append(string[i] as unknown as Node);
        i++;
        if (i >= string.length) {
          clearInterval(interval);
          resolve();
        }
      }, this.typingSpeed);
    });
    return this;
  }

  deleteChars(number: number): TypeWriter {
    this.addToQueue((resolve) => {
      // add string to screen
      let i = 0;
      const interval = setInterval(() => {
        this.element.textContent = this.element.textContent?.substring(
          0,
          this.element.textContent.length - 1
        ) as string; // we can also use innerText if we dont want type assertions
        i++;
        if (i >= number) {
          clearInterval(interval);
          resolve();
        }
      }, this.deletingSpeed);
    });
    return this;
  }

  deleteAll(deleteSpeed = this.deletingSpeed): TypeWriter {
    this.addToQueue((resolve) => {
      // add string to screen
      const interval = setInterval(() => {
        this.element.textContent = this.element.textContent?.substring(
          0,
          this.element.textContent.length - 1
        ) as string; // we can also use innerText if we dont want type assertions
        if (this.element.textContent.length === 0) {
          clearInterval(interval);
          resolve();
        }
      }, deleteSpeed);
    });
    return this;
  }

  pauseFor(duration: number): TypeWriter {
    this.addToQueue((resolve) => {
      setTimeout(resolve, duration);
    });
    return this;
  }

  async start(): Promise<TypeWriter> {
    for (const cb of this.queue) {
      await cb();
      if (this.loop) this.queue.push(cb);
    }
    return this;
  }

  // cb should be a function which takes resolve and returns void
  private addToQueue(cb: (resolve: () => void) => void) {
    this.queue.push(() => {
      return new Promise(cb);
    });
  }
}
