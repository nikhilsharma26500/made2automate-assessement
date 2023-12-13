from db_functions import (add_items, change_quantity)
from db_functions import table_creation_session

def test_add_items():
    session = table_creation_session()
    
    prod_id = 2
    prod_name = "Test"
    prod_desc = "Test desc"
    prod_image = "testLink.com"
    
    new = add_items(prod_id, prod_name, prod_desc, prod_image)
    
    session.close()

test_add_items()
    