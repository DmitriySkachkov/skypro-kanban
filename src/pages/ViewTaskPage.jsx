import { useParams } from 'react-router-dom';

function ViewTaskPage() {
  const { id } = useParams();
  
  return (
    <div>
      <h1>Просмотр задачи #{id}</h1>
      <p>Детальный просмотр задачи будет здесь</p>
    </div>
  );
}

export default ViewTaskPage;