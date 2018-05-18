import { TestBed, inject } from '@angular/core/testing';

import { ChannelStateService } from './channel-state.service';

describe('ChannelStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChannelStateService]
    });
  });

  it('should be created', inject([ChannelStateService], (service: ChannelStateService) => {
    expect(service).toBeTruthy();
  }));
});
