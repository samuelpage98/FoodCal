import PageLayout from '../layouts/PageLayout';
import MealLibraryPanel from '../components/MealLibraryPanel';

function MealLibrary() {
  return (
    <PageLayout panel={(<MealLibraryPanel />)} />
  );
}

export default MealLibrary;
