# Loading 加载组件
----
### 基础用法
使用```width```、```height```、```color```、```fullScreen```、```border-width```、```vertical```、```closable```和```has-text```属性来定义 Loading 的样式。
``` html
<dm-loading></dm-loading>
<!-- 自定义定位右上角 -->
<dm-loading class="right-top-loading" width="20" height="20" color="#ed3f14"></dm-loading>
<dm-loading has-text>自定义文字</dm-loading>
<!-- 测试开启 -->
<dm-loading has-text fullScreen>全屏的loading</dm-loading>
<dm-loading has-text vertical>垂直的loading</dm-loading>
<dm-loading has-text fullScreen closable @close="loadingStatus=false" v-show="loadingStatus">可关闭的loading</dm-loading>
<dm-loading><div slot="cus"><img style="width:40px" src="https://raw.githubusercontent.com/dsh225/DMUI/master/static/logo.jpg"><p style="color:#19be6b;margin:0;">自定义效果</p></div></dm-loading>
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| width     | 设置大小   | String  |    — | -   |
| height    | 设置大小   | String  |    — | -   |
| color     | 颜色   | string    |  自定义 |     —    |
| has-text     | 是否有文字   | Boolean  |    — | false   |
| fullScreen     | 是否为全局效果   | Boolean  |    — | false   |
| vertical     | 垂直排列icon和文字   | Boolean  |    — | false   |
| closable     | 当fullScreen时才出现可关闭按钮   | Boolean  |  —  |   —   |
| slot="cus"   | 可自定义传入内容   | —   |  —  |   —   |

### 方法
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| close     | 关闭操作   |  Function    |  自定义  |     —    |

