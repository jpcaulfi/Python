function positioner(a,b,c,d,e) {

    var riskusd = 50.00;
    var base = a.substring(0,3);
    var quote = a.substring(3,a.length);

    var ro = 100;

    if (quote == 'USD') {
        var exchange = 1.00;
        if (base == 'XAG') {
            var stpips = Math.abs(e-c)*10000;
            var lot = Math.round(((((riskusd*exchange)/10)/1/stpips) + Number.EPSILON) * ro) / ro
        } else if (base == 'XAU') {
            var stpips = Math.abs(e-c)*100;
            var lot = Math.round(((((riskusd*exchange)/10)/100/stpips) + Number.EPSILON) * ro) / ro;
        } else if (base == 'BTC') {
            var stpips = Math.abs(e-c)*100;
            var lot = Math.round(((((riskusd*exchange)/10)/100/stpips) + Number.EPSILON) * ro) / ro;
        } else if (base == 'BCH') {
            var stpips = Math.abs(e-c)*100;
            var lot = Math.round(((((riskusd*exchange)/10)/100/stpips) + Number.EPSILON) * ro) / ro;
        } else if (base == 'ETH') {
            var stpips = Math.abs(e-c)*100;
            var lot = Math.round(((((riskusd*exchange)/10)/100/stpips) + Number.EPSILON) * ro) / ro;
        } else if (base == 'DSH') {
            var stpips = Math.abs(e-c)*100;
            var lot = Math.round(((((riskusd*exchange)/10)/100/stpips) + Number.EPSILON) * ro) / ro;
        } else if (base == 'LTC') {
            var stpips = Math.abs(e-c)*100;
            var lot = Math.round(((((riskusd*exchange)/10)/100/stpips) + Number.EPSILON) * ro) / ro;
        } else if (base == 'XMR') {
            var stpips = Math.abs(e-c)*100;
            var lot = Math.round(((((riskusd*exchange)/10)/100/stpips) + Number.EPSILON) * ro) / ro;
        } else if (base == 'ZEC') {
            var stpips = Math.abs(e-c)*100;
            var lot = Math.round(((((riskusd*exchange)/10)/100/stpips) + Number.EPSILON) * ro) / ro;
        } else if (base == 'ETC') {
            var stpips = Math.abs(e-c)*1000;
            var lot = Math.round(((((riskusd*exchange)/10)/10/stpips) + Number.EPSILON) * ro) / ro;
        } else if (base == 'XRP') {
            var stpips = Math.abs(e-c)*10000;
            var lot = Math.round(((((riskusd*exchange)/10)/1/stpips) + Number.EPSILON) * ro) / ro;
        } else {
            var stpips = Math.abs(e-c)*10000;
            var lot = Math.round(((((riskusd*exchange)/10)/1/stpips) + Number.EPSILON) * ro) / ro;
        }
    } else if (quote == 'USDt') {
        var exchange = 1.00;
        if (base == 'BTC') {
            var stpips = Math.abs(e-c)*100;
            var lot = Math.round(((((riskusd*exchange)/10)/100/stpips) + Number.EPSILON) * ro) / ro;
        }
    } else if (quote == 'AUD') {
        var exchange = 1/0.69524; // META PORT
        var stpips = Math.abs(e-c)*10000;
        var lot = Math.round(((((riskusd*exchange)/10)/1/stpips) + Number.EPSILON) * ro) / ro;
    } else if (quote == 'CAD') {
        var exchange = 1.35133; // META PORT
        var stpips = Math.abs(e-c)*10000;
        var lot = Math.round(((((riskusd*exchange)/10)/1/stpips) + Number.EPSILON) * ro) / ro;
    } else if (quote == 'CHF') {
        var exchange = 0.94396; // META PORT
        var stpips = Math.abs(e-c)*10000;
        var lot = Math.round(((((riskusd*exchange)/10)/1/stpips) + Number.EPSILON) * ro) / ro;
    } else if (quote == 'EUR') {
        var exchange = 1/1.13261; // META PORT
        var stpips = Math.abs(e-c)*10000;
        var lot = Math.round(((((riskusd*exchange)/10)/1/stpips) + Number.EPSILON) * ro) / ro;
    } else if (quote == 'GBP') {
        var exchange = 1.25277; // META PORT
        var stpips = Math.abs(e-c)*10000;
        var lot = Math.round(((((riskusd*exchange)/10)/1/stpips) + Number.EPSILON) * ro) / ro;
    } else if (quote == 'JPY') {
        var exchange = 106.456; // META PORT
        var stpips = Math.abs(e-c)*100;
        var lot = Math.round(((((riskusd*exchange)/10)/100/stpips) + Number.EPSILON) * ro) / ro;
    } else if (quote == 'NZD') {
        var exchange = 1/0.65151; // META PORT
        var stpips = Math.abs(e-c)*10000;
        var lot = Math.round(((((riskusd*exchange)/10)/1/stpips) + Number.EPSILON) * ro) / ro;
    } else if (quote == 'NOK') {
        var exchange = 9.4695; // META PORT
        var stpips = Math.abs(e-c)*1000;
        var lot = Math.round(((((riskusd*exchange)/10)/10/stpips) + Number.EPSILON) * ro) / ro;
    } else if (quote == 'SEK') {
        var exchange = 9.2713; // META PORT
        var stpips = Math.abs(e-c)*1000;
        var lot = Math.round(((((riskusd*exchange)/10)/10/stpips) + Number.EPSILON) * ro) / ro;
    } else if (quote == 'SGD') {
        var exchange = 1.38959; // META PORT
        var stpips = Math.abs(e-c)*10000;
        var lot = Math.round(((((riskusd*exchange)/10)/1/stpips) + Number.EPSILON) * ro) / ro;
    } else if (quote == 'DKK') {
        var exchange = 6.5801; // META PORT
        var stpips = Math.abs(e-c)*1000;
        var lot = Math.round(((((riskusd*exchange)/10)/10/stpips) + Number.EPSILON) * ro) / ro;
    } else if (quote == 'MXN') {
        var exchange = 22.4598; // META PORT
        var stpips = Math.abs(e-c)*1000;
        var lot = Math.round(((((riskusd*exchange)/10)/10/stpips) + Number.EPSILON) * ro) / ro;
    } else if (quote == 'entCrude') {
        var exchange = 1.00
        var stpips = Math.abs(e-c)*10;
        var lot = Math.round(((((riskusd*exchange)/10)/1000/stpips) + Number.EPSILON) * ro) / ro;
    } else if (quote == 'ICrude') {
        var exchange = 1.00
        var stpips = Math.abs(e-c)*10;
        var lot = Math.round(((((riskusd*exchange)/10)/1000/stpips) + Number.EPSILON) * ro) / ro;
    } else if (quote == 'TRY') {
        var exchange = 6.84656; // META PORT
        var stpips = Math.abs(e-c)*10000;
        var lot = Math.round(((((riskusd*exchange)/10)/1/stpips) + Number.EPSILON) * ro) / ro;
    }

    return [a,base,quote,b,c,d,e,stpips,lot];

}

function levelgrab(a) {

    var levels = Array.from({length: 400}, () => Math.floor(Math.random() * 400)); // META PORT
    var SCM = 0;
    for(var i = 0; i < levels.length; i++) {
        SCM += levels[i];
    }
    var SCM = SCM / levels.length;

    var lmaxes = [];
    for (var i = 1; i < levels.length - 1; ++i) {
        if (levels[i-1] < levels[i] && levels[i] > levels[i+1]) {
            lmaxes.push(levels[i]);
        }
    }
    var lmins = [];
    for (var i = 1; i < levels.length - 1; ++i) {
        if (levels[i-1] > levels[i] && levels[i] < levels[i+1]) {
            lmins.push(levels[i]);
        }
    } 

    var LVL = lmaxes.concat(lmins);
    var B = [];
    for (var i = 0; i < LVL.length; ++i) {
        for (var j = 0; j < LVL.length; ++j) {
            B.push(Math.abs(LVL[i]-LVL[j]));
        }
    }

    

    return LVL;
}
// Come back to the levelgrab


function brutus(pair,levslist) {

    var purp = [];
    for (var x = 0; x < pair.length; ++x){
        var currency = pair.substring(3,pair.length);
        var Fx1 = [];
        var g = 0;
        for (var f = 0; f < 200; ++f) {
            Fx1.push(g);
            g += 1;
        }
        var yclose = []; // META PORT
        var g = 0;
        for (var f = 0; f < Fx1.length; ++f) {
            yclose.push(Math.floor(Math.random() * 6) + 1);
            g += 1;
        }
        var Fy1 = []
        if (currency == 'JPY') {
            for (var f = 0; f < yclose.length; ++f) {
                Fy1.push(yclose[f]*100);
            }
        } else {
            for (var f = 0; f < yclose.length; ++f) {
                Fy1.push(yclose[f]*10000);
            }
        }
        var wholeslope = 0
        for (var f = 1; f < Fy1.length; ++f) {
            wholeslope += (Fy1[f]-Fy1[f-1])/(Fx1[f]-Fx1[f-1]);
        }
        var wholeslope = wholeslope/Fy1.length;
        var scopetheta = Math.abs((Math.atanh(wholeslope)* 180 / Math.PI));

        if (scopetheta > 5) {
            
        }
        


        return [wholeslope,scopetheta];
    }
}


var pairings = ['AUDJPY','AUDUSD','GBPUSD','EURJPY','USDNOK','USDMXN','BTCUSDt','.BrentCrude'];
var positions = ['LONG','LONG','SHORT','LONG','SHORT','SHORT','LONG','LONG'];
var entries = [74.044,0.69168,1.24906,119.999,9.60371,22.47435,9643.63,43.00];
var takeprofits = [74.288,0.69401,1.24603,120.268,9.55856,22.39693,9722.03,43.43];
var stoplosses = [73.800,0.68935,1.25209,119.730,9.64886,22.55177,9565.23,42.57];
var x;

for (x in pairings) {
    let q = positioner(pairings[x],positions[x],entries[x],takeprofits[x],stoplosses[x]);
    console.log(q);
    let r = levelgrab(pairings[x]);
    console.log(r);
    let s = brutus(pairings[x],r)
    console.log(s);
}