import {useState,useEffect} from 'react'
import './FormComponent.css'
import { v4 as uuidv4 } from 'uuid';

const FromComponent = (item) => {

    const [title,setTitle] = useState('');
    const [amount,setAmount] = useState('');
    const [forValid,setFormValid] = useState(false);

    const inputTitle = (event) => {
        setTitle(event.target.value)
    }

    const inputAmount = (event) => {
        setAmount(event.target.value)
    }

    const saveItem = (event) => {
        event.preventDefault();
        const itemData = {
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }

        item.onAddItem(itemData);
        setTitle('');
        setAmount('');
    }

    useEffect(()=>{
        const checkData = title.trim().length > 0 && amount !== 0;
        setFormValid(checkData);
    },[title,amount]);

    return (
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ຊື່ລາຍການ</label>
                    <input type="text" placeholder="ກາລຸນາປ້ອນຊື້ລາຍການ" onChange={inputTitle} value={title} />
                </div>
                <div className="form-control">
                    <label>ຈຳນວນເງິນ</label>
                    <input type="number" placeholder="(+ ລາຍຮັບ, - ລາຍຈ່າຍ)" onChange={inputAmount} value={amount} />
                </div>
                <div>
                    <button className='btn' type="submit" disabled={!forValid}>ເພີ່ມຂໍ້ມູນ</button>
                </div>
            </form>
            
        </div>
    )
}

export default FromComponent;