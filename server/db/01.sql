-- #设置编码格式
 set names utf8;
-- #如果存在先删了
 drop database if exists  msgdb;
--  #创建
 create database msgdb charset=utf8;
--  #使用
 use msgdb;
--  #建  留言表  message
 create  table message (
    uid int primary key auto_increment ,--  #主键约束  同一个did不能插入 自增
    uname varchar (30),  --   #留言名
     msgtime datetime, #留言时间
	 msg varchar (400)
 );
--  #插入数据
  insert into message values(1,'burning pig','2020-04-02 08:22:57','欢迎留言哦');
  insert into message values(null,'burning pig','2020-04-02 08:24:48','等待着你们的接受指点与批评呀');
