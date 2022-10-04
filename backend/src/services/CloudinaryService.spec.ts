import { expect } from "chai";
import { PlatformTest } from "@tsed/common";
import { CloudinaryService } from "./CloudinaryService";

describe("CloudinaryService", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<CloudinaryService>(CloudinaryService);
    // const instance = PlatformTest.invoke<CloudinaryService>(CloudinaryService); // get fresh instance

    expect(instance).to.be.instanceof(CloudinaryService);
  });
});
