import PageLayout from '../layouts/PageLayout';
import ShoppingListPanel from '../components/ShoppingList/ShoppingListPanel';

function ShoppingList() {
  return (
    <PageLayout panel={(<ShoppingListPanel />)} />
  );
}

export default ShoppingList;
