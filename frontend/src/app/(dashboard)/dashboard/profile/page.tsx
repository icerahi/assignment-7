import { aboutMe } from "@/services/user/user.service";

const ProfilePage = async () => {
  try {
    const res = await aboutMe();
    const { data } = res;
    console.log({ data });
  } catch (err) {
    console.log(err);
  }
  return <div>ProfilePage</div>;
};
export default ProfilePage;
