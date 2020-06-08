var common = require("./common");

beforeEach(() => {
  console.log("test");
});

describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      common.assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
