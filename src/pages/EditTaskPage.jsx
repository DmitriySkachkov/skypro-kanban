import { useParams } from 'react-router-dom';

function EditTaskPage() {
  const { id } = useParams();
  
  return (
    <div>
      <h1>Редактирование задачи #{id}</h1>
      <p>Форма редактирования задачи будет здесь</p>
    </div>
  );
}

export default EditTaskPage;