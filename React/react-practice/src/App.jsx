// src폴더안에 App.js을 연 다음 기존 내용을 모두 지우고 아래의 내용으로 작성해 보세요
import React from 'react';
import Input from './03/Input';

class App extends React.Component {
  render() {
    const name = '이름';
    return <Input name={name} />;
  }
}

export default App;
