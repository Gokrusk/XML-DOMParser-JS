import requests

def run():

    url = "https://api.bitfinex.com/v1/pubticker/btcusd"
    response = requests.get(url)
    jsonResponse = response.json()

    print(f"La cotización actual: 1 BTC = {float(jsonResponse['last_price']):.2f} USD" +
        f"\nPromedio: {float(jsonResponse['mid']):.2f} USD" +
        f"\nVolúmen: {float(jsonResponse['volume']):.2f} BTC")

if __name__ == '__main__':
    run()