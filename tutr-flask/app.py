from flask import Flask, request, url_for, jsonify, Response, redirect, render_template
import neo

app = Flask(__name__)

@app.route('/')
def index():
    return '<h1>yeet</h1>'
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        return '<h1>joemama</h1>'
    else:
        return '<h1>mamajoe</h1>'

@app.route('/active_requests',methods=['GET','POST'])
def active_requests():
    if request.method == 'GET':
        return neo.get_active_tutee_data()
    if  request.method == 'POST':
        return "yeet"
@app.route('/viable_tutors',methods=['GET'])
def viable_tutors(id):
    if request.method == 'GET':
        return neo.get_viable_tutors(id)


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
