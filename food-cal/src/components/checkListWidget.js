import './checkListWidget.css'
import './dashboardWidget.css'
import CheckList from "./shoppingCheckList"


const CheckListWidget = () => {
    return (
        <div className="checkListWidgetContainer dashboardWidget">
            <CheckList/>
        </div>
    )
}

export default CheckListWidget;