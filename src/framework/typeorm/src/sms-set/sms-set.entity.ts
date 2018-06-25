import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MeepoSmsSet {
  @PrimaryGeneratedColumn() id: number;
  @Column({
    default: 0,
  })
  uniacid: string;
  @Column({
    default: false,
  })
  juhe: boolean;
  @Column({
    default: '',
    length: 255,
  })
  juhe_key: string;
  @Column({
    default: false,
  })
  dayu: boolean;
  @Column({
    default: '',
    length: 255,
  })
  dayu_key: string;
  @Column({
    default: '',
    length: 255,
  })
  dayu_secret: string;
  @Column({
    default: 0,
  })
  aliyun: boolean;
  @Column({
    default: '',
    length: 255,
  })
  aliyun_appcode: string;
}
