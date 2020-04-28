---
id: iosButton
title: IOS开关按钮
author: Link
author_title: 前端工程师 
author_url: https://github.com/hehu321
author_image_url: img/mylogo.jpg
tags: [css, button]
---
用CSS制作一个IOS开关按钮，实现正常模式以及黑暗模型下的按钮。
<!--truncate-->

### 实现效果

<iframe src="html/ios-button.html" width="100%" height="300px" frameBorder="0"></iframe>

### HTML部分

``` html
  <label for="toggle">
      <input type="checkbox" id="toggle">
      <span></span>
  </label>
  <label for="toggle-dark">
      <input type="checkbox" id="toggle-dark">
      <span></span>
  </label>
```

### CSS部分

``` css
  :root {
      --button-width: 100px;
      --button-height: 59px;
      --toggle-diameter: 51px;
      --button-toggle-offset: calc((var(--button-height) - var(--toggle-diameter))/2);
      --toggle-shadow-offset: 2px;
      --toggle-wider: 67px;
      --color-grey: #e9e9ea;
      --color-dark-grey: #39393d;
      --color-green: #30d158;
  }

  span {
      display: inline-block;
      width: var(--button-width);
      height: var(--button-height);
      background-color: var(--color-grey);
      border-radius: calc(var(--button-height)/2);
      position: relative;
      transition: .3s all ease-in-out;
  }

  span::after {
      content: '';
      display: inline-block;
      position: absolute;
      width: var(--toggle-diameter);
      height: var(--toggle-diameter);
      background-color: #fff;
      border-radius: calc(var(--toggle-diameter)/2);
      top: var(--button-toggle-offset);
      transform: translateX(var(--button-toggle-offset));
      box-shadow: var(--toggle-shadow-offset) 0 calc(var(--toggle-shadow-offset)*4) rgba(0, 0, 0, 0.10);
      transition: .3s all ease-in-out;
  }

  input[type="checkbox"] {
      display: none;
  }

  input[type="checkbox"]:checked+span {
      background-color: var(--color-green);
  }

  input[type="checkbox"]:checked+span::after {
      transform: translateX(calc(var(--button-width) - var(--toggle-diameter) - var(--button-toggle-offset)));
      box-shadow: calc(var(--toggle-shadow-offset) * -1) 0 calc(var(--toggle-shadow-offset)*4) rgba(0, 0, 0, 0.10);
  }

  input[type="checkbox"]:active+span::after {
      width: var(--toggle-wider);
  }

  input[type="checkbox"]:checked:active+span::after {
      transform: translateX(calc(var(--button-width) - var(--toggle-wider) - var(--button-toggle-offset)))
  }

  label[for="toggle-dark"] span {
      background-color: var(--color-dark-grey);
  }
```
