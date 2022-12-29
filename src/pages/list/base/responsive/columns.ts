import { PrimaryTableCol, TableRowData } from 'tdesign-vue-next';
import { statusFormat, paymentFormat, typeFormat, titleStyle } from './columnsRender';

export const columnsFields: PrimaryTableCol<TableRowData>[] = [
  {
    colKey: 'row-select',
    type: 'multiple',
    width: 64,
    fixed: 'left',
  },
  {
    title: titleStyle,
    align: 'left',
    width: 300,
    colKey: 'name',
    fixed: 'left',
  },
  {
    title: titleStyle,
    colKey: 'status',
    width: 200,
    cell: statusFormat,
  },
  {
    title: titleStyle,
    width: 200,
    ellipsis: true,
    colKey: 'no',
  },
  {
    title: titleStyle,
    width: 200,
    ellipsis: true,
    colKey: 'contractType',
    cell: typeFormat,
  },
  {
    title: titleStyle,
    width: 200,
    ellipsis: true,
    colKey: 'paymentType',
    cell: paymentFormat,
  },
  {
    title: titleStyle,
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
