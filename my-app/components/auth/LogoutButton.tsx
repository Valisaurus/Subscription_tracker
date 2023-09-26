export default function LogoutButton() {
  return (
    <form action="/auth/sign-out" method="post">
      <button className="px-4 py-2 border-4 w-[300px] border-black bg-inherit text-black dark:border-white dark:bg-black dark:text-white">
        Logga ut
      </button>
    </form>
  );
}
