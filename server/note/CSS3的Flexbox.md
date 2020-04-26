# CSS3的Flexbox

 Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

 任何一个容器都可以指定为 Flex 布局。行内元素也可以使用 Flex 布局。注意，设为 Flex 布局以后，子元素的 float、cl
 ear 和 vertical-align 属性将失效。

 采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex
 项目（flex item），简称"项目"。

 容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis），项目默认沿主轴排列。

 **以下 6 个属性设置在容器上**。

- flex-direction 属性决定主轴的方向（即项目的排列方向）。
- flex-wrap 属性定义，如果一条轴线排不下，如何换行。
- flex-flow 属性是 flex-direction 属性和 flex-wrap 属性的简写形式，默认值为 row nowrap。
- justify-content 属性定义了项目在主轴上的对齐方式。
- align-items 属性定义项目在交叉轴上如何对齐。
- align-content 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。



 **以下6个属性设置在项目上。**

- order 属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
- flex-grow 属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
- flex-shrink 属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
- flex-basis 属性定义了在分配多余空间之前，项目占据的主轴空间。浏览器根据这个属性，计算主轴是否有多余空间。它的默认
  值为 auto，即项目的本来大小。
- flex 属性是 flex-grow， flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto。
- align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。默认值为 auto ，表示继承父
  元素的 align-items 属性，如果没有父元素，则等同于 stretch。

### 容器属性列表

| 属性            | 描述                            | 属性值                                                       |
| --------------- | ------------------------------- | ------------------------------------------------------------ |
| flex-direction  | 决定item的排列方向              | row \| row-reverse \| column \| column-reverse               |
| flex-wrap       | item排列不下nowrap              | nowrap\|wrap\|wrap-reverse                                   |
| flex-flow       | flex-direction和flex-wrap的简写 | row  nowrap                                                  |
| justify-content | item在主轴上的对齐方式          | flex-start \| flex-end \| center \| space-between \| space-around |
| align-items     | item在另外一轴上的对齐方式      | flex-start \| flex-end \| center \| baseline \| stretch      |
| align-content   | 多根轴线的对齐方式              | flex-start \| flex-end \| center \| space-between \| space-around \| stretch |

### 容器属性相关例子

flex-direction: 决定主轴的方向（即项目的排列方向）。有四个属性值

- row（默认值）：主轴为水平方向，起点在左端。
- row-reverse：主轴为水平方向，起点在右端。
- column：主轴为垂直方向，起点在上沿。
- column-reverse：主轴为垂直方向，起点在下沿。
  


flex-wrap: 默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。

- nowrap（默认）：不换行。
- wrap：换行，第一行在上方。
- wrap-reverse：换行，第一行在下方。

flex-flow: 是flex-direction属性和flex-wrap属性的简写形式，默认属性值为row nowrap。

- row nowrap：主轴为水平方向，起点在左端，一条轴线排不下也不换行。

justify-content: 定义了项目在主轴上的对齐方式。

- flex-start（默认值）：左对齐
- flex-end：右对齐
- center： 居中
- space-between：两端对齐，项目之间的间隔都相等。
- space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

align-items: 定义项目在交叉轴上如何对齐。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。

- flex-start：交叉轴的起点对齐。
- flex-end：交叉轴的终点对齐。
- center：交叉轴的中点对齐。
- baseline: 项目的第一行文字的基线对齐。
- stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

align-content: 定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

- flex-start：与交叉轴的起点对齐。
- flex-end：与交叉轴的终点对齐。
- center：与交叉轴的中点对齐。
- space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
- space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
- stretch（默认值）：轴线占满整个交叉轴。

### item属性列表

| **属性**    | **描述**                                 | **属性值**                           |
| ----------- | ---------------------------------------- | ------------------------------------ |
| order       | 定义item的排列顺序                       | 整数，默认为0，越小越靠前            |
| flex-grow   | 当有多余空间时，item的放大比例           | 默认为0，即有空间也不放大            |
| flex-shrink | 当空间不足时，item的缩小比例             | 默认为1，即空间不足时缩小            |
| flex-basis  | 项目在主轴上占据的空间                   | 长度值，默认为auto                   |
| flex        | flex-grow，flex-shrink，flex-basis的缩写 | 默认为0 1 auto                       |
| align-self  | 单个item独特的对齐方式                   | 同align-items, 可覆盖align-items属性 |



### item属性相关例子

order: 定义项目的排列顺序。数值越小，排列越靠前，默认为0。

- 
  flex-glow: 定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。

- 
  flex-shrink: 定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小

- 
  flex-basis: 定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

- flex: 是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。

- align-self: 允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

参考链接：https://blog.csdn.net/qq_38128179/article/details/80828890

