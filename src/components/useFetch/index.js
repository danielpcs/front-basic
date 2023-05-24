import { useEffect, useReducer } from "react";
import axios from 'axios';

// Estado inicial com as informações que utilizaremos
const initialState = {
  loading: true,
  error: false,
  data: []
};

// Função para gerenciamento dos estados do reducer
function apiReducer(state, action) {
  switch (action.type) {
    case "DATA_FETCH_START":
      // Retorna o state de carregamento
      return { ...state, loading: true };
    case "DATA_FETCH_FAILURE":
      // Retorna a mensagem de erro
      return { ...state, loading: false, error: action.payload };
    case "DATA_FETCH_SUCCESS":
      // Retorna os dados da requisição
      return { ...state, loading: false, data: action.payload };
    default:
      // Retorna as informações por padrão
      return state
  }
};


// Função que realiza o fetch de um endpoint
export function useFetch(endpoint) {

  // Define a utilização do reducer
  const [data, dispatch] = useReducer(apiReducer, initialState);

  useEffect(() => {
    // realiza o dispatch para informar o início da requisição
    dispatch({ type: "DATA_FETCH_START" });
    
    // Axios realiza a requisição para o endpoint
    axios({
        method: 'get',
        url: endpoint,
        validateStatus: (status) => {
            // Define se o status é valido ou não
            return status === 200;
        }
    }).then((response) =>{
        // Realiza o dispatch com os dados da requisição
        dispatch({ type: "DATA_FETCH_SUCCESS", payload: response.data });
    }).catch(error =>{
        // Loga o erro e realiza o dispatch com a mensagem de erro
        // caso haja um erro ou o status seja inválido
        console.error(`Request error: ${error}`)
        dispatch({ type: "DATA_FETCH_FAILURE", payload: error.message });
    })

  }, [endpoint]);

  return data
}