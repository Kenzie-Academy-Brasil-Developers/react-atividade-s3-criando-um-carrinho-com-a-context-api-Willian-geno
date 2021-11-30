import {useContext} from "react"
import { CatalogueContext } from "../../providers/catalogue"
import { CartContext } from "../../providers/cart"
import Button from "../button"
import { Conteiner, List } from "./styled"

const ProductList = ({type}) => {

    const {catalogue} = useContext(CatalogueContext);
    const {cart} = useContext(CartContext);

    return <Conteiner>
        {type === "cart" ? <h1>Carrinho</h1> : <h1>Cardapio</h1>}
        {type === "catalogue" && 
            catalogue.map((item, index) => (
                <List key ={index} >
                    {item.name} <Button type ={type} item = {item} />
                </List>
            ))}

        {type === "cart" &&
            cart.map((item, index) => (
                <List kay ={index} >
                {item.name} <Button type ={type} item = {item} />
                </List>
            ))}
    </Conteiner>
};

export default ProductList;
