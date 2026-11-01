function Login(){
    return(
        <>
         <div className="loginContainer">
            <form action="">
                <div>
                    <h2>Welcome Back</h2>
                </div>
                <div>
                    <label htmlFor="username">Enter username</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="password">Enter password</label>
                    <input type="password" />
                </div>
                <div>
                    <input type="submit" name="" id="submitButton" />
                </div>
                <div>
                    <label htmlFor="">I don't have account</label>
                    <a href="./createAccount.jsx">create here</a>
                </div>
            </form>
         </div>
        </>
    )
}
export default Login