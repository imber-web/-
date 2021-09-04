//TS声明文件
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.less' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// 把图片也声明为TS模块,防止报错
declare module '*.png'
declare module '*.jpg'
declare module '*.svg'

