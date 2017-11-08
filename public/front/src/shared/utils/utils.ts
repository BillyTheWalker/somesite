/**
 * Created by Kishka on 08.11.2017.
 */
export class Utils {
  public static randomString(): string {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < Math.floor(Math.random() * 15) + 7; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
}
