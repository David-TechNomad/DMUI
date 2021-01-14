# Cell 单元格
----

###### 基础用法
dm-cell-group 组件有```title```属性和```top```、```bottom```②个slot 

dm-cell-item 组件有```type```、```href```属性和```leftIcon```、```left```、```right```、```rightIcon```④个slot，具体表现可以查看在线示例
``` html
# type='link'时，为<a>链接形式
<dm-cell-group title="标题">
    <div slot="top"></div>
    <dm-cell-item type='link' href="tel:400517517">
        <span slot="leftIcon" class="dm__icon--contact"></span>
        <span slot="left">联系方式</span>
        <span slot="right">400517517</span>
        <span slot="rightIcon" class="dm__icon--right"></span>
    </dm-cell-item>

    <dm-cell-item>
        <span slot="left">我的消息</span>
        <dm-tag slot="right" type="error" round style="margin-bottom:0;">8</dm-tag>
        <span slot="rightIcon" class="dm__icon--right"></span>
    </dm-cell-item>
    <div slot="bottom"></div>
</dm-cell-group>
```
###### dm-cell-group属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title     | 设置标题   | String  | — | —  |

###### dm-cell-item属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 设置类型   | String  | link | —  |
| href    | 设置href   | String  |  — | —   |

