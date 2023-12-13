from fastapi import FastAPI
from db_main import table_creation_session
from db_functions import add_items, change_quantity

app = FastAPI()


@app.post("/admin/add_details")
def add_details(prod_id: str, prod_name: int, prod_desc: str, prod_image: str):
    session = table_creation_session()
    
    new_item = add_items(prod_id = prod_id, prod_name = prod_name, prod_desc = prod_desc, prod_image = prod_image)
    
    session.close()


@app.get("admin/add_quantity")
def change_quantity(prod_id: int, prod_quantity: int):
    session = table_creation_session()

    change_value = change_quantity(prod_id, prod_quantity)
    
    session.close()


