import { useContext } from "react";
import { Buton } from "./styled";
import { CartContext } from "../../providers/cart";
import { CatalogueContext } from "../../providers/catalogue";

const Button = ({type, item}) => {
    const {card, addCart, removeCart} = useContext(CartContext);
    const {catalogue, addToCatalogue, removeFromCatalogue} = useContext(CatalogueContext);

    const text = type ==="catalogue" ? "Add to cart" : "Remoce from cart";

    const handleClick = () => {
        if (type === "catalogue") {
            removeFromCatalogue(item);
            addCart(item);
        }else{
            removeCart(item);
            addToCatalogue(item);
        }
    };

    return <Buton onClick = {handleClick} >
        {text}
    </Buton>

}

export default Button;