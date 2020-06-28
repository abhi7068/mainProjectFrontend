export default class Product {
  // label = '';
  // product_name = '';
  // _id = '';
  // category = '';

  constructor(info) {
    this.label = info.product_name;
    this.product_name = info.product_name;
    this._id = info._id;
    this.category = info.category;
  }
}
