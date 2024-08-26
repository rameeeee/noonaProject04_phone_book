
import './App.scss';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';


function App() {
  return (
    <div className="wrap">
      <h1 className="title">연락처</h1>
      <div className="box_wrap">
        <div className="box">
          <ContactForm />
        </div>
        <div className="box">
          <ContactList />
        </div>
      </div>
    </div>
  );
}

export default App;
