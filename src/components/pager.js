import Profile from "./profile";

export default function Pager() {
  return (
    <div className="fixed h-full w-full inset-0 flex flex-row overflow-scroll">
      <div className="h-full w-full shrink-0 flex justify-center items-center p-[25px] overflow-hidden">
        <div className="relative w-full h-full rounded-[25px] border border-[#2f1111] overflow-hidden bgprofile inset-0">
          <Profile />
        </div>
      </div>
    </div>
  );
}
