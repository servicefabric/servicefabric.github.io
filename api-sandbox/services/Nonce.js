/**
 * nonce generates a number that does not repeat itself in a specific context.
 * for example in the context of a specific websocket channel or specific application context.
 */
class Nonce {
  constructor() {
    this.last = null;
    this.repeat=0
  };

  generate()  {
    var now = Math.pow(10, 2) * +new Date()

    if (now == this.last) {
      this.repeat++
    } else {
      this.repeat = 0
      this.last = now
    }

    return this.last + this.repeat;
  };
}
