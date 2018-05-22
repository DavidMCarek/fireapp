import { FormControl, ValidatorFn } from '@angular/forms';

export class ChannelNameValidator {
  static channelAlreadyExists(channelNames: string[]): ValidatorFn {
    return (c: FormControl) => {
      if (typeof channelNames === 'undefined' || channelNames == null) {
        return null;
      }

      return !channelNames.includes(c.value.toLowerCase()) ? null : {
        channelAlreadyExists: { valid: false }
      };
    };
  }

  static invalidCharacters(): ValidatorFn {
    return (c: FormControl) => {
      return c.value.match(/[#.\$\/\\\[\]]/g) ? { invalidCharacters: { valid: false }} : null;
    };
  }
}
