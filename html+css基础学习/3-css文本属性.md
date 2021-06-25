### color

用于定义文本颜色

```
div{
	color: red;
}
```

| 显示           | 属性值                        |
| -------------- | ----------------------------- |
| 预定义的颜色值 | red、green、blue...           |
| 16进制         | #FF0000，#FF6600              |
| RGB代码        | rgb(255,0,0)或rgb(100%,0%,0%) |



### text-align

设置元素内文本内容的水平对齐方式

```
div {
	text-align: center
}
```

| 属性值 | 解释             |
| ------ | ---------------- |
| left   | 左对齐（默认值） |
| right  | 右对齐           |
| center | 居中对齐         |



### text-decoration

规定添加到文本的装饰，可以添加下划线、删除线、上划线

```
div {
	text-decoration: underline;
}
```

| 属性值       | 描述           |
| ------------ | -------------- |
| none         | 默认，没有装饰 |
| underline    | 下划线         |
| overline     | 上划线         |
| line-through | 删除线         |



### text-indent

指定文本第一行的缩进，通常是将段落的首行缩进

```css
div {
	text-indent: 10px
}
```

通过设置该属性，所有元素第一行都可以缩进一个给定的长度，甚至该长度可以是负值。

```css
p {
  text-indent: 2em;
}
```

em是一个相对单位，就是当前元素（font-size）一个文字的大小，如果当前元素没有设置大小，则会按照父元素的一个文字大小



### line-height

属性用于设置行间的距离（行高）。可以控制文字行与行之间的距离

```css
p {
	line-height: 26px
}
```

行间距包括  上间距 + 文本高度 + 下间距











