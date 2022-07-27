const { makeEventMock } = require("../__mocks__/event-post-user-registration");

const { onExecutePostUserRegistration } = require("./integration.action");

describe("Action integration", () => {
  let consoleLogMock;
  let eventMock;

  beforeEach(() => {
    eventMock = makeEventMock();
    consoleLogMock = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogMock.mockRestore();
    jest.clearAllMocks();
  });

  describe("onExecutePostUserRegistration", () => {
    it("executes", async () => {
      expect(async () => {
        await onExecutePostUserRegistration(eventMock);
      }).not.toThrow();
    });
  });
});
