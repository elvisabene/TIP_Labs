
export interface Quote {
  Price: number,
  Type: string,
  Open: number,
  Volume: number,
  Value: number,
  Change: number,
}

export const quotes: Quote[] = [
  {
    Price: 39.40,
    Type: 'BSE',
    Open: 40.15,
    Volume: 14.946,
    Value: 592.574,
    Change: -2.23,
  },
  {
    Price: 39.50,
    Type: 'NSE',
    Open: 40.60,
    Volume: 63.016,
    Value: 2.500,
    Change: -1.74
  },
  {
    Price: 37.34,
    Type: 'LSE',
    Open: 45.67,
    Volume: 56.498,
    Value: 4.271,
    Change: +2.41
  },
  {
    Price: 41.70,
    Type: 'NSE',
    Open: 47.98,
    Volume: 47.208,
    Value: 4.813,
    Change: +0.58
  }
]
