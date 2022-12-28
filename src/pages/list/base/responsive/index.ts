import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { MessagePlugin } from 'tdesign-vue-next';
import { getList } from '@/api/list';
import { columnsFields } from './columns';

const responsive = () => {
  const router = useRouter();
  const data = ref([]);
  const pagination = ref({
    defaultPageSize: 20,
    total: 100,
    defaultCurrent: 1,
  });

  const deleteIdx = ref(-1);

  const searchValue = ref('');

  const dataLoading = ref(false);

  const confirmVisible = ref(false);

  const selectedRowKeys = ref([1, 2]);

  const fetchData = async () => {
    dataLoading.value = true;
    try {
      const { list } = await getList();
      data.value = list;
      pagination.value = {
        ...pagination.value,
        total: list.length,
      };
    } catch (e) {
      console.log(e);
    } finally {
      dataLoading.value = false;
    }
  };

  const resetIdx = () => {
    deleteIdx.value = -1;
  };

  const onConfirmDelete = () => {
    // 真实业务请发起请求
    // console.log(data.value.length);
    data.value.splice(deleteIdx.value, 1);
    pagination.value.total = data.value.length;
    // console.log(pagination.value.total);
    const selectedIdx = selectedRowKeys.value.indexOf(deleteIdx.value);
    if (selectedIdx > -1) {
      selectedRowKeys.value.splice(selectedIdx, 1);
    }
    confirmVisible.value = false;
    MessagePlugin.success('删除成功');
    resetIdx();
  };

  const onCancel = () => {
    resetIdx();
  };

  const rehandleSelectChange = (val: number[]) => {
    selectedRowKeys.value = val;
  };
  const rehandlePageChange = (curr, pageInfo) => {
    console.log('分页变化', curr, pageInfo);
  };
  const rehandleChange = (changeParams, triggerAndData) => {
    console.log('统一Change', changeParams, triggerAndData);
  };
  const handleClickDetail = () => {
    router.push('/detail/base');
  };
  const handleSetupContract = () => {
    router.push('/form/base');
  };
  const handleClickDelete = (row: { rowIndex: any }) => {
    deleteIdx.value = row.rowIndex;
    confirmVisible.value = true;
  };

  return {
    data,
    columnsFields,
    deleteIdx,
    pagination,
    searchValue,
    dataLoading,
    confirmVisible,
    selectedRowKeys,
    fetchData,
    resetIdx,
    onConfirmDelete,
    onCancel,
    rehandleSelectChange,
    rehandlePageChange,
    rehandleChange,
    handleClickDetail,
    handleSetupContract,
    handleClickDelete,
  };
};

export { responsive };
