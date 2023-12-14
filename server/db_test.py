from db_functions import (add_items, change_quantity, get_all_items)
from db_functions import table_creation_session

def test_add_items():
    session = table_creation_session()
    
    prod_id = 2
    prod_name = "Test"
    prod_desc = "Test desc"
    prod_image = "testLink.com"
    
    new = add_items(prod_id, prod_name, prod_desc, prod_image)
    
    session.close()

# test_add_items()

def test_get_all_items():
    session = table_creation_session()
    
    all_items = get_all_items()
    
    session.close()
    
# test_get_all_items()

def test_change_quantity():
    session = table_creation_session()
    
    prod_id = 2
    prod_quantity = 1200
    
    change_quantity(prod_id, prod_quantity)
    
    session.close()
    
test_change_quantity()