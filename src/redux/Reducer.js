export const initialState = {
    basket: [],
    user:"",
    userid:""
        
    
}

const reducer = (state,action) =>{
         
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket:[...state.basket,action.item]
            };
        case 'Remove_from_Basket':
            const index = state.basket.findIndex((basketIndex)=> basketIndex.id === action.id)
            let NewBasket = [...state.basket];
            if(index >= 0){
                NewBasket.splice(index,1)

            }
            else{
                console.warn("the product is not in the basket")
            }
            return{
                ...state,
                basket: NewBasket,

            }
            case 'Log_In':
                return{
                  ...state,
                  user:action.name
                }

                case 'Log_In_id':
                return{
                  ...state,
                  userid:action.id
                }

                case 'Remove_items':
                    const inde = state.basket.findIndex((basketIndex)=> basketIndex.id === action.id)
                    let NewBaske = [...state.basket];
                    if(inde >= 0){
                        NewBaske.splice(inde,1)
        
                    }
                    else{
                        console.warn("the product is not in the basket")
                    }
                    return{
                      ...state,
                      basket: NewBaske,
                    }

            default:
                return state;

    }

}

export default reducer