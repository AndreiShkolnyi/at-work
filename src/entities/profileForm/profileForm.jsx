import Category from '../../shared/ui/category/category';
import { Form } from '../../widgets/form/form';
import { categories, textFields } from '../../shared/lib/mock/mock-data';

const ProfileForm = ({profile, setChange, isChanged}) => {
  
  return (
    <>
      <Category text={categories[0].title} type={"title"} />
      <Form
        textFields={textFields}
        profile={profile}
        setChange={setChange}
        isChanged={isChanged}
      />
    </>
  );
}

export default ProfileForm;