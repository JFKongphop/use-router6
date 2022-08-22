const DashBoard = ({user}) =>{
    return (
        // get username from login and show in this page
        // when have user name that go to this page 
        // if not user name to stick to home page
        <section className="section"> 

            <h4>Hello, {user?.name}</h4>
        </section>
    )

}

export default DashBoard