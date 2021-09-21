import { randomMessages } from '../src'
describe("Test suite for index random messages", () => {
  test("Should return a random name from and array words", () => {
    const expectedResult = "Ana";

    jest.spyOn(Math,'random').mockImplementation(() => 0.3)

    const messages = randomMessages();

    expect(messages).toBe(expectedResult);
  });

});
