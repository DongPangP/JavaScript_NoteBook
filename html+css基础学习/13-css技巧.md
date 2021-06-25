## 精灵图

为有效地减少服务器接收和发送请求，提高页面的加载速度。

使用精灵图核心：

- 精灵图技术主要针对背景图片使用，就是把多个小背景图片整合到一张大图片中
- 这个大图片被称为sprites 精灵图 或 雪碧图
- 移动背景图片位置，此时可以使用<span style="color:red"> background-position</span>



## 字体图标

展示的是图标，本质是文字

推荐使用：

```
https://icomoon.io/
```



## CSS 三角制作

```
// 当一个盒子没有宽高，只有边框时，每个边的边框都是三角形
// 当想要获得三角形时，只需将其余三个变成透明即可
.box1 {
	width: 0;
	height: 0;
	border-top: 10px solid pink;
	border-bottom: 10px solid red;
	border-right: 10px solid blue;
	border-left: 10px solid green;
}

.box2 {
	width: 0;
	height: 0;
	border: 50px solid transparent;
	border-left-color: red;
	margin:100px auto;
}

<div class="box1"></div>
<div class="box2"></div>
```



## CSS用户界面样式

### 鼠标样式 cursor

语法：

```
li { cursor: pointer; }
```

设置或检索在对象上移动的鼠标指针采用何种系统预定义的光标形状

| 属性值      | 描述 |
| ----------- | ---- |
| default     | 默认 |
| pointer     | 小手 |
| move        | 移动 |
| text        | 文本 |
| not-allowed | 禁止 |



### 轮廓线 outline

给表单添加 <span style="color:yellow">outline: 0</span> 或者 <span style="color:yellow">outline：none;</span>样式之后，就可以去掉默认的蓝色边框



### 防止拖拽文本域 resize

```
textarea{ resize: none; }
```



## vertical-align 属性应用

CSS的 vertical-align 属性使用场景：经常用于设置图片或者表单（行内块元素）和文字垂直对齐。

官方解释：用于设置一个元素的垂直对齐方式，但是只针对行内元素或者行内块元素有效。

语法：

```
vertical-align: baseline | top | middle | bottom
```

| 值       | 描述                                 |
| -------- | ------------------------------------ |
| baseline | 默认。元素放置在父元素的基线上       |
| top      | 把元素的顶端与行中最高元素的顶端对齐 |
| middle   | 把此元素放置在父元素的中部           |
| bottom   | 把元素的底端与行中最低元素的底端对齐 |



### 图片底侧有空白缝隙

图片默认和文字的基线对齐

解决方案：

1、vertical-align: top | middle | bottom 添加到图片上

2、把图片转换为块级元素 display: block



## 溢出的文字省略号显示

### 单行文本溢出显示省略号

```
/* 1、先强制一行内显示文本 */
white-space: nowrap; (默认 normal 自动换行)
/* 2、超出的部分隐藏 */
overflow: hidden;
/* 3、文字用省略号替代超出的部分 */
text-overflow: ellipsis;
```



### 多行文本溢出显示省略号

多行文本溢出显示省略号，有较大兼容性问题，适合webKit浏览器或移动端（移动端大部分时webkit内核）

```
overflow: hidden;
text-overflow: ellipsis;
/* 弹性伸缩盒子模型显示 */
display: -webkit-box;
/* 限制在一个块元素显示的文本的行数 */
-webkit-line-clamp: 2;
/* 设置或检索伸缩盒对象的子元素的排列方式 */
-webkit-box-orient: vertical;
```



## 常见的布局技巧

### margin负值运用

当两个盒子浮动时，相邻的边框会出现1+1=2的情况

解决：

1. 让每个盒子margin往左移动 -1px 正好压住相邻的盒子边框
2. 鼠标经过某个盒子的时候，提高当前盒子的层级即可（如果没有定位，则加相对定位（保留位置），如果有定位，则加z-index）

### 文字围绕浮动元素

浮动的盒子不会压住文字。







