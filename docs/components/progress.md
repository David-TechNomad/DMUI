# progress 标签
----
### 基础用法
使用```percentage```、```type```、```stroke-width```、```text-inside```、```status```和```color```属性来定义 progress 的样式。
``` html
<dm-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></dm-progress>
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| percentage     | 百分比（必填）   | number    |     0-100    |     0    |
| type     | 进度条类型   | string  |    line/circle/dashboard  | line   |
| stroke-width     | 进度条的宽度，单位 px   | number    | — |     6    |
| text-inside     | 进度条显示文字内置在进度条内（只在 type=line 时可用）   | Boolean    | true,false |     false    |
| status     | 进度条当前状态   | string    | success/exception/warning/active |     —    |
| color     | 进度条背景色（会覆盖 status 状态颜色）   | string/function/array    |     —    |     ''    |