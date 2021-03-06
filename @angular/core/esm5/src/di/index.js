/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * The `di` module provides dependency injection container services.
 */
export * from './metadata';
export { InjectFlags } from './interface/injector';
export { ɵɵdefineInjectable, defineInjectable, ɵɵdefineInjector } from './interface/defs';
export { forwardRef, resolveForwardRef } from './forward_ref';
export { Injectable } from './injectable';
export { Injector } from './injector';
export { ɵɵinject, inject, INJECTOR } from './injector_compatibility';
export { ReflectiveInjector } from './reflective_injector';
export { ResolvedReflectiveFactory } from './reflective_provider';
export { ReflectiveKey } from './reflective_key';
export { InjectionToken } from './injection_token';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9kaS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSDs7OztHQUlHO0FBRUgsY0FBYyxZQUFZLENBQUM7QUFDM0IsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBK0IsTUFBTSxrQkFBa0IsQ0FBQztBQUN0SCxPQUFPLEVBQUMsVUFBVSxFQUFFLGlCQUFpQixFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBQyxVQUFVLEVBQTBDLE1BQU0sY0FBYyxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDcEMsT0FBTyxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDcEUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFekQsT0FBTyxFQUFDLHlCQUF5QixFQUE2QixNQUFNLHVCQUF1QixDQUFDO0FBQzVGLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKlxuICogQG1vZHVsZVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgYGRpYCBtb2R1bGUgcHJvdmlkZXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gY29udGFpbmVyIHNlcnZpY2VzLlxuICovXG5cbmV4cG9ydCAqIGZyb20gJy4vbWV0YWRhdGEnO1xuZXhwb3J0IHtJbmplY3RGbGFnc30gZnJvbSAnLi9pbnRlcmZhY2UvaW5qZWN0b3InO1xuZXhwb3J0IHvJtcm1ZGVmaW5lSW5qZWN0YWJsZSwgZGVmaW5lSW5qZWN0YWJsZSwgybXJtWRlZmluZUluamVjdG9yLCBJbmplY3RhYmxlVHlwZSwgSW5qZWN0b3JUeXBlfSBmcm9tICcuL2ludGVyZmFjZS9kZWZzJztcbmV4cG9ydCB7Zm9yd2FyZFJlZiwgcmVzb2x2ZUZvcndhcmRSZWYsIEZvcndhcmRSZWZGbn0gZnJvbSAnLi9mb3J3YXJkX3JlZic7XG5leHBvcnQge0luamVjdGFibGUsIEluamVjdGFibGVEZWNvcmF0b3IsIEluamVjdGFibGVQcm92aWRlcn0gZnJvbSAnLi9pbmplY3RhYmxlJztcbmV4cG9ydCB7SW5qZWN0b3J9IGZyb20gJy4vaW5qZWN0b3InO1xuZXhwb3J0IHvJtcm1aW5qZWN0LCBpbmplY3QsIElOSkVDVE9SfSBmcm9tICcuL2luamVjdG9yX2NvbXBhdGliaWxpdHknO1xuZXhwb3J0IHtSZWZsZWN0aXZlSW5qZWN0b3J9IGZyb20gJy4vcmVmbGVjdGl2ZV9pbmplY3Rvcic7XG5leHBvcnQge0NsYXNzUHJvdmlkZXIsIENsYXNzU2Fuc1Byb3ZpZGVyLCBDb25zdHJ1Y3RvclByb3ZpZGVyLCBDb25zdHJ1Y3RvclNhbnNQcm92aWRlciwgRXhpc3RpbmdQcm92aWRlciwgRXhpc3RpbmdTYW5zUHJvdmlkZXIsIEZhY3RvcnlQcm92aWRlciwgRmFjdG9yeVNhbnNQcm92aWRlciwgUHJvdmlkZXIsIFN0YXRpY0NsYXNzUHJvdmlkZXIsIFN0YXRpY0NsYXNzU2Fuc1Byb3ZpZGVyLCBTdGF0aWNQcm92aWRlciwgVHlwZVByb3ZpZGVyLCBWYWx1ZVByb3ZpZGVyLCBWYWx1ZVNhbnNQcm92aWRlcn0gZnJvbSAnLi9pbnRlcmZhY2UvcHJvdmlkZXInO1xuZXhwb3J0IHtSZXNvbHZlZFJlZmxlY3RpdmVGYWN0b3J5LCBSZXNvbHZlZFJlZmxlY3RpdmVQcm92aWRlcn0gZnJvbSAnLi9yZWZsZWN0aXZlX3Byb3ZpZGVyJztcbmV4cG9ydCB7UmVmbGVjdGl2ZUtleX0gZnJvbSAnLi9yZWZsZWN0aXZlX2tleSc7XG5leHBvcnQge0luamVjdGlvblRva2VufSBmcm9tICcuL2luamVjdGlvbl90b2tlbic7XG4iXX0=