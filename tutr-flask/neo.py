from py2neo import Graph
from neo4j import GraphDatabase, basic_auth

class Neo4jConnection:

    def __init__(self, uri, user, pwd):
        self.__uri = uri
        self.__user = user
        self.__pwd = pwd
        self.__driver = None
        try:
            self.__driver = GraphDatabase.driver(self.__uri, auth=(self.__user, self.__pwd))
        except Exception as e:
            print("Failed to create the driver:", e)

    def close(self):
        if self.__driver is not None:
            self.__driver.close()

    def query(self, query, db=None):
        assert self.__driver is not None, "Driver not initialized!"
        session = None
        response = None
        try:
            session = self.__driver.session(database=db) if db is not None else self.__driver.session()
            response = list(session.run(query))
        except Exception as e:
            print("Query failed:", e)
        finally:
            if session is not None:
                session.close()
        return response
uri = "bolt://localhost:7687"
conn = Neo4jConnection(uri="bolt://127.0.0.1:7687", user="neo4j", pwd="dylan")
# conn.query("CREATE (x: TUTEE {name: 'sickomode'})")
# conn.query("MATCH (n:TUTEE {name: 'sickomode'}) DELETE n")

driver = GraphDatabase.driver(uri,auth=("neo4j","dylan"))

graph = Graph(password="dylan")
def get_column_headers():
    column_headers_query = '''
        MATCH (header:COLHEADER) RETURN header
    '''
    column_headers_data = graph.run(column_headers_query).data()
    return column_headers_data

def get_active_tutee_data():
    tutee_data_query = '''
        MATCH (req:Request {status:"active"})
        RETURN req
    '''
    active_tutee_data = graph.run(tutee_data_query).data()
    return active_tutee_data

def get_inactive_tutee_data():
    tutee_data_query = '''
        MATCH (req:Request {status:"unfulfilled"})
        RETURN req,id(req) as id
    '''
    inactive_tutee_data = graph.run(tutee_data_query).data()
    return inactive_tutee_data

def create_tutee_request(req):
#     agreement: []
    # availability: ["Su"]
    # class: "AP Chemistry"
    # department: "English"
    # email: "name@example.com"
    # first_name: "Joe"
    # free_blocks: (3) ["4", "5", "AS"]
    # last_name: "Smith"
    # match_length: "One Time"
    # phone: "415-273-4737"
    # questions_concerns: ""
    # registry: "ex. 2206"
    # requests: ""
    # teacher: "Galang"

    tutee_data_query = '''
        CREATE (req:Request {status:"unfulfilled", first_name: $first_name, last_name:$last_name, availability:$availability, phone:$phone, class:$course, teacher:$teacher, free_blocks:$free_blocks, department:$department, match_length:$match_length,registry:$registry,comments:$comments,requests:$requests})
        RETURN req
    '''
    tutee_data = graph.run(tutee_data_query, first_name=req["first_name"], last_name=req["last_name"], availability=req["availability"], phone=req["phone"], course=req["class"], teacher=req["teacher"], free_blocks=req["free_blocks"], department=req["department"], match_length=req["match_length"], registry=req["registry"], comments=req["questions_concerns"], requests=req["requests"]).data()
    return tutee_data

def create_tutor(req):

    tutee_data_query = '''
        CREATE (t:TUTOR {num_tutees: 0, first_name: $first_name, last_name:$last_name, availability:$availability, phone:$phone, classes:$courses, free_blocks:$free_blocks})
        RETURN t
    '''
    tutee_data = graph.run(tutee_data_query, first_name=req["first_name"], last_name=req["last_name"], availability=req["availability"], phone=req["phone"], course=req["class"], free_blocks=req["free_blocks"] ).data()
    return tutee_data

def get_viable_tutors(body):
    print(body)
    viable_tutors_query = '''
        MATCH (t:TUTOR),(req:Request)
        WHERE id(req) = $id
        AND req.class IN t.classes
        AND size([x in req.free_blocks WHERE x in t.free_blocks]) > 0
        AND size([x in req.availability WHERE x in t.availability]) > 0
        RETURN t as tutor, [x in req.free_blocks WHERE x in t.free_blocks]  as potential_blocks, [x in req.availability WHERE x in t.availability] as potential_as
    '''
    viable_tutors = graph.run(viable_tutors_query, parameters=body).data()
    ret = {}
    ret["potential_tutors"] = viable_tutors
    return ret
def make_match(req_id, tutor_id):
    match_tutors_query = '''
        MATCH (o:TUTOR {id: $tutor_id}),(req:Request {id: $req_id})
        CREATE (o)-[t:TUTORS]->(req)
        RETURN t
    '''
    made_match = graph.run(match_tutors_query, id=id)
    return "success"

def update_request(update):
    # #TODO: diffs
    # update = {
    #     id: 17232
    #
#         first_name: "Jennifer",
#         subject: "Physics"
    #
    # }

    # Map<String, Object> n1 = new HashMap<>();
    # n1.put( "name", "Andy" );
    # n1.put( "position", "Developer" );

    # Map<String, Object> params = new HashMap<>();
    # params.put( "props", n1 );

    # String query =
    #     "MATCH (n:Person)" + "\n" +
    #     "WHERE n.name = 'Michaela'" + "\n" +
    #     "SET n = $props";

    # transaction.execute( query, params);

    update_req_query = '''
        MATCH (r:Request)
        WHERE id(r) = $id
        SET r.last_name = $last_name
        RETURN r
    '''
    print(update)
    update_req = graph.run(update_req_query, parameters=update)
    return update_req.data()
