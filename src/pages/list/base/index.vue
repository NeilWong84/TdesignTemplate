<template>
  <div>
    <t-card class="list-card-container">
      <t-row justify="space-between">
        <div class="left-operation-container">
          <t-button @click="handleSetupContract"> 新建合同 </t-button>
          <t-button variant="base" theme="default" :disabled="!selectedRowKeys.length"> 导出合同 </t-button>
          <p v-if="!!selectedRowKeys.length" class="selected-count">已选{{ selectedRowKeys.length }}项</p>
        </div>
        <div class="search-input">
          <t-input v-model="searchValue" placeholder="请输入你需要搜索的内容" clearable>
            <template #suffix-icon>
              <search-icon size="20px" />
            </template>
          </t-input>
        </div>
      </t-row>
      <t-table
        :data="data"
        :columns="columnsFields"
        :row-key="rowKey"
        :hover="true"
        max-height="500"
        :bordered="true"
        cell-empty-content="-"
        :pagination="pagination"
        :selected-row-keys="selectedRowKeys"
        :loading="dataLoading"
        :header-affixed-top="headerAffixedTop"
        @page-change="rehandlePageChange"
        @change="rehandleChange"
        @select-change="rehandleSelectChange"
      >
        <!-- 操作列插槽:有业务逻辑,需要从Composed Method获取-->
        <template #op="slotProps">
          <a class="t-button-link" @click="handleClickDetail">详情</a>
          <a class="t-button-link" @click="handleClickDelete(slotProps)">删除</a>
        </template>
      </t-table>
    </t-card>

    <t-dialog
      v-model:visible="confirmVisible"
      header="确认删除当前所选合同？"
      :body="confirmBody"
      :on-cancel="onCancel"
      @confirm="onConfirmDelete"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'ListBase', // keep-alive
};
</script>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { SearchIcon } from 'tdesign-icons-vue-next';
import { useSettingStore } from '@/store';
import { prefix } from '@/config/global';
import { responsive } from './responsive';

const store = useSettingStore();
const rowKey = 'index';

const {
  data,
  columnsFields,
  deleteIdx,
  pagination,
  searchValue,
  dataLoading,
  confirmVisible,
  selectedRowKeys,
  fetchData,
  onConfirmDelete,
  onCancel,
  rehandleSelectChange,
  rehandlePageChange,
  rehandleChange,
  handleClickDetail,
  handleSetupContract,
  handleClickDelete,
} = responsive();

const confirmBody = computed(() => {
  if (deleteIdx.value > -1) {
    const { name } = data.value[deleteIdx.value];
    return `删除后，${name}的所有合同信息将被清空，且无法恢复`;
  }
  return '';
});

const headerAffixedTop = computed(
  () =>
    ({
      offsetTop: store.isUseTabsRouter ? 48 : 0,
      container: `.${prefix}-layout`,
    } as any),
);

onMounted(() => {
  fetchData();
});
</script>

<style lang="less" scoped>
@import url('./index.scss');
</style>
