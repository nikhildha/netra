const yahooFinance = require('yahoo-finance2').default;

async function test() {
    try {
        const quote = await yahooFinance.quote('^NSEI');
        console.log('Nifty 50 Price:', quote);
    } catch (e) {
        console.error('Error:', e);
    }
}

test();
