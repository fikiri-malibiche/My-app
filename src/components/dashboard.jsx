function Dashboard(){
    return(
        <>
        <div className="dashboardContainer">
            <div id="topBar">
                <input type="text" />
                <button>Profile</button>
                <button>log out</button>
            </div>
        <div id="sideBar">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">info</a>
        </div>
        </div>
        </>
    )
}
export default Dashboard;