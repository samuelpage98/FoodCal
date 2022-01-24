import Navbar from '../components/Navbar'

function PageLayout({ panel }) {
    return (
        <div className="pageWrapper" style={{ display: "flex", backgroundColor: '#f6efe9' }}>
            <div className="navbar" style={{ width: "240px" }}>
                <Navbar />
            </div>
            <div style={{ margin: "20px" }}>
                {panel}
            </div>
        </div >
    )
}

export default PageLayout;