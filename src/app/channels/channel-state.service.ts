import { Injectable } from '@angular/core';
import { ExpansionState } from './channel-state';

@Injectable()
export class ChannelStateService {

  private currentExpansionState = new ExpansionState();

  constructor() { }

  setExpansionState(expansionState: ExpansionState): void {
    this.currentExpansionState = expansionState;
  }

  getExpansionState(): ExpansionState {
    return this.currentExpansionState;
  }
}
