//相加
export function sum(...args) { 
  return args.reduce((prev, current) => prev + current);
}

//数组去重
export function unique(args) {
  return Array.from(new Set(args));
}