import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
`;

export const Content = styled.div`
  padding: 0 30px;
  margin-top: 30px;

  .titulo-page {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 30px;

    a {
      background-color: #212121;
      color: #ffffff;
      padding: 10px 20px;
      text-decoration: none;
      font-size: 14px;
      font-weight: 600;
    }
  }

  .card {
    img {
      width: 100%;
      height: 300px;
    }
    p {
      margin: 8px 0;
    }
  }

  .btn-icon {
    border: none;
    background-color: transparent;
    margin-right: 10px;
    margin-top: 5px;
  }

  .area-clicavel {
    cursor: pointer;
  }
`;
