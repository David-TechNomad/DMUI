# Button 按钮
----
### 基础用法
使用```type```、```plain```、```icon```、```loading```、```long```、```bg-color```、```color```、```border-color```、```no-radius```、```block```和```round```属性来定义 Button 的样式。
``` html
<dm-button>普通按钮</dm-button>
<dm-button type="primary" @click="btnClick" icon="dm__icon--checked" >primary按钮</dm-button>
<dm-button type="error" icon="dm__icon--checked" ></dm-button>
<dm-button type="warning" disabled>禁止按钮</dm-button>
<dm-button plain>简约按钮</dm-button>
<dm-button type="text" icon="dm__icon--checked">文字按钮</dm-button>
<dm-button loading type="success">loading状态按钮</dm-button>
<dm-button bg-color="#fc0" color="#e0439a" border-color="#fc0">自定义颜色</dm-button>
<dm-button bg-color="#fcb" color="#e0439a" border-color="#fcb" block no-radius class="btn__block">块按钮</dm-button>
<dm-button round long>长按钮</dm-button>
<dm-button-group class="btn__group">
    <dm-button type="warning">警告按钮</dm-button>
    <dm-button type="primary" @click="btnClick" icon="dm__icon--checked" >primary按钮</dm-button>
</dm-button-group>
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| long     | 长按钮   | Boolean  |    — | false   |
| loading     | 是否有加载效果   | Boolean  |    — | false   |
| type     | 类型   | string    |   primary,success,warning,danger,info |     —    |
| plain     | 是否简约按钮   | Boolean    | — | false   |
| disabled  | 是否禁用状态    | Boolean   | —   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
| round     | 圆角   | Boolean  |    — | false   |
| block     | 块级按钮   | Boolean  |    — | false   |
| bg-color     | 背景颜色   | string    | 自定义 |     —    |
| color     | 文字颜色   | string    |  自定义 |     —    |
| border-color     | 边框颜色   | string    |   自定义 |     —    | 
| no-radius     | 无边框   | string    |   自定义 |     —    | 

