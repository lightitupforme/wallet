import * as datetime from './datetime';
import * as currencies from './currencies';
import * as fromExchange from './exchange';

export const timestampToDateTime = timstamp => datetime.timestampToDateTime(timstamp);

export const numberToCurrency = number => currencies.numberToCurrency(number);

export const calculateExchangeTotal = (amount, exchange) =>
  fromExchange.calculateExchangeTotal(amount, exchange);
