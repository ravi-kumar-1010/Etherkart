import React from 'react';
import Card from './Card';
const CardList = (props) => {
    return (
        <div>
            
                    {props.products.map((product,key)=>{
                        return(
                           
                          <Card
                              
                              product = {product}
                              purchaseProduct = {props.purchaseProduct}
                           />
                        )
                       // console.log(product.id.toString()," ",product.name," ",product.price.toString()," ",product.owner);
                            
                        
                    
                      })}
            
        </div>
    );

}
export default CardList;