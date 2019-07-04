// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let H = 50, Q=25, D=10, N=5, P=1;
    let sum = currency;

    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else if (currency < 0) {
        return {};
    }

    let object;

    object = {};
    let halfs = Math.floor(sum / H);
    if (halfs > 0) {
        object.H = halfs;
        sum -= object.H * H;
    }

    let quaters = Math.floor(sum / Q);
    if (quaters > 0) {
        object.Q = quaters;
        sum -= object.Q * Q;
    }

    let dimes = Math.floor(sum / D);
    if (dimes) {
        object.D = dimes;
        sum -= object.D * D;
    }


    let nickels = Math.floor(sum / N);
    if (nickels > 0) {
        object.N = nickels;
        sum -= object.N * N;
    }

    let pennies = Math.floor(sum / P);
    if (pennies > 0) {
        object.P = pennies;
        sum -= object.P * P;
    }

    return object;
}
