const { GuitarBasic, PianoBasic, DrumBasic, SaxophoneBasic } = require('./Option');

const Instrument = function () { }                                     // Instrument interface
Instrument.prototype.makeSound = function () {
    console.log('interface Instrument');
}

const IsOption = function () { }                                       // abstrack class
const NonOption = function () { }                                      // abstrack class

IsOption.prototype = new Instrument();                                 // Instrument clone
IsOption.prototype.constructor = IsOption;                             // constructor 재정의
NonOption.prototype = new Instrument();
NonOption.prototype.constructor = NonOption;

// 옵션 추가 기능이 있는 class
const Drum = function (modelName, price) {                             // Drum class                
    this.modelName = modelName || 'dw';
    this.price = price || 1000000;
}
Drum.prototype = new IsOption();                                       // IsOption clone
Drum.prototype.constructor = Drum;                                     // construtor 재정의
Drum.prototype.option = new DrumBasic();                               // 드럼 기본 기능을 복제
Drum.prototype.add = function () {                                     // 복제한 DrumBasic의 add 메소드를 호출
    this.option.add();
} 

const Guitar = function (modelName, price) {                           // Guitar class 
    this.modelName = modelName || 'yamaha';
    this.price = price || 1500000;
}
Guitar.prototype = new IsOption();                                     // IsOption clone
Guitar.prototype.constructor = Guitar;
Guitar.prototype.option = new GuitarBasic();                           // 기타 기본 기능을 복제
Guitar.prototype.add = function () {                                   // 복제한 GuitarBasic의 add 메소드를 호출
    this.option.add();
}

const Saxophone = function (modelName, price) {                        // Saxophone class 
    this.modelName = modelName || 'vandoren';
    this.price = price || 2000000;
}
Saxophone.prototype = new IsOption();                                  // IsOption clone
Saxophone.prototype.constructor = Saxophone;                           // construtor 재정의
Saxophone.prototype.option = new SaxophoneBasic();                     // 색소폰 기본 기능을 복제
Saxophone.prototype.add = function () {                                // 복제한 SaxophoneBasic의 add 메소드를 호출
    this.option.add();
}

const Piano = function (modelName, price) {                            // Piano class
    this.modelName = modelName || 'C.Bechstein';
    this.price = price || 2400000;
}
Piano.prototype = new IsOption();                                      // IsOption clone
Piano.prototype.constructor = Piano;                                   // construtor 재정의
Piano.prototype.option = new PianoBasic();                             // 피아노 기본 기능을 복제
Piano.prototype.add = function () {                                    // 복제한 PianoBasic의 add 메소드를 호출
    this.option.add();
}

//옵션 추가 기능이 없는 class
const Tambourine = function (modelName, price) {                       // Tambourine class
    this.modelName = modelName || 'Toca';
    this.price = price || 50000;
}
const Xylophone = function (modelName, price) {                        // Xylophone class
    this.modelName = modelName || 'Angel';
    this.price = price || 200000;
}
const Violin = function (modelName, price) {                           // Violin class
    this.modelName = modelName || 'Sandner';
    this.price = price || 800000;
}
const Cello = function (modelName, price) {                            // Cello class
    this.modelName = modelName || 'Romance';
    this.price = price || 1200000;
}
const Flute = function (modelName, price) {                            // Flute class
    this.modelName = modelName || 'Buffet Crampon';
    this.price = price || 1700000;
}
const Organ = function (modelName, price) {                            // Organ class
    this.modelName = modelName || 'Johannus';
    this.price = price || 20000000;
}
Tambourine.prototype = new NonOption();                                // NonOption 상속
Tambourine.prototype.constructor = Tambourine;                         // constructor 재정의
Xylophone.prototype = new NonOption();
Xylophone.prototype.constructor = Xylophone;
Violin.prototype = new NonOption();
Violin.prototype.constructor = Violin;
Cello.prototype = new NonOption();
Cello.prototype.constructor = Cello;
Flute.prototype = new NonOption();
Flute.prototype.constructor = Flute;
Organ.prototype = new NonOption();
Organ.prototype.constructor = Organ;

// ------------------ Factory Method Pattern ------------------------
const BandFactory = function () { }                                    // Factory Method

BandFactory.prototype.setPackage = function () {                       // packeg 초기화
    this.package = new Array();
}
BandFactory.prototype.createBand = function () { }                     // 객체 생성은 무조건 createGroup 함수를 통해 생성.
BandFactory.prototype.getPackage = function () {
    return this.package;                                               // packeg 반환
}
BandFactory.prototype.addPackage = function (object) {                 // packeg에 객체 push
    this.package.push(object);
}                                                                      

const forBandFactory = new BandFactory();                              // forBandFactory -> BandFactory clone

const Band = function () { }                                           // Band factory
Band.prototype.__proto__ = forBandFactory.__proto__;                   // Band -> BandFactory clone
Band.prototype.createBand = function () {                              // createBand 메소드 구현
    this.addPackage(new Guitar());
    this.addPackage(new Piano());                                      // 복제한 BandFactory의 addPackage 메소드를 통해
    this.addPackage(new Drum());                                       // 객체  추가
}

const Orchestra = function () { }                                      // Orchestra factory
Orchestra.prototype.__proto__ = forBandFactory.__proto__;              // Orchestra -> BandFactory clone
Orchestra.prototype.createBand = function () {                         // createBand 메소드 구현
    this.addPackage(new Violin());
    this.addPackage(new Cello());                                      // 복제한 BandFactory의 addPackage 메소드를 통해
    this.addPackage(new Saxophone());                                  // 객체  추가
    this.addPackage(new Piano());
}


// -------------------- Abstract Factory Pattern ------------------------                                                
const InstrumentFactory = function () { }                                               // InstrumentFactory interface

InstrumentFactory.prototype.createIsOption = function () { }                            // abstract method
InstrumentFactory.prototype.createNonOption = function () { }                           // 복제될 객체들에게 필수 오버라이딩 메소드들을 선언

const Percussion = function () { }                                                      // Percussion Factory class
Percussion.prototype = new InstrumentFactory();                                         // Percussion -> InstrumentFactory clone
Percussion.prototype.constructor = Percussion;                                          // constructor 재정의
Percussion.prototype.createIsOption = function (modelName, price) {                     // createIsOption 구현
    return new Drum(modelName, price);
}
Percussion.prototype.createNonOption = function (instrument, modelName, price) {        // createNonOption 구현
    return instrument === 'Xylophone' ? new Xylophone(modelName, price) : instrument === 'Tambourine' ? new Tambourine(modelName, price) : undefined;
}

const StringInstrument = function () { }                                                // StringInstrument Factory class
StringInstrument.prototype = new InstrumentFactory();                                   // StringInstrument -> InstrumentFactory clone
StringInstrument.prototype.constructor = StringInstrument;                              // counstructor 재정의
StringInstrument.prototype.createIsOption = function (modelName, price) {               // createIsOption 구현
    return new Guitar(modelName, price);
}
StringInstrument.prototype.createNonOption = function (instrument, modelName, price) {  // createNonOption 구현
    return instrument == 'Violin' ? new Violin(modelName, price) : instrument == 'Cello' ? new Cello(modelName, price) : undefined;
}

const WindInstrument = function () { }                                                  // WindInstrument Factory class
WindInstrument.prototype = new InstrumentFactory();                                     // WindInstrument -> InstrumentFactory clone
WindInstrument.prototype.constructor = WindInstrument;                                  // counstructor 재정의
WindInstrument.prototype.createIsOption = function (modelName, price) {                 // createIsOption 구현
    return new Saxophone(modelName, price);
}
WindInstrument.prototype.createNonOption = function (modelName, price) {                // createNonOption 구현
    return new Flute(modelName, price);
}

const KeyboardInstrument = function () { }                                              // KeyboardInstrument Factory class
KeyboardInstrument.prototype = new InstrumentFactory();                                 // KeyboardInstrument -> InstrumentFactory clone
KeyboardInstrument.prototype.constructor = KeyboardInstrument;                          // counstructor 재정의
KeyboardInstrument.prototype.createIsOption = function (modelName, price) {             // createIsOption 구현
    return new Organ(modelName, price);
}
KeyboardInstrument.prototype.createNonOption = function (modelName, price) {            // createNonOption 구현
    return new Piano(modelName, price);
}

module.exports = {
    Instrument, IsOption, NonOption, Drum, Guitar, Guitar, Saxophone, Piano, Tambourine, Xylophone, Violin,
    Cello, Flute, Organ, BandFactory, Band, Orchestra, InstrumentFactory, Percussion, StringInstrument,
    WindInstrument, KeyboardInstrument
};

