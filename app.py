from flask import Flask, render_template, request, jsonify
from explain import get_ai_explanation

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/virtual-lab")
def virtual_lab():
    return render_template("lab.html")

@app.route("/explain", methods=["POST"])
def explain():
    data = request.get_json()
    topic = data.get("topic", "")
    explanation = get_ai_explanation(topic)
    return jsonify({"explanation": explanation})

if __name__ == "__main__":
    app.run(debug=True)
