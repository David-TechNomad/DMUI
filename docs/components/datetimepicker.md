# datetimePicker 时间选择器
----
### 基础用法
使用```type```、```picker-options```、```align```、```v-model```和```placeholder```属性来定义 Step 的样式。
``` html
<dm-date-picker
    v-model="dateValue5"
    type="daterange"
    align="right"
    unlink-panels
    range-separator="至"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    :picker-options="pickerOptions2">
</dm-date-picker>

export default {
    data () {
        return {
            dateValue5:'',
            pickerOptions2: {
                shortcuts: [{
                text: '最近一周',
                onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', [start, end]);
                }
                }, {
                text: '最近一个月',
                onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                    picker.$emit('pick', [start, end]);
                }
                }, {
                text: '最近三个月',
                onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                    picker.$emit('pick', [start, end]);
                }
                }]
            },
        }
    }
}
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 显示类型   | string  |  year/month/date/dates/ week/datetime/datetimerange/ daterange/monthrange | date   |
| value / v-model    | 绑定值   | Adate(DatePicker) / array(DateRangePicker)rray  |  — |  —   |
| picker-options    | 当前时间日期选择器特有的选项参考下表   | object  |  — |  {}   |
| placeholder    | 非范围选择时的占位内容   | string  |  — |  —   |
| align    | 对齐方式   | string  |  left, center, right  |  left   |
