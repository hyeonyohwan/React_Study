import React from 'react';
import { useSelector } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';
import useActions from '../lib/useActions';

const TodosContainer = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  })); // useSelector는 상태를 조회한다. 여기서는 todos를 조회해서 todos 아래의 todos.input과 todos.todos 값을 각각 input과 todos에 저장하는 것

  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    [],
  ); // useActions는 액션 생성 함수를 액션을 디스패치하는 함수로 변환해준다. 첫 번째 파라미터는 액션 생성 함수, 두 번째 파라미터는 deps배열, 배열 안에 들어있는 원소가 바뀌면 액션을 디스패치하는 함수를 새로 만든다.

  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default React.memo(TodosContainer);
