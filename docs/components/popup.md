# Popup 上滑弹出框
----
### 基础用法
 使用```cancel```、```cancel-color```、```v-model```和```header```属性来定义 Popup 的样式。
``` html
<dm-popup v-model="popupVisible1" header="这里是个标题" cancel="取消" cancel-color="#19be6b">
  <dm-cell-group class="selectSign">
    <dm-cell-item>
      <img src="https://github.com/dsh225/DMUI/blob/master/static/logo.jpg?raw=true" slot="left" class="img">
      <div class="" slot="right"  @click="openModalBox">
        <p>电子提案 <dm-tag bg-color="#fff" color="#ed3f14" border-color="#ed3f14" round>荐</dm-tag></p>
        <p>通过在网上进行电子提案</p>
      </div>
    </dm-cell-item>
    <dm-cell-item>
      <img src="https://github.com/dsh225/DMUI/blob/master/static/logo.jpg?raw=true" slot="left" class="img">
      <div class="" slot="right">
        <p>原始提案</p>
        <p>采用原始方式进行提案，平台只进行记录</p>
      </div>
    </dm-cell-item>
  </dm-cell-group>
</dm-popup>
```

```js
export default {
  data () {
    return {
      popupVisible1: false
    }
  }
}
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| v-model    | 绑定状态   | string  | — |  —   |
| cancel     | 取消按钮文字   | string    |  —|   —    |
| cancel-color | 取消文字颜色   | string  |   — |  —   |
| header     | 标题文字   | string  | — |  —   |

