# constellation
change date to constellation
***

> npm i --save get-constellation

### test
```javascript
it('should equal 魔羯座 when n ===  number 12.22', function () {
        constellation.getText(12.22).should.equal('魔羯座');
    });
    it('should equal 魔羯座 when n === string 12.22', function () {
        constellation.getText('12.22').should.equal('魔羯座');
    });
    it('should equal 魔羯座 when n === date Date("2016/12/22")', function () {
        var date = new Date('2016/12/22');
        constellation.getText(date).should.equal('魔羯座');
    });
    it('should equal 神奇宝贝 when n === a', function () {

        constellation.getText('a').should.equal('神奇宝贝');
    });
```
### language
```javascript
var languageObj = {
    ch : [
        '魔羯座'//12.22-1.19
        ,'水瓶座'//1.20-2.18
        ,'双鱼座'//2.19-3.20
        ,'白羊座' //3.21-4.19
        ,'金牛座' //4.20-5.20
        ,'双子座' //5.21-6.21
        ,'巨蟹座'//6.22-7.22
        ,'狮子座'//7.23-8.22
        ,'处女座'//8.23-9.22
        ,'天秤座'//9.23-10.23
        ,'天蝎座'//10.24-11.22
        ,'射手座'//11.23-12.21
    ]
    , en : [
            'Capricorn'//12.22-1.19
            ,'Aquarius'//1.20-2.18
            ,'Pisces'//2.19-3.20
            ,'Aries' //3.21-4.19
            ,'Taurus' //4.20-5.20
            ,'Gemini' //5.21-6.21
            ,'Cancer '//6.22-7.22
            ,'Leo'//7.23-8.22
            ,'Virgo'//8.23-9.22
            ,'Libra'//9.23-10.23
            ,'Scorpio'//10.24-11.22
            ,'Sagittarius'//11.23-12.21
        ]
};
```
