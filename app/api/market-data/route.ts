import { NextResponse } from 'next/server';
import yahooFinance from 'yahoo-finance2';

// Ensure we instantiate the class if that's how the library is behaving in this environment
const yf = new yahooFinance();

export async function GET() {
    try {
        const quote = await yf.quote('^NSEI');

        return NextResponse.json({
            symbol: quote.symbol,
            price: quote.regularMarketPrice,
            change: quote.regularMarketChange,
            changePercent: quote.regularMarketChangePercent,
            timestamp: Date.now(),
        });
    } catch (error) {
        console.error('Error fetching market data:', error);
        return NextResponse.json(
            { error: 'Failed to fetch market data' },
            { status: 500 }
        );
    }
}
