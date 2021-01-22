# Navbar 导航栏
----
### 基础用法
使用```title```、```bgcolor```、```color```、```left-text```、```left-icon```、```right-text```、```right-icon```和```img-src```属性来定义 Navbar 的样式。
``` html
<dm-navbar title="首页文字很长很长很长啊啊啊啊啊" bgcolor='#fff' color="#333" left-text="返回" left-icon="dm__icon--left" right-text="设置" @left-action="clickLeft" @right-action="clickRight"></dm-navbar>

#有title的时候设置img-src无效
<dm-navbar img-src="https://github.com/dsh225/DMUI/blob/master/static/logo.jpg?raw=true" left-icon="dm__icon--left" right-icon="dm__icon--edit"></dm-navbar>
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title     | 设置导航标题   | String  |  — | —  |
| img-src    | 设置导航标题为图片，有title的时候设置无效   | String  |  — |  —   |
| bgcolor     | 设置导航背景颜色   | String  |  — | —   |
| color    | 设置文字颜色   | String  |  — |  —   |
| left-text    | 设置左文字   | String  |  — |  —   |
| left-icon    | 设置左图标  | String  |  — |  —   |
| right-text    | 设置右文字   | String  |  — |  —   |
| right-icon    | 设置右图标   | String  |  — |  —   |


### API
| 事件名称      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- | 
| left-action     | 左点击方法   | Function  |    — | —   |
| right-action     | 右点击方法   | Function  |    — | —   |