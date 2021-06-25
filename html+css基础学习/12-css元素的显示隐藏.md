# 元素的显示隐藏

本质：让一个元素在页面中隐藏或者显示出来

1. display显示隐藏
2. visibility显示隐藏
3. overflow溢出显示隐藏

## display属性  (非常重要)

display属性用于设置一个元素应如何显示

- display: none;  隐藏对象
- display: block; 除了转换为块级元素之外，同时还有显示元素的意思

<span style="color:yellow">display 隐藏元素之后，不再占有原来的位置</span>

## visibility 可见性

visibility 属性用于指定一个元素应可见还是隐藏

- visibility: visible;  元素可见
- visibility: hidden;  元素隐藏

<span style="color:yellow">visibility 隐藏元素后，继续占有原来的位置</span>

## overflow 溢出

overflow 属性指定了如果内容溢出一个元素的框（超过其指定高度及宽度）时

| 属性值  | 描述                                     |
| ------- | ---------------------------------------- |
| visible | 不剪切内容也不添加滚动条显示内容         |
| hidden  | 不显示超过对象尺寸的内容，超出的部分隐藏 |
| scroll  | 不管超出与否，总是显示滚动条             |
| auto    | 超出自动显示滚动条，不超出不显示滚动条   |

如果使用定位的情况下，慎用 overflow: hidden











