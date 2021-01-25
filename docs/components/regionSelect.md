# regionSelect 城市选择器
----
### 基础用法
使用```province```、```city```、```area```、```disabled```、```placeholders```和```wrapper```属性来定义 regionSelect 的样式。
``` html
<dm-regionSelect province="北京市" city="北京市" area="朝阳区" type="select" @selected="onSelect" @province="selectProvince" @city="selectCity" @area="selectArea"></dm-regionSelect>
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| province     | 省份（选填）   | String    |     省份名    |     —    |
| city     | 城市（选填）   | string  |    城市名  |    —   |
| area     | 地区（选填）   | String    | 地区名 |     —    |
| type     | 类型（选填，默认 select）   | String    | mobile,select |     select    |
| disabled     | 是否禁用（选填，默认 false，且 type='mobile' 时无效，当disabled=true时province-disabled、city-disabled、area-disabled均无效）   | Boolean    | true, false |     false    |
| placeholders     | 占位符（选填）   | Object    |     province, city, area    |     { province: '省', city: '市', area: '区' }    |
| only-province     | 只显示省份（选填）   | Boolean    |     true, false    |     false    |

### API
| 事件名称              | 说明        | 类型      | 可选值      | 默认值   |
|-------------------|------------|---------- |-------------|-------- | 
| province    | 选择省份    | Function  |      —      |    —    |
| city | 选择城市    | Function  |      —      |    —    |
| area         | 选择地区| Function  |      —      |    —    |
| selected      | 选择最后一项时触发| Function  |      —      |    —    |