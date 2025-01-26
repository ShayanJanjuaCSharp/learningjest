test("Checks for Null", () => {
  expect(null).toBeNull();
});

test("Checks for Undefined", () => {
  expect(undefined).toBeUndefined();
});

test("Checks for Truthy", () => {
  expect(1).toBeTruthy();
});

test("Checks for Falsy", () => {
  expect(0).toBeFalsy();
});
