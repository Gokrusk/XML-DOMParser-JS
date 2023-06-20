import requests

def run():

    url = "https://apisimpsons.fly.dev/api/personajes?limit=10"
    response = requests.get(url)
    jsonResponse = response.json()
    docs = jsonResponse['docs']

    a = '===================================='
    title = ' \nPERSONAJES DE LOS SIMPSONS\n'
    print(title)
    
    print(a)
    for persona in docs:
        print("Nombre: " + persona["Nombre"] + "\n" +
              "Ocupación: " + persona["Ocupacion"], end="\n")
        print(a)
           
if __name__ == '__main__':
    run()