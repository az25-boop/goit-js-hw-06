class StringBuilder {
  constructor(initialValue) {
    this._value = initialValue;
  }

  getValue() {
    return this._value;
  }

  padEnd(str) {
    this._value += str;
  }

  padStart(str) {
    this._value = str + this._value;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

const builder = new StringBuilder("Hello");
console.log(builder.getValue()); // "Hello"
builder.padEnd(", World!");
console.log(builder.getValue()); // "Hello, World!"
builder.padStart("Hey, ");
console.log(builder.getValue()); // "Hey, Hello, World!"
builder.padBoth("***");
console.log(builder.getValue()); // "***Hey, Hello, World!***"
