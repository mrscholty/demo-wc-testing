import { add } from "./math.service.js";
const assert = chai.assert;

describe("math.service (add)", () => {
  it("should add", () => {
    assert.equal(add(1, 2), 3);
  });
});
