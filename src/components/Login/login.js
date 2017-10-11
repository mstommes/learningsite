import React from 'react';
import styled from 'styled-components'
import './loginStyle.css';

const FormStyle = styled.div`
  width: 70%;
  height: 40%;
  margin-top: 15%;
  margin-left: auto;
  margin-right: auto;
  padding: 2%;
  padding-left: 3%;
  padding-right: 3%;
  border-radius: 5px;
  border: 1px solid #000000;
`;


class Login extends React.Component {
  render() {
    return (
        <FormStyle> 
          <form>
            <p>LOGIN</p><br />
            <input type="text" name="name" placeholder="User Name" /><br />
            <input type="text" name="name" placeholder="***********"/><br />
            <input type="submit" value="Submit" />
          </form>
        </FormStyle>
    );
  }
}

export default Login;
