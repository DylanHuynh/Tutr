from flask import Flask, request, url_for, jsonify, Response, redirect, render_template
import neo

app = Flask(__name__)

@app.route('/')
def index():
    return '<h1>yeet</h1>'
@app.route('/col_header', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        return jsonify(neo.get_column_headers())
    else:
        return jsonify(neo.get_column_headers())




@app.route('/inactive_requests',methods=['GET','POST'])
def inactive_requests():
    if request.method == 'GET':
        response = neo.get_inactive_tutee_data()
        return jsonify(response)

@app.route('/column_headers',methods=['GET','POST'])
def column_headers():
    if request.method == 'GET':
        response = neo.get_inactive_tutee_data()
        return jsonify(response)



@app.route('/active_requests',methods=['GET','POST'])
def active_requests():
    if request.method == 'GET':
        response = neo.get_active_tutee_data()
        return jsonify(response)
    if  request.method == 'POST':
        return "yeet"
@app.route('/viable_tutors',methods=['GET',"POST"])
def viable_tutors():
    if request.method == 'POST':
        print(request.get_json())
        return neo.get_viable_tutors(request.get_json())

@app.route('/new_request',methods=['POST'])
def create_tutee_request():
    req = {}
    req["first_name"] = "bob"
    req["last_name"] = "jones"
    req["availability"] = ["M","T","W"]
    req["phone"] = "415-712-3746"
    req["class"] = "AP Literature"
    req["teacher"] = "Galang"
    req["free_blocks"] = [1,3,4]

    if request.method == 'POST':
        response = neo.create_tutee_request(request.get_json())
        return jsonify(response)

@app.route('/update_request',methods=['GET','POST'])
def update_request():
    if request.method == 'POST':

        response = neo.update_request(request.get_json())
        return jsonify(response)

# TODO:
# 1. Get all tutor data in correct format
# 2. Get all tutee data formatted
# 3. Return all viable tutors given a tutee
# 4. POST - send form data to create a tutee request

# @app.route('/tutee')
# class Tutee(Resource):
#     def get(self):
#         tutee_data = neo.get_tutee_data()
#     def post(self,form_data):
#         return
