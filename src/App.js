import { Routes, Route, Navigate } from 'react-router-dom';
import Form from './Pages/Form';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/form" replace />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  );
}

export default App;




//   <div className="App"> 
//     <User name="Pedro" age={23} email="pedro@pedro.com"/>
//     <User name="Chahal" age={22} email="cj@gmail.com"/>
//     <User name="Jake" age={20} email="jake@jake.com"/>
//   </div>
//   );
// }



// const User = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <h1>{props.email}</h1>
//     </div>
//   );
// };


// export default App;


// function App(){
//   return (
//     <div classname = "App">
//       <Job salary = {350000} position = "SDE" company = "Amazon"/>
//       <Job salary = {290000} position = "Analyst" company = "Google"/>
//       <Job salary = {400000} position = "Data Scientist" company = "Apple"/>

//     </div>
//   );
// }
