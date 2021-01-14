# Seamlessscroll 无缝滚动
----
### 基础用法
使用```height```、```speed```、```autoplay```、```align```和```direction```属性来定义 Seamlessscroll 的样式。
``` html
<dm-seamlessscroll autoplay="2000">
    <dm-seamlessscroll-item>只有一条的时候不滚动，默认向上滚动</dm-seamlessscroll-item>
</dm-seamlessscroll>

<dm-seamlessscroll autoplay="3000" direction="down">
    <dm-seamlessscroll-item>邵逸夫奖名单公布</dm-seamlessscroll-item>
    <dm-seamlessscroll-item>女星玛戈基德去世</dm-seamlessscroll-item>
    <dm-seamlessscroll-item>多国谴责美搬使馆</dm-seamlessscroll-item>
</dm-seamlessscroll>
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| height     | 设置行高   | String  |   — | 30  |
| speed     | 设置速率   | Number  |  — | 500   |
| autoplay    | 设置滚动间隔   | Number  |  — |  3000   |
| align    | 设置对齐方向   | String  |  left，center，right |  left   |
| direction    | 设置方向   | String  | up，down |  up   |
