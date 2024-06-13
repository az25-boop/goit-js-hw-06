class Storage {
  constructor(items) {
    this._items = items;
  }

  getItems() {
    return this._items;
  }

  addItem(newItem) {
    this._items.push(newItem);
  }

  removeItem(itemToRemove) {
    const itemIndex = this._items.indexOf(itemToRemove);

    if (itemIndex !== -1) {
      this._items.splice(itemIndex, 1);
    }
  }
}

const storage = new Storage(["Potatoes", "Tomatoes", "Bread"]);

console.log(storage.getItems()); // ["Potatoes", "Tomatoes", "Bread"]
storage.addItem("Apples");
console.log(storage.getItems()); // ["Potatoes", "Tomatoes", "Bread", "Apples"]
storage.removeItem("Tomatoes");
console.log(storage.getItems()); // ["Potatoes", "Bread", "Apples"]
