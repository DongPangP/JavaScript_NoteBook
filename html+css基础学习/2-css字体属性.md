### font-family

使用 font-family 属性定义文本的字体系列

```
p { font-family: "微软雅黑" }
div { font-family: Arial,"Microsoft Yahei","微软雅黑"}
```

一般情况下，如果有空格隔开的多个单词组成的字体，加引号

尽量使用系统默认自带字体



### font-size

使用font-size属性定义字体大小

```
p {
	font-size: 20px
}
```

标题标签比较特殊，需要单独指定大小

px (像素) 大小是我们网页最常用的单位

谷歌浏览器默认的文字大小为16px

不同浏览器可能默认显示的字号大小不一致，我们尽量给一个明确值大小，不要默认大小

可以给 body 指定整个页面文字的大小



### font-weight

使用 font-weight 属性设置字体的粗细程度

参数：

normal：正常字体  400 

bold：粗体   700

bolder：特粗体

lighter：细体

number：一个介于1和1000（包含）之间的类型值



### font-style

设置文字风格

参数：

normal：默认值

italic：显示斜体的字体样式

注意：平时我们很少给文字加斜体，反而要给斜体标签（em,i）改为不倾斜字体



### font

```
font: font-style font-weight font-size/line-height font-family
```

不需要设置的属性可以省略，但是必须有 font-size 和 font-family









