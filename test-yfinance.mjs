import yahooFinance from 'yahoo-finance2';

async function test() {
    try {
        const yf = new yahooFinance();
        const quote = await yf.quote('^NSEI');
        console.log('Nifty 50 Price:', quote.regularMarketPrice);
        console.log('Nifty 50 Change:', quote.regularMarketChangePercent);
    } catch (e) {
        console.error('Error:', e);
    }
}

test();
