# Grid 网格
----
### 配合 dm-grids 使用
``` html
<dm-grids row="3">...</dm-grids>
```
### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| row    | 每行显示列数   | String  |  2,3,4,5,6 |  4   |


### 基础用法
使用```href```属性来定义 Grid 的样式，icon 和 text 两个slot
``` html
<dm-grids row="3">
    <dm-grid href="https://github.com/dsh225/DMUI">
        <span slot="icon" class="dm__icon--phone"></span>
        <span slot="text">手机</span>
    </dm-grid>
    <dm-grid>
        <span slot="icon" class="dm__icon--lbsfill" @click="clickAction"></span>
        <span slot="text">位置</span>
    </dm-grid>
    <dm-grid>
        <span slot="icon" class="dm__icon--lock"></span>
        <span slot="text">密码</span>
    </dm-grid>
    <dm-grid>
        <span slot="icon" class="dm__icon--qrcode"></span>
        <span slot="text">扫码</span>
    </dm-grid>
    <dm-grid>
        <span slot="icon" class="dm__icon--date"></span>
        <span slot="text">时间</span>
    </dm-grid>
    <dm-grid>
        <span slot="icon" class="dm__icon--contact"></span>
        <span slot="text">电话</span>
    </dm-grid>
</dm-grids>
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| href     | 设置链接   | String  |  — | javascript:;   |
