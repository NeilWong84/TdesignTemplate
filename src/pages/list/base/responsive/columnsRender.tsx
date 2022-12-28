import { CheckCircleFilledIcon, ErrorCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue-next';

export function statusFormat(h, { row }) {
  const statusMap = {
    0: { label: '审核失败', theme: 'danger', icon: <CloseCircleFilledIcon /> },
    1: { label: '待审核', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
    2: { label: '待履行', theme: 'warning', icon: <CheckCircleFilledIcon /> },
    3: { label: '履行中', theme: 'success', icon: <CheckCircleFilledIcon /> },
    4: { label: '已完成', theme: 'success', icon: <CheckCircleFilledIcon /> },
  };
  return (
    <t-tag theme={statusMap[row.status].theme} variant="outline">
      {statusMap[row.status].icon}
      {statusMap[row.status].label}
    </t-tag>
  );
}

export function paymentFormat(h, { row }) {
  const paymentMap = {
    0: { label: '收款', color: 'success' },
    1: { label: '付款', color: 'warning' },
  };

  return <span>{paymentMap[row.paymentType].label}</span>;
}

export function typeFormat(h, { row }) {
  const typeMap = {
    0: { label: '主合同', theme: 'primary' },
    1: { label: '子合同', theme: 'warning' },
    2: { label: '附加合同', theme: 'danger' },
  };

  return (
    <t-tag theme={typeMap[row.contractType].theme} variant="light">
      {typeMap[row.contractType].label}
    </t-tag>
  );
}
