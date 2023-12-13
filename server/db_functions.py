from db_main import *


def add_items(prod_name: str, prod_id: int, prod_desc: str, prod_imgLink: str):
    session = table_creation_session()

    new_item = ADMIN(
        prod_name=prod_name,
        prod_id=prod_id,
        prod_desc=prod_desc,
        prod_imgLink=prod_imgLink,
    )
    session.add(new_item)
    session.commit()
    session.close()

    new_item_dict = new_item.__dict__
    new_item_dict.pop("_sa_instance_state")
    return new_item_dict


def change_quantity(prod_id: int, quantity: int):
    session = table_creation_session()
    
    item = session.query(ADMIN).filter_by(prod_id=prod_id).first()
    
    item.prod_quantity = quantity
    
    session.commit()
    session.close()
    
    return item.prod_quantity
