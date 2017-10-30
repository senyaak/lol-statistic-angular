import { TestBed, inject } from "@angular/core/testing";

import { ProfileIconService } from "./profile-icon.service";

describe("ProfileIconService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileIconService]
    });
  });

  it("should be created", inject([ProfileIconService], (service: ProfileIconService) => {
    expect(service).toBeTruthy();
  }));
});
