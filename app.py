from flask import Flask, render_template, request, jsonify
from explain import get_ai_explanation
import os

# Step 3: Explicitly specify the template and static folders
app = Flask(__name__, template_folder="templates", static_folder="static")

# Step 4: Print current working directory to help with Render deployment debugging
print("Current working directory:", os.getcwd())
print("Contents of current directory:", os.listdir())
if os.path.exists("templates"):
    print("Templates folder contents:", os.listdir("templates"))
else:
    print("Templates folder not found!")

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
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)

