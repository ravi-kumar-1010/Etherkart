import React,{Component} from 'react';
import './Card.css';
const Card = (props) =>{

   

    return(
        <div id = 'card' className='bg-gray dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt = {`${props.product.name}`} src = {`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${props.product.owner}`}/>
            <div class='text'>
                 {/* <h2>{props.product.id.toString()}</h2> */}
                 <div id = 'names'>
                <h3 >{props.product.name}</h3>
                </div>
                <h2>{window.web3.utils.fromWei(props.product.price.toString(),'Ether')} Eth</h2>
                <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title={`${props.product.owner}`}>
                Address
                </button>
                <p>
                {!props.product.purchased
                          ?<button
                              type = 'button'
                              class = 'btn btn-success'
                              name = {props.product.id} 
                              value = {props.product.price}
                              onClick={(event)=>{
                                props.purchaseProduct(event.target.name,event.target.value)
                              }}
                            >
                              Buy
                              </button>
                          : <button type="button" class="btn btn-warning">Out of Stock</button>
                    }
                </p>
                
            </div>
        </div>
       
    );
}
export default Card; 


                              


