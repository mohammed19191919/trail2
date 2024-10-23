


import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
// import Header from './portifolio/Header';
// import Home from './portifolio/Home';
// import Experience from './portifolio/Experience';
// import Education from './portifolio/Education';
// import Publication from './portifolio/Publications';
// import Footer from './portifolio/Footer';
import 'aos/dist/aos.css';
import AOS from 'aos';
import AddisHome from "./AddisuFolder/Home/AddisHome"
import About from "./AddisuFolder/About/About"
import Adapub from "./AddisuFolder/Adapublic/Adapub";
import Certificatess from './AddisuFolder/Certific/Certificatess';
import Adanav from './AddisuFolder/Home/Adanav';
import Projects from './AddisuFolder/Projectes/Projects';

function App() {
  
  return (
    <div >
      <Adanav /> 
      <Routes>
        <Route  path='/' element= {<AddisHome />} />
        <Route  path='/about' element= {<About />} />
        <Route  path='/projects' element= {<Projects />} />
        <Route  path='/publications' element= {<Adapub />} />
        <Route  path='/certificatess' element= {<Certificatess />} />
        <Route  path='*' element= {<h2>Page not found</h2>} />
     </Routes>

    </div>
  );
}

export default App;



// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import MedicationForm from './Adherenceap/MedicationForm';
// import MedicationList from './Adherenceap/MedicationList';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="MedicationForm">
//         <Stack.Screen name="MedicationForm" component={MedicationForm} />
//         <Stack.Screen name="MedicationList" component={MedicationList} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;