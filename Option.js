// abstract class
const Option = (function () {                                        // Option class
    function Option() { }
    Option.prototype.add = function () {                             // abstract method
        console.log('옵션 추가를 위한 추상클래스');
    }
    return Option;
})();

// forOption -> Option clone
const forOption = new Option();

// BaseFunction class ( 악기 기본 옵션 )
const GuitarBasic = (function () {                                  // GuitarBasic class
    function GuitarBasic() { }                                      // 기타 필수 옵션 정의
    GuitarBasic.prototype.strings = 6;                              // 현
    GuitarBasic.prototype.bridgePin = 6;                            // 줄 고정
    GuitarBasic.prototype.tuningPegs = 6;                           // 튜너
    GuitarBasic.prototype.__proto__ = forOption.__proto__;          // GuitarBasic -> Option clone
    GuitarBasic.prototype.add = function () {                       // add 메소드 재정의
        console.log('기본 기타 기능');
    }
    return GuitarBasic;
})();
const PianoBasic = (function () {                                   // PianoBasic class
    function PianoBasic() { }                                       // 피아노 필수 옵션 정의
    PianoBasic.prototype.softPedal = 1;                             // 소리를 조금 작게 내는 페달
    PianoBasic.prototype.sostenutoPedal = 1;                        // 소리를 아주 작게 내는 페달
    PianoBasic.prototype.damperPedal = 1;                           // 소리가 울리도록하는 페달
    PianoBasic.prototype.__proto__ = forOption.__proto__;           // PianoBasic -> Option clone
    PianoBasic.prototype.add = function () {                        // add 메소드 재정의
        console.log('기본 피아노 기능');
    }
    return PianoBasic;
})();
const DrumBasic = (function () {                                    // DrumBasic class
    function DrumBasic() { }                                        // 드럼 필수 옵션 정의
    DrumBasic.prototype.kick = 1;                                   // 킥        <-    드럼기본구성
    DrumBasic.prototype.hiat = 1;                                   // 하이엣     
    DrumBasic.prototype.snare = 1;                                  // 스네어     
    DrumBasic.prototype.cymbal = 2;                                 // 심볼       
    DrumBasic.prototype.Tomtom = 2;                                 // 탐탐       
    DrumBasic.prototype.__proto__ = forOption.__proto__;            // DrumBasic -> Option clone
    DrumBasic.prototype.add = function () {                         // add 메소드 재정의
        console.log('기본 드럼 기능');
    }
    return DrumBasic;
})();
const SaxophoneBasic = (function () {                               // SaxophoneBasic class
    function SaxophoneBasic() { }                                   // 색소폰 필수 옵션 정의
    SaxophoneBasic.prototype.body = 1;                              // 색소폰 몸통
    SaxophoneBasic.prototype.neck = 1;                              // 색소폰 연결부분
    SaxophoneBasic.prototype.mouthpiece = 1;                        // 바람 불어 넣는 부는 곳
    SaxophoneBasic.prototype.lead = 1;                              // 바람이 들어가게 해주는 도구
    SaxophoneBasic.prototype.__proto__ = forOption.__proto__;       // SaxophoneBasic -> Option clone
    SaxophoneBasic.prototype.add = function () {                    // add 메소드 재정의
        console.log('색소폰 베이스 기능');
    }
    return SaxophoneBasic;
})();

// abstract class
const OptionAddition = (function () {                               // AddOption
    function OptionAddition(addOption) {
        this.addOption = addOption;                                 // addOption 정의
    }
    OptionAddition.prototype.__proto__ = forOption.__proto__;       // OptionAddition -> Option clone
    OptionAddition.prototype.add = function () {
        this.addOption.add();                                       // 내부 addOption 객체의 add 메소드 접근
    }
    return OptionAddition;
})();

// 옵션 추가 class
const Pick = (function () {                                         // Pick class
    function Pick(addOption) {
        this.addOption = addOption;                                 // addOption 정의
    }
    Pick.prototype = new OptionAddition();                          // Pick -> OptionAddition clone
    Pick.prototype.constructor = Pick
    Pick.prototype.price = 3000;
    Pick.prototype.add = function () {                              // add 메소드 재정의
        this.addOption.add();                                       // 인자로 넘겨받은 객체의 add 메소드 접근
        this.addpick();                                             // 옵션 추가 기능
    }
    Pick.prototype.addpick = function () {                          // addpick method
        console.log(`피크 추가시 가격은 + ${this.price}원 입니다.`);
    }
    return Pick;
})();
const AMP = (function () {                                          // AMP class
    function AMP(addOption) {
        this.addOption = addOption;                                 // addOption 정의
    }
    AMP.prototype = new OptionAddition();                           // AMP -> OptionAddition clone
    AMP.prototype.constructor = AMP
    AMP.prototype.price = 50000;
    AMP.prototype.add = function () {                               // add 메소드 재정의
        this.addOption.add();                                       // 인자로 넘겨받은 객체의 add 메소드 접근
        this.addAMP();                                              // 옵션 추가 기능
    }
    AMP.prototype.addAMP = function () {                            // addAMP method
        console.log(`앰프 추가시 가격은 + ${this.price}원 입니다.`);
    }
    return AMP;
})();
const Stand = (function () {                                        // Stand class
    function Stand(addOption) {
        this.addOption = addOption;                                 // addOption 정의
    }
    Stand.prototype = new OptionAddition();                         // Stand -> OptionAddition clone
    Stand.prototype.constructor = Stand
    Stand.prototype.add = function () {                             // add 메소드 재정의
        this.addOption.add();                                       // 인자로 넘겨받은 객체의 add 메소드 접근
        this.addStand();                                            // 옵션 추가 기능
    }
    Stand.prototype.addStand = function () {                        // addStand method
        console.log('피아노 스탠드를 추가합니다.');
    }
    return Stand;
})();
const HeadSet = (function () {                                      // HeadSet class
    function HeadSet(addOption) {
        this.addOption = addOption;                                 // addOption 정의
    }
    HeadSet.prototype = new OptionAddition();                       // HeadSet -> OptionAddition clone
    HeadSet.prototype.constructor = HeadSet
    HeadSet.prototype.add = function () {                           // add 메소드 재정의
        this.addOption.add();                                       // 인자로 넘겨받은 객체의 add 메소드 접근
        this.addHeadSet();                                          // 옵션 추가 기능
    }
    HeadSet.prototype.addHeadSet = function () {                    // addHeadSet method
        console.log('헤드셋을 추가합니다.');
    }
    return HeadSet;
})();
const Hiat = (function () {                                         // Hiat class
    function Hiat(addOption) {
        this.addOption = addOption;                                 // addOption 정의
    }
    Hiat.prototype = new OptionAddition();                          // Hiat -> OptionAddition clone
    Hiat.prototype.constructor = Hiat
    Hiat.prototype.add = function () {                              // add 메소드 재정의
        this.addOption.add();                                       // 인자로 넘겨받은 객체의 add 메소드 접근
        this.addHiat();                                             // 옵션 추가 기능
    }
    Hiat.prototype.addHiat = function () {                          // addHiat method
        console.log('기본 구성에서 hiat을 하나 더 추가합니다.');
    }
    return Hiat;
})();
const Kick = (function () {                                         // Kick class
    function Kick(addOption) {
        this.addOption = addOption;                                 // addOption 정의
    }
    Kick.prototype = new OptionAddition();                          // Kick -> OptionAddition clone
    Kick.prototype.constructor = Kick
    Kick.prototype.add = function () {                              // add 메소드 재정의
        this.addOption.add();                                       // 인자로 넘겨받은 객체의 add 메소드 접근
        this.addKick();                                             // 옵션 추가 기능
    }
    Kick.prototype.addKick = function () {                          // addKick method
        console.log('기본 구성에서 kick을 하나 더 추가합니다.');
    }
    return Kick;
})();
const NeckStrap = (function () {                                    // NeckStrap class
    function NeckStrap(addOption) {
        this.addOption = addOption;                                 // addOption 정의
    }
    NeckStrap.prototype = new OptionAddition();                     // NeckStrap -> OptionAddition clone
    NeckStrap.prototype.constructor = NeckStrap
    NeckStrap.prototype.add = function () {                         // add 메소드 재정의
        this.addOption.add();                                       // 인자로 넘겨받은 객체의 add 메소드 접근
        this.addNeckStrap();                                        // 옵션 추가 기능
    }
    NeckStrap.prototype.addNeckStrap = function () {                // addNeckStrap method
        console.log('색소폰 전용 목에 거는 밴드를 추가합니다.');
    }
    return NeckStrap;
})();
const ThumbPad = (function () {                                     // ThumbPad class
    function ThumbPad(addOption) {
        this.addOption = addOption;                                 // addOption 정의
    }
    ThumbPad.prototype = new OptionAddition();                      // ThumbPad -> OptionAddition clone
    ThumbPad.prototype.constructor = ThumbPad
    ThumbPad.prototype.add = function () {                          // add 메소드 재정의
        this.addOption.add();                                       // 인자로 넘겨받은 객체의 add 메소드 접근
        this.addThumbPad();                                         // 옵션 추가 기능
    }
    ThumbPad.prototype.addThumbPad = function () {                  // addThumbPad method
        console.log('엄지 손가락 보호 패드를 추가합니다.');
    }
    return ThumbPad;
})();

module.exports = {
    GuitarBasic, PianoBasic, DrumBasic, SaxophoneBasic,
    OptionAddition, Pick, AMP, HeadSet, Stand, Hiat, Kick, NeckStrap, ThumbPad
};