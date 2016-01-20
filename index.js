/**
 * Created by user on 20/1/16.
 */
/*!
 * constellation
 * Copyright(c) 20/1/16 Thomas Lau
 * MIT Licensed
 */


/**
 * Module dependencies.
 * @private
 */
var moment = require('moment');

moment.locale('zh-cn'); // 使用中文

exports.getText = function(date,language) {

    if(!language){
        language = 'ch';
    }
    var type = typeof date;
    var f = null;
    if(date instanceof Date || Object.prototype.toString.call(date) === '[object Date]'){
        date = moment(date);
        var str = date.format('MM.DD');
        f = parseFloat(str);
    }else if(type === 'number'){
        f = date;
    }else if(type === 'string' && !isNaN(date)){
        var str = date;
        f = parseFloat(str);
    }


    if(f){
        var i = 0;
        if(12.22 <= f || f <= 1.19){//魔羯座
            i = 0;
        }else if(1.20 <= f && f <= 2.18){//水瓶座
            i = 1;
        }else if(2.19 <= f && f <= 3.20){//双鱼座
            i = 2;
        }else if(3.21 <= f && f <= 4.19){//白羊座
            i = 3;
        }else if(4.20 <= f && f <= 5.20){//金牛座
            i = 4;
        }else if(5.21 <= f && f <= 6.21){//双子座
            i = 5;
        }else if(6.22 <= f && f <= 7.22){//巨蟹座
            i = 6;
        }else if(7.23 <= f && f <= 8.22){//狮子座
            i = 7;
        }else if(8.23 <= f && f <= 9.22){//处女座
            i = 8;
        }else if(9.23 <= f && f <= 10.23){//天秤座
            i = 9;
        }else if(10.24 <= f && f <= 11.22){//天蝎座
            i = 10;
        }else if(11.23 <= f && f <= 12.21){//射手座
            i = 11;
        }
        return languageObj[language][i];
    }else{
        if (typeof console !==  'undefined' && console.warn) {
            console.warn('date is not Date or number or string like 1.22');
        }
        return '神奇宝贝'
    }
};

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







