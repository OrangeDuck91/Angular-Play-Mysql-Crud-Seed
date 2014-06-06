# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table besoin (
  id                        bigint auto_increment not null,
  client_id                 bigint,
  description               varchar(255),
  constraint pk_besoin primary key (id))
;




# --- !Downs

SET FOREIGN_KEY_CHECKS=0;

drop table besoin;

SET FOREIGN_KEY_CHECKS=1;

