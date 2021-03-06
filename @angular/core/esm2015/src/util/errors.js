/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export const ERROR_TYPE = 'ngType';
export const ERROR_DEBUG_CONTEXT = 'ngDebugContext';
export const ERROR_ORIGINAL_ERROR = 'ngOriginalError';
export const ERROR_LOGGER = 'ngErrorLogger';
export function wrappedError(message, originalError) {
    const msg = `${message} caused by: ${originalError instanceof Error ? originalError.message : originalError}`;
    const error = Error(msg);
    error[ERROR_ORIGINAL_ERROR] = originalError;
    return error;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvdXRpbC9lcnJvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQztBQUNuQyxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRyxnQkFBZ0IsQ0FBQztBQUNwRCxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBRyxpQkFBaUIsQ0FBQztBQUN0RCxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsZUFBZSxDQUFDO0FBRzVDLE1BQU0sVUFBVSxZQUFZLENBQUMsT0FBZSxFQUFFLGFBQWtCO0lBQzlELE1BQU0sR0FBRyxHQUNMLEdBQUcsT0FBTyxlQUFlLGFBQWEsWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUEsQ0FBQyxDQUFDLGFBQWMsRUFBRSxDQUFDO0lBQ3RHLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QixLQUFhLENBQUMsb0JBQW9CLENBQUMsR0FBRyxhQUFhLENBQUM7SUFDckQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5leHBvcnQgY29uc3QgRVJST1JfVFlQRSA9ICduZ1R5cGUnO1xuZXhwb3J0IGNvbnN0IEVSUk9SX0RFQlVHX0NPTlRFWFQgPSAnbmdEZWJ1Z0NvbnRleHQnO1xuZXhwb3J0IGNvbnN0IEVSUk9SX09SSUdJTkFMX0VSUk9SID0gJ25nT3JpZ2luYWxFcnJvcic7XG5leHBvcnQgY29uc3QgRVJST1JfTE9HR0VSID0gJ25nRXJyb3JMb2dnZXInO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwcGVkRXJyb3IobWVzc2FnZTogc3RyaW5nLCBvcmlnaW5hbEVycm9yOiBhbnkpOiBFcnJvciB7XG4gIGNvbnN0IG1zZyA9XG4gICAgICBgJHttZXNzYWdlfSBjYXVzZWQgYnk6ICR7b3JpZ2luYWxFcnJvciBpbnN0YW5jZW9mIEVycm9yID8gb3JpZ2luYWxFcnJvci5tZXNzYWdlOiBvcmlnaW5hbEVycm9yIH1gO1xuICBjb25zdCBlcnJvciA9IEVycm9yKG1zZyk7XG4gIChlcnJvciBhcyBhbnkpW0VSUk9SX09SSUdJTkFMX0VSUk9SXSA9IG9yaWdpbmFsRXJyb3I7XG4gIHJldHVybiBlcnJvcjtcbn1cbiJdfQ==