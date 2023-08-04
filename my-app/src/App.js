
import './App.css';
import ContainerNavBar from './components/NavBar/ContainerNavBar';
import Header from './components/Header/Header';
import Works from './components/Works/Works';
import Footer from './components/Footer';
import Technologies from './components/Header/Skills';
function App() {

 
 


       



  return (
        <div className='ContainerApp'>
          
           <div><ContainerNavBar  /></div>
           <div className='ConteinerComponents'>
            <Header /> 
           <Works />
           <Technologies />
           <Footer />
           </div>
          
          
          
          
          
            
        </div>


  );
}

export default App;
