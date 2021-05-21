from py2neo import Graph
graph = Graph()
def get_tutee_data():
    tutee_data_query = '''
        MATCH (req:Request {status:"active"})
        RETURN req
    '''
    tutee_data = graph.run(tutee_data_query).data()
    return tutee_data

def create_tutee_request(req):
    tutee_data_query = '''
        CREATE (req:Request {status:"unfulfilled", first_name: $first_name, last_name=$last_name, availability=$availability, phone=$phone, subject=$subject, teacher=$teacher, blocks=$blocks} })
        return req.first_name + " " + req.last_name
    '''
    tutee_data = graph.run(tutee_data_query, first_name=req.first_name, last_name=req.last_name, availability=req.availability, phone=req.phone, subject=req.subject, teacher=req.teacher, blocks=req.blocks ).data()
    return tutee_data