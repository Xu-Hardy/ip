from flask import Flask, jsonify
import requests

app = Flask(__name__)


def amazon_ip():
    response = requests.get("https://checkip.amazonaws.com/")
    print(response)
    return response.text.strip()


def speedtest():
    response = requests.get("https://api-v3.speedtest.cn/ip")
    return response.json()


def ip_com():
    response = requests.get("http://ip-api.com/json/")
    return response.json()


def ip_cn():
    response = requests.get("https://ip.cn/api/index?type=0")
    return response.json()


@app.route('/')
def hello_world():  # put application's code here
    ip = {'amzn': amazon_ip(), 'cn': ip_cn(), 'speedtest': speedtest(), 'ipcom': ip_com()}
    # print(ip['cn'])

    return jsonify(ip)


@app.route('/a')
def xx():
    return "xxx"


if __name__ == '__main__':
    app.run(host="0.0.0.0")
