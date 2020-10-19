import React from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import useCountry from '../../talons/useCountry';
import country from './country.module.css';

const Country = ( props ) => {
    const { code,  
            clicked,
            setClicked,
            getCountryBtnClick,
            getCountriesQuery
    } = useCountry();
    const [getCountries, { error, loading, data }] = useLazyQuery(getCountriesQuery, {variables: { code }});
    if(error)
         return <p> { error.message } </p>
    if(loading)
        return <p> Loading... </p>
    return ( 
    <div className = {country.mainDiv}>
        {!clicked ?  
        <>
            <h2 className = {country.h2}>Click to start GQL request</h2>
            <button
            className = {country.clickMeButton}
            onClick = {() => { setClicked(!clicked);
                                    getCountries()}}
            >
            Click me
            </button>
        </>
        : data ?
            <div className = {country.secondMainDiv}>
                <div  className = {country.first}>
                    <p className = {country.p}> Currency </p> 
                    <p className = {country.dataP}> 
                    {data.country.currency}
                    </p> 
                </div>
                <div className = {country.second}>
                    <p  className = {country.p}>  {`Native language of ${data.country.name} is`} </p>  
                    <p className = {country.dataP}> {' ' + data.country.languages[0].name + ' - ' + data.country.languages[0].native} </p>
                </div>
                <div  className = {country.third}>
                    <p  className = {country.p}> Phone code </p> 
                    <p  className = {country.dataP}> 
                        { data.country.phone }
                    </p> 
                </div>
                <div  className = {country.fourth}>
                    <p  className = {country.p}> Capital </p> 
                    <p className = {country.dataP}> 
                        { data.country.capital }  
                    </p> 
                </div>
                <button
                    className = {country.getAnotherButton}
                    onClick = {() => { getCountryBtnClick();
                    }}
                >
                    Get another
                </button>
        </div> : <p> Loading... </p>}
    </div>
    );
}

export default Country;
