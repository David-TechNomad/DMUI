# Flexbox flex布局
----
### 配合 dm-flexbox 使用
### 基础用法
使用```direction```属性来定义 Flexbox 的样式
``` html
<dm-flexbox>
    <div>普通div</div>
    <dm-flexbox-item>默认的水平flex div</dm-flexbox-item>
    <div>普通div</div>
</dm-flexbox>
    <br>
<dm-flexbox direction="vertical">
    <div>普通div</div>
    <dm-flexbox-item>direction="vertical" 的垂直flex div</dm-flexbox-item>
    <div>普通div</div>
</dm-flexbox>
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| direction | 设置垂直布局 | String  |  horizontal，vertical | horizontal   |
