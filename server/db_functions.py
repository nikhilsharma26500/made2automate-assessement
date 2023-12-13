from db_main import *
import random


def barcode_generator(barcode_value: int):
    random_barcode = random.randint(100000000, 999999999)
    return random_barcode    


def add_items(prod_id: str, prod_name: int, prod_desc: str, prod_image: str):
    session = table_creation_session()

    new_item = ADMIN(
        prod_id=prod_id,
        prod_name=prod_name,
        prod_desc=prod_desc,
        prod_image=prod_image,
        prod_quantity=0,
        prod_barcode=barcode_generator(prod_id),
        
    )
    session.add(new_item)
    session.commit()
    session.close()

    new_item_dict = new_item.__dict__
    new_item_dict.pop("_sa_instance_state")
    return new_item_dict


def change_quantity(prod_id: int, prod_quantity: int):
    session = table_creation_session()
    
    item = session.query(ADMIN).filter_by(prod_id=prod_id).first()
    
    item.prod_quantity = prod_quantity
    
    session.commit()
    session.close()
    
    return item.prod_quantity
