import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body,html {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-5px);
    }
    50% {
      transform: translateX(5px);
    }
    75% {
      transform: translateX(-5px);
    }
    100% {
      transform: translateX(0);
    }
  }

  .error-input {
    animation: shake 0.5s ease-in-out alternate;
    background-color: #f89d9d;
    border: 2px solid red
  }

  .limit-count {
    color: red;
    animation: shake 0.5s ease-in-out alternate;
  }

  p {
    font-size: 25px;
  }

  h2 {
    font-size: 35px;
  }

 
  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  button {
    display: inline-block;
    margin: 0 10px;
    font-size: 20px;
    width: 150px;
    background-color: darkcyan;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 7px;
    cursor: pointer;
    transition: 0.3s all ease;
    will-change: contents;
    user-select: none;
    
    &:active {
      transition: 0.3s all ease;
      transform: scale(1.047);
      will-change: contents;
    }
  }

  button:disabled {
    opacity: 0.3;
    pointer-events: none;
  }

  #root, .App {
    height: 100%;
    
  }
  
  h2 {
    margin-bottom: 30px !important;
  }
  
  h2, p {
    text-align: center;
    margin: 0;
  }


  input:disabled {
    opacity: 0.2;
  }
`