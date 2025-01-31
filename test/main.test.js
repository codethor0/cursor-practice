const getAppInfo = require("../src/main");

test("getAppInfo returns correct object", () => {
  const info = getAppInfo();
  expect(info.name).toBe("cursor-practice");
  expect(info.version).toBe("1.0.0");
});
