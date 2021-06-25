所谓盒子模型：就是把HTML页面中的布局元素看作是一个矩形的盒子，也就是一个盛装内容的容器。

CSS盒子模型本质上是一个盒子，封装周围的HTML元素，它包括：边距、外边距、内边距、实际内容



## 边框（border）

border 可以设置元素的边框。边框有三部分组成：边框宽度（粗细）、边框样式、边框颜色

语法：

```
border: border-width || border-style || border-color
```

| 属性         | 作用                   |
| ------------ | ---------------------- |
| border-width | 定义边框粗细，单位是px |
| border-style | 边框的样式             |
| border-color | 边框的颜色             |

border-style 主要使用样式：

- solid  实现边框 
- dashed 虚线边框 
- dotted 点线边框

复合写法：

```
border: 1px solid red; 没有顺序
```

边框分开写法：

```
border-top: 1px solid red;
```



<span style="color:yellow">border-collapse</span> 属性控制浏览器绘制表格边框的方式，它控制相邻单元格的边框。

语法：

```
border-collapse:collapse;
```

表示相邻边框合并在一起



<span style="color:yellow">边框会影响盒子实际大小</span>

边框会额外增加盒子的实际大小。因此我们有两种解决方案：

1. 测量盒子大小的适合，不量边框
2. 如果测量的适合包含了边框，则需要 width/height 减去边框宽度



## 内边距（padding）

用于设置内边距，即边框与内容之间的距离

| 属性           | 作用     |
| -------------- | -------- |
| padding-left   | 左内边距 |
| padding-right  | 右内边距 |
| padding-top    | 上内边距 |
| padding-bottom | 下内边距 |



padding属性简写属性

| 值的个数                   | 意思                          |
| -------------------------- | ----------------------------- |
| padding:5px                | 上下左右都有5像素内边距       |
| padding:5px 10px           | 上下5像素，左右10像素         |
| padding:5px 10px 20px      | 上5像素，左右10像素，下20像素 |
| padding:5px 10px 20px 30px | 上5 右10 下20 左30            |

### padding会影响盒子的大小

如果盒子已经有了宽度和高度，此时再指定内边距，会撑大盒子

解决：width/height 减去多出来的内边距大小即可



如果盒子没有指定width/height属性，则此时padding不会撑开盒子大小

（宽度会默认继承）



## margin

| 属性          | 作用     |
| ------------- | -------- |
| margin-left   | 左外边距 |
| margin-right  | 右外边距 |
| margin-top    | 上外边距 |
| margin-bottom | 下外边距 |

### 外边距典型应用（水平居中）

外边距可以让块级盒子 <span style="color:yellow">水平居中</span> 但是必须满足两个条件：

1. 盒子必须指定了宽度（width）
2. 盒子左右的外边距都设置为auto

```
.header { width: 960px; margin: 0 auto }
```

常见的写法：

- margin-left: auto; margin-right: auto;
- margin: auto;
- <span style="color:yellow">margin: 0 auto</span>;

### 行内元素/行内块元素水平居中对齐

给行内元素/行内块元素的<span style="color:yellow">父元素</span>添加 <span style="color:yellow">text-align: center</span> 即可



### 外边距合并

使用 margin 定义块元素的垂直外边距时，可能会出现外边距的合并

#### 嵌套块元素垂直外边距的塌陷

对于两个嵌套关系（父子关系）的块元素，父元素有上外边距同时子元素也有上外边距，此时父元素会塌陷较大的外边距值。

解决方法：

- 可以为父元素定义上边框
- 可以为父元素定义上内边距
- <span style="color:yellow">可以为父元素添加 overflow:hidden</span>

比如浮动、固定、绝对定位的盒子不会有塌陷问题。。。



### 清除内外边距

网页元素很多都带有默认的内外边距，而且不同浏览器默认的也不一致。因此我们在布局前，首先要清除下网页元素的内外边距

```
* {
	padding: 0; /* 清除内边距 */
	margin: 0;  /* 清除外边距 */
}
```

注意：

行内元素为了照顾兼容性，尽量只设置左右内外边距，不要设置上下内外边距。但是转换为块级和行内块元素就可以了。



## 圆角边框

在CSS3中，新增了圆角边框样式，这样我们的盒子就可以变圆角了。

<span style="color:yellow">border-radius</span> 属性用于设置元素的外边框圆角

语法：

```
border-radius: length; /* 也可以使用百分比 */
```

radius 半径（圆半径）原理：（椭）圆与边框的交集形成圆角效果。

- 参数可以为数值或百分比
- 如果是正方形，想要设置一个圆，把数值修改为高度或者宽度的一半即可，或者直接写为50%
- 如果时矩形，设置为高度的一般就可以做头尾圆形的按钮
- 该属性是一个简写属性，可以跟四个值，分别代表<span style="color:green">左上角、右上角、右下角、左下角</span>
- 分开写：border-top-left-radius,border-top-right-radius,border-bottom-right-radius,border-bottom-left-radius



## 盒子阴影

CSS3中新增盒子阴影，我们可以使用box-shadow属性为盒子添加阴影。

语法：

```
box-shadow: h-shadow v-shadow blur spread color inset
```

| 值       | 描述                           |
| -------- | ------------------------------ |
| h-shadow | 必需。水平阴影的位置。允许负值 |
| v-shadow | 必需。垂直阴影的位置。允许负值 |
| blur     | 可选。模糊距离                 |
| spread   | 可选。阴影尺寸                 |
| color    | 可选。阴影的颜色               |
| inset    | 可选。将外阴影改为内阴影       |

注意：

- 默认的是外阴影，但是不能使用这个单词，否则阴影无效
- <span style="color:red">盒子阴影不占用空间，不会影响其他盒子排列</span>



## 文字阴影

在CSS3中，我们可以使用 text-shadow 属性将阴影应用于文本。

语法：

```
text-shadow: h-shadow v-shadow blur color
```

| 值       | 描述                           |
| -------- | ------------------------------ |
| h-shadow | 必需。水平阴影的位置。允许负值 |
| v-shadow | 必需。垂直阴影的位置。允许负值 |
| blur     | 可选。模糊的距离               |
| color    | 可选。阴影的颜色               |

