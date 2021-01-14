# Tag 标签
----
### 基础用法
使用```type```、```bg-color```、```color```、```border-color```、```closable```和```round```属性来定义 Tag 的样式。
``` html
<dm-tag>普通</dm-tag>
<dm-tag type="primary">primary</dm-tag>
<dm-tag type="success">success</dm-tag>
<dm-tag type="warning" closable>warning</dm-tag>
<dm-tag type="error" round>error</dm-tag>
<dm-tag bg-color="#fc0" color="#e0439a" border-color="#fc0">自定义颜色</dm-tag>
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 类型   | string    |   primary,success,warning,danger,info |     —    |
| round     | 圆角   | Boolean  |    — | false   |
| bg-color     | 背景颜色   | string    | 自定义 |     —    |
| color     | 文字颜色   | string    |  自定义 |     —    |
| border-color     | 边框颜色   | string    |   自定义 |     —    |

### API
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- | 
| closable     | 可关闭   | Boolean  |    — | false   |