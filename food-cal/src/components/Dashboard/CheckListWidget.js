import './checkListWidget.css'
import './dashboardWidget.css'
import ShoppingCheckList from "./ShoppingCheckList"


const CheckListWidget = () => {
    return (
        <div className="checkListWidgetContainer dashboardWidget">
            <ShoppingCheckList />
        </div>
    )
}

export default CheckListWidget;