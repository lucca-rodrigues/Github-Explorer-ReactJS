import styled, {css} from 'styled-components';
import { shade } from 'polished';


interface FormProps {
  hasError: boolean;
}
// Template Literals
export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  line-height: 56px;
  max-width:  450px;
  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input{
    flex: 1;
    height:70px;
    padding: 0px 24px;
    border: 0;
    border-radius: 5px 0px 0px 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${(props) => props.hasError && css `
      border-color: #c53030;
    `}

    &::placeholder{
      color: #a8a8b3;
    }
  }
  button {
    width: 210px;
    height:70px;
    background: #04D361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    font-weight: bolder;
    color:#fff;
    transition: background-color 0.2s;
  
    &:hover{
      background: ${shade(0.2, '#04D361')}
    }
  }

`;

export const Error = styled.span`
  color: #c53030;
  display: block;
  margin-top:15px;
`;

export const Repositories = styled.div`
  margin-top:80px;
  max-width:700px;

  a{
    background: #fff;
    border-radius:5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    
    /* Não Aplica o Css apenas no primeiro elemento */
    
    & + a{
    margin-top:16px;
    }

    &:hover{
      transform: translateY(-10px)
    }
  }

  img{
    width:64px;
    height:64px;
    border-radius: 50%;
    margin-right: 20px;
  }

  div{
    margin-left: 0 16px;
    flex: 1;

    strong{
      font-size: 20px;
      color: #3d3d4d;
    }

    p{
      font-size:14px;
      color: #a8a8b3;
      margin-top: 4px;
    }
  }
    svg{
      margin-left: auto;
      color: #cbcbd6;
    }

`;


