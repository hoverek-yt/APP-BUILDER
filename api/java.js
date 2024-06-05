export function getJavaObject(className) {
  return new android.JavaObject(className);
}
export function instantiate(javaObject, ...params) {
  return javaObject._newInstance(...params);
}

export function release(instance) {
  instance._forget();
}
