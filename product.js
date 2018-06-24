(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./product-class"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var product_class_1 = require("./product-class");
    var prod1 = new product_class_1.Product('Football', 100);
    var discountPrice = prod1.getDiscounttedPrice(10);
    console.log('${discountPrice}');
});
//# sourceMappingURL=product.js.map