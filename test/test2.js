import { substract, foo } from "./math.service.js";
const assert = chai.assert;

describe("math.service (substract)", () => {
  it("should substract", () => {
    assert.equal(substract(6, 2), 4);
  });

  it("should foo", () => {
    return foo().then(result => {
      assert.equal(result, "async message");
    });
  });
});
