export const initialState = {
    basket: [],
    user:null
        
    
}

const reducer = (state,action) =>{
        // console.log(action.item.prize)
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

            default:
                return state;

    }

}

export default reducer