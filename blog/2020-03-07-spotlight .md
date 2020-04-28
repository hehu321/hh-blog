---
id: spotlight
title: css实现聚光灯效果
author: Link
author_title: 前端工程师 
author_url: https://github.com/hehu321
author_image_url: img/mylogo.jpg
tags: [css]
---
实现原理通过将两个文字完全重叠，后面是深灰色，前面的是有颜色的，再将前面的文字套用圆形遮罩，最后加上css动画就可以了。
<!--truncate-->

### 实现效果

<iframe src="html/spotlight.html" width="100%" height="300px" frameBorder="0"></iframe>

### 实现方法

1. 通过[clip-path](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path)属性实现圆形遮罩，通过动画动态改变其位置属性实现遮罩层的移动效果；[clip-path](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path)属性可以创建一个只有元素的部分区域可以显示的剪切区域。区域内的部分显示，区域外的隐藏。

1. 通过[background-clip](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-clip)属性实现文字渐变效果；[background-clip](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-clip)属性设置元素的背景（背景图片或颜色）是否延伸到边框、内边距盒子、内容盒子下面。[MDN]

### HTML代码

``` html
	<h1 data-spotlight="DayDayUp!">DayDayUp</h1>
```

### CSS代码

``` css
		h1 {
		    font-family: Helvetica, sans-serif;
		    color: #333;
		    margin: 0;
		    padding: 0;
		    font-size: 8rem;
		    letter-spacing: -0.3rem;
		    position: relative;
		}

		h1::after {
		    content: attr(data-spotlight);
		    color: transparent;
		    position: absolute;
		    top: 0;
		    left: 0;
		    background: linear-gradient(90deg, #755bea, #ff72c0);
		    background-size: 150%;
		    background-position: center center;
		    -webkit-background-clip: text;
		    background-clip: text;
		    -webkit-clip-path: ellipse(100px 100px at 0% 50%);
		    clip-path: ellipse(100px 100px at 0% 50%);
		    animation: spotlight 5s infinite;
		}

		@keyframes spotlight {
		    0% {
		        -webkit-clip-path: ellipse(100px 100px at 0% 50%);
		        clip-path: ellipse(100px 100px at 0% 50%);
		    }

		    50% {
		        -webkit-clip-path: ellipse(100px 100px at 100% 50%);
		        clip-path: ellipse(100px 100px at 100% 50%);
		    }

		    100% {
		        -webkit-clip-path: ellipse(100px 100px at 0% 50%);
		        clip-path: ellipse(100px 100px at 0% 50%);
		    }
		}
```
