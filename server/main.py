from fastapi import FastAPI
from db_main import table_creation_session
from db_functions import add_items, change_quantity, get_all_items

app = FastAPI()


@app.post("/admin/add_details")
def add_details(prod_id: int, prod_name: str, prod_desc: str, prod_image: str, prod_quantity: int):
    session = table_creation_session()
    
    new_item = add_items(prod_id = prod_id, prod_name = prod_name, prod_desc = prod_desc, prod_image = prod_image, prod_quantity=prod_quantity)
    
    session.close()
    return new_item

@app.get("/admin/get_all_items")
def get_all_items_list():
    session = table_creation_session()

    all_items = get_all_items()
    
    session.close()
    return all_items


@app.post("/admin/change_quantity")
def change_item_quantity(prod_id: int, prod_quantity: int):
    session = table_creation_session()

    change_quantity(prod_id, prod_quantity)
    
    session.close()
    return f"Quantity of {prod_id} changed to {prod_quantity}"

