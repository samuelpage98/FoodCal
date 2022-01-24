import './checkListWidget.css'
import './dashboardWidget.css'
import CheckList from "./shoppingCheckList"


const CheckListWidget = () => {
    return (
        <div className="checkListWidgetContainer" className="dashboardWidget">
            <CheckList/>
        </div>
    )
}

export default CheckListWidget;