from py2neo import Graph
graph = Graph()
def get_active_tutee_data():
    tutee_data_query = '''
        MATCH (req:Request {status:"active"})
        RETURN req
    '''
    tutee_data = graph.run(tutee_data_query).data()
    return tutee_data

def create_tutee_request(req):
    tutee_data_query = '''
        CREATE (req:Request {status:"unfulfilled", first_name: $first_name, last_name=$last_name, availability=$availability, phone=$phone, subject=$subject, teacher=$teacher, blocks=$blocks} })
        RETURN req.first_name + " " + req.last_name
    '''
    tutee_data = graph.run(tutee_data_query, first_name=req.first_name, last_name=req.last_name, availability=req.availability, phone=req.phone, course=req.course, teacher=req.teacher, blocks=req.blocks ).data()
    return tutee_data

def get_viable_tutors(id):
    viable_tutors_query = '''
        MATCH (o:Tutor),(req:Request {id: $id})
        WHERE req.course IN o.courses
        AND size([x in req.blocks WHERE x in o.blocks]) > 0
        AND size([x in req.availability WHERE x in o.availability]) > 0
        RETURN o, [x in req.blocks WHERE x in o.blocks], [x in req.availability WHERE x in o.availability]
    '''
    viable_tutors = graph.run(viable_tutors_query, id=id)
    return viable_tutors
def make_match(req_id, tutor_id):
    match_tutors_query = '''
        MATCH (o:Tutor {id: $tutor_id}),(req:Request {id: $req_id})
        CREATE (o)-[t:TUTORS]->(req)
        RETURN t
    '''
    made_match = graph.run(match_tutors_query, id=id)
    return "success"
