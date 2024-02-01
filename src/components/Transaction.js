import Item from './Item';
import "./Transaction.css";

const Transaction = (porps) => {
    const { item } = porps;
    return (
        <div>
            <h3>ລາຍງານຂໍ້ມູນ</h3>
            <ul className='item-list'>
                {item.map((item) => {
                    return <Item title={item.title} amount={item.amount} key={item.id} />
                })}
            </ul>
        </div>
    )
}

export default Transaction;