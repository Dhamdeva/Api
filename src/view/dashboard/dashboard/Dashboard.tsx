import MainNavigator from "../../../controller/MainNavigator";
import { Navbar } from "../dashboard/Navbar";


export function Dashboard(){
    return(
        <div className="container-fluid p-0">
            <nav className="navbar navbar-expand-lg bg-danger title">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">PayPe</a>
                    <button className="bg-danger">Log In</button>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg bg-danger title">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Api Reference</a>
                    <button
                        className="mt-3 navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div className="drops">
                            <Navbar/>
                        </div>
                    </div>
                    <form>
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
            </nav>
            <div className="d-flex mx-1">
                <div className="sidenav">
                    <Navbar />
                 </div>
                <div className="main-content p-0">
                    <MainNavigator />
                </div>
            </div>
        </div>
    )
}