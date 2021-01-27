# animation 动画
----
### 基础用法
使用```transition```、```name```属性来定义 animation 的样式。
``` html
<span class="demonstration">fade 淡入淡出</span>
<transition name="dm-fade-in-linear">
    <div v-show="transitionShow" class="transition-box">.dm-fade-in-linear</div>
</transition>
<transition name="dm-fade-in">
    <div v-show="transitionShow" class="transition-box">.dm-fade-in</div>
</transition>
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| name     | 动画名称   | string    |     -    |     -     |