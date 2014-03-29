var I18N = {
    'numberToString': function (num) {
        return ('' + num).split('')
            .map(function (c) {
                return '0123456789' [c];
            }).join('');
    },
    'tileText': function (value) {
        var text = "蛤喵咬蛤嘤嘿呵啦哦噢喔嘻呼啊唔呀呜哎哼哈";
        var log2 = function (n) {
            var ret = 0;
            while (n > 1) ret++, n >>= 1;
            return ret;
        }
        return text[log2(value)] || '';
    },
    'won': '你丫真腻害！',
    'lose': '哈哈你输了',
}