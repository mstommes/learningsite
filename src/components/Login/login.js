import React from 'react';
import styled from 'styled-components'
import './style.css';

const FormStyle = styled.div`
 border-color: black;
 border-style: solid;
 border-width: 2px;
 margin:auto;
 margin-top: 5px;
 width: 300px;
 padding: 25px;
 text-align: left;
`;

class Login extends React.Component {
  render() {
    return (
        <FormStyle> 
          <form>
            <label>Name: <input type="text" name="name" placeholder="User Name" /></label><br />
            <label>Password: <input type="text" name="name" placeholder="***********"/></label><br />
            <input type="submit" value="Submit" />
          </form>
        </FormStyle>
    );
  }
}

export default Login;
