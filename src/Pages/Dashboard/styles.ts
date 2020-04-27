import styled from 'styled-components';
import { shade } from 'polished';

// Template Literals
export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  line-height: 56px;
  max-width:  450px;
  margin-top: 80px;
`;

export const Form = styled.form`
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
  }

  div{
    margin-left: 16px;

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