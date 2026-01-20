 export default function Home(){
  return(
    <>
    <div>
      <div>
        <div>
          <h1>Sign Up</h1>
        </div>
        <div>
          <input 
              type="text" 
              name="username"
              id="username"
              placeholder="Username"
          />
          <input 
              type="email" 
              name="email"
              id="email"
              placeholder="Email"
          />
          <input 
              type="password" 
              name="password"
              id="suggest password"
              placeholder="Suggest password"
          />
          <input 
              type="password" 
              name="password"
              id="Confirm password"
              placeholder="Confirm password"
          />
        </div>
      </div>
    </div>
    </>
  );
 };