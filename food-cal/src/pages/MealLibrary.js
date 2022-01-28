import PageLayout from '../layouts/PageLayout';
import MealLibraryPanel from '../components/MealLibrary/MealLibraryPanel';

function MealLibrary() {
  return (
    <PageLayout panel={(<MealLibraryPanel />)} />
  );
}

export default MealLibrary;
