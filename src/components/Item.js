import PropTypes from 'prop-types';
import './item.css';

const Item = (porps) => {
    const { title, amount } = porps;
    const status = amount < 0 ? "expense" : "income";
    const symbol = amount < 0 ? "-" : "+";
    return (
        <li className={status}>{title}<span>{symbol} {Math.abs(amount).toLocaleString()} ກີບ</span></li>
    );
};

Item.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
};

export default Item;