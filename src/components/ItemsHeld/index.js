import { React } from 'react';
import Rarity from '../Rarity';
import { ItemHeldUl, ItemHeldLi } from './style';

const ItemsHeld = ({ held_items }) => {
    return (
        <>
            {
                held_items.map((item, index) => (
                    <div key={'item_held' + index}>
                        <p>Item Name: {item.item.name}</p>
                        <p>Version Details:</p>
                        <ItemHeldUl>
                            {item.version_details.map((rarity, index) => (
                                <ItemHeldLi key={index}>
                                    <Rarity rarity={rarity} />
                                </ItemHeldLi>
                            ))}
                        </ItemHeldUl>
                    </div>
                ))

            }
        </>
    )
}

export default ItemsHeld;