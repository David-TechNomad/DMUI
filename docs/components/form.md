# Form 表单
----
##### 建议配合 dm-cell-group 和 dm-cell-item 一起使用

## input

###### 基础用法
使用```type```、```name```、```max```、```value```、```readonly```、```disabled```、```autocomplete```和```placeholder```属性来定义 Input 的样式。
``` html
<dm-cell-group>
    <dm-cell-item>
        <span slot="left">用户名：</span>
        <dm-input slot="right" v-model="value1" name="name1" max="10" placeholder="请输入用户名" @blur="inputAction1" @focus="inputAction2"></dm-input>
    </dm-cell-item>
    <dm-cell-item>
        <span slot="left">密  码：</span>
        <dm-input slot="right" type="password" v-model="value1" placeholder="请输入密码"></dm-input>
    </dm-cell-item>
    <dm-cell-item>
        <span slot="leftIcon" class="dm__icon--phone"></span>
        <dm-input slot="right" type="tel" v-model="value1" placeholder="请输入手机号"></dm-input>
        <dm-button slot="right" type="warning" class="btn__block" style="padding: 6px;width: 120px;font-size: 12px;">获取验证码</dm-button>
    </dm-cell-item>
    <dm-cell-item>
        <dm-input slot="right" :value="value1" placeholder="这里是readonly" readonly></dm-input>
        <span slot="rightIcon" class="dm__icon--delete"></span>
    </dm-cell-item>
    <dm-cell-item>
        <dm-input slot="right" :value="value1" placeholder="这里是disabled"   disabled></dm-input>
        <span slot="rightIcon" class="dm__icon--delete"></span>
    </dm-cell-item>
</dm-cell-group>
```

###### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 设置类型   | String  | text, password, email, number, tel, datetime-local, date, time | text  |
| name    | 设置input name   | String  |    — | —   |
| max     | 设置maxlength   | String    |  — |     —    |
| value     | 绑定值   | String  |    — | —   |
| readonly     | 是否readonly   | Boolean  |    — | false   |
| disabled     | 是否disabled   | Boolean  |    — | false   |
| autocomplete     | 是否autocomplete   | Boolean  |    — | off   |
| placeholder     | 设置placeholder   | String  |    — | —   |

###### API
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| blur     | 失焦方法   | Function  |    — | —   |
| focus    | 聚焦方法   | Function  |    — | —   |
| input    | 输入方法   | Function  |    — | —   |


## textarea

###### 基础用法
有```placeholder```、```value```、```readonly```、```disabled```和```max```属性
``` html
<dm-cell-group>
    <dm-cell-item>
        <dm-textarea slot="right" placeholder="请输入留言，50字以内" :value="value" @input="textareaAction" max="50"></dm-textarea>
    </dm-cell-item>
</dm-cell-group>
```

###### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| placeholder   | 设置placeholder  | String  | — | —  |
| value    | 绑定值   | String  |  — | —   |
| max    | 设置maxlength   | String  |  — | —   |
| readonly     | 是否readonly   | Boolean  |    — | false   |
| disabled     | 是否disabled   | Boolean  |    — | false   |

###### API
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| input    | 输入方法   | Function  |    — | —   |



## select

###### 基础用法
有```data```和```right```属性
``` html
<dm-cell-group>
    <dm-cell-item>
        <dm-select slot="right" :data="selectList" @change="selectAction" v-model="curSelected"></dm-select>
        <span slot="rightIcon" class="dm__icon--right"></span>
    </dm-cell-item>
    <dm-cell-item>
        <span slot="left">出行方式</span>
        <dm-select slot="right" right :data="selectList"></dm-select>
        <span slot="rightIcon" class="dm__icon--right"></span>
    </dm-cell-item>
</dm-cell-group>
```

###### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| data   | 传入的option数组  | Array  | — | —  |
| right    | 设置居右显示   | Boolean  |  — | false   |
| disabled  | 设置不可选   | Boolean  |  — | false   |

###### API
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| change    | select改变时的方法   | Function  |    — | —   |


## switch
checkbox的另一种表现，有```value```属性
``` html
<dm-cell-group>
    <dm-cell-item>
        <span slot="left">是否保存</span>
        <dm-switch slot="right" value="switch" @input="switchAction"></dm-switch>
    </dm-cell-item>
</dm-cell-group>
```

###### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value   | 绑定值  | String  | — | —  |

###### API
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| input    | 输入方法   | Function  |    — | —   |


## radio 
###### 基础用法
需配合 dm-radio-group 使用，通过```color```属性改变 √ 颜色，```disabled```禁止选中,```hor```为水平单选框，默认不填为垂直
```html
<dm-radio-group v-model="radio" color="#4cd864">
    <dm-radio value="巴士"></dm-radio>
    <dm-radio value="火车"></dm-radio>
    <dm-radio value="飞机" disabled>飞机--disabled</dm-radio>
    <dm-radio value="单车">单车</dm-radio>
</dm-radio-group>

export default {
  data () {
    return {
      radio: '巴士'
    }
  }
}
```

###### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| color   | 设置颜色  | String  | — | —  |
| disabled   | 禁止选中  | Boolean  | — | false  |
| hor   | 水平显示  | Boolean  | — | false  |

## checkbox
###### 基础用法
需配合 dm-checkbox-group 使用，通过```color```属性改变 √ 颜色，```disabled```禁止选中
``` html
<dm-checkbox-group v-model="checkbox" color="#4cd864">
    <dm-checkbox value="1">巴士</dm-checkbox>
    <dm-checkbox value="2">火车</dm-checkbox>
    <dm-checkbox value="3" disabled>飞机--disabled</dm-checkbox>
    <dm-checkbox value="4">单车</dm-checkbox>
</dm-checkbox-group>

export default {
  data () {
    return {
      checkbox: ['1', '4']
    }
  }
}
```

###### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| color   | 设置颜色  | String  | — | —  |
| disabled   | 禁止选中  | Boolean  | — | false  |