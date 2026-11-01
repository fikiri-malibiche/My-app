    function Account(){
        
        return (
            <>
            <form action="">
            <div className="accountContainer">
                <h2>Create Account</h2>
                <div>
                    <label htmlFor="firstName">Enter first name</label>
                    <input type="text" name="" id="firstName" />
                </div>
                <div>
                    <label htmlFor="lastName">Enter last name</label>
                    <input type="text" id="lastName" />
                </div>
                <div>
                    <input type="radio" id="male" name="male" />
                    <label htmlFor="male">Male</label>
                    <input type="radio" name="Female" id="female" />
                    <label htmlFor="female">Female</label>
                </div>
                <div>
                    <label htmlFor="phone">Enter phone number</label>
                    <input type="text" id="phoneNumber"/>
                </div>
                <div>
                    <label htmlFor="email">Enter email</label>
                    <input type="email" id="emailInput"/>
                </div>
                <div>
                    <input type="submit"  id="submitButton"  />
                </div>
                <div>
                    <label htmlFor="account">Already have account</label>
                    <a href="#link">Login</a>
                </div>
            </div>
            </form>
            </>
        )
    }
    export default Account