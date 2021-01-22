# carousel 标签
----
### 基础用法
使用```dm-carousel```、```dm-carousel-item```、```trigger```、```type```、```height```和```interval```、```loop```、```direction```属性来定义 carousel 的样式。
``` html
<dm-carousel height="150px">
    <dm-carousel-item v-for="item in 4" 
    :key="item" trigger="click" 
    type="card" 
    :interval="4000">
    <h3 class="small">{{ item }}</h3>
    </dm-carousel-item>
</dm-carousel>
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| height     | 轮播的高度   | string    |     —    |     —    |
| initial-index     | 初始状态激活的幻灯片的索引，从 0 开始   | number  |    — | 0   |
| trigger     | 指示器的触发方式   | string    | click |     —    |
| autoplay     | 是否自动切换   | Boolean    | card |     —    |
| loop     | 是否循环显示   | Boolean    | true,false |     true    |
| direction     | 走马灯展示的方向   | string    |     horizontal/vertical    |    horizontal    |

### API
| 事件名称              | 说明        | 类型      | 可选值      | 默认值   |
|-------------------|------------|---------- |-------------|-------- | 
| change    | 幻灯片切换时触发    | Function  |      —      |    —    |
| prev | 切换至上一张幻灯片    | Function  |      —      |    —    |
| next         | 切换至下一张幻灯片| Function  |      —      |    —    |