from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html", active_page="home")


@app.route("/bases")
def bases():
    return render_template("bases.html", active_page="bases")


@app.route("/swaps")
def swaps():
    return render_template("swaps.html", active_page="swaps")

@app.route("/product")
def product():
    return render_template("product.html", active_page="bases")


if __name__ == "__main__":
    app.run(debug=True)
