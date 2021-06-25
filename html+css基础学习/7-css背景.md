## 背景颜色

<span style="color:yellow">background-color</span> 属性定义了元素的背景颜色

```
background-color:颜色值
```

一般情况下元素背景颜色默认值是 <span style="color:yellow">transparent</span>（透明），我们可以手动指定背景颜色为透明色。



## 背景图片

<span style="color:yellow">background-image</span>属性描述了元素的背景图像，实际开发常见于logo或者一些装饰性的小图片或者是超大的背景图片，优点是非常便于控制位置（精灵图也是一种运用场景）

```
background-image: none | url(url)
```

| 参数值 | 作用                           |
| ------ | ------------------------------ |
| none   | 无背景图（默认的）             |
| url    | 使用绝对或相对地址指定背景图像 |



## 背景平铺

<span style="color:yellow">background-repeat</span>可以控制背景图像进行平铺

```
background-repeat: repeat | no-repeat | repeat-x | repeat-y 
```

| 参数值    | 作用                                 |
| --------- | ------------------------------------ |
| repeat    | 背景图像在纵向和横向上平铺（默认的） |
| no-repeat | 背景图像不平铺                       |
| repeat-x  | 背景图像在横向上平铺                 |
| repeat-y  | 背景图像在纵向上平铺                 |



## 背景位置

<span style="color:yellow">background-position</span>属性可以改变图片在背景中的位置

```
background-position: x y;
```

参数代表的意思是：x坐标和y坐标。可以使用方位名词 或 精确单位

| 参数值   | 说明                                                        |
| -------- | ----------------------------------------------------------- |
| length   | 百分数 \| 由浮点数字和单位标识符组成的长度值                |
| position | top \| center \| bottom \| left \| center \| right 方位名词 |

参数是方位名词：

- 如果指定的两个值都是方位名词，则两个值前后顺序无关，比如left top 和 top left 效果一致。
- 如果只指定了一个方位名词，另一个值省略，则第二个值默认居中对齐

```css
/*超大背景图片*/
body {
  background-image: url(images/bg.jpg);
  background-repeat: no-repeat;
  background-position: center top;  /*图片居中显示*/
}
```



参数是精确名词：

- 如果参数是精确坐标，那么第一个肯定是x坐标，第二个一定是y坐标
- 如果至指定一个数值，那该数值一定是x坐标，另一个默认垂直居中



参数是混合单位：

- 如果指定的两个值是精确单位和方位名词混合使用，则第一个值是x坐标，第二个值是y坐标

```css
div {
  /* x轴上居中 y轴上20px */
  background-position: center 20px;
}

.nav {
  /* x轴20px y轴上居中 */
  background-position: 20px center;
}
```



## 背景图像固定（背景附着）

<span style="color:yellow">background-attachment</span>属性设置背景图像是否固定或者随着页面的其余部分滚动

可以用于制作视差滚动效果！

```
background-attachment: scroll | fixed
```

| 参数   | 作用                             |
| ------ | -------------------------------- |
| scroll | 背景图像是随对象内容滚动（默认） |
| fixed  | 背景图像固定                     |



## 背景复合写法

没有特定的书写顺序，一般习惯约定顺序为：

background：背景颜色 背景图片地址 背景平铺 背景图像滚动 背景图片位置



## 背景色半透明

```
background: rgba(0,0,0,0.3);
```

- 最后一个参数是 alpha 透明度，取值范围在 0-1 之间
- 0.3的0可以省略，写成background: rgba(0,0,0,.3)
- 注意：背景半透明是值盒子背景半透明，盒子里面的内容不受影响
- CSS新增属性：是IE9+版本浏览器才支持











