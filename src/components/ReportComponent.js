import { useContext } from "react";
import DataContext from "../data/DataContext";
import './ReportComponent.css'

const ReportComponent = () => {
    const { income, expense } = useContext(DataContext);
    return (
        <div>
            <div className="head">
                <h4>ຍອດຄົງເຫຼືອ</h4>
                <h1>{(income - expense).toLocaleString()} ກີບ</h1>
            </div>
            <div className="report-container">
                <div>
                    <h4>ລາຍຮັບທັງໝົດ</h4>
                    <h3 className="report plus">{(income).toLocaleString()} ກີບ</h3>
                </div>
                <div>
                    <h4>ລາຍຈ່າຍ</h4>
                    <h3 className="report minus">{(expense).toLocaleString()} ກີບ</h3>
                </div>
            </div>
        </div>
    )
}

export default ReportComponent;