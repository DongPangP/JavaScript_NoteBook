## HTML5 的新特性

HTML5的新增特性主要针对于以前的不足，增加了一些新的标签、新的表单和新的表单属性。

这些新特性都有兼容性问题，基本是IE9+以上版本的浏览器才支持，如果不考虑兼容性问题，可以大量使用这些新特性。

### 新增的语义化标签

- <span style="color:yellow"><header></span>：头部标签
- <span style="color:yellow"><nav></span>：导航标签
- <span style="color:yellow"><article></span>：内容标签
- <span style="color:yellow"><section></span>：定义文档某个区域
- <span style="color:yellow"><aside></span>：侧边栏标签
- <span style="color:yellow"><footer></span>：尾部标签

![image-20210527123410818](https://raw.githubusercontent.com/DongPangP/myImages/main/image-20210527123410818.png)

### 新增多媒体标签

- <span style="color:yellow">音频：<audio>  </span>
- <span style="color:yellow">视频：<video> </span>

使用它们可以很方便的在页面中嵌入音频和视频，而不再去使用 flash 和其他浏览器插件

#### video

![image-20210527130349525](https://raw.githubusercontent.com/DongPangP/myImages/main/image-20210527130349525.png)

语法：

```
<video src="地址" controls="controls"> </video>

//兼容性写法
<video width="320" height="240" controls>
	<source src="movie.mp4" type="video/mp4">
	<source src="movie.ogg" type="video/ogg">
	您的浏览器暂不支持<video>标签播放视频
</video>
```

| 属性     | 值                                      | 描述                                                         |
| -------- | --------------------------------------- | ------------------------------------------------------------ |
| autoplay | autoplay                                | 视频就绪就自动播放（谷歌浏览器需要添加muted来解决自动播放问题） |
| controls | controls                                | 向用户显示播放控件                                           |
| width    | pixels(像素)                            | 设置播放器宽度                                               |
| height   | pixels(像素)                            | 设置播放器高度                                               |
| loop     | loop                                    | 播放完是否继续播放该视频，循环播放                           |
| preload  | auto(预先加载视频) none(不预先加载视频) | 规定是否预加载视频（如果有了autoplay，就忽略该属性）         |
| src      | url                                     | 视频url地址                                                  |
| poster   | Imgurl                                  | 加载等待的画面图片                                           |
| muted    | muted                                   | 静音播放                                                     |

#### audio

支持三种音频格式：

![image-20210527132905365](https://raw.githubusercontent.com/DongPangP/myImages/main/image-20210527132905365.png)

语法：

```
<audio src="" controls="controls"></audio>

// 考虑兼容性
<audio controls="controls">
	<source src="happy.mp3" type="audio/mpeg">
	<source src="happy.ogg" type="audio/ogg">
	您的浏览器暂不支持<audio>标签
</audio>
```

常见属性：

| 属性     | 值       | 描述                                           |
| -------- | -------- | ---------------------------------------------- |
| autoplay | autoplay | 如果出现该属性，则音频在就绪后马上播放         |
| controls | controls | 如果出现该属性，则向用户显示控件，比如播放按钮 |
| loop     | loop     | 如果出现该属性，则每当音频结束时重新开始播放   |
| src      | url      | 要播放的音频的URL                              |

谷歌浏览器把音频和视频自动播放禁止了

#### 总结

- 音频标签和视频标签使用方式基本一致
- 浏览器支持情况不同
- 谷歌浏览器把音频和视频自动播放禁止了，但是视频标签添加muted属性来静音播放视频，音频只能通过 JavaScript 来解决

### 新增的Input类型

![image-20210527134214213](https://raw.githubusercontent.com/DongPangP/myImages/main/image-20210527134214213.png)

![image-20210527141606377](https://raw.githubusercontent.com/DongPangP/myImages/main/image-20210527141606377.png)

可以通过以下设置修改 placeholder 里面的字体颜色：

```
input::placeholder {
	color: pink;
}
```



## CSS3 新特性

- 新增的 CSS3 特性有兼容性问题，<span style="color:yellow">ie9+ </span>才支持
- 移动端支持优于PC端

#### 属性选择器

属性选择器可以根据元素特定属性来选择元素

| 选择符                     | 简介                                               |
| -------------------------- | -------------------------------------------------- |
| <span>E[att]</span>        | 选择具有<span>att</span>属性的E元素                |
| <span>E[att="val"]</span>  | 选择具有<span>att</span>属性且属性值等于val的E元素 |
| <span>E[att^="val"]</span> | 匹配具有<span>att</span>属性且值以val开头的E元素   |
| <span>E[att$="val"]</span> | 匹配具有<span>att</span>属性且值以val结尾的E元素   |
| <span>E[att*="val"]</span> | 匹配具有<span>att</span>属性且值中含有val的E元素   |

<span style="color:yellow">类选择器、属性选择器、伪类选择器，权重为 10</span>



#### 结构伪类选择器

结构伪类选择器主要根据<span style="color:yellow">文档结构</span>来选择元素，常用于根据父级选择里面的子元素

| 选择符                        | 简介                          |
| ----------------------------- | ----------------------------- |
| <span>E:first-child</span>    | 匹配父元素中的第一个子元素E   |
| <span>E:last-child</span>     | 匹配父元素中的最后一个子元素E |
| <span>E:nth-child(n)</span>   | 匹配父元素中的第n个子元素E    |
| <span>E:first-of-type</span>  | 指定类型E的第一个             |
| <span>E:last-of-type</span>   | 指定类型E的最后一个           |
| <span>E:nth-of-type(n)</span> | 指定类型E的第n个              |

<span style="color:yellow">区别：</span>

1. nth-child 对父元素里面所有孩子排序选择（序号是固定的），先找到第n个孩子，然后看看是否和E匹配。
2. nth-of-type 对父元素里面指定子元素进行排序选择。先去匹配E，然后根据E找第n个孩子

```
ul li:first-child {
	background-color: green;
}
```

nth-child(n) 选择某个父元素的一个或多个特定的子元素

- n可以是数字，关键字和公式
- n如果是数字，就是选择第n个子元素，里面数字从1开始
- n可以是关键字：even偶数，odd奇数
- nth-child(n) 从0开始 每次加1 往后面计算，即选择所有
- <span>nth-child(2n)</span> 即选择了所有偶数的

![image-20210527151225964](https://raw.githubusercontent.com/DongPangP/myImages/main/image-20210527151225964.png)

```
//选择偶数行 这个权重算12
ul li:nth-child(even) {
	background-color: red;
}
//选择奇数行
ul li:nth-child(odd) {
	background-color: blue;
}
```



#### 伪元素选择器

伪元素选择器可以帮助我们利用CSS创建新标签元素，而不需要HTML标签，从而简化HTML结构

| 选择符   | 简介                     |
| -------- | ------------------------ |
| ::before | 在元素内部的前面插入内容 |
| ::after  | 在元素内容的后面插入内容 |

注意：

- before 和 after 创建一个元素，但是属于行内元素
- 新创建的这个元素在文档树中是找不到的，所以我们称为伪元素
- before 和 after 必须有 content 属性
- 伪元素选择器和标签选择器一样，权重为1

![image-20210527153621869](https://raw.githubusercontent.com/DongPangP/myImages/main/image-20210527153621869.png)

语法：

```
div::before{
 /* content必写 */
	content: '我'
}
```

![image-20210527155403314](https://raw.githubusercontent.com/DongPangP/myImages/main/image-20210527155403314.png)

![image-20210527160212193](https://raw.githubusercontent.com/DongPangP/myImages/main/image-20210527160212193.png)



### 盒子模型

CSS3中可以通过 box-sizing 来指定盒模型，有2个值：即可指定为 content-box、border-box，这样我们计算盒子大小的方式发生了改变

两种情况：

- box-sizing: content-box 盒子大小为 width + padding +border (以前默认的)
- box-sizing: border-box 盒子大小为width

这两种，第一种是向外，第二种是向内。如果盒子模型我们改为<span>box-sizing：border-box</span>，那么padding和border就不会撑大盒子了（前提padding和border不会超过width宽度）



### CSS3滤镜filter

filter CSS属性将模糊或颜色偏移等图形效果应用于元素。

```
filter: 函数();
例如: filter:blur(5px); blur模糊处理，数值越大越模糊
```

### <span>calc 函数</span>

<span>calc</span>()  此CSS函数让你在声明 CSS 属性值时执行一些计算

```
width: calc(100% - 80px);  运算符两边需要用空格隔开
```

括号里可以使用加减乘除进行计算



### CSS3过渡（重点）

过渡（transition）是CSS3 中具有颠覆性的特征之一，我们可以在不使用 Flash动画或JavaScript的情况下，当元素从一种样式变换为另一种样式时为元素添加效果。

过渡动画：是从一个状态渐渐过渡到另外一个状态

<span>ie9</span>以下版本不支持

和 :hover 一起搭配使用

```
transition: 要过渡的属性 花费时间 运动曲线 何时开始;
```

属性：想要变化的CSS属性，宽度高度 背景颜色 内外边距都可以。如果想要所有属性都发送变化过渡，写一个all 就可以。

花费时间：单位是秒（必须写单位）比如 0.5s

运动曲线：默认是ease （可以省略）

何时开始：单位是 秒（必写单位）可以设置延迟触发时间 默认是 0s （可以省略）

![image-20210527163459886](https://raw.githubusercontent.com/DongPangP/myImages/main/image-20210527163459886.png)

谁变化给谁加过渡效果

```
transition: width .5s ease 0s;
/* 如果想要写多个属性，利用逗号进行分割 */
transition: width .5s,height .5s;
```



### CSS3转换（transform）

转换（transform）是CSS3中具有颠覆性的特征之一，可以实现元素的位移、旋转、缩放等效果。

- 移动：translate
- 旋转：rotate
- 缩放：scale

#### translate

2D转换移动 translate，可以改变元素在页面中的位置，类似<span style="color:red">定位</span>

语法： 

```
transform: translate(x,y); //或者分开写
transform: translateX(n);  //X大写
transform: translateY(n);
```

- 定义2D转换中的移动，沿着X和Y轴移动元素。

- translate最大的优点：不会影响到其他元素的位置

- translate中的百分比单位是相对于自身元素的translate: (50%,50%) 

  例如：盒子宽高各 100px , 则移动应该是 50px

- 对行内标签没有效果

<span style="color:yellow">使用定位使一个盒子垂直水平居中</span>

```
/* 父盒子 */
div{
	position: relative;
	height: 500px;
	width: 500px;
}
/* 子盒子 */
div {
	position: absolute;
	top: 250px;
	left: 250px;
	height: 200px;
	width: 200px;
	transform: translate(-50%,-50%);
}
```



#### rotate

2D旋转指的是元素在2维平面内顺时针旋转或者逆时针旋转。

语法：

```
transform: rotate(度数)
```

重点：

- rotate里面跟度数，单位是deg 比如 rotate(45deg)
- 角度为正时，顺时针；角度为负时，逆时针
- 默认旋转的中心点时元素的中心点

<span style="color:yellow">案例：三角形</span>

```
div {
	width: 249px;
	height: 35px;
	border: 1px solid #000;
}
div::after {
	content: "";
	position: absolute;
	top:0 ;
	right: 0;
	width: 10px;
	height: 10px;
	/*设置上右边框然后旋转就变成了三角形*/
	border-right: 1px solid #000; 
	border-bottom: 1px solid #000;
	transform: rotate(45deg);
}
```

<span style="color:yellow">设置转换中心点 transform-origin</span>

语法：

```
transform-origin: x y;
```

重点：

- 注意后面的参数x和y用空格隔开
- x y默认转换的中心点时元素的中心点（50%，50%）
- 还可以给x y设置 像素 或者 方位名词（top bottom left right center）

<span style="color:yellow">案例：旋转中心</span>

![image-20210601103606482](https://raw.githubusercontent.com/DongPangP/myImages/main/image-20210601103606482.png)

```
div {
	overflow: hidden;
	width: 200px;
	height: 200px;
	border: 1px solid pink;
	margin: 10px;
	float: left;
}

div::before {
	content: "";
	display: block;
	width: 100%;
	height: 100%;
	background-color: hotpink;
	transform: rotate(180deg);
	transform-origin: left bottom;
	transition: all 0.4s;
}
/* 鼠标经过div，里面的before进行显示 */
div:hover::before {
	transform: rotate(0deg);
}
```



#### scale

缩放（scale）：放大和缩小

语法：

```
transform: sacle(x,y);
```

注意：

- 注意其中的 x 和 y 用逗号分隔
- transform: scale(1,1) ：宽和高都放大一倍，相对于没有放大
- transform: scale(2,2) ：宽和高都放大了2倍
- transform: scale(2) ：只写一个参数，第二个参数则和第一个参数一样，相当于 scale(2,2)
- transform: scale(0.5,0.5): 缩小

scale缩放最大的优势：<span style="color:yellow">可以设置转换中心点缩放，默认以中心点缩放</span>，而且<span style="color:yellow">不影响其他盒子</span>。



#### 综合写法

注意：

- 同时使用多个转换，其格式为：transform: translate() rotate() scale() ...等
- 其顺序会影响转换的效果。（先旋转会改变坐标轴方向）
- 当同时有位移和其他属性的时候，记得要将位移放到最前



#### 转换小结

1. 转换transform 我们简单理解就是变形有 2D 和 3D 之分
2. 暂时学了 位移 旋转 和缩放
3. 2D移动 translate(x,y) 最大的优势是不影响其他盒子，里面参数用%，是相对于自身宽度和高度来计算的
4. 可以分开写比如 translateX(x) 和 translateY(y) 
5. 2D 旋转 rotate(度数) 可以实现旋转元素 度数的单位是deg
6. 2D 缩放 scale(x,y) 里面参数是数字 不跟单位 可以是小数 最大的优势 不影响其他盒子
7. 设置转换中心点 transform-origin: x y；参数可以百分比、像素或者是方位名词
8. 当我们进行综合写法，同时是位移和其他属性的时候，记得要将位移放到最前面



### CSS3 动画

animation 是CSS3中具有颠覆性的特征之一，可通过设置多个节点来精确控制一个或一组动画，常用来实现复杂的动画效果。

相比较过渡，动画可以实现更多变化，更多控制，连续自动播放等效果。

制作动画分为两步：

1、先定义动画

2、再使用动画

用 <span>keyframes</span> 定义动画（类似定义类选择器）

```
@keyframes 动画名称 {
	0%{
		width:100px;
	}
	100%{
		width:200px;
	}
}
```

元素使用动画

```
div {
	width: 200px;
	height: 200px;
	background-color:green;
	margin: 100px auto;
	/* 调用动画 */
	animation-name: 动画名称;
	/* 持续时间 */
	animation-duration: 持续时间;
}
```

动画序列：

- 0% 是动画的开始，100%是动画的完成。这样的规则就是动画序列。
- 在  <span>@keyframes</span> 中规定某项CSS样式，就能创建由当前样式逐渐改为新样式的动画效果
- 动画是使元素从一种样式逐渐变化为另一种样式的效果。您可以改变任意多的样式，任意多的次数
- 请用百分比来规定变化发生的事件，或用关键词"from"和"to"，等同于0%和100%

常用属性：

![image-20210601125506685](https://raw.githubusercontent.com/DongPangP/myImages/main/image-20210601125506685.png)



动画简写属性

animation: 动画名称 持续时间 运动曲线 何时开始 播放次数 是否反方向 动画起始或者结束的状态；

- 简写属性中不包含 animation-play-state
- 暂停动画：<span>animation-play-state: puased;</span> 经常和鼠标经过等其他配合使用。
- 想要动画走回来，而不是直接跳回来：animation-direction: alternate;
- 盒子动画结束后，停在结束位置：animation-fill-mode: forwards

<span style="color:yellow">白熊案例</span>

![image-20210602093457050](https://raw.githubusercontent.com/DongPangP/myImages/main/image-20210602093457050.png)

```css
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #ccc;
}

.bear {
  position: absolute;
  overflow: hidden;
  width: 200px;
  height: 100px;
  background: url(../images/bear.png) repeat-x;
  animation: run 1s steps(8)  infinite,move 3s linear forwards;
}

@keyframes run {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position:-1600px 0;
  }
}

@keyframes move {
  0% {
    left: 0;
  }
  100% {
    left:50%;
    transform: translate(-50%);
  }
}
```



### 3D转换

#### <span style="color: yellow">3D移动 translate3d</span>

3D移动在2D移动的基础上多加了一个可以移动的方向，也就是z轴方向

```
transform: translateX(100px)：仅仅是在X轴上移动

transform: translateY(100px)：仅仅是在Y轴上移动

transform: translateZ(100px)：仅仅是在Z轴上移动（注意：translateZ一般用px单位）

transform: translate3d(x,y,z)：其中x、y、z分别指要移动的轴的方向的距离
```

![image-20210602095248315](https://raw.githubusercontent.com/DongPangP/myImages/main/image-20210602095248315.png)

#### <span style="color:yellow">透视 perspective</span>

在2D平面产生近大远小视觉立体，但是只有效果二维的

- 如果想要在网页上产生3D效果需要透视（理解成3D物体投影在2D平面内）
- 模拟人类的视觉位置，可认为安排一只眼睛去看
- 透视我们也称为视距：视距就是人的眼睛到屏幕的距离
- 距离视觉点越近的在电脑平面成像越大，越远成像越小
- 透视的单位是像素

<span style="color:red">透视写在被观察元素的父盒子上面</span>

d：就是视距，视距就是一个距离人的眼睛到屏幕的距离（视距越小，图像越大）

z：就是z轴，物体距离屏幕的距离，z轴越大（正值）我们看到的物体就越大

#### <span>3D旋转 rotate3d</span>

3D旋转 值可以让元素在三维平面 沿着 x轴 y轴 z轴或者自定义轴进行旋转

语法：

```
transform: rotateX(45deg);  沿着x轴正方西旋转45度

transform: rotateY(45deg);  沿着y轴正方西旋转45度

transform: rotateZ(45deg);  沿着z轴正方西旋转45度

transform: rotate3d(x,y,z,deg);  沿着自定义轴旋转  deg为角度
```

#### 3D呈现 transform-style

- 控制子元素是否开启三维立体环境
- transform-style: flat 子元素不开启3d立体空间 默认的
- transform-style: preserve-3d; 子元素开启立体空间
- 代码写给父级，但是影响的是子盒子



### 浏览器私有前缀

```
-moz-: 代表firefox浏览器私有属性

-ms- : 代表ie浏览器私有属性

-webkit-: 代表safari、chrome 私有属性

-o-: 代表Opera私有属性

提倡的写法
-moz-border-radius: 10px;
-webkit-border-radius: 10px;
-o-border-radius: 10px;
border-radius: 10px;
```









