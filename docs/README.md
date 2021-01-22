<div align=center><a href="https://github.com/dsh225/DMUI" target="blank"><img src="http://nxw.so/4MdxM"/></a></div>  
 
基于vue 2+ ，为公司产品打(zao)造(lun)的(zi)可复用UI组件，适用于 移动 和 部分PC 端，其中包括 基础组件 和 应用组件，目前 组件 和 文档 在不断完善中。

## 特性

- 基于 [Vue](http://vuejs.org/)`>=v2.1.4` 开发的可复用 UI 组件，并且可随产品需要扩展
- 使用Vue官方的工作流，支持 ES6
- 一系列产品线都在使用中
- 关于SEO问题推荐使用插件 [prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin)

## 浏览器支持

- 适用于 移动 和 部分PC 端

## 通用项目工程

<!-- - 基于官方扩展的项目工程，集成了Axios，Dayjs和可选的dmui，Vuex https://github.com/dsh225/DMUI -->

## 开发
> 全局引入 -- 在 webpack 入口文件 main.js 中如下配置：

``` bash
# 安装
cnpm install dsh-m-ui --save

# 引入css
import 'dsh-m-ui/package/dmui.min.css'

# 引入dmui.min.js
import dmui from 'dsh-m-ui'

# 注入到vue
Vue.use(dmui)
```

> 按需引入 -- 在 入口文件 main.js 或 组件内 中如下配置：

``` bash
# 全局组件 main.js引入
import Toast from 'dsh-m-ui/package/comps/components/toast'
Vue.prototype.$toast = Toast

# 一般组件
import dmButton from 'dsh-m-ui/package/comps/components/button'
import dmButtonGroup from 'dsh-m-ui/package/comps/components/buttongroup'
import dmModal from 'dsh-m-ui/package/comps/components/modal'
...

components: {
    dmButton,
    dmButtonGroup,
    dmModal
    ...
}
``` 
## 查看示例  

[在线示例](https://dsh225.github.io/DMUI/dist/)  


## 组件列表
- [x] 按钮
- [x] 标签
- [x] 加载更多
- [x] 搜索框
- [x] 单元格
- [x] 表单
- [x] 网格和图标
- [x] flexbox
- [x] Modal
- [x] Toast
- [x] Loading
- [x] 工单流程
- [x] skeleton骨架
- [x] Lazy延迟加载
- [x] 轮播
- [x] ActionSheet
- [x] Popup
- [x] 数字键盘
- [x] 表格
- [x] 进度条
- [x] 无缝滚动
- [x] 左右滑菜单
- [x] 日期选择器
- [x] 标签页
- [x] 导航栏(顶部)
- [x] 标签栏(底部)

## 贡献

在此不一一感谢所有付出脑力体力的同仁，如有疑问，请与我们联系
如果你在使用时遇到问题，或者有好的建议，欢迎给我们提 [Issue](https://github.com/dsh225/DMUI/issues) 或 [Pull Request](https://github.com/dsh225/DMUI/pulls)
