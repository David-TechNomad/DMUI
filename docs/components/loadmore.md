# LoadMore 加载更多
----
### 基础用法
使用```icon```、```color```和```no-data```属性来定义 LoadMore 的样式。
``` html
<dm-loadmore @action="loadMore"></dm-loadmore>
<dm-loadmore icon color="#2d8cf0">loading...</dm-loadmore>
<dm-loadmore no-data>暂无数据</dm-loadmore>
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| no-data     | 是否为暂无数据   | Boolean  |    — | false   |
| icon  | 是否有loading效果 | Boolean   |  —  |  false  |
| color     | 文字颜色   | string    |  自定义 |     —    |

### 方法
| 事件名称      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| action     |  操作   | string    |  自定义  |     —    |
