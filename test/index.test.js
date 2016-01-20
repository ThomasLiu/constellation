/**
 * Created by user on 20/1/16.
 */
var constellation = require('../index');
var should = require('should');


describe('test/index.test.js', function () {
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
    it('should equal 魔羯座 when n === date Date("2016/01/19")', function () {
        var date1 = new Date('2016/01/19');
        constellation.getText(date1).should.equal('魔羯座');
    });
    it('should equal 魔羯座 when n === date Date("2016/01/01")', function () {
        var date2 = new Date('2016/01/01');
        constellation.getText(date2).should.equal('魔羯座');
    });
    it('should equal 水瓶座 when n === date Date("2016/01/22")', function () {
        var date3 = new Date('2016/01/22');
        constellation.getText(date3).should.equal('水瓶座');
    });
    it('should equal 双鱼座 when n === date Date("2016/02/22")', function () {
        var date4 = new Date('2016/02/22');
        constellation.getText(date4).should.equal('双鱼座');
    });
    it('should equal 白羊座 when n === date Date("2016/03/22")', function () {
        var date5 = new Date('2016/03/22');
        constellation.getText(date5).should.equal('白羊座');
    });
    it('should equal 金牛座 when n === date Date("2016/04/22")', function () {
        var date6 = new Date('2016/04/22');
        constellation.getText(date6).should.equal('金牛座');
    });
    it('should equal 双子座 when n === date Date("2016/05/22")', function () {
        var date7 = new Date('2016/05/22');
        constellation.getText(date7).should.equal('双子座');
    });
    it('should equal 巨蟹座 when n === date Date("2016/06/22")', function () {
        var date8 = new Date('2016/06/22');
        constellation.getText(date8).should.equal('巨蟹座');
    });
    it('should equal 狮子座 when n === date Date("2016/07/23")', function () {
        var date9 = new Date('2016/07/23');
        constellation.getText(date9).should.equal('狮子座');
    });
    it('should equal 处女座 when n === date Date("2016/08/23")', function () {
        var date10 = new Date('2016/08/23');
        constellation.getText(date10).should.equal('处女座');
    });
    it('should equal 天秤座 when n === date Date("2016/09/23")', function () {
        var date11 = new Date('2016/09/23');
        constellation.getText(date11).should.equal('天秤座');
    });
    it('should equal 天蝎座 when n === date Date("2016/10/24")', function () {
        var date12 = new Date('2016/10/24');
        constellation.getText(date12).should.equal('天蝎座');
    });
    it('should equal 射手座 when n === date Date("2016/11/23")', function () {
        var date13 = new Date('2016/11/23');
        constellation.getText(date13).should.equal('射手座');
    });
});


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
