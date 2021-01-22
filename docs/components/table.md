# Table 标签
----
### 基础用法
使用```columns```、```tableData```、```seqNumber```、```mutiSelect```、```operatesShow```和```operates```属性来定义 Table 的样式。
``` html
<dm-table :columns="columns" :tableData="tableData" :seqNumber="true" :mutiSelect="true" :operatesShow="true" :operates="operates"></dm-table>
export default {
    data () {
        return {
            columns: [
                {
                    label: "name",
                    prop: "name",
                },
                {
                    label: "sex",
                    prop:  "sex",
                },
                {
                    label: "age",
                    prop:  "age",
                },
                {
                    label: "address",
                    prop:  "address",
                },
            ]
            tableData: [
                {
                    name: '名称1',
                    sex: '0',
                    num: 123,
                    age: 18,
                    num2: 234,
                    rate: 3,
                    address: 'shenzhen'
                },
                {
                    name: '名称2',
                    sex: '0',
                    num: 123,
                    age: 18,
                    num2: 234,
                    rate: 3,
                    address: 'shenzhen'
                },
                {
                    name: '名称3',
                    sex: '0',
                    num: 123,
                    age: 18,
                    num2: 234,
                    rate: 3,
                    address: 'shenzhen'
                }
            ]
            operates: {
                width: 210,
                fixed: '',
                align: 'center',
                list: [
                    {
                        id: '1',
                        label: '新增',
                        icon: 'el-icon-edit',
                        show: true,
                        disabled: false,
                        status:'primary',
                        method: (row, index) => {
                            this.tableAdd(row, index);
                        },
                    },
                    {
                        id: '2',
                        label: '编辑',
                        icon: 'el-icon-edit',
                        show: true,
                        disabled: false,
                        status:'warning',
                        method: (row, index) => {
                            this.tableEdit(row, index)
                        },
                    },
                    {
                        id: '3',
                        label: '删除',
                        icon: 'el-icon-edit',
                        show: true,
                        disabled: false,
                        status:'danger',
                        method: (row, index) => {
                            this.tableDel(row, index)
                        },
                    },
                ]
            }
        }
    }
}
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| columns     | 表头数据   | Array    |     —    |     []    |
| tableData     | 表格数据   | Array  |    — | []   |
| seqNumber     | 是否显示序号   | Boolean    | true,false |     false    |
| mutiSelect     | 是否显示复选框   | Boolean    | true,false |     false    |
| operatesShow     | 是否显示操作列   | Boolean    | true,false |     false    |
| operates     | 操作列数据   | Object    |     —    |     {}    |

### API
| 事件名称              | 说明        | 类型      | 可选值      | 默认值   |
|-------------------|------------|---------- |-------------|-------- | 
| selectAllEvent    | 全选事件    | Function  |      —      |    —    |
| selectChangeEvent | 单选事件    | Function  |      —      |    —    |
| cellClick         | 列表单击事件| Function  |      —      |    —    |
| cellDblclick      | 列表双击事件| Function  |      —      |    —    |