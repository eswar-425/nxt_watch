import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  MainContainer,
  LoginContainer,
  Image,
  FormContainer,
  Label,
  Input,
  Checkbox,
  ShowPassword,
  PasswordContainer,
  LoginButton,
  ErrorMsg,
} from './styledComponent'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isChecked: false,
    errorMsg: '',
    showErrorMsg: false,
  }

  changeUsername = event => this.setState({username: event.target.value})

  changePassword = event => this.setState({password: event.target.value})

  showPassword = event => this.setState({isChecked: event.target.checked})

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const jwtToken = data.jwt_token
      this.onSubmitSucces(jwtToken)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onSubmitSucces = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => this.setState({errorMsg, showErrorMsg: true})

  render() {
    const {username, password, isChecked, errorMsg, showErrorMsg} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <MainContainer isDark={isDarkTheme}>
              <LoginContainer isDark={isDarkTheme}>
                <Image
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <FormContainer onSubmit={this.submitForm}>
                  <Label htmlFor="username" isDark={isDarkTheme}>
                    USERNAME
                  </Label>
                  <Input
                    placeholder="Username"
                    id="username"
                    type="text"
                    value={username}
                    onChange={this.changeUsername}
                    isDark={isDarkTheme}
                  />
                  <Label htmlFor="password" isDark={isDarkTheme}>
                    PASSWORD
                  </Label>
                  <Input
                    placeholder="Password"
                    id="password"
                    type={isChecked ? 'text' : 'password'}
                    value={password}
                    onChange={this.changePassword}
                    isDark={isDarkTheme}
                  />
                  <PasswordContainer>
                    <Checkbox
                      type="checkbox"
                      id="checkbox"
                      onChange={this.showPassword}
                    />
                    <ShowPassword htmlFor="checkbox" isDark={isDarkTheme}>
                      Show Password
                    </ShowPassword>
                  </PasswordContainer>
                  <LoginButton type="submit">Login</LoginButton>
                  {showErrorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
                </FormContainer>
              </LoginContainer>
            </MainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
