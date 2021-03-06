/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// The functions in this file verify that the assumptions we are making
// about state in an instruction are correct before implementing any logic.
// They are meant only to be called in dev mode as sanity checks.
import { stringify } from './stringify';
export function assertNumber(actual, msg) {
    if (typeof actual != 'number') {
        throwError(msg);
    }
}
export function assertEqual(actual, expected, msg) {
    if (actual != expected) {
        throwError(msg);
    }
}
export function assertNotEqual(actual, expected, msg) {
    if (actual == expected) {
        throwError(msg);
    }
}
export function assertSame(actual, expected, msg) {
    if (actual !== expected) {
        throwError(msg);
    }
}
export function assertNotSame(actual, expected, msg) {
    if (actual === expected) {
        throwError(msg);
    }
}
export function assertLessThan(actual, expected, msg) {
    if (actual >= expected) {
        throwError(msg);
    }
}
export function assertGreaterThan(actual, expected, msg) {
    if (actual <= expected) {
        throwError(msg);
    }
}
export function assertNotDefined(actual, msg) {
    if (actual != null) {
        throwError(msg);
    }
}
export function assertDefined(actual, msg) {
    if (actual == null) {
        throwError(msg);
    }
}
export function throwError(msg) {
    // tslint:disable-next-line
    debugger; // Left intentionally for better debugger experience.
    throw new Error("ASSERTION ERROR: " + msg);
}
export function assertDomNode(node) {
    // If we're in a worker, `Node` will not be defined.
    assertEqual((typeof Node !== 'undefined' && node instanceof Node) ||
        (typeof node === 'object' && node != null &&
            node.constructor.name === 'WebWorkerRenderNode'), true, "The provided value must be an instance of a DOM Node but got " + stringify(node));
}
export function assertDataInRange(arr, index) {
    var maxLen = arr ? arr.length : 0;
    assertLessThan(index, maxLen, "Index expected to be less than " + maxLen + " but got " + index);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvdXRpbC9hc3NlcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsdUVBQXVFO0FBQ3ZFLDJFQUEyRTtBQUMzRSxpRUFBaUU7QUFFakUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUV0QyxNQUFNLFVBQVUsWUFBWSxDQUFDLE1BQVcsRUFBRSxHQUFXO0lBQ25ELElBQUksT0FBTyxNQUFNLElBQUksUUFBUSxFQUFFO1FBQzdCLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNqQjtBQUNILENBQUM7QUFFRCxNQUFNLFVBQVUsV0FBVyxDQUFJLE1BQVMsRUFBRSxRQUFXLEVBQUUsR0FBVztJQUNoRSxJQUFJLE1BQU0sSUFBSSxRQUFRLEVBQUU7UUFDdEIsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2pCO0FBQ0gsQ0FBQztBQUVELE1BQU0sVUFBVSxjQUFjLENBQUksTUFBUyxFQUFFLFFBQVcsRUFBRSxHQUFXO0lBQ25FLElBQUksTUFBTSxJQUFJLFFBQVEsRUFBRTtRQUN0QixVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDakI7QUFDSCxDQUFDO0FBRUQsTUFBTSxVQUFVLFVBQVUsQ0FBSSxNQUFTLEVBQUUsUUFBVyxFQUFFLEdBQVc7SUFDL0QsSUFBSSxNQUFNLEtBQUssUUFBUSxFQUFFO1FBQ3ZCLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNqQjtBQUNILENBQUM7QUFFRCxNQUFNLFVBQVUsYUFBYSxDQUFJLE1BQVMsRUFBRSxRQUFXLEVBQUUsR0FBVztJQUNsRSxJQUFJLE1BQU0sS0FBSyxRQUFRLEVBQUU7UUFDdkIsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2pCO0FBQ0gsQ0FBQztBQUVELE1BQU0sVUFBVSxjQUFjLENBQUksTUFBUyxFQUFFLFFBQVcsRUFBRSxHQUFXO0lBQ25FLElBQUksTUFBTSxJQUFJLFFBQVEsRUFBRTtRQUN0QixVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDakI7QUFDSCxDQUFDO0FBRUQsTUFBTSxVQUFVLGlCQUFpQixDQUFJLE1BQVMsRUFBRSxRQUFXLEVBQUUsR0FBVztJQUN0RSxJQUFJLE1BQU0sSUFBSSxRQUFRLEVBQUU7UUFDdEIsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2pCO0FBQ0gsQ0FBQztBQUVELE1BQU0sVUFBVSxnQkFBZ0IsQ0FBSSxNQUFTLEVBQUUsR0FBVztJQUN4RCxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7UUFDbEIsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2pCO0FBQ0gsQ0FBQztBQUVELE1BQU0sVUFBVSxhQUFhLENBQUksTUFBUyxFQUFFLEdBQVc7SUFDckQsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1FBQ2xCLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNqQjtBQUNILENBQUM7QUFFRCxNQUFNLFVBQVUsVUFBVSxDQUFDLEdBQVc7SUFDcEMsMkJBQTJCO0lBQzNCLFFBQVEsQ0FBQyxDQUFFLHFEQUFxRDtJQUNoRSxNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFvQixHQUFLLENBQUMsQ0FBQztBQUM3QyxDQUFDO0FBRUQsTUFBTSxVQUFVLGFBQWEsQ0FBQyxJQUFTO0lBQ3JDLG9EQUFvRDtJQUNwRCxXQUFXLENBQ1AsQ0FBQyxPQUFPLElBQUksS0FBSyxXQUFXLElBQUksSUFBSSxZQUFZLElBQUksQ0FBQztRQUNqRCxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxJQUFJLElBQUksSUFBSTtZQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxxQkFBcUIsQ0FBQyxFQUNyRCxJQUFJLEVBQUUsa0VBQWdFLFNBQVMsQ0FBQyxJQUFJLENBQUcsQ0FBQyxDQUFDO0FBQy9GLENBQUM7QUFHRCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsR0FBVSxFQUFFLEtBQWE7SUFDekQsSUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEMsY0FBYyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsb0NBQWtDLE1BQU0saUJBQVksS0FBTyxDQUFDLENBQUM7QUFDN0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8gVGhlIGZ1bmN0aW9ucyBpbiB0aGlzIGZpbGUgdmVyaWZ5IHRoYXQgdGhlIGFzc3VtcHRpb25zIHdlIGFyZSBtYWtpbmdcbi8vIGFib3V0IHN0YXRlIGluIGFuIGluc3RydWN0aW9uIGFyZSBjb3JyZWN0IGJlZm9yZSBpbXBsZW1lbnRpbmcgYW55IGxvZ2ljLlxuLy8gVGhleSBhcmUgbWVhbnQgb25seSB0byBiZSBjYWxsZWQgaW4gZGV2IG1vZGUgYXMgc2FuaXR5IGNoZWNrcy5cblxuaW1wb3J0IHtzdHJpbmdpZnl9IGZyb20gJy4vc3RyaW5naWZ5JztcblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydE51bWJlcihhY3R1YWw6IGFueSwgbXNnOiBzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBhY3R1YWwgIT0gJ251bWJlcicpIHtcbiAgICB0aHJvd0Vycm9yKG1zZyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydEVxdWFsPFQ+KGFjdHVhbDogVCwgZXhwZWN0ZWQ6IFQsIG1zZzogc3RyaW5nKSB7XG4gIGlmIChhY3R1YWwgIT0gZXhwZWN0ZWQpIHtcbiAgICB0aHJvd0Vycm9yKG1zZyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydE5vdEVxdWFsPFQ+KGFjdHVhbDogVCwgZXhwZWN0ZWQ6IFQsIG1zZzogc3RyaW5nKSB7XG4gIGlmIChhY3R1YWwgPT0gZXhwZWN0ZWQpIHtcbiAgICB0aHJvd0Vycm9yKG1zZyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydFNhbWU8VD4oYWN0dWFsOiBULCBleHBlY3RlZDogVCwgbXNnOiBzdHJpbmcpIHtcbiAgaWYgKGFjdHVhbCAhPT0gZXhwZWN0ZWQpIHtcbiAgICB0aHJvd0Vycm9yKG1zZyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydE5vdFNhbWU8VD4oYWN0dWFsOiBULCBleHBlY3RlZDogVCwgbXNnOiBzdHJpbmcpIHtcbiAgaWYgKGFjdHVhbCA9PT0gZXhwZWN0ZWQpIHtcbiAgICB0aHJvd0Vycm9yKG1zZyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydExlc3NUaGFuPFQ+KGFjdHVhbDogVCwgZXhwZWN0ZWQ6IFQsIG1zZzogc3RyaW5nKSB7XG4gIGlmIChhY3R1YWwgPj0gZXhwZWN0ZWQpIHtcbiAgICB0aHJvd0Vycm9yKG1zZyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydEdyZWF0ZXJUaGFuPFQ+KGFjdHVhbDogVCwgZXhwZWN0ZWQ6IFQsIG1zZzogc3RyaW5nKSB7XG4gIGlmIChhY3R1YWwgPD0gZXhwZWN0ZWQpIHtcbiAgICB0aHJvd0Vycm9yKG1zZyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydE5vdERlZmluZWQ8VD4oYWN0dWFsOiBULCBtc2c6IHN0cmluZykge1xuICBpZiAoYWN0dWFsICE9IG51bGwpIHtcbiAgICB0aHJvd0Vycm9yKG1zZyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydERlZmluZWQ8VD4oYWN0dWFsOiBULCBtc2c6IHN0cmluZykge1xuICBpZiAoYWN0dWFsID09IG51bGwpIHtcbiAgICB0aHJvd0Vycm9yKG1zZyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm93RXJyb3IobXNnOiBzdHJpbmcpOiBuZXZlciB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICBkZWJ1Z2dlcjsgIC8vIExlZnQgaW50ZW50aW9uYWxseSBmb3IgYmV0dGVyIGRlYnVnZ2VyIGV4cGVyaWVuY2UuXG4gIHRocm93IG5ldyBFcnJvcihgQVNTRVJUSU9OIEVSUk9SOiAke21zZ31gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydERvbU5vZGUobm9kZTogYW55KSB7XG4gIC8vIElmIHdlJ3JlIGluIGEgd29ya2VyLCBgTm9kZWAgd2lsbCBub3QgYmUgZGVmaW5lZC5cbiAgYXNzZXJ0RXF1YWwoXG4gICAgICAodHlwZW9mIE5vZGUgIT09ICd1bmRlZmluZWQnICYmIG5vZGUgaW5zdGFuY2VvZiBOb2RlKSB8fFxuICAgICAgICAgICh0eXBlb2Ygbm9kZSA9PT0gJ29iamVjdCcgJiYgbm9kZSAhPSBudWxsICYmXG4gICAgICAgICAgIG5vZGUuY29uc3RydWN0b3IubmFtZSA9PT0gJ1dlYldvcmtlclJlbmRlck5vZGUnKSxcbiAgICAgIHRydWUsIGBUaGUgcHJvdmlkZWQgdmFsdWUgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBhIERPTSBOb2RlIGJ1dCBnb3QgJHtzdHJpbmdpZnkobm9kZSl9YCk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydERhdGFJblJhbmdlKGFycjogYW55W10sIGluZGV4OiBudW1iZXIpIHtcbiAgY29uc3QgbWF4TGVuID0gYXJyID8gYXJyLmxlbmd0aCA6IDA7XG4gIGFzc2VydExlc3NUaGFuKGluZGV4LCBtYXhMZW4sIGBJbmRleCBleHBlY3RlZCB0byBiZSBsZXNzIHRoYW4gJHttYXhMZW59IGJ1dCBnb3QgJHtpbmRleH1gKTtcbn1cbiJdfQ==