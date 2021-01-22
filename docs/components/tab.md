# Tabs 标签页
----
### 基础用法
使用```dm-tabs```和```dm-tab-pane```属性来定义 Tabs 的样式。
``` html
<dm-tabs type="card" v-model="TabsActiveName2" @tab-click="TabsHandleClick2">
    <dm-tab-pane label="用户管理" name="first">用户管理</dm-tab-pane>
    <dm-tab-pane label="配置管理" name="second">配置管理</dm-tab-pane>
    <dm-tab-pane label="角色管理" name="third">角色管理</dm-tab-pane>
    <dm-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</dm-tab-pane>
</dm-tabs>
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model     | 绑定值，选中选项卡的 name   | string  |  — | 第一个选项卡的 name   |
| type    | 风格类型   | string  |  card/border-card |  —   |

### API
| 事件名称              | 说明        | 类型      | 可选值      | 默认值   |
|-------------------|------------|---------- |-------------|-------- | 
| tab-click    | tab 被选中时触发    | Function  |      —      |    —    |