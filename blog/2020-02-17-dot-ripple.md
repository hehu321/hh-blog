---
id: dotRipple
title: CSS实现波纹效果
author: Link
author_title: 前端工程师 
author_url: https://github.com/hehu321
author_image_url: img/mylogo.jpg
tags: [css]
---
CSS实现波纹效果
<!--truncate-->

### 实现效果(勾选CheckBox查看动画)

<iframe src="html/dot-ripple.html" width="100%" height="300px" frameBorder="0"></iframe>

### HTML代码

``` html
	<div class="circle">
	    <span style="--i:1"></span>
	    <span style="--i:2"></span>
	    <span style="--i:3"></span>
	    <span style="--i:4"></span>
	    <span style="--i:5"></span>
	    <span style="--i:6"></span>
	    <span style="--i:7"></span>
	    <span style="--i:8"></span>
	    <span style="--i:9"></span>
	    <span style="--i:10"></span>
	</div>
```

### CSS代码

``` css
	.circle {
	    width: 300px;
	    height: 300px;
	    display: flex;
	    justify-content: center;
	    align-items: center;
	}

	.circle span {
	    position: absolute;
	    box-sizing: border-box;
	    border-radius: 50%;
	    border: 2px solid #8080ff;
	    animation: animate 5s linear infinite;
	    animation-delay: calc(var(--i)*0.5s);
	}

	@keyframes animate {
	    0% {
	        width: 0;
	        height: 0;
	        opacity: 1;
	    }

	    100% {
	        width: 150px;
	        height: 150px;
	        opacity: 0;
	    }
	}
```
