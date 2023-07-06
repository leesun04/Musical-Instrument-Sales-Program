const { System, ForPersonalPurchase, ForGroupPurchase, ForCancellation, ForTermination } = require('./Progress');

console.log('\n악기 둘러보기 ( -1 입력시 프로그램 종료 )');
console.log('1. 개인 악기 구매  |  2. 악기 패키지 구매 (밴드 or 오케스트라)  |  0. 다시 악기 선택\n');
 
// ---------------- 개인 악기 구매 시스템 -----------------------
console.log('\n---------------- 개인 악기 구매 시스템 -----------------------');
System.setProgress(ForPersonalPurchase);
System.excute();

// ---------------- 단체 악기 구매 시스템 -----------------------
console.log('\n---------------- 단체 악기 구매 시스템 -----------------------\n');
System.setProgress(ForGroupPurchase);
System.excute();

// ---------------- 시스템 취소 (초기화) -----------------------
console.log('\n---------------- 시스템 취소 (초기화) -----------------------');
System.setProgress(ForCancellation);
System.excute();;

// ---------------- 악기 구매 시스템 종료 -----------------------
console.log('\n---------------- 악기 구매 시스템 종료 -----------------------');
System.setProgress(ForTermination);
System.excute();