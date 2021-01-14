<template>
    <vxe-table
        border
        width="100%"
        show-overflow
        :loading="loading"
        highlight-hover-row
        :highlight-current-row="highlightCurrentRow"
        show-header-overflow
        align="center"
        height="300"
        stripe
        :auto-resize="autoResize"
        :sort-config="{trigger: 'cell'}"
        :edit-config="{trigger: 'manual', mode: 'row'}"
        resizable
        :row-class-name="rowClassName"
        @checkbox-all="selectAllEvent"
        @checkbox-change="selectChangeEvent"
        @cell-click="cellClick"
        @cell-dblclick="cellDblclick"
        header-row-class-name="tableHeader"
        :data="tableData">
        <vxe-table-column type="checkbox" align="center" width="50" v-if="mutiSelect"></vxe-table-column>
        <vxe-table-column type="seq" :title="seqNumberTitle" align="center" :width="seqNumberTitleWidth" v-if="seqNumber"></vxe-table-column>
        <template v-for="(column, index) in columns">
            <vxe-table-column 
                :title="column.label"
                :key='index'
                align="center"
                :field='column.prop' :width="column.width" v-if="!column.hidden">
            </vxe-table-column>
        </template>
        <!--按钮操作组-->
        <vxe-table-column :title="operateTitle" align="center" :width="operates.width" :fixed="operates.fixed" v-if="operatesShow">
            <template slot-scope="scope">
                <div class="operate-group">
                    <template v-for="(btn, key) in operates.list">
                        <vxe-button size="mini" :content="btn.label" :status="btn.status" @click="btn.method(scope.row, scope.seq)" v-if="btn.show" :key='btn.id' :type="btn.type" :disabled="btn.disabled"></vxe-button>
                        <!-- <dm-button  :cls="btn.operatesIcon" @click="btn.method(scope.row, scope.seq)" v-if="btn.show" :key='btn.id' :type="btn.type" :disabled="btn.disabled">{{btn.label}}</dm-button> -->
                    </template>
                </div>
            </template>
        </vxe-table-column>
    </vxe-table>
</template>
<script>
export default {
    name: 'dm-table',
        data () {
            return {

            }
        },
        props: {
            tableData: {
                type: Array,
                default: function () {
                    return [];
                }
            },
            contextMenu: {
                type: [Object, Function],
                default: function () {
                    return {
                        header: {
                            disabled: false,
                            options: [[
                                {
                                    code: 'RESET_RESIZABLE',
                                    name: '重置列宽'
                                },
                                {
                                    code: 'SORT_ASC',
                                    name: '升序'
                                },
                                {
                                    code: 'SORT_DESC',
                                    name: '降序'
                                },
                                {
                                    code : 'FIXED_LEFT_COLUMN',
                                    name: '固定左侧'
                                },
                                {
                                    code : 'FIXED_RIGHT_COLUMN',
                                    name: '固定右侧'
                                },
                                {
                                    code : 'CLEAR_FIXED_COLUMN',
                                    name: '清除固定列'
                                },
                                {
                                    code : 'HIDDEN_COLUMN',
                                    name: '隐藏当前列'
                                },
                                {
                                    code : 'RESET_COLUMN',
                                    name: '重置列的可视状态'
                                },
                                {
                                    code : 'test',
                                    name: '自定义'
                                }
                            ]]
                        }
                    };
                }
            },
            columns: {
                type: Array,
                default: () => []
            },
            operates: {
                type: Object,
                default: function () {
                    return {};
                }
            },
            rowClassName: {
                type: [String, Function],
            },
            seqNumberTitle: {
                type: String,
                default: '序号'
            },
            seqNumberTitleWidth: {
                type: String,
                default: '60'
            },
            fixed:false,
            operateTitle: {
                type: String,
                default: '操作'
            },
            tableHeight: Number,
            mutiSelect: false, // 是否显示复选框
            loading:false,
            isArchivesManagent:false,
            columnSetting:false,
            seqNumber:false, // 是否显示序号
            operatesShow:false,// 是否显示操作列
            autoResize:true,
            backListDetailWinShowIcon:false,
            highlightCurrentRow: {
                type: Boolean,
                default: true
            },
        },
        created () {

          },
          methods: {
             //全选事件
            selectAllEvent ({ checked, records }) {
                this.$emit('selectAllEvent', checked, records);
            },
            // 单选事件
            selectChangeEvent ({ checked, records }) {
                this.$emit('selectChangeEvent', checked, records);
            },
            // 列表单击事件
            cellClick({row, rowIndex, $rowIndex}) {
                this.$emit('cellClick', row, rowIndex, $rowIndex);
            },
            // 列表双击事件
            cellDblclick({row, rowIndex, $rowIndex}) {
                this.$emit('cellDblclick', row, rowIndex, $rowIndex);
            },
          }
        }
</script>
<style lang="scss" scoped>

</style>