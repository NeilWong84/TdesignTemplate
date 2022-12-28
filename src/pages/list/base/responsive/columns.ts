import { PrimaryTableCol, TableRowData } from 'tdesign-vue-next';
import { statusFormat, paymentFormat, typeFormat } from './columnsRender';

export const columnsFields: PrimaryTableCol<TableRowData>[] = [
  {
    colKey: 'row-select',
    type: 'multiple',
    width: 64,
    fixed: 'left',
  },
  {
    title: '合同名称',
    align: 'left',
    width: 300,
    colKey: 'name',
    fixed: 'left',
  },
  {
    title: '合同状态',
    colKey: 'status',
    width: 200,
    cell: statusFormat,
  },
  {
    title: '合同编号',
    width: 200,
    ellipsis: true,
    colKey: 'no',
  },
  {
    title: '合同类型',
    width: 200,
    ellipsis: true,
    colKey: 'contractType',
    cell: typeFormat,
  },
  {
    title: '收付类型',
    width: 200,
    ellipsis: true,
    colKey: 'paymentType',
    cell: paymentFormat,
  },
  {
    title: '合同金额 (元)',
    width: 200,
    ellipsis: true,
    colKey: 'amount',
  },
  {
    align: 'left',
    fixed: 'right',
    width: 200,
    colKey: 'op',
    title: '操作',
  },
];
