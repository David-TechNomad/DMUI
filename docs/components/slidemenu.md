# SlideMenu 左右滑动菜单
----
### 基础用法
使用```v-model/value```、```options```和```items```属性来定义 SlideMenu 的样式。
``` html
<dm-slide-menu
    v-model="slideMenuSelectedId"
    :items="slideMenuItems"
    :options="slideMenuOptions"
    @change="slideMenuHandleChange">
</dm-slide-menu>
export default {
  data () {
    return {
        slideMenuSelectedId: 4,
        slideMenuItems: [
            {label: '首页'},
            {label: '推荐'},
            {label: 'Android'},
            {label: '前端'},
            {label: '后端'},
            {label: 'iOS'},
            {label: '产品'},
            {label: '人工智能'},
            {label: '设计'},
            {label: '设计2'},
            {label: '设计3'},
            {label: '设计4'},
        ],
        slideMenuOptions:{
            activeColor: '#1d98bd'
        },
    }
  }
}
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model     | 绑定值   | number  |  — | 默认选中菜单   |
| items    | 菜单数据   | Array  |  - |  —   |
| activeColor    | 激活状态下字体以及滑条颜色   | String  |  - |  red   |

### API
| 事件名称              | 说明        | 类型      | 可选值      | 默认值   |
|-------------------|------------|---------- |-------------|-------- | 
| change    | 菜单 被选中时触发    | Function  |      —      |    —    |