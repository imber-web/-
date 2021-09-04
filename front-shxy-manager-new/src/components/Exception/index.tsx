//报错页面的组件
import {FC} from 'react';
import { Card } from '@alifd/next';
import styles from './index.module.scss';

export interface IExceptionProps {
  statusCode: string;
  description: string;
  image: string;
}

const Exception: FC<IExceptionProps> = (props: IExceptionProps) => {
  const {
    statusCode,
    description,
    image,
  } = props;

  return (
    <Card free className={styles.exception}>
      <div>
        <img src={image} className={styles.exceptionImage}/>
        <h1 className={styles.statusCode}>{statusCode}</h1>
        <div className={styles.dscription}>{description}</div>
      </div>
    </Card>
  )
}

export default Exception;