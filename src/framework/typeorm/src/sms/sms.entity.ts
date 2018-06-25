import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MeepoSms {
  @PrimaryGeneratedColumn() id: number;

  @Column({
    default: 0,
  })
  uniacid: number;
  // 名字
  @Column({
    length: 255,
    default: '',
  })
  name: string;
  // 类型
  @Column({
    length: 10,
    default: '',
  })
  type: string;
  // 模板
  @Column({
    type: 'tinyint',
  })
  template: number;

  @Column({
    length: 255,
    default: '',
  })
  plid: string;
  @Column({
    length: 255,
    default: '',
  })
  sign: string;
  // 短信内容
  @Column({
    length: 100,
    default: '',
  })
  content: string;
  // 短信数据
  @Column({
    type: 'text',
  })
  data: string;
  // 状态
  @Column({
    default: 0,
  })
  status: boolean;
}
