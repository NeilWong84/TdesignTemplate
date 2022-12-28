import { request } from '@/utils/request';
import type { CardListResult, ListResult } from '@/api/model/listModel';
// 枚举 API访问地址
enum Api {
  BaseList = '/get-list',
  CardList = '/get-card-list',
}

export function getList() {
  return request.get<ListResult>({
    url: Api.BaseList,
  });
}

export function getCardList() {
  return request.get<CardListResult>({
    url: Api.CardList,
  });
}
