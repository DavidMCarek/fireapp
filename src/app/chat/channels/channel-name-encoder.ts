export class ChannelNameEncoder {
  public static encode(channelName: string): string {
    return btoa(channelName.toLowerCase());
  }
}
