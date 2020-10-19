import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addToDo } from 'C:/My folder/JS/Allapps/travel-app/src/store/actions.js';
import { bindActionCreators } from 'redux';
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { useAwaitQuery } from '../../talons/useAwaitQuery';

const getCountriesQuery = gql`
{
  countries {
    name
    code
  }
}
`;
const ToDo = (props) => {
    //const [getCountries, { error, loading, data }] = useLazyQuery(getCountriesQuery);
    //const {data, error, loading} = useQuery(getCountriesQuery);
    const { addToDo, todo } = props;
    //console.log(addToDo);
    //onsole.log(todo);
    const getCountries = useAwaitQuery(getCountriesQuery);
    useEffect(() => {
            addToDo(getCountries);
    }, []);
    const json = JSON.stringify(todo);
    return <div>
                {/* {loading ? <p>Loading...</p> : error ? <p>{error.message}</p> : <p>{json}</p>} */}
                {json}
           </div>
};
const mapStateToProps = (state) => {
    return {
        todo: state.todo
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addToDo: bindActionCreators(addToDo, dispatch)
    }
};
export default connect(mapStateToProps,mapDispatchToProps)( ToDo );