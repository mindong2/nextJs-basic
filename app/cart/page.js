import CartItem from "./CartItem";

export default function Page() {
    return (
        <>
            <h4 className="title">Cart</h4>
            <CartItem />
            <CartItem />
            <CartItem />
            <Btn isRed={true} />
        </>
    );
}

function Btn({ isRed }) {
    return (
        <>
            <button type="button" style={{ backgroundColor: isRed ? "red" : "blue" }}>
                안녕하세여
            </button>
        </>
    );
}
