import { GET_RECIPES,POST_RECIPE, CLEAN_RESULTPOST, GET_DIETS, FILTER_DIET, ORDER_ALFABETIC, ORDER_SALUB, GET_DETAIL, CLEAN_DETAIL} from "./actions";

const initialState={
    recipes: [],
    details: {},
    diets: [],
    filterByDiets: [],
    orderAlfabetic: "",
    orderSalub:"",
    postResult:""
};

const rootReducer=(state= initialState, action)=>{
    switch(action.type){

        case GET_RECIPES:
            return{
                ...state,
                recipes: action.payload
            };
        case GET_DIETS:
            return{
                ...state,
                diets: action.payload
            }
        case FILTER_DIET:
            return{
                ...state,
                filterByDiets: action.payload
            }
        case ORDER_ALFABETIC:
            return{
                ...state,
                orderAlfabetic: action.payload
            }
        case ORDER_SALUB:
            return{
                ...state,
                orderSalub: action.payload
            }
        case GET_DETAIL:
            return{
                ...state,
                details: action.payload
            }
        case CLEAN_DETAIL:
            return{
                ...state,
                details: action.payload
            }
            case POST_RECIPE:
                return{
                    ...state,
                    postResult: action.payload
                }
            case CLEAN_RESULTPOST:
                return{
                    ...state,
                    postResult: ""
                }
        default:
            return {...state};

    }
}

export default rootReducer;