const { GuitarBasic, PianoBasic, DrumBasic, SaxophoneBasic,
    OptionAddition, Pick, AMP, HeadSet, Stand, Hiat, Kick, NeckStrap, ThumbPad } = require('./Option');
const { Instrument, IsOption, NonOption, Drum, Guitar, Saxophone, Piano, Tambourine, Xylophone, Violin,
    Cello, Flute, Organ, BandFactory, Band, Orchestra, InstrumentFactory, Percussion, StringInstrument,
    WindInstrument, KeyboardInstrument } = require('./Factory');

const martin_money = 1800000;
const yamaha_money = 1500000;

const Progress = (function () {                                         // Progress class
    function Progress() {                                               
        this.progress = null;
    };
    Progress.prototype.setProgress = function (progress) {              // Algorithm setting
        this.progress = progress;
    };
    Progress.prototype.excute = function () {                           // Algorithm excute
        this.progress.excute();
    };
    return Progress;
})();

const Cancellation = (function () {                                     // Termination class
    function Cancellation() { }
    Cancellation.prototype.excute = function () {                       // Termination Algorithm
        console.log('고객이 0을 입력');
        console.log('진행사항 취소(프로그램 초기화)\n');

        console.log('\n악기 둘러보기 ( -1 입력시 프로그램 종료 )');
        console.log('1. 개인 악기 구매  |  2. 악기 패키지 구매 (밴드 or 오케스트라)  |  0. 다시 악기 선택\n');
    };
    return Cancellation;
})();

const Termination = (function () {                                      // Termination class
    function Termination() { }
    Termination.prototype.excute = function () {                        // Termination Algorithm
        console.log('고객이 -1을 입력\n');
        console.log('프로그램 종료.');
    }
    return Termination;
})();

const PersonalPurchase = (function () {                                 // PersonalPurchase class
    function PersonalPurchase() { }
    PersonalPurchase.prototype.excute = function () {                   // PersonalPurchase Algorithm 구현
        console.log('고객이 1번을 선택했다.\n');

        console.log('1. 타악기  |  2. 현악기  |  3. 관악기  |  4. 건반 악기  |  0. 다시 악기 선택\n');

        console.log('고객이 2번을 선택했다.\n');

        const foruser = new StringInstrument();                         // foruser -> StringInstrument clone

        console.log('1. 기타  |  2. 바이올린  |  3. 첼로  |  0. 다시 악기 선택\n');

        console.log('고객이 1번을 선택했다.\n');

        console.log('1. 마틴 기타 2. 야마흐 기타 0. 다시 악기 선택\n');

        console.log('고객이 1번을 선택했다.\n');

        console.log(`마틴 기타의 가격은 ${martin_money}입니다.\n`);

        console.log('마틴 기타는 옵션 추가가 가능합니다.');
        console.log('1. 피크 추가  |  2. 앰프 추가  |  3. 피크+앰프 추가  |  4. 추가 안함  |  0. 다시 악기 선택\n');

        console.log('고객이 3번을 선택했다.\n');

        const user = foruser.createIsOption('Martin', martin_money);
        const UserandOption = new AMP(new Pick(user));                  // decorator 를 통해 Option 추가
        UserandOption.add();
        console.log(`최종 사용할 악기의 정보입니다.`);
        console.log(UserandOption);
        const price = UserandOption.price + UserandOption.addOption.price + martin_money;
        console.log(`\n최종 가격은 ${price}원 입니다.\n`);
    };
    return PersonalPurchase;
})();

const GroupPurchase = (function () {                                    // GroupPurchase class
    function GroupPurchase() { }
    GroupPurchase.prototype.excute = function () {                      // GroupPurchase Algorithm 구현
        console.log('고객이 2번을 선택했다.\n');

        console.log('패키지는 두가지 종류가 있습니다.');
        console.log('1. 기본 밴드를 위한 악기 구성 패키지  |  2. 오케스트라를 위한 악기 구성 패키지  |  0. 다시 악기 선택\n');

        console.log('고객이 2번을 선택했다.\n');


        const user = new Orchestra();                                   // user -> Orchestra clone
        user.setPackage();                                              // package 배열 초기화
        user.createBand();                                              // package 객체 추가
        const userObject = user.getPackage();                           // package 객체 접근

        console.log('패키지의 구성요소에는');
        userObject.forEach(a => console.log(a));                        // 객체 출력
        console.log(`이 있습니다.\n`);

        console.log('구매하시겠습니까 ? : 입력 1  ||  구매취소 : 입력 0\n');

        console.log('고객이 1번을 입력했다.\n');


        sum = 0;
        userObject.forEach(a => sum += a.price);                        // 생성된 악기 구성 총 가격 계산

        console.log(`가격은 ${sum}입니다.\n`);
    }
    return GroupPurchase;
})();

const System = new Progress();                                          // System -> Progress clone
const ForPersonalPurchase = new PersonalPurchase();                     // ForPersonalPurchase -> PersonalPurchase clone
const ForGroupPurchase = new GroupPurchase();                           // ForGroupPurchase -> GroupPurchase clone
const ForCancellation = new Cancellation();                             // ForCancellation -> Cancellation clone
const ForTermination = new Termination();                               // ForTermination -> Termination clone

module.exports = { System, ForPersonalPurchase, ForGroupPurchase, ForCancellation, ForTermination };