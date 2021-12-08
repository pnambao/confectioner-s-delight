// import { useReducer } from "react";
import {
  UPDATE_PRODUCTS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_CART,
  TOGGLE_CART
} from "./actions";

// export const reducer = (state, action) => {
//   switch (action.type) {
//     case UPDATE_PRODUCTS:
//       return {
//         ...state,
//         products: [...action.products],
//       };

//     case ADD_TO_CART:
//       return {
//         ...state,
//         cartOpen: true,
//         cart: [...state.cart, action.product],
//       };

//     case ADD_MULTIPLE_TO_CART:
//       return {
//         ...state,
//         cart: [...state.cart, ...action.products],
//       };

//     case UPDATE_CART_QUANTITY:
//       return {
//         ...state,
//         cartOpen: true,
//         cart: state.cart.map(product => {
//           if (action._id === product._id) {
//             product.purchaseQuantity = action.purchaseQuantity
//           }
//           return product
//         })
//       };

//     case REMOVE_FROM_CART:
//       let newState = state.cart.filter(product => {
//         return product._id !== action._id;
//       });

//       return {
//         ...state,
//         cartOpen: newState.length > 0,
//         cart: newState
//       };

//     case CLEAR_CART:
//       return {
//         ...state,
//         cartOpen: false,
//         cart: []
//       };

//     case TOGGLE_CART:
//       return {
//         ...state,
//         cartOpen: !state.cartOpen
//       };

//     case UPDATE_CATEGORIES:
//       return {
//         ...state,
//         categories: [...action.categories],
//       };

//     case UPDATE_CURRENT_CATEGORY:
//       return {
//         ...state,
//         currentCategory: action.currentCategory
//       }

//     default:
//       return state;
//   }
// };

// export function useProductReducer(initialState) {
//   return useReducer(reducer, initialState)
// }

//Setting the initial state

const initState = {
  products: [],
  cart: [],
  cartOpen: false,
  categories: [],
  currentCategory: "",
};

//Creating the reducer function, so that when actions are applied to the initial state, we can get back a new state

const reducer = (state = initState, action) => {

  //for each action we have
  switch (action.type) {

    //In each case, we apply an action to the products array. Each action changes the state of the products array and returns the new state of the array.

    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

      //cart has to be open to add products to it. Add to cart action adds a product to the products array, changing its initial state to the new state.
      case ADD_TO_CART:
        return {
          ...state,
          cartOpen: true,
          cart: [...state.cart, action.product],
        };

      case ADD_MULTIPLE_TO_CART:
        return {
          ...state,
          cart: [...state.cart, ...action.products],
        };

        //This case allows us to change the quantity of a certain product/products in the cart.
        case UPDATE_CART_QUANTITY:
          return {
            ...state,
            cartOpen:true,
            cart: state.cart.map((product)=>{
              if (action._id === product._id) {
                product.purchaseQuantity = action.purchaseQuantity;
              }
              return product;
            }),
          };

          case REMOVE_FROM_CART:
            let newState = state.cart.filter((product)  => {
              return product._id !== action._id;
            });

            return {
              ...state,
              cartOpen: newState.length > 0,
              cart: newState,
            };

            case CLEAR_CART:
              return {
                ...state,
                cartOpen: false,
                cart: [],
              };

              case TOGGLE_CART:
                return {
                  ...state,
                  cartOpen: !state.cartOpen,
                };

                case UPDATE_CATEGORIES:
                  return {
                    ...state,
                    categories: [...action.categories],
                  };

                 case UPDATE_CURRENT_CATEGORY:
                   return {
                     ...state,
                     currentCategory: action.currentCategory,
                   };
                   
                   default:
                     return state;
                    }
                  }

                  export default reducer;
