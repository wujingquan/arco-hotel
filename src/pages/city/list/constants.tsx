import React from 'react';
import { Button, Typography, Badge } from '@arco-design/web-react';
import IconText from './icons/text.svg';
import IconHorizontalVideo from './icons/horizontal.svg';
import IconVerticalVideo from './icons/vertical.svg';
import dayjs from 'dayjs';
import styles from './style/index.module.less';

const { Text } = Typography;

export const ContentType = ['图文', '横版短视频', '竖版短视频'];
export const FilterType = ['规则筛选', '人工'];
export const Status = ['未上线', '已上线'];

const ContentIcon = [
  <IconText key={0} />,
  <IconHorizontalVideo key={1} />,
  <IconVerticalVideo key={2} />,
];

export function getColumns(
  t: any,
  callback: (record: Record<string, any>, type: string) => Promise<void>
) {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      align: 'center',
      render: (value) => <Text copyable>{value}</Text>,
    },
    {
      title: '名称',
      dataIndex: 'name',
      align: 'center'
    },
    {
      title: t['searchTable.columns.operations'],
      dataIndex: 'operations',
      headerCellStyle: { paddingLeft: '15px' },
      align: 'center',
      render: (_, record) => (
        <>
          <Button
          type="primary"
          size="mini"
          className={styles.btn}
          onClick={() => callback(record, 'view')}
        >
          查看
        </Button>
        <Button
          type="primary"
          size="mini"
          className={styles.btn}
          onClick={() => callback(record, 'view')}
        >
          编辑
        </Button>
        <Button
          type="primary"
          size="mini"
          className={styles.btn}
          onClick={() => callback(record, 'view')}
        >
          删除
        </Button>
        </>
      ),
    },
  ];
}

export default () => ContentIcon;
