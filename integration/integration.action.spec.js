const { eventMock } = require("../__mocks__/event-post-user-registration");

const { onExecutePostUserRegistration } = require("./integration.action");

describe("Action integration", () => {
  let consoleLogMock;

  beforeEach(() => {
    consoleLogMock = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogMock.mockRestore();
    jest.clearAllMocks();
    eventMock.secrets = {};
  });

  describe("onExecutePostUserRegistration", () => {
    it("executes", async () => {
      expect(async () => {
        await onExecutePostUserRegistration(eventMock);
      }).not.toThrow();
    });
  });
});
