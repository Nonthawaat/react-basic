import './App.css';
import Transaction from './components/Transaction';
import FromComponent from './components/fromComponent';
import { useEffect, useState } from 'react';
import DataContext from './data/DataContext';
import ReportComponent from './components/ReportComponent';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {

    const initState = [
        { id: 1, title: "ຄ່າໄຟຟ້າ", amount: -60000 },
        { id: 2, title: "ເງືອນເດືອນ", amount: +3000000 },
    ];

    const [items, setItems] = useState(initState);
    const [reportIncome, setReportIncome] = useState(0);
    const [reportExpense, setReportExpense] = useState(0);

    const onAddNewItem = (newItem) => {
        setItems((prevItem) => {
            return [newItem, ...prevItem]
        });
    }

    useEffect(() => {
        const amounts = items.map(items => items.amount);
        const income = amounts.filter(element => element > 0).reduce((total, element) => total += element, 0);
        const expense = (amounts.filter(element => element < 0).reduce((total, element) => total += element, 0)) * -1;
        setReportIncome(income);
        setReportExpense(expense);
    }, [items, reportIncome, reportExpense]);

    return (
        <DataContext.Provider value={{ income: reportIncome, expense: reportExpense }}>
            <BrowserRouter>
                <div className='content'>
                    <h1 className='title'>ແອປບັນຊີ <span className='incomes'>ລາຍຮັບ</span> - <span className='expenses'>ລາຍຈ່າຍ</span></h1>
                    <div>
                        <ul className="horizontal-menu">
                            <li>
                                <Link to="/">ຂໍ້ມູນບັນຊີ</Link>
                            </li>
                            <li>
                                <Link to="/insert">ບັນທຶກຂໍ້ມູນ</Link>
                            </li>
                            <li>
                                <Link to="/reprot">ລາຍງານຂໍ້ມູນ</Link>
                            </li>
                        </ul>
                    </div>
                    <Routes>
                        <Route path='/' exact element={<ReportComponent />}></Route>
                        <Route path="/insert" element={<FromComponent onAddItem={onAddNewItem} />}></Route>
                        <Route path="/reprot" element={<Transaction item={items} />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </DataContext.Provider>
    );
}

export default App;
