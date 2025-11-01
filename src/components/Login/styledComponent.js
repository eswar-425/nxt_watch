import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${props => (props.isDark ? '#212121' : '#f9f9f9')};
`
export const LoginContainer = styled.div`
  width: 100%;
  box-shadow: ${props => (props.isDark ? '' : '0px 4px 16px 0px #d7dfe9')};
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const Image = styled.img`
  height: 40px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin-top: 20px;
`
export const Label = styled.label`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#f9f9f9': '#475569')};
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 5px;
`
export const Input = styled.input`
  font-family: 'Roboto';
  padding: 12px;
  border-radius: 5px;
  outline: none;
  margin-bottom: 12px;
  border: ${props => (props.isDark ? '1px solid #64748b' : '1px solid #94a3b8')};
  color: ${props => (props.isDark ? '#f9f9f9': '')};
  background-color: ${props => (props.isDark ? '#0f0f0f': '')};
`
export const Checkbox = styled.input`
  height: 20px;
  width: 20px;
`
export const ShowPassword = styled.label`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#f9f9f9': '#000000')};
  font-size: 15px;
  margin-left: 10px;
`
export const PasswordContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
export const LoginButton = styled.button`
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  background-color: #3b82f6;
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  color: #ff0b37;
  font-size: 14px;
  margin-top: 0;
`
