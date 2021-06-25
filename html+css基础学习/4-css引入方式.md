### 内部样式表

```css
<style>
div {
  color: red;
}

</style>
```

```
<style> 标签理论上可以放在HTML文档的任何地方，但一般会放在文档<head>标签中。
通过这种方式，可以方便控制当前整个页面中的元素的样式设置
```

  

### 行内样式表

在元素标签内部的 style 属性中设定CSS样式

```
<div style="color: blue">hello world!</div>
```

- style其实就是标签属性
- 在双引号中间
- 可以控制当前标签的样式

### 外部样式表

适合样式比较多的情况，样式单独写到CSS文件中，之后把CSS文件引入HTML页面中使用

1. 新建一个 .css 文件
2. 使用link标签进行引入

```
<link rel="stylesheet" href="../xx.css">
```

