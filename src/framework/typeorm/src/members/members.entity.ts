import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MeepoMembers {
  @PrimaryGeneratedColumn() id: number;
  @Column({
    default: 0,
  })
  uniacid: number;
  // 在 mc_member 里的UID
  @Column({
    default: 0,
  })
  uid: number;
  // 用户组ID
  @Column({
    default: 0,
  })
  groupid: number;
  // 用户级别 用户等级表里的 id 值
  @Column({
    default: 0,
  })
  level: number;
  // 上级分销商ID
  @Column({
    default: 0,
  })
  agentid: number;

  @Column({ length: 50, default: '' })
  openid: string;

  // 姓名
  @Column({ length: 20, default: '' })
  realname: string;
  // 手机号
  @Column({ length: 18, default: '' })
  mobile: string;
  // 微信号
  @Column({ length: 100, default: '' })
  weixin: string;
  // qq号
  @Column({ length: 30, default: '' })
  qq: string;
  // 备注信息
  @Column({ type: 'text' })
  content: string;
  // 邮箱
  @Column({ length: 50, default: '' })
  email: string;
  // 密码
  @Column({ length: 32, default: '' })
  password: string;
  // 加密
  @Column({ length: 8, default: '' })
  salt: string;

  // 建立时间
  @Column({
    default: 0,
  })
  createtime: number;
  // 代理时间
  @Column({
    default: 0,
  })
  agenttime: number;

  // 状态 0 没有审核 1 已经审核
  @Column({
    default: 0,
  })
  status: number;
  // 积分
  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0.0,
  })
  credit1: number;
  // 余额
  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0.0,
  })
  credit2: number;
  // 是否分销商 包括已经提交分销申请的
  @Column({
    default: false,
  })
  isagent: boolean;
  // 是否商户
  @Column({
    default: false,
  })
  isshopper: boolean;
  // 是否跑腿
  @Column({
    default: false,
  })
  isrunner: boolean;
  // 是否技工
  @Column({
    default: false,
  })
  isskiller: boolean;
}
