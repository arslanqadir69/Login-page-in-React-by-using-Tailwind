import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="p-10 border-blue-500 max-w-lg  ">
      <h2 className="text-center text-3xl leading-9
      font-extrabold text-gray-800">
       Sign In to your account
      </h2>
      <p className="text-center text-sm leading-5
      text-gray-600">
        or

        <span className="text-blue-400  mx-2  ">
         Create an account
        </span>
        It's simple and easy
      </p>
      <form>
      <div className="flex justify-evenly  mt-4">
      <div className="w-full">
      <label  className="block uppercase tracking-wide
      text-gray-700 text-xs font-bold mb-2   ">
        Email
      </label>
      <input type="text"
      name="email"
      id='email'
      placeholder="test.reactjs@gmail.com"
      className="bg-gray-200 appearance-none border-2
       border-gray-200 rounded w-full py-2 px-4
        text-gray-700 leading-tight focus:outline-none focus:bg-white
         focus:border-blue-400 "
      />

<label  className="block uppercase tracking-wide
      text-gray-700 text-xs font-bold mb-2   ">
        Password
      </label>
      <input type="Password"
      name="Password"
      id='Password'
      placeholder="**********"
      className="bg-gray-200 appearance-none border-2
       border-gray-200 rounded w-full py-2 px-4
        text-gray-700 leading-tight focus:outline-none focus:bg-white
         focus:border-blue-400 "
      />


<div className="mt-4 flex justify-center">
      <button type="submit" className="w-full py-2 px-4
      booder border-transparent text-sm leading-5 font-medium
      rounded-md text-white bg-blue-500 hover:bg-blue-400 
      focus:border-green-400 focus:shadow-outline-blue    ">Sign In</button>
     </div>
      </div>
      
      </div>
    

      </form>
      
    </div>
  );
}

export default App;
