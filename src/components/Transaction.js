import Item from './Item';
import "./Transaction.css";

const Transaction = ({item}) => {
    return (
        <div>
            <h3>ລາຍງານຂໍ້ມູນ</h3>
            <ul className='item-list'>
                {item.map((element) => {
                    return <Item title={element.title} amount={element.amount} key={element.id} />
                })}
            </ul>
        </div>
    )
}

export default Transaction;