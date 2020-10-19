import {useState, useEffect} from 'react';
import { gql } from 'apollo-boost';

const useCountry = () => {
    const [code, setCode] = useState('AM');
    const [clicked, setClicked] = useState(false);
   
    // useEffect(()=>{
    //     console.log('hi');
    //     const userTypeCurrency = prompt("Type currency code and get its country!");
    //     if(userTypeCurrency) {
    //         setCurrency(userTypeCurrency);
    //     }
    //     else {
    //         setCurrency('AMD');
    //     }
    //     const userTypeCode = prompt("Now type country code and get its native language!");
    //     if(userTypeCode) {
    //         setCode(userTypeCode);
    //     }
    //     else {
    //         setCode('AM');
    //     }
    //     document.body.style.backgroundColor = '#FFF5CC';
    // }, []);
    document.body.style.backgroundColor = '#FFF5CC';
    const getCountryBtnClick = () => {
        const userTypeCode = prompt("Type country code and get its information!");
        setCode(userTypeCode);
    }
    const getCountriesQuery = gql `
    query getCountries($code: ID!){
        country(code:$code){
            name
            languages{
                name
                native
            }
            phone
            capital
            currency
        }
    }`;
    
    return {
        code,
        clicked,
        setClicked,
        getCountryBtnClick,
        getCountriesQuery
    }
}
export default useCountry;