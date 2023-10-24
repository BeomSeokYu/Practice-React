import { Component, ErrorInfo, ReactNode } from "react";
import { useState } from "react";
import styled from "@emotion/styled";
import { Button } from "components/Button";
import { Label } from "components/Label";
import { IScriptSnapshot } from "typescript";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  margin-bottom: 32px;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;


type Props = Record<string, never>;

interface State {
  readonly counter: number;
}

export class App extends Component<Props, State> {

  // 생성자
  // 생성 시 한 번만 호출
  // State 초깃값 설정 필요가 없다면 생략 가능
  constructor(props: Props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  private sub = () => {
    const { counter } = this.state;
    this.setState({
      counter: counter - 1
    });
  }

  private add = () => {
    const { counter } = this.state;
    this.setState({
      counter: counter + 1
    });
  }

  // 클래스 컴포넌트의 화면 표시 부분 정의 -> 반환 값을 화면에 표시
  // Props, State 값이 변경되어 화면 갱신 필요 시마다 호출
  // setState를 함수 내에서 사용 시 무한루프 주의
  render() {
    const { counter } = this.state;

    return (
      <Container>
        <Title>Counter App</Title>
        <Contents>
          <Button label="-" onClick={this.sub} />
          <Label data={counter} />
          <Button label="+" onClick={this.add} />
        </Contents>
      </Container>
    );
  }

  // 부모 컴포넌트로부터 받은 Props와 State를 동기화할 때 사용
  // 부모 컴포넌트로부터 받은 State값이 Props에 의존하여 결정될 때 사용
  // Props에 의해 State값을 변경할 수 없는 경우 null을 반환
  // 생성될 때 Props에 의해 State를 결정해야 하므로 한 번 호출 되고, 이 후 동기화해야 하므로 Props가 변경될 때마다 호출됨
  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    console.log('getDerivedStateFromProps');
    console.log('nextProps: ', nextProps);
    console.log('prevState: ', prevState);

    return null;
  };


  // 컴포넌트가 처음으로 화면에 표시된 후 한 번만 호출
  // ajax를 통한 데이터 습득이나 다른 자바스크립트 라이브러리와 연동 수행에 주로 사용
  componentDidMount() {
    console.log('componentDidMount');
  }

  // Props나 State가 변경되어 화면을 다시 그리기 위해 render 함수가 호출된 후 render 함수의 반환값이 실제로 화면에 반영되기 바로 직전에 호출
  // 반환값은 componentDidUpdate의 세 번째 매개 변수(snapshot)으로 전달됨
  // 잘 사용되지는 않지만, 화면을 갱신하는 동안 수동을 스크롤 위치를 고정해야 하는 경우 등에 사용
  getSnapshotBeForeUpdate(prevProps: Props, prevState: State) {
    console.log('getSnapshotBeforeUpdate');
    console.log('prevProps: ', prevProps);
    console.log('prevState: ', prevState);

    return {
      testData: true
    }
  }

  // 컴포넌트가 처음 화면에 표시될 떄에는 실행되지 않지만, Props 또는 State가 변경되어 화면이 갱신될 떄마다 render 함수가 호출된 후 매번 호출되는 함수
  // 잘 사용되지는 않지만 getSnapshotBeforeUpdate와 같이 스크롤을 수동으로 고정시킬 때 활용
  componentDidUpdate(prevProps: Props, prevState: State, snapshot: IScriptSnapshot) {
    console.log('componentDidUpdate');
    console.log('preProps: ', prevProps);
    console.log('prevState: ', prevState);
    console.log('snapshot: ', snapshot)
  }

  // Props or State가 변경되어도 화면을 다시 그리고 싶지 않을 경우 사용
  // false를 반환하면 컴포넌트의 리렌더링을 수행하지 않도록 막을 수 있음
  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
    console.log('shouldComponentUpdate');
    console.log('nextProps: ', nextProps);
    console.log('nextState: ', nextState);

    return true;
  }

  // 해당 컴포넌트가 화면에서 완전히 사라진 후 호출
  // 자바스크립트 라이브러리 해제, setTimeout, setInterval 등의 타이머를 clear힐 떼 시용
  componentWillUnmount() {
      console.log('componentWillUnmount');
  }

  // render 함수의 JSX 문법을 사용하는 부분에서 에러가 발생하는 경우 try-catch문을 사용하여 예외를 처리할 수 없는데,
  // 이 경우 JSX 부분에서 발생하는 에러를 예외 처리할 수 있게 도와주는 라이프사이클 함수
  componentDidCatch(error: Error, info: React.ErrorInfo) {
      console.log('componentDidCatch');
      console.log('error: ', error);
      console.log('info: ', info);
      // this.setState({
      //   error: true
      // });
  }

}