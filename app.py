from flask import Flask, jsonify, request, abort

app = Flask(__name__)

# FAQs data stored in-memory (you can store this in a database later)
faqs = [
    {'id': 1, 'question': 'What is an apple?', 'answer': 'An apple is a sweet fruit.'},
    {'id': 2, 'question': 'What is a banana?', 'answer': 'A banana is a long yellow fruit.'}
]

# Get all FAQs
@app.route('/faqs', methods=['GET'])
def get_faqs():
    return jsonify(faqs), 200

# Get a single FAQ by id
@app.route('/faqs/<int:id>', methods=['GET'])
def get_faq(id):
    faq = next((item for item in faqs if item['id'] == id), None)
    if faq:
        return jsonify(faq), 200
    else:
        return abort(404)

# Create a new FAQ
@app.route('/faqs', methods=['POST'])
def create_faq():
    data = request.get_json()
    faq = {
        'id': len(faqs) + 1,
        'question': data['question'],
        'answer': data['answer']
    }
    faqs.append(faq)
    return jsonify(faq), 201

# Update an existing FAQ
@app.route('/faqs/<int:id>', methods=['PUT'])
def update_faq(id):
    data = request.get_json()
    faq = next((item for item in faqs if item['id'] == id), None)
    if faq:
        faq['question'] = data['question']
        faq['answer'] = data['answer']
        return jsonify(faq), 200
    else:
        return abort(404)

# Delete a FAQ
@app.route('/faqs/<int:id>', methods=['DELETE'])
def delete_faq(id):
    faq = next((item for item in faqs if item['id'] == id), None)
    if faq:
        faqs.remove(faq)
        return '', 204
    else:
        return abort(404)

if __name__ == '__main__':
    app.run(debug=True)
