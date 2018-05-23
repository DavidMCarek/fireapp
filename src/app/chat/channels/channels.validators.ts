import { FormControl, ValidatorFn } from '@angular/forms';
import { ChannelNameEncoder } from './channel-name-encoder';

export class ChannelNameValidator {
  static channelAlreadyExists(channelNames: string[]): ValidatorFn {
    return (c: FormControl) => {
      if (typeof channelNames === 'undefined' || channelNames == null) {
        return null;
      }

      return !channelNames.includes(ChannelNameEncoder.encode(c.value)) ? null : {
        channelAlreadyExists: { valid: false }
      };
    };
  }
}
