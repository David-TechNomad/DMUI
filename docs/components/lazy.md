# Lazy 延迟加载组件
----
### 基础用法
 使用```time```和```loaded```属性来定义 Lazy 的样式。
``` html
<dm-lazy :time="4000" @loaded="loadedAction">
  <img src="../assets/logo.png"/>
  <div class="topic-loading-item" slot="skeleton">
    <div class="loading-item-two">
      <dm-skeleton width="100%" animate="loading"></dm-skeleton>
    </div>
    <div class="loading-item-three">
      <dm-skeleton width="100%" animate="loading"></dm-skeleton>
    </div>
  </div>
  <!-- <dm-loading width="20" height="20" color="#ed3f14" slot="loading"></dm-loading> -->
</dm-lazy>
```


### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| time    | 延迟时间 (毫秒)  | Number  | — |  16   |

### 方法
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| loaded     | 完成操作   |  Function    |  自定义  |     —    |
